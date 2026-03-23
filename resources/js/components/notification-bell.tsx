import { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { router, usePage } from '@inertiajs/react';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';
import { id as localeId } from 'date-fns/locale';
import { type SharedData } from '@/types';

type NotificationPermissionState = 'unsupported' | NotificationPermission;

interface Notifikasi {
    id: number;
    judul: string;
    pesan: string;
    tipe: 'info' | 'warning' | 'danger' | 'success';
    kategori: string;
    link?: string;
    is_read: boolean;
    created_at: string;
    icon?: string;
}

export function NotificationBell() {
    const { auth, onboarding } = usePage<SharedData>().props;
    const echo = typeof window !== 'undefined' ? (window as Window & { Echo?: any }).Echo : undefined;
    const [notifications, setNotifications] = useState<Notifikasi[]>([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [notificationPermission, setNotificationPermission] = useState<NotificationPermissionState>('default');
    const [prefs, setPrefs] = useState({
        browser_push_enabled: onboarding?.preferences?.browser_push_enabled ?? false,
        notify_low_stock: onboarding?.preferences?.notify_low_stock ?? true,
        notify_expiry: onboarding?.preferences?.notify_expiry ?? true,
    });

    useEffect(() => {
        setPrefs({
            browser_push_enabled: onboarding?.preferences?.browser_push_enabled ?? false,
            notify_low_stock: onboarding?.preferences?.notify_low_stock ?? true,
            notify_expiry: onboarding?.preferences?.notify_expiry ?? true,
        });
    }, [
        onboarding?.preferences?.browser_push_enabled,
        onboarding?.preferences?.notify_expiry,
        onboarding?.preferences?.notify_low_stock,
    ]);

    const detectPermission = () => {
        if (typeof window === 'undefined' || typeof Notification === 'undefined') {
            setNotificationPermission('unsupported');
            return;
        }

        setNotificationPermission(Notification.permission);
    };

    const requestBrowserPermission = async () => {
        if (typeof window === 'undefined' || typeof Notification === 'undefined') {
            setNotificationPermission('unsupported');
            return;
        }

        const permission = await Notification.requestPermission();
        setNotificationPermission(permission);

        if (permission === 'granted' && 'serviceWorker' in navigator) {
            await navigator.serviceWorker.ready.catch(() => undefined);
            await persistPreference('browser_push_enabled', true);
        }
    };

    const persistPreference = async (key: keyof typeof prefs, value: boolean) => {
        const previous = prefs;
        const next = { ...previous, [key]: value };
        setPrefs(next);

        try {
            await axios.patch('/api/onboarding/preferences', { [key]: value });
        } catch {
            setPrefs(previous);
        }
    };

    const showBrowserNotification = async (notification: Notifikasi) => {
        if (!prefs.browser_push_enabled || notificationPermission !== 'granted') {
            return;
        }

        if (!('serviceWorker' in navigator)) {
            return;
        }
        const registration = await navigator.serviceWorker.ready;
        await registration.showNotification(notification.judul, {
            body: notification.pesan,
            tag: `sim-apotek-notification-${notification.id}`,
            data: { link: notification.link },
        });
    };

    // Setup real-time notifications with Echo or fallback to polling
    useEffect(() => {
        fetchUnreadCount();
        detectPermission();

        // Try to use Laravel Echo for real-time updates
        if (echo) {
            const channel = echo.private(`notifications.${auth.user?.id}`);
            
            // Listen for new notifications
            channel.listen('.notification.created', (data: any) => {
                console.log('New notification received:', data);
                const notification: Notifikasi = {
                    id: data.id,
                    judul: data.judul,
                    pesan: data.pesan,
                    tipe: data.tipe,
                    kategori: data.kategori,
                    link: data.link,
                    is_read: false,
                    created_at: data.timestamp,
                };

                if (notification.kategori === 'stok_rendah' && !prefs.notify_low_stock) {
                    return;
                }

                if ((notification.kategori === 'expired' || notification.kategori === 'expired_soon') && !prefs.notify_expiry) {
                    return;
                }

                setUnreadCount(prev => prev + 1);
                showBrowserNotification(notification);
                
                // Add to notifications list if dropdown is open
                if (open) {
                    setNotifications(prev => [notification, ...prev]);
                }
            });

            console.log('Laravel Echo notifications subscribed');

            // Cleanup on unmount
            return () => {
                if (echo) {
                    echo.leave(`notifications.${auth.user?.id}`);
                }
            };
        }
    }, [auth.user?.id, echo, notificationPermission, open, prefs.browser_push_enabled, prefs.notify_expiry, prefs.notify_low_stock]);

    // Fetch notifications when dropdown opens
    useEffect(() => {
        if (open) {
            fetchNotifications();
        }
    }, [open]);

    const fetchUnreadCount = async () => {
        try {
            const response = await axios.get<{ count: number }>('/api/notifikasi/unread-count');
            setUnreadCount(response.data.count);
        } catch (error) {
            console.error('Failed to fetch unread count:', error);
        }
    };

    const fetchNotifications = async () => {
        setLoading(true);
        try {
            const response = await axios.get<Notifikasi[]>('/api/notifikasi/unread');
            setNotifications(response.data);
        } catch (error) {
            console.error('Failed to fetch notifications:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleMarkAsRead = async (notificationId: number, link?: string) => {
        try {
            await axios.post(`/api/notifikasi/${notificationId}/read`);
            
            // Update local state
            setNotifications(notifications.filter(n => n.id !== notificationId));
            setUnreadCount(Math.max(0, unreadCount - 1));

            // Navigate to link if provided
            if (link) {
                setOpen(false);
                router.visit(link);
            }
        } catch (error) {
            console.error('Failed to mark notification as read:', error);
        }
    };

    const handleMarkAllAsRead = async () => {
        try {
            await axios.post('/api/notifikasi/read-all');
            setNotifications([]);
            setUnreadCount(0);
        } catch (error) {
            console.error('Failed to mark all as read:', error);
        }
    };

    const handleViewAll = () => {
        setOpen(false);
        router.visit('/notifikasi');
    };

    const getTipeColor = (tipe: string) => {
        switch (tipe) {
            case 'info':
                return 'text-blue-500';
            case 'warning':
                return 'text-yellow-500';
            case 'danger':
                return 'text-red-500';
            case 'success':
                return 'text-green-500';
            default:
                return 'text-gray-500';
        }
    };

    const getKategoriLabel = (kategori: string) => {
        switch (kategori) {
            case 'stok_rendah':
                return 'Stok Rendah';
            case 'expired_soon':
                return 'Akan Kadaluarsa';
            case 'expired':
                return 'Kadaluarsa';
            case 'permintaan_baru':
                return 'Permintaan Baru';
            case 'sistem':
                return 'Sistem';
            case 'lainnya':
                return 'Lainnya';
            default:
                return kategori;
        }
    };

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    {unreadCount > 0 && (
                        <Badge
                            className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                            variant="destructive"
                        >
                            {unreadCount > 9 ? '9+' : unreadCount}
                        </Badge>
                    )}
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-80 md:w-96">
                <div className="flex items-center justify-between border-b px-4 py-3">
                    <h3 className="text-sm font-semibold">Notifikasi</h3>
                    {unreadCount > 0 && (
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
                            onClick={handleMarkAllAsRead}
                        >
                            Tandai semua dibaca
                        </Button>
                    )}
                </div>

                <div className="border-b px-4 py-3 space-y-2">
                    <p className="text-xs font-medium text-muted-foreground">PENGATURAN</p>
                    <div className="grid grid-cols-2 gap-2">
                        <Button
                            variant={prefs.browser_push_enabled ? 'default' : 'outline'}
                            size="sm"
                            className="h-8"
                            disabled={notificationPermission === 'unsupported'}
                            onClick={() => {
                                if (notificationPermission !== 'granted') {
                                    requestBrowserPermission();
                                    return;
                                }

                                persistPreference('browser_push_enabled', !prefs.browser_push_enabled);
                            }}
                        >
                            Browser Push
                        </Button>
                        <Button
                            variant={prefs.notify_low_stock ? 'default' : 'outline'}
                            size="sm"
                            className="h-8"
                            onClick={() => persistPreference('notify_low_stock', !prefs.notify_low_stock)}
                        >
                            Stok Rendah
                        </Button>
                        <Button
                            variant={prefs.notify_expiry ? 'default' : 'outline'}
                            size="sm"
                            className="h-8"
                            onClick={() => persistPreference('notify_expiry', !prefs.notify_expiry)}
                        >
                            Kadaluarsa
                        </Button>
                    </div>
                    {notificationPermission === 'denied' && (
                        <p className="text-[11px] text-muted-foreground">
                            Izin browser ditolak. Aktifkan notifikasi dari pengaturan browser untuk menerima push.
                        </p>
                    )}
                    {notificationPermission === 'unsupported' && (
                        <p className="text-[11px] text-muted-foreground">
                            Browser ini belum mendukung notifikasi push.
                        </p>
                    )}
                </div>

                <div className="h-[400px] overflow-y-auto">
                    {loading ? (
                        <div className="p-4 space-y-3">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="space-y-2">
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-3 w-3/4" />
                                </div>
                            ))}
                        </div>
                    ) : notifications.length === 0 ? (
                        <div className="flex flex-col items-center justify-center px-4 py-12">
                            <Bell className="mb-2 h-12 w-12 text-muted-foreground/50" />
                            <p className="text-center text-sm text-muted-foreground">
                                Tidak ada notifikasi baru
                            </p>
                        </div>
                    ) : (
                        <div className="divide-y">
                            {notifications.map((notification) => (
                                <div
                                    key={notification.id}
                                    className="cursor-pointer p-4 transition-colors hover:bg-accent"
                                    onClick={() => handleMarkAsRead(notification.id, notification.link)}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className={`mt-1 ${getTipeColor(notification.tipe)}`}>
                                            <Bell className="h-4 w-4" />
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <div className="flex items-start justify-between gap-2">
                                                <p className="text-sm font-medium leading-tight">
                                                    {notification.judul}
                                                </p>
                                                <Badge variant="outline" className="shrink-0 text-xs">
                                                    {getKategoriLabel(notification.kategori)}
                                                </Badge>
                                            </div>
                                            <p className="line-clamp-2 text-sm text-muted-foreground">
                                                {notification.pesan}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {formatDistanceToNow(new Date(notification.created_at), {
                                                    addSuffix: true,
                                                    locale: localeId,
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {notifications.length > 0 && (
                    <>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            className="cursor-pointer justify-center text-sm font-medium"
                            onClick={handleViewAll}
                        >
                            Lihat Semua Notifikasi
                        </DropdownMenuItem>
                    </>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

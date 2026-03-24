import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { type PropsWithChildren, useEffect } from 'react';

export default function AppSidebarLayout({
    children,
    breadcrumbs = [],
}: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    const { auth } = usePage<SharedData>().props;

    useEffect(() => {
        const echo = (window as typeof window & { Echo?: any }).Echo;
        if (!echo || !auth?.user?.id) {
            return;
        }

        let timer: ReturnType<typeof setTimeout> | null = null;
        const scheduleReload = () => {
            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(() => {
                router.reload({ preserveScroll: true, preserveState: true });
            }, 400);
        };

        const channel = echo.channel('pharmacy');
        channel.listen('.transaksi.created', scheduleReload);
        channel.listen('.stok.updated', scheduleReload);

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
            channel.stopListening('.transaksi.created');
            channel.stopListening('.stok.updated');
            echo.leaveChannel('pharmacy');
        };
    }, [auth?.user?.id]);

    return (
        <AppShell variant="sidebar">
            <AppSidebar />
            <AppContent variant="sidebar" className="overflow-x-hidden">
                <AppSidebarHeader breadcrumbs={breadcrumbs} />
                <div className="min-w-0 flex-1 p-2 md:p-3">{children}</div>
            </AppContent>
        </AppShell>
    );
}

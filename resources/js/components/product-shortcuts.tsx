import { useMemo, useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { type SharedData } from '@/types';

interface ShortcutDef {
    key: string;
    label: string;
    href: string;
}

function shouldIgnoreShortcutTarget(target: EventTarget | null): boolean {
    if (!(target instanceof HTMLElement)) {
        return false;
    }

    const tagName = target.tagName.toLowerCase();
    if (['input', 'textarea', 'select'].includes(tagName)) {
        return true;
    }

    return Boolean(target.closest('[contenteditable="true"]'));
}

export function ProductShortcuts() {
    const { onboarding } = usePage<SharedData>().props;
    const enabled = onboarding?.preferences?.shortcuts_enabled ?? true;
    const [open, setOpen] = useState(false);

    const shortcuts = useMemo<ShortcutDef[]>(
        () => [
            { key: 'A', label: 'Tambah obat/batch', href: '/obat/create' },
            { key: 'T', label: 'Transaksi baru', href: '/transaksi/create' },
            { key: 'S', label: 'Buka QR scanner', href: '/qr' },
            { key: '/', label: 'Cari obat', href: '/obat' },
            { key: '?', label: 'Bantuan shortcut', href: '#' },
        ],
        []
    );

    useEffect(() => {
        if (!enabled) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey || event.metaKey || event.altKey || shouldIgnoreShortcutTarget(event.target)) {
                return;
            }

            const key = event.key.toLowerCase();
            if (key === 'a') {
                event.preventDefault();
                window.location.href = '/obat/create';
            }

            if (key === 't') {
                event.preventDefault();
                window.location.href = '/transaksi/create';
            }

            if (key === 's') {
                event.preventDefault();
                window.location.href = '/qr';
            }

            if (key === '/' && !event.shiftKey) {
                event.preventDefault();
                window.location.href = '/obat';
            }

            if ((key === '?' && event.shiftKey) || key === '?') {
                event.preventDefault();
                setOpen(true);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [enabled]);

    if (!enabled) {
        return null;
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>Keyboard Shortcuts</DialogTitle>
                    <DialogDescription>
                        Gunakan shortcut berikut untuk akses cepat ke fitur utama.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-2">
                    {shortcuts.map((shortcut) => (
                        <div key={shortcut.key} className="flex items-center justify-between rounded-md border px-3 py-2 text-sm">
                            <span>{shortcut.label}</span>
                            <kbd className="rounded bg-muted px-2 py-1 font-mono text-xs">{shortcut.key}</kbd>
                        </div>
                    ))}
                </div>

                <DialogFooter>
                    <Button onClick={() => setOpen(false)}>Tutup</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

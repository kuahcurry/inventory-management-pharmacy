import { useMemo, useState } from 'react';
import { usePage } from '@inertiajs/react';
import axios from 'axios';
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

interface TutorialStep {
    title: string;
    description: string;
    actionLabel: string;
    href: string;
}

export function FirstTimeTutorial() {
    const { onboarding, auth } = usePage<SharedData>().props;
    const userRole = (auth?.user as { role?: string } | undefined)?.role ?? 'pharmacist';
    const isDashboardPage = typeof window !== 'undefined' && window.location.pathname === '/dashboard';
    const shouldShow = onboarding?.tutorial?.should_show ?? false;

    const [open, setOpen] = useState(shouldShow);
    const [stepIndex] = useState(0);
    const [saving, setSaving] = useState(false);

    const steps: TutorialStep[] = useMemo(() => {
        const baseSteps: TutorialStep[] = [
            {
                title: 'Navigasi Dashboard',
                description: 'Pantau stok rendah, batch mendekati kadaluarsa, dan aktivitas harian dari satu layar.',
                actionLabel: 'Buka Dashboard',
                href: '/dashboard',
            },
            {
                title: 'Tambah Batch Obat',
                description: 'Simpan nomor batch, tanggal expired, dan stok awal agar FEFO berjalan akurat.',
                actionLabel: 'Tambah Batch',
                href: '/obat/batch/create',
            },
            {
                title: 'Scan QR untuk Transaksi Cepat',
                description: 'Scan QR batch lalu lanjutkan transaksi masuk atau keluar tanpa memilih ulang obat.',
                actionLabel: 'Buka Scanner QR',
                href: '/qr',
            },
        ];

        if (userRole === 'admin' || userRole === 'manager') {
            baseSteps.push({
                title: 'Laporan Operasional',
                description: 'Lihat laporan stok dan transaksi untuk monitoring dan audit berkala.',
                actionLabel: 'Buka Laporan',
                href: '/reports/stock',
            });
        }

        return baseSteps;
    }, [userRole]);

    const currentStep = steps[stepIndex];

    const persistTutorialAction = async (action: 'complete' | 'skip' | 'replay' | 'seen') => {
        setSaving(true);
        try {
            await axios.post('/api/onboarding/tutorial', { action });
            return true;
        } catch {
            return false;
        } finally {
            setSaving(false);
        }
    };

    const handleNext = async () => {
        const action = stepIndex === steps.length - 1 ? 'complete' : 'seen';
        setOpen(false);
        await persistTutorialAction(action);

        window.location.href = currentStep.href;
    };

    const handleSkip = async () => {
        setOpen(false);
        await persistTutorialAction('skip');
        window.location.href = '/dashboard';
    };

    if (!isDashboardPage || !shouldShow || !currentStep) {
        return null;
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-xl">
                <DialogHeader>
                    <DialogTitle>
                        Panduan Singkat ({stepIndex + 1}/{steps.length})
                    </DialogTitle>
                    <DialogDescription>
                        {currentStep.title}
                    </DialogDescription>
                </DialogHeader>

                <div className="rounded-md border bg-muted/20 p-4 text-sm leading-relaxed text-muted-foreground">
                    {currentStep.description}
                </div>

                <DialogFooter>
                    <Button variant="ghost" onClick={handleSkip} disabled={saving}>
                        Lewati
                    </Button>
                    <Button onClick={handleNext} disabled={saving}>
                        {stepIndex === steps.length - 1 ? 'Selesai' : currentStep.actionLabel}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

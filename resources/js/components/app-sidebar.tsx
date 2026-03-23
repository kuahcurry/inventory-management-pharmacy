import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { 
    BookOpen, 
    LayoutGrid,
    Pill,
    ShoppingCart,
    TrendingUp,
    ClipboardCheck,
    FileText,
    Box,
    MessageCircleQuestion
} from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Kasir',
        href: '/kasir',
        icon: ShoppingCart,
    },
    {
        title: 'Obat',
        href: '#',
        icon: Pill,
        items: [
            {
                title: 'Data Obat',
                href: '/obat',
            },
            {
                title: 'Resep',
                href: '/resep',
            },
            {
                title: 'Pemusnahan',
                href: '/pemusnahan',
            },
            {
                title: 'QR Code',
                href: '/qr',
            },
        ],
    },
    {
        title: 'Transaksi',
        href: '/transaksi',
        icon: TrendingUp,
        items: [
            {
                title: 'Semua Transaksi',
                href: '/transaksi',
            },
            {
                title: 'Barang Masuk',
                href: '/transaksi/masuk',
            },
            {
                title: 'Barang Keluar',
                href: '/transaksi/keluar',
            },
        ],
    },
    {
        title: 'Stok Opname',
        href: '/stok-opname',
        icon: ClipboardCheck,
    },
    {
        title: 'Master Data Obat',
        icon: Box,
        href: '/masterdata'
    },
    {
        title: 'Laporan',
        href: '/laporan',
        icon: FileText,
        items: [
            {
                title: 'Laporan Stok',
                href: '/reports/stock',
            },
            {
                title: 'Laporan Transaksi',
                href: '/reports/transactions',
            },
            {
                title: 'Laporan Kadaluarsa',
                href: '/reports/expiry',
            },
        ],
    }
];

const footerNavItems: NavItem[] = [
    {
        title: 'FAQ',
        href: '/faq',
        icon: MessageCircleQuestion,
    },
    {
        title: 'Dokumentasi',
        href: '/dokumentasi',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}

import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
    items?: Array<{
        title: string;
        href: NonNullable<InertiaLinkProps['href']>;
    }>;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    flash?: {
        success?: string | null;
        error?: string | null;
    };
    onboarding?: {
        tutorial?: {
            should_show?: boolean;
            version?: string;
            completed_at?: string | null;
            skipped_at?: string | null;
        };
        preferences?: {
            shortcuts_enabled?: boolean;
            show_contextual_tooltips?: boolean;
            browser_push_enabled?: boolean;
            notify_low_stock?: boolean;
            notify_expiry?: boolean;
        };
    };
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

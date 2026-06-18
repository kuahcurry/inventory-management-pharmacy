import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useInitials } from '@/hooks/use-initials';
import { type User } from '@/types';

export function UserInfo({
    user,
    showEmail = false,
}: {
    user: User;
    showEmail?: boolean;
}) {
    const getInitials = useInitials();
    const role = (user as Record<string, unknown>).role as string | undefined;
    const roleLabel = (user as Record<string, unknown>).role_label as string | undefined;

    const roleBadgeClass =
        role === 'admin' ? 'border-purple-300 bg-purple-100 text-purple-700'
        : role === 'manager' ? 'border-amber-300 bg-amber-100 text-amber-700'
        : 'border-blue-300 bg-blue-100 text-blue-700';

    const roleDisplay = roleLabel || role || '';

    return (
        <>
            <Avatar className="h-8 w-8 overflow-hidden rounded-full">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                    {getInitials(user.name)}
                </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="flex items-center gap-1">
                    {showEmail && (
                        <span className="truncate text-xs text-muted-foreground">
                            {user.email}
                        </span>
                    )}
                    {roleDisplay && (
                        <span className={`inline-flex items-center rounded border px-1.5 py-0.5 text-[10px] font-bold leading-none ${roleBadgeClass}`}>
                            {roleDisplay}
                        </span>
                    )}
                </span>
            </div>
        </>
    );
}

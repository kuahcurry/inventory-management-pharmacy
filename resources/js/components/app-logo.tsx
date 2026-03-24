import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center rounded-md text-white" style={{ backgroundColor: '#0A4B9E' }}>
                <AppLogoIcon className="size-5 text-white" aria-hidden="true" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm" style={{ color: '#0A4B9E' }}>
                <span className="mb-0.5 font-semibold leading-tight">
                    Sistem Inventori
                </span>
                <span className="text-xs text-muted-foreground leading-tight">
                    Apotek Sapari
                </span>
            </div>
        </>
    );
}

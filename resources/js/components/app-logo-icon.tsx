import { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
            <rect x="10" y="4" width="4" height="16" rx="1" fill="currentColor" />
            <rect x="4" y="10" width="16" height="4" rx="1" fill="currentColor" />
        </svg>
    );
}

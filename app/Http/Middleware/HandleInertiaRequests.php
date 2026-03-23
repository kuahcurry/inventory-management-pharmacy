<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    private const DEFAULT_PREFERENCES = [
        'shortcuts_enabled' => true,
        'show_contextual_tooltips' => true,
        'browser_push_enabled' => false,
        'notify_low_stock' => true,
        'notify_expiry' => true,
    ];

    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        [$message, $author] = str(Inspiring::quotes()->random())->explode('-');

        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'quote' => ['message' => trim($message), 'author' => trim($author)],
            'auth' => [
                'user' => $request->user(),
            ],
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'error' => fn () => $request->session()->get('error'),
            ],
            'onboarding' => fn () => $this->buildOnboardingSharedState($request),
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
        ];
    }

    /**
     * @return array<string, mixed>
     */
    private function buildOnboardingSharedState(Request $request): array
    {
        $user = $request->user();

        if (! $user) {
            return [
                'tutorial' => [
                    'should_show' => false,
                    'version' => 'v1',
                    'completed_at' => null,
                    'skipped_at' => null,
                ],
                'preferences' => self::DEFAULT_PREFERENCES,
            ];
        }

        $userId = (int) $user->id;
        $ip = (string) $request->ip();

        $tutorial = Cache::get("onboarding:tutorial:user:{$userId}", [
            'version' => 'v1',
            'completed_at' => null,
            'skipped_at' => null,
            'last_seen_ip' => null,
            'last_seen_at' => null,
        ]);

        $preferences = Cache::get("onboarding:preferences:user:{$userId}", self::DEFAULT_PREFERENCES);

        return [
            'tutorial' => [
                'should_show' => ($tutorial['last_seen_ip'] ?? null) !== $ip,
                'version' => $tutorial['version'] ?? 'v1',
                'completed_at' => $tutorial['completed_at'] ?? null,
                'skipped_at' => $tutorial['skipped_at'] ?? null,
            ],
            'preferences' => $preferences,
        ];
    }
}

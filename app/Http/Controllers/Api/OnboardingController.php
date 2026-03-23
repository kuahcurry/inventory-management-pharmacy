<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class OnboardingController extends Controller
{
    private const TUTORIAL_VERSION = 'v1';

    private const DEFAULT_PREFERENCES = [
        'shortcuts_enabled' => true,
        'show_contextual_tooltips' => true,
        'browser_push_enabled' => false,
        'notify_low_stock' => true,
        'notify_expiry' => true,
    ];

    /**
     * Get onboarding status for current user.
     */
    public function status(Request $request): JsonResponse
    {
        $user = $request->user();
        $userId = (int) $user->id;
        $currentIp = (string) $request->ip();
        $tutorial = $this->getTutorialState($userId);
        $preferences = $this->getPreferencesState($userId);

        return response()->json([
            'tutorial' => [
                'version' => $tutorial['version'],
                'completed_at' => $tutorial['completed_at'],
                'skipped_at' => $tutorial['skipped_at'],
                'should_show' => ($tutorial['last_seen_ip'] ?? null) !== $currentIp,
            ],
            'preferences' => $preferences,
            'voice_input' => [
                'enabled' => false,
                'status' => 'deferred',
                'message' => 'Voice input is intentionally deferred for a later phase.',
            ],
        ]);
    }

    /**
     * Mark tutorial completion state.
     */
    public function tutorial(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'action' => 'required|in:complete,skip,replay,seen',
        ]);

        $user = $request->user();
        $userId = (int) $user->id;
        $currentIp = (string) $request->ip();
        $action = $validated['action'];
        $state = $this->getTutorialState($userId);

        if ($action === 'complete') {
            $state['completed_at'] = now()->toDateTimeString();
            $state['skipped_at'] = null;
            $state['last_seen_ip'] = $currentIp;
            $state['last_seen_at'] = now()->toDateTimeString();
        }

        if ($action === 'skip') {
            $state['skipped_at'] = now()->toDateTimeString();
            $state['last_seen_ip'] = $currentIp;
            $state['last_seen_at'] = now()->toDateTimeString();
        }

        if ($action === 'seen') {
            $state['last_seen_ip'] = $currentIp;
            $state['last_seen_at'] = now()->toDateTimeString();
        }

        if ($action === 'replay') {
            $state = [
                'version' => self::TUTORIAL_VERSION,
                'completed_at' => null,
                'skipped_at' => null,
                'last_seen_ip' => null,
                'last_seen_at' => null,
            ];
        }

        Cache::put($this->tutorialCacheKey($userId), $state);

        return response()->json([
            'success' => true,
            'tutorial' => [
                'version' => $state['version'],
                'completed_at' => $state['completed_at'],
                'skipped_at' => $state['skipped_at'],
                'should_show' => ($state['last_seen_ip'] ?? null) !== $currentIp,
            ],
        ]);
    }

    /**
     * Update user UX preferences for product features.
     */
    public function updatePreferences(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'shortcuts_enabled' => 'sometimes|boolean',
            'show_contextual_tooltips' => 'sometimes|boolean',
            'browser_push_enabled' => 'sometimes|boolean',
            'notify_low_stock' => 'sometimes|boolean',
            'notify_expiry' => 'sometimes|boolean',
        ]);

        $userId = (int) $request->user()->id;
        $preferences = [
            ...$this->getPreferencesState($userId),
            ...$validated,
        ];

        Cache::put($this->preferencesCacheKey($userId), $preferences);

        return response()->json([
            'success' => true,
            'preferences' => $preferences,
        ]);
    }

    private function tutorialCacheKey(int $userId): string
    {
        return "onboarding:tutorial:user:{$userId}";
    }

    private function preferencesCacheKey(int $userId): string
    {
        return "onboarding:preferences:user:{$userId}";
    }

    /**
     * @return array<string, mixed>
     */
    private function getTutorialState(int $userId): array
    {
        return Cache::get($this->tutorialCacheKey($userId), [
            'version' => self::TUTORIAL_VERSION,
            'completed_at' => null,
            'skipped_at' => null,
            'last_seen_ip' => null,
            'last_seen_at' => null,
        ]);
    }

    /**
     * @return array<string, mixed>
     */
    private function getPreferencesState(int $userId): array
    {
        return Cache::get($this->preferencesCacheKey($userId), self::DEFAULT_PREFERENCES);
    }
}

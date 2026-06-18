import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\OnboardingController::status
 * @see app/Http/Controllers/Api/OnboardingController.php:25
 * @route '/api/onboarding/status'
 */
export const status = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(options),
    method: 'get',
})

status.definition = {
    methods: ["get","head"],
    url: '/api/onboarding/status',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\OnboardingController::status
 * @see app/Http/Controllers/Api/OnboardingController.php:25
 * @route '/api/onboarding/status'
 */
status.url = (options?: RouteQueryOptions) => {
    return status.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\OnboardingController::status
 * @see app/Http/Controllers/Api/OnboardingController.php:25
 * @route '/api/onboarding/status'
 */
status.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\OnboardingController::status
 * @see app/Http/Controllers/Api/OnboardingController.php:25
 * @route '/api/onboarding/status'
 */
status.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: status.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\OnboardingController::status
 * @see app/Http/Controllers/Api/OnboardingController.php:25
 * @route '/api/onboarding/status'
 */
    const statusForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: status.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\OnboardingController::status
 * @see app/Http/Controllers/Api/OnboardingController.php:25
 * @route '/api/onboarding/status'
 */
        statusForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: status.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\OnboardingController::status
 * @see app/Http/Controllers/Api/OnboardingController.php:25
 * @route '/api/onboarding/status'
 */
        statusForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: status.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    status.form = statusForm
/**
* @see \App\Http\Controllers\Api\OnboardingController::tutorial
 * @see app/Http/Controllers/Api/OnboardingController.php:52
 * @route '/api/onboarding/tutorial'
 */
export const tutorial = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: tutorial.url(options),
    method: 'post',
})

tutorial.definition = {
    methods: ["post"],
    url: '/api/onboarding/tutorial',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\OnboardingController::tutorial
 * @see app/Http/Controllers/Api/OnboardingController.php:52
 * @route '/api/onboarding/tutorial'
 */
tutorial.url = (options?: RouteQueryOptions) => {
    return tutorial.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\OnboardingController::tutorial
 * @see app/Http/Controllers/Api/OnboardingController.php:52
 * @route '/api/onboarding/tutorial'
 */
tutorial.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: tutorial.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\OnboardingController::tutorial
 * @see app/Http/Controllers/Api/OnboardingController.php:52
 * @route '/api/onboarding/tutorial'
 */
    const tutorialForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: tutorial.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\OnboardingController::tutorial
 * @see app/Http/Controllers/Api/OnboardingController.php:52
 * @route '/api/onboarding/tutorial'
 */
        tutorialForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: tutorial.url(options),
            method: 'post',
        })
    
    tutorial.form = tutorialForm
/**
* @see \App\Http\Controllers\Api\OnboardingController::updatePreferences
 * @see app/Http/Controllers/Api/OnboardingController.php:108
 * @route '/api/onboarding/preferences'
 */
export const updatePreferences = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatePreferences.url(options),
    method: 'patch',
})

updatePreferences.definition = {
    methods: ["patch"],
    url: '/api/onboarding/preferences',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Api\OnboardingController::updatePreferences
 * @see app/Http/Controllers/Api/OnboardingController.php:108
 * @route '/api/onboarding/preferences'
 */
updatePreferences.url = (options?: RouteQueryOptions) => {
    return updatePreferences.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\OnboardingController::updatePreferences
 * @see app/Http/Controllers/Api/OnboardingController.php:108
 * @route '/api/onboarding/preferences'
 */
updatePreferences.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatePreferences.url(options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\OnboardingController::updatePreferences
 * @see app/Http/Controllers/Api/OnboardingController.php:108
 * @route '/api/onboarding/preferences'
 */
    const updatePreferencesForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updatePreferences.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\OnboardingController::updatePreferences
 * @see app/Http/Controllers/Api/OnboardingController.php:108
 * @route '/api/onboarding/preferences'
 */
        updatePreferencesForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatePreferences.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updatePreferences.form = updatePreferencesForm
const OnboardingController = { status, tutorial, updatePreferences }

export default OnboardingController
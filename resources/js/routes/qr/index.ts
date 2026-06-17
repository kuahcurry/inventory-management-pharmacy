import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\QrCodeController::index
 * @see app/Http/Controllers/QrCodeController.php:12
 * @route '/qr'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/qr',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\QrCodeController::index
 * @see app/Http/Controllers/QrCodeController.php:12
 * @route '/qr'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\QrCodeController::index
 * @see app/Http/Controllers/QrCodeController.php:12
 * @route '/qr'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\QrCodeController::index
 * @see app/Http/Controllers/QrCodeController.php:12
 * @route '/qr'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\QrCodeController::index
 * @see app/Http/Controllers/QrCodeController.php:12
 * @route '/qr'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\QrCodeController::index
 * @see app/Http/Controllers/QrCodeController.php:12
 * @route '/qr'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\QrCodeController::index
 * @see app/Http/Controllers/QrCodeController.php:12
 * @route '/qr'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\QrCodeController::analytics
 * @see app/Http/Controllers/QrCodeController.php:31
 * @route '/qr/analytics'
 */
export const analytics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: analytics.url(options),
    method: 'get',
})

analytics.definition = {
    methods: ["get","head"],
    url: '/qr/analytics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\QrCodeController::analytics
 * @see app/Http/Controllers/QrCodeController.php:31
 * @route '/qr/analytics'
 */
analytics.url = (options?: RouteQueryOptions) => {
    return analytics.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\QrCodeController::analytics
 * @see app/Http/Controllers/QrCodeController.php:31
 * @route '/qr/analytics'
 */
analytics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: analytics.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\QrCodeController::analytics
 * @see app/Http/Controllers/QrCodeController.php:31
 * @route '/qr/analytics'
 */
analytics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: analytics.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\QrCodeController::analytics
 * @see app/Http/Controllers/QrCodeController.php:31
 * @route '/qr/analytics'
 */
    const analyticsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: analytics.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\QrCodeController::analytics
 * @see app/Http/Controllers/QrCodeController.php:31
 * @route '/qr/analytics'
 */
        analyticsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: analytics.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\QrCodeController::analytics
 * @see app/Http/Controllers/QrCodeController.php:31
 * @route '/qr/analytics'
 */
        analyticsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: analytics.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    analytics.form = analyticsForm
const qr = {
    index: Object.assign(index, index),
analytics: Object.assign(analytics, analytics),
}

export default qr
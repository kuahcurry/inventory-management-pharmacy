import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\QrCodeController::generate
 * @see app/Http/Controllers/Api/QrCodeController.php:46
 * @route '/api/qr/generate/{batch}'
 */
export const generate = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generate.url(args, options),
    method: 'get',
})

generate.definition = {
    methods: ["get","head"],
    url: '/api/qr/generate/{batch}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\QrCodeController::generate
 * @see app/Http/Controllers/Api/QrCodeController.php:46
 * @route '/api/qr/generate/{batch}'
 */
generate.url = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { batch: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { batch: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    batch: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        batch: typeof args.batch === 'object'
                ? args.batch.id
                : args.batch,
                }

    return generate.definition.url
            .replace('{batch}', parsedArgs.batch.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\QrCodeController::generate
 * @see app/Http/Controllers/Api/QrCodeController.php:46
 * @route '/api/qr/generate/{batch}'
 */
generate.get = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generate.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\QrCodeController::generate
 * @see app/Http/Controllers/Api/QrCodeController.php:46
 * @route '/api/qr/generate/{batch}'
 */
generate.head = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: generate.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\QrCodeController::generate
 * @see app/Http/Controllers/Api/QrCodeController.php:46
 * @route '/api/qr/generate/{batch}'
 */
    const generateForm = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: generate.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\QrCodeController::generate
 * @see app/Http/Controllers/Api/QrCodeController.php:46
 * @route '/api/qr/generate/{batch}'
 */
        generateForm.get = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: generate.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\QrCodeController::generate
 * @see app/Http/Controllers/Api/QrCodeController.php:46
 * @route '/api/qr/generate/{batch}'
 */
        generateForm.head = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: generate.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    generate.form = generateForm
/**
* @see \App\Http\Controllers\Api\QrCodeController::scan
 * @see app/Http/Controllers/Api/QrCodeController.php:81
 * @route '/api/qr/scan'
 */
export const scan = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: scan.url(options),
    method: 'post',
})

scan.definition = {
    methods: ["post"],
    url: '/api/qr/scan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\QrCodeController::scan
 * @see app/Http/Controllers/Api/QrCodeController.php:81
 * @route '/api/qr/scan'
 */
scan.url = (options?: RouteQueryOptions) => {
    return scan.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\QrCodeController::scan
 * @see app/Http/Controllers/Api/QrCodeController.php:81
 * @route '/api/qr/scan'
 */
scan.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: scan.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\QrCodeController::scan
 * @see app/Http/Controllers/Api/QrCodeController.php:81
 * @route '/api/qr/scan'
 */
    const scanForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: scan.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\QrCodeController::scan
 * @see app/Http/Controllers/Api/QrCodeController.php:81
 * @route '/api/qr/scan'
 */
        scanForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: scan.url(options),
            method: 'post',
        })
    
    scan.form = scanForm
/**
* @see \App\Http\Controllers\Api\QrCodeController::scanLogs
 * @see app/Http/Controllers/Api/QrCodeController.php:169
 * @route '/api/qr/scan-logs'
 */
export const scanLogs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: scanLogs.url(options),
    method: 'get',
})

scanLogs.definition = {
    methods: ["get","head"],
    url: '/api/qr/scan-logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\QrCodeController::scanLogs
 * @see app/Http/Controllers/Api/QrCodeController.php:169
 * @route '/api/qr/scan-logs'
 */
scanLogs.url = (options?: RouteQueryOptions) => {
    return scanLogs.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\QrCodeController::scanLogs
 * @see app/Http/Controllers/Api/QrCodeController.php:169
 * @route '/api/qr/scan-logs'
 */
scanLogs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: scanLogs.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\QrCodeController::scanLogs
 * @see app/Http/Controllers/Api/QrCodeController.php:169
 * @route '/api/qr/scan-logs'
 */
scanLogs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: scanLogs.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\QrCodeController::scanLogs
 * @see app/Http/Controllers/Api/QrCodeController.php:169
 * @route '/api/qr/scan-logs'
 */
    const scanLogsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: scanLogs.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\QrCodeController::scanLogs
 * @see app/Http/Controllers/Api/QrCodeController.php:169
 * @route '/api/qr/scan-logs'
 */
        scanLogsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: scanLogs.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\QrCodeController::scanLogs
 * @see app/Http/Controllers/Api/QrCodeController.php:169
 * @route '/api/qr/scan-logs'
 */
        scanLogsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: scanLogs.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    scanLogs.form = scanLogsForm
/**
* @see \App\Http\Controllers\Api\QrCodeController::analytics
 * @see app/Http/Controllers/Api/QrCodeController.php:189
 * @route '/api/qr/analytics'
 */
export const analytics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: analytics.url(options),
    method: 'get',
})

analytics.definition = {
    methods: ["get","head"],
    url: '/api/qr/analytics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\QrCodeController::analytics
 * @see app/Http/Controllers/Api/QrCodeController.php:189
 * @route '/api/qr/analytics'
 */
analytics.url = (options?: RouteQueryOptions) => {
    return analytics.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\QrCodeController::analytics
 * @see app/Http/Controllers/Api/QrCodeController.php:189
 * @route '/api/qr/analytics'
 */
analytics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: analytics.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\QrCodeController::analytics
 * @see app/Http/Controllers/Api/QrCodeController.php:189
 * @route '/api/qr/analytics'
 */
analytics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: analytics.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\QrCodeController::analytics
 * @see app/Http/Controllers/Api/QrCodeController.php:189
 * @route '/api/qr/analytics'
 */
    const analyticsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: analytics.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\QrCodeController::analytics
 * @see app/Http/Controllers/Api/QrCodeController.php:189
 * @route '/api/qr/analytics'
 */
        analyticsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: analytics.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\QrCodeController::analytics
 * @see app/Http/Controllers/Api/QrCodeController.php:189
 * @route '/api/qr/analytics'
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
    generate: Object.assign(generate, generate),
scan: Object.assign(scan, scan),
scanLogs: Object.assign(scanLogs, scanLogs),
analytics: Object.assign(analytics, analytics),
}

export default qr
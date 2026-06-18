import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\QrCodeController::generate
 * @see app/Http/Controllers/Api/QrCodeController.php:47
 * @route '/api/qr/generate/{batch}'
 */
export const generate = (args: { batch: string | number | { id: string | number } } | [batch: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generate.url(args, options),
    method: 'get',
})

generate.definition = {
    methods: ["get","head"],
    url: '/api/qr/generate/{batch}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\QrCodeController::generate
 * @see app/Http/Controllers/Api/QrCodeController.php:47
 * @route '/api/qr/generate/{batch}'
 */
generate.url = (args: { batch: string | number | { id: string | number } } | [batch: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
 * @see app/Http/Controllers/Api/QrCodeController.php:47
 * @route '/api/qr/generate/{batch}'
 */
generate.get = (args: { batch: string | number | { id: string | number } } | [batch: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generate.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\QrCodeController::generate
 * @see app/Http/Controllers/Api/QrCodeController.php:47
 * @route '/api/qr/generate/{batch}'
 */
generate.head = (args: { batch: string | number | { id: string | number } } | [batch: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: generate.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\QrCodeController::generate
 * @see app/Http/Controllers/Api/QrCodeController.php:47
 * @route '/api/qr/generate/{batch}'
 */
    const generateForm = (args: { batch: string | number | { id: string | number } } | [batch: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: generate.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\QrCodeController::generate
 * @see app/Http/Controllers/Api/QrCodeController.php:47
 * @route '/api/qr/generate/{batch}'
 */
        generateForm.get = (args: { batch: string | number | { id: string | number } } | [batch: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: generate.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\QrCodeController::generate
 * @see app/Http/Controllers/Api/QrCodeController.php:47
 * @route '/api/qr/generate/{batch}'
 */
        generateForm.head = (args: { batch: string | number | { id: string | number } } | [batch: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Api\QrCodeController::generateObat
 * @see app/Http/Controllers/Api/QrCodeController.php:82
 * @route '/api/qr/generate-obat/{obat}'
 */
export const generateObat = (args: { obat: string | number | { id: string | number } } | [obat: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generateObat.url(args, options),
    method: 'get',
})

generateObat.definition = {
    methods: ["get","head"],
    url: '/api/qr/generate-obat/{obat}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\QrCodeController::generateObat
 * @see app/Http/Controllers/Api/QrCodeController.php:82
 * @route '/api/qr/generate-obat/{obat}'
 */
generateObat.url = (args: { obat: string | number | { id: string | number } } | [obat: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { obat: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { obat: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        obat: typeof args.obat === 'object'
                ? args.obat.id
                : args.obat,
                }

    return generateObat.definition.url
            .replace('{obat}', parsedArgs.obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\QrCodeController::generateObat
 * @see app/Http/Controllers/Api/QrCodeController.php:82
 * @route '/api/qr/generate-obat/{obat}'
 */
generateObat.get = (args: { obat: string | number | { id: string | number } } | [obat: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generateObat.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\QrCodeController::generateObat
 * @see app/Http/Controllers/Api/QrCodeController.php:82
 * @route '/api/qr/generate-obat/{obat}'
 */
generateObat.head = (args: { obat: string | number | { id: string | number } } | [obat: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: generateObat.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\QrCodeController::generateObat
 * @see app/Http/Controllers/Api/QrCodeController.php:82
 * @route '/api/qr/generate-obat/{obat}'
 */
    const generateObatForm = (args: { obat: string | number | { id: string | number } } | [obat: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: generateObat.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\QrCodeController::generateObat
 * @see app/Http/Controllers/Api/QrCodeController.php:82
 * @route '/api/qr/generate-obat/{obat}'
 */
        generateObatForm.get = (args: { obat: string | number | { id: string | number } } | [obat: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: generateObat.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\QrCodeController::generateObat
 * @see app/Http/Controllers/Api/QrCodeController.php:82
 * @route '/api/qr/generate-obat/{obat}'
 */
        generateObatForm.head = (args: { obat: string | number | { id: string | number } } | [obat: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: generateObat.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    generateObat.form = generateObatForm
/**
* @see \App\Http\Controllers\Api\QrCodeController::scan
 * @see app/Http/Controllers/Api/QrCodeController.php:129
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
 * @see app/Http/Controllers/Api/QrCodeController.php:129
 * @route '/api/qr/scan'
 */
scan.url = (options?: RouteQueryOptions) => {
    return scan.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\QrCodeController::scan
 * @see app/Http/Controllers/Api/QrCodeController.php:129
 * @route '/api/qr/scan'
 */
scan.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: scan.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\QrCodeController::scan
 * @see app/Http/Controllers/Api/QrCodeController.php:129
 * @route '/api/qr/scan'
 */
    const scanForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: scan.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\QrCodeController::scan
 * @see app/Http/Controllers/Api/QrCodeController.php:129
 * @route '/api/qr/scan'
 */
        scanForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: scan.url(options),
            method: 'post',
        })
    
    scan.form = scanForm
/**
* @see \App\Http\Controllers\Api\QrCodeController::scanLogs
 * @see app/Http/Controllers/Api/QrCodeController.php:278
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
 * @see app/Http/Controllers/Api/QrCodeController.php:278
 * @route '/api/qr/scan-logs'
 */
scanLogs.url = (options?: RouteQueryOptions) => {
    return scanLogs.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\QrCodeController::scanLogs
 * @see app/Http/Controllers/Api/QrCodeController.php:278
 * @route '/api/qr/scan-logs'
 */
scanLogs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: scanLogs.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\QrCodeController::scanLogs
 * @see app/Http/Controllers/Api/QrCodeController.php:278
 * @route '/api/qr/scan-logs'
 */
scanLogs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: scanLogs.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\QrCodeController::scanLogs
 * @see app/Http/Controllers/Api/QrCodeController.php:278
 * @route '/api/qr/scan-logs'
 */
    const scanLogsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: scanLogs.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\QrCodeController::scanLogs
 * @see app/Http/Controllers/Api/QrCodeController.php:278
 * @route '/api/qr/scan-logs'
 */
        scanLogsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: scanLogs.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\QrCodeController::scanLogs
 * @see app/Http/Controllers/Api/QrCodeController.php:278
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
 * @see app/Http/Controllers/Api/QrCodeController.php:298
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
 * @see app/Http/Controllers/Api/QrCodeController.php:298
 * @route '/api/qr/analytics'
 */
analytics.url = (options?: RouteQueryOptions) => {
    return analytics.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\QrCodeController::analytics
 * @see app/Http/Controllers/Api/QrCodeController.php:298
 * @route '/api/qr/analytics'
 */
analytics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: analytics.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\QrCodeController::analytics
 * @see app/Http/Controllers/Api/QrCodeController.php:298
 * @route '/api/qr/analytics'
 */
analytics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: analytics.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\QrCodeController::analytics
 * @see app/Http/Controllers/Api/QrCodeController.php:298
 * @route '/api/qr/analytics'
 */
    const analyticsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: analytics.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\QrCodeController::analytics
 * @see app/Http/Controllers/Api/QrCodeController.php:298
 * @route '/api/qr/analytics'
 */
        analyticsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: analytics.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\QrCodeController::analytics
 * @see app/Http/Controllers/Api/QrCodeController.php:298
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
generateObat: Object.assign(generateObat, generateObat),
scan: Object.assign(scan, scan),
scanLogs: Object.assign(scanLogs, scanLogs),
analytics: Object.assign(analytics, analytics),
}

export default qr
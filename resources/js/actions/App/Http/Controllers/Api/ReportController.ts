import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\ReportController::stockReport
 * @see app/Http/Controllers/Api/ReportController.php:18
 * @route '/api/reports/stock'
 */
export const stockReport = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stockReport.url(options),
    method: 'get',
})

stockReport.definition = {
    methods: ["get","head"],
    url: '/api/reports/stock',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ReportController::stockReport
 * @see app/Http/Controllers/Api/ReportController.php:18
 * @route '/api/reports/stock'
 */
stockReport.url = (options?: RouteQueryOptions) => {
    return stockReport.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ReportController::stockReport
 * @see app/Http/Controllers/Api/ReportController.php:18
 * @route '/api/reports/stock'
 */
stockReport.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stockReport.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\ReportController::stockReport
 * @see app/Http/Controllers/Api/ReportController.php:18
 * @route '/api/reports/stock'
 */
stockReport.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stockReport.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\ReportController::stockReport
 * @see app/Http/Controllers/Api/ReportController.php:18
 * @route '/api/reports/stock'
 */
    const stockReportForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: stockReport.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\ReportController::stockReport
 * @see app/Http/Controllers/Api/ReportController.php:18
 * @route '/api/reports/stock'
 */
        stockReportForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stockReport.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\ReportController::stockReport
 * @see app/Http/Controllers/Api/ReportController.php:18
 * @route '/api/reports/stock'
 */
        stockReportForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stockReport.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    stockReport.form = stockReportForm
/**
* @see \App\Http\Controllers\Api\ReportController::transactionReport
 * @see app/Http/Controllers/Api/ReportController.php:26
 * @route '/api/reports/transactions'
 */
export const transactionReport = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactionReport.url(options),
    method: 'get',
})

transactionReport.definition = {
    methods: ["get","head"],
    url: '/api/reports/transactions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ReportController::transactionReport
 * @see app/Http/Controllers/Api/ReportController.php:26
 * @route '/api/reports/transactions'
 */
transactionReport.url = (options?: RouteQueryOptions) => {
    return transactionReport.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ReportController::transactionReport
 * @see app/Http/Controllers/Api/ReportController.php:26
 * @route '/api/reports/transactions'
 */
transactionReport.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactionReport.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\ReportController::transactionReport
 * @see app/Http/Controllers/Api/ReportController.php:26
 * @route '/api/reports/transactions'
 */
transactionReport.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: transactionReport.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\ReportController::transactionReport
 * @see app/Http/Controllers/Api/ReportController.php:26
 * @route '/api/reports/transactions'
 */
    const transactionReportForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: transactionReport.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\ReportController::transactionReport
 * @see app/Http/Controllers/Api/ReportController.php:26
 * @route '/api/reports/transactions'
 */
        transactionReportForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: transactionReport.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\ReportController::transactionReport
 * @see app/Http/Controllers/Api/ReportController.php:26
 * @route '/api/reports/transactions'
 */
        transactionReportForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: transactionReport.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    transactionReport.form = transactionReportForm
/**
* @see \App\Http\Controllers\Api\ReportController::expiryReport
 * @see app/Http/Controllers/Api/ReportController.php:34
 * @route '/api/reports/expiry'
 */
export const expiryReport = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: expiryReport.url(options),
    method: 'get',
})

expiryReport.definition = {
    methods: ["get","head"],
    url: '/api/reports/expiry',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ReportController::expiryReport
 * @see app/Http/Controllers/Api/ReportController.php:34
 * @route '/api/reports/expiry'
 */
expiryReport.url = (options?: RouteQueryOptions) => {
    return expiryReport.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ReportController::expiryReport
 * @see app/Http/Controllers/Api/ReportController.php:34
 * @route '/api/reports/expiry'
 */
expiryReport.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: expiryReport.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\ReportController::expiryReport
 * @see app/Http/Controllers/Api/ReportController.php:34
 * @route '/api/reports/expiry'
 */
expiryReport.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: expiryReport.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\ReportController::expiryReport
 * @see app/Http/Controllers/Api/ReportController.php:34
 * @route '/api/reports/expiry'
 */
    const expiryReportForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: expiryReport.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\ReportController::expiryReport
 * @see app/Http/Controllers/Api/ReportController.php:34
 * @route '/api/reports/expiry'
 */
        expiryReportForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: expiryReport.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\ReportController::expiryReport
 * @see app/Http/Controllers/Api/ReportController.php:34
 * @route '/api/reports/expiry'
 */
        expiryReportForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: expiryReport.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    expiryReport.form = expiryReportForm
/**
* @see \App\Http\Controllers\Api\ReportController::exportMethod
 * @see app/Http/Controllers/Api/ReportController.php:42
 * @route '/api/reports/export/{type}'
 */
export const exportMethod = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(args, options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/api/reports/export/{type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ReportController::exportMethod
 * @see app/Http/Controllers/Api/ReportController.php:42
 * @route '/api/reports/export/{type}'
 */
exportMethod.url = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { type: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        type: args.type,
                }

    return exportMethod.definition.url
            .replace('{type}', parsedArgs.type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ReportController::exportMethod
 * @see app/Http/Controllers/Api/ReportController.php:42
 * @route '/api/reports/export/{type}'
 */
exportMethod.get = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\ReportController::exportMethod
 * @see app/Http/Controllers/Api/ReportController.php:42
 * @route '/api/reports/export/{type}'
 */
exportMethod.head = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\ReportController::exportMethod
 * @see app/Http/Controllers/Api/ReportController.php:42
 * @route '/api/reports/export/{type}'
 */
    const exportMethodForm = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: exportMethod.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\ReportController::exportMethod
 * @see app/Http/Controllers/Api/ReportController.php:42
 * @route '/api/reports/export/{type}'
 */
        exportMethodForm.get = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportMethod.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\ReportController::exportMethod
 * @see app/Http/Controllers/Api/ReportController.php:42
 * @route '/api/reports/export/{type}'
 */
        exportMethodForm.head = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportMethod.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    exportMethod.form = exportMethodForm
const ReportController = { stockReport, transactionReport, expiryReport, exportMethod, export: exportMethod }

export default ReportController
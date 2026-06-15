import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\ReportController::stock
 * @see app/Http/Controllers/Api/ReportController.php:18
 * @route '/api/reports/stock'
 */
export const stock = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stock.url(options),
    method: 'get',
})

stock.definition = {
    methods: ["get","head"],
    url: '/api/reports/stock',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ReportController::stock
 * @see app/Http/Controllers/Api/ReportController.php:18
 * @route '/api/reports/stock'
 */
stock.url = (options?: RouteQueryOptions) => {
    return stock.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ReportController::stock
 * @see app/Http/Controllers/Api/ReportController.php:18
 * @route '/api/reports/stock'
 */
stock.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stock.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\ReportController::stock
 * @see app/Http/Controllers/Api/ReportController.php:18
 * @route '/api/reports/stock'
 */
stock.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stock.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\ReportController::stock
 * @see app/Http/Controllers/Api/ReportController.php:18
 * @route '/api/reports/stock'
 */
    const stockForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: stock.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\ReportController::stock
 * @see app/Http/Controllers/Api/ReportController.php:18
 * @route '/api/reports/stock'
 */
        stockForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stock.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\ReportController::stock
 * @see app/Http/Controllers/Api/ReportController.php:18
 * @route '/api/reports/stock'
 */
        stockForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stock.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    stock.form = stockForm
/**
* @see \App\Http\Controllers\Api\ReportController::transactions
 * @see app/Http/Controllers/Api/ReportController.php:26
 * @route '/api/reports/transactions'
 */
export const transactions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactions.url(options),
    method: 'get',
})

transactions.definition = {
    methods: ["get","head"],
    url: '/api/reports/transactions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ReportController::transactions
 * @see app/Http/Controllers/Api/ReportController.php:26
 * @route '/api/reports/transactions'
 */
transactions.url = (options?: RouteQueryOptions) => {
    return transactions.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ReportController::transactions
 * @see app/Http/Controllers/Api/ReportController.php:26
 * @route '/api/reports/transactions'
 */
transactions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactions.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\ReportController::transactions
 * @see app/Http/Controllers/Api/ReportController.php:26
 * @route '/api/reports/transactions'
 */
transactions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: transactions.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\ReportController::transactions
 * @see app/Http/Controllers/Api/ReportController.php:26
 * @route '/api/reports/transactions'
 */
    const transactionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: transactions.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\ReportController::transactions
 * @see app/Http/Controllers/Api/ReportController.php:26
 * @route '/api/reports/transactions'
 */
        transactionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: transactions.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\ReportController::transactions
 * @see app/Http/Controllers/Api/ReportController.php:26
 * @route '/api/reports/transactions'
 */
        transactionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: transactions.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    transactions.form = transactionsForm
/**
* @see \App\Http\Controllers\Api\ReportController::expiry
 * @see app/Http/Controllers/Api/ReportController.php:34
 * @route '/api/reports/expiry'
 */
export const expiry = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: expiry.url(options),
    method: 'get',
})

expiry.definition = {
    methods: ["get","head"],
    url: '/api/reports/expiry',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ReportController::expiry
 * @see app/Http/Controllers/Api/ReportController.php:34
 * @route '/api/reports/expiry'
 */
expiry.url = (options?: RouteQueryOptions) => {
    return expiry.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ReportController::expiry
 * @see app/Http/Controllers/Api/ReportController.php:34
 * @route '/api/reports/expiry'
 */
expiry.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: expiry.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\ReportController::expiry
 * @see app/Http/Controllers/Api/ReportController.php:34
 * @route '/api/reports/expiry'
 */
expiry.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: expiry.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\ReportController::expiry
 * @see app/Http/Controllers/Api/ReportController.php:34
 * @route '/api/reports/expiry'
 */
    const expiryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: expiry.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\ReportController::expiry
 * @see app/Http/Controllers/Api/ReportController.php:34
 * @route '/api/reports/expiry'
 */
        expiryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: expiry.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\ReportController::expiry
 * @see app/Http/Controllers/Api/ReportController.php:34
 * @route '/api/reports/expiry'
 */
        expiryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: expiry.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    expiry.form = expiryForm
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
const reports = {
    stock: Object.assign(stock, stock),
transactions: Object.assign(transactions, transactions),
expiry: Object.assign(expiry, expiry),
export: Object.assign(exportMethod, exportMethod),
}

export default reports
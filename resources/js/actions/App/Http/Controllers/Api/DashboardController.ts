import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\DashboardController::stats
 * @see app/Http/Controllers/Api/DashboardController.php:136
 * @route '/api/dashboard/stats'
 */
export const stats = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})

stats.definition = {
    methods: ["get","head"],
    url: '/api/dashboard/stats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\DashboardController::stats
 * @see app/Http/Controllers/Api/DashboardController.php:136
 * @route '/api/dashboard/stats'
 */
stats.url = (options?: RouteQueryOptions) => {
    return stats.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\DashboardController::stats
 * @see app/Http/Controllers/Api/DashboardController.php:136
 * @route '/api/dashboard/stats'
 */
stats.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\DashboardController::stats
 * @see app/Http/Controllers/Api/DashboardController.php:136
 * @route '/api/dashboard/stats'
 */
stats.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stats.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\DashboardController::stats
 * @see app/Http/Controllers/Api/DashboardController.php:136
 * @route '/api/dashboard/stats'
 */
    const statsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: stats.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\DashboardController::stats
 * @see app/Http/Controllers/Api/DashboardController.php:136
 * @route '/api/dashboard/stats'
 */
        statsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stats.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\DashboardController::stats
 * @see app/Http/Controllers/Api/DashboardController.php:136
 * @route '/api/dashboard/stats'
 */
        statsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stats.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    stats.form = statsForm
/**
* @see \App\Http\Controllers\Api\DashboardController::stockLevels
 * @see app/Http/Controllers/Api/DashboardController.php:154
 * @route '/api/dashboard/stock-levels'
 */
export const stockLevels = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stockLevels.url(options),
    method: 'get',
})

stockLevels.definition = {
    methods: ["get","head"],
    url: '/api/dashboard/stock-levels',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\DashboardController::stockLevels
 * @see app/Http/Controllers/Api/DashboardController.php:154
 * @route '/api/dashboard/stock-levels'
 */
stockLevels.url = (options?: RouteQueryOptions) => {
    return stockLevels.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\DashboardController::stockLevels
 * @see app/Http/Controllers/Api/DashboardController.php:154
 * @route '/api/dashboard/stock-levels'
 */
stockLevels.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stockLevels.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\DashboardController::stockLevels
 * @see app/Http/Controllers/Api/DashboardController.php:154
 * @route '/api/dashboard/stock-levels'
 */
stockLevels.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stockLevels.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\DashboardController::stockLevels
 * @see app/Http/Controllers/Api/DashboardController.php:154
 * @route '/api/dashboard/stock-levels'
 */
    const stockLevelsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: stockLevels.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\DashboardController::stockLevels
 * @see app/Http/Controllers/Api/DashboardController.php:154
 * @route '/api/dashboard/stock-levels'
 */
        stockLevelsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stockLevels.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\DashboardController::stockLevels
 * @see app/Http/Controllers/Api/DashboardController.php:154
 * @route '/api/dashboard/stock-levels'
 */
        stockLevelsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stockLevels.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    stockLevels.form = stockLevelsForm
/**
* @see \App\Http\Controllers\Api\DashboardController::transactionTrends
 * @see app/Http/Controllers/Api/DashboardController.php:174
 * @route '/api/dashboard/transaction-trends'
 */
export const transactionTrends = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactionTrends.url(options),
    method: 'get',
})

transactionTrends.definition = {
    methods: ["get","head"],
    url: '/api/dashboard/transaction-trends',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\DashboardController::transactionTrends
 * @see app/Http/Controllers/Api/DashboardController.php:174
 * @route '/api/dashboard/transaction-trends'
 */
transactionTrends.url = (options?: RouteQueryOptions) => {
    return transactionTrends.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\DashboardController::transactionTrends
 * @see app/Http/Controllers/Api/DashboardController.php:174
 * @route '/api/dashboard/transaction-trends'
 */
transactionTrends.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactionTrends.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\DashboardController::transactionTrends
 * @see app/Http/Controllers/Api/DashboardController.php:174
 * @route '/api/dashboard/transaction-trends'
 */
transactionTrends.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: transactionTrends.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\DashboardController::transactionTrends
 * @see app/Http/Controllers/Api/DashboardController.php:174
 * @route '/api/dashboard/transaction-trends'
 */
    const transactionTrendsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: transactionTrends.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\DashboardController::transactionTrends
 * @see app/Http/Controllers/Api/DashboardController.php:174
 * @route '/api/dashboard/transaction-trends'
 */
        transactionTrendsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: transactionTrends.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\DashboardController::transactionTrends
 * @see app/Http/Controllers/Api/DashboardController.php:174
 * @route '/api/dashboard/transaction-trends'
 */
        transactionTrendsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: transactionTrends.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    transactionTrends.form = transactionTrendsForm
/**
* @see \App\Http\Controllers\Api\DashboardController::expiringSoon
 * @see app/Http/Controllers/Api/DashboardController.php:208
 * @route '/api/dashboard/expiring-soon'
 */
export const expiringSoon = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: expiringSoon.url(options),
    method: 'get',
})

expiringSoon.definition = {
    methods: ["get","head"],
    url: '/api/dashboard/expiring-soon',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\DashboardController::expiringSoon
 * @see app/Http/Controllers/Api/DashboardController.php:208
 * @route '/api/dashboard/expiring-soon'
 */
expiringSoon.url = (options?: RouteQueryOptions) => {
    return expiringSoon.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\DashboardController::expiringSoon
 * @see app/Http/Controllers/Api/DashboardController.php:208
 * @route '/api/dashboard/expiring-soon'
 */
expiringSoon.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: expiringSoon.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\DashboardController::expiringSoon
 * @see app/Http/Controllers/Api/DashboardController.php:208
 * @route '/api/dashboard/expiring-soon'
 */
expiringSoon.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: expiringSoon.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\DashboardController::expiringSoon
 * @see app/Http/Controllers/Api/DashboardController.php:208
 * @route '/api/dashboard/expiring-soon'
 */
    const expiringSoonForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: expiringSoon.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\DashboardController::expiringSoon
 * @see app/Http/Controllers/Api/DashboardController.php:208
 * @route '/api/dashboard/expiring-soon'
 */
        expiringSoonForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: expiringSoon.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\DashboardController::expiringSoon
 * @see app/Http/Controllers/Api/DashboardController.php:208
 * @route '/api/dashboard/expiring-soon'
 */
        expiringSoonForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: expiringSoon.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    expiringSoon.form = expiringSoonForm
/**
* @see \App\Http\Controllers\Api\DashboardController::lowStock
 * @see app/Http/Controllers/Api/DashboardController.php:225
 * @route '/api/dashboard/low-stock'
 */
export const lowStock = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lowStock.url(options),
    method: 'get',
})

lowStock.definition = {
    methods: ["get","head"],
    url: '/api/dashboard/low-stock',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\DashboardController::lowStock
 * @see app/Http/Controllers/Api/DashboardController.php:225
 * @route '/api/dashboard/low-stock'
 */
lowStock.url = (options?: RouteQueryOptions) => {
    return lowStock.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\DashboardController::lowStock
 * @see app/Http/Controllers/Api/DashboardController.php:225
 * @route '/api/dashboard/low-stock'
 */
lowStock.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lowStock.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\DashboardController::lowStock
 * @see app/Http/Controllers/Api/DashboardController.php:225
 * @route '/api/dashboard/low-stock'
 */
lowStock.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: lowStock.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\DashboardController::lowStock
 * @see app/Http/Controllers/Api/DashboardController.php:225
 * @route '/api/dashboard/low-stock'
 */
    const lowStockForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: lowStock.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\DashboardController::lowStock
 * @see app/Http/Controllers/Api/DashboardController.php:225
 * @route '/api/dashboard/low-stock'
 */
        lowStockForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: lowStock.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\DashboardController::lowStock
 * @see app/Http/Controllers/Api/DashboardController.php:225
 * @route '/api/dashboard/low-stock'
 */
        lowStockForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: lowStock.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    lowStock.form = lowStockForm
/**
* @see \App\Http\Controllers\Api\DashboardController::topMedicines
 * @see app/Http/Controllers/Api/DashboardController.php:240
 * @route '/api/dashboard/top-medicines'
 */
export const topMedicines = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: topMedicines.url(options),
    method: 'get',
})

topMedicines.definition = {
    methods: ["get","head"],
    url: '/api/dashboard/top-medicines',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\DashboardController::topMedicines
 * @see app/Http/Controllers/Api/DashboardController.php:240
 * @route '/api/dashboard/top-medicines'
 */
topMedicines.url = (options?: RouteQueryOptions) => {
    return topMedicines.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\DashboardController::topMedicines
 * @see app/Http/Controllers/Api/DashboardController.php:240
 * @route '/api/dashboard/top-medicines'
 */
topMedicines.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: topMedicines.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\DashboardController::topMedicines
 * @see app/Http/Controllers/Api/DashboardController.php:240
 * @route '/api/dashboard/top-medicines'
 */
topMedicines.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: topMedicines.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\DashboardController::topMedicines
 * @see app/Http/Controllers/Api/DashboardController.php:240
 * @route '/api/dashboard/top-medicines'
 */
    const topMedicinesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: topMedicines.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\DashboardController::topMedicines
 * @see app/Http/Controllers/Api/DashboardController.php:240
 * @route '/api/dashboard/top-medicines'
 */
        topMedicinesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: topMedicines.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\DashboardController::topMedicines
 * @see app/Http/Controllers/Api/DashboardController.php:240
 * @route '/api/dashboard/top-medicines'
 */
        topMedicinesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: topMedicines.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    topMedicines.form = topMedicinesForm
/**
* @see \App\Http\Controllers\Api\DashboardController::recentTransactions
 * @see app/Http/Controllers/Api/DashboardController.php:275
 * @route '/api/dashboard/recent-transactions'
 */
export const recentTransactions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recentTransactions.url(options),
    method: 'get',
})

recentTransactions.definition = {
    methods: ["get","head"],
    url: '/api/dashboard/recent-transactions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\DashboardController::recentTransactions
 * @see app/Http/Controllers/Api/DashboardController.php:275
 * @route '/api/dashboard/recent-transactions'
 */
recentTransactions.url = (options?: RouteQueryOptions) => {
    return recentTransactions.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\DashboardController::recentTransactions
 * @see app/Http/Controllers/Api/DashboardController.php:275
 * @route '/api/dashboard/recent-transactions'
 */
recentTransactions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recentTransactions.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\DashboardController::recentTransactions
 * @see app/Http/Controllers/Api/DashboardController.php:275
 * @route '/api/dashboard/recent-transactions'
 */
recentTransactions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: recentTransactions.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\DashboardController::recentTransactions
 * @see app/Http/Controllers/Api/DashboardController.php:275
 * @route '/api/dashboard/recent-transactions'
 */
    const recentTransactionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: recentTransactions.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\DashboardController::recentTransactions
 * @see app/Http/Controllers/Api/DashboardController.php:275
 * @route '/api/dashboard/recent-transactions'
 */
        recentTransactionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: recentTransactions.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\DashboardController::recentTransactions
 * @see app/Http/Controllers/Api/DashboardController.php:275
 * @route '/api/dashboard/recent-transactions'
 */
        recentTransactionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: recentTransactions.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    recentTransactions.form = recentTransactionsForm
/**
* @see \App\Http\Controllers\Api\DashboardController::index
 * @see app/Http/Controllers/Api/DashboardController.php:48
 * @route '/dashboard'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\DashboardController::index
 * @see app/Http/Controllers/Api/DashboardController.php:48
 * @route '/dashboard'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\DashboardController::index
 * @see app/Http/Controllers/Api/DashboardController.php:48
 * @route '/dashboard'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\DashboardController::index
 * @see app/Http/Controllers/Api/DashboardController.php:48
 * @route '/dashboard'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\DashboardController::index
 * @see app/Http/Controllers/Api/DashboardController.php:48
 * @route '/dashboard'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\DashboardController::index
 * @see app/Http/Controllers/Api/DashboardController.php:48
 * @route '/dashboard'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\DashboardController::index
 * @see app/Http/Controllers/Api/DashboardController.php:48
 * @route '/dashboard'
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
const DashboardController = { stats, stockLevels, transactionTrends, expiringSoon, lowStock, topMedicines, recentTransactions, index }

export default DashboardController
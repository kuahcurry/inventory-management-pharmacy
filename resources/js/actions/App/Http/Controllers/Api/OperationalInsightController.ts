import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\OperationalInsightController::reorderSuggestions
 * @see app/Http/Controllers/Api/OperationalInsightController.php:26
 * @route '/api/insights/reorder-suggestions'
 */
export const reorderSuggestions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reorderSuggestions.url(options),
    method: 'get',
})

reorderSuggestions.definition = {
    methods: ["get","head"],
    url: '/api/insights/reorder-suggestions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::reorderSuggestions
 * @see app/Http/Controllers/Api/OperationalInsightController.php:26
 * @route '/api/insights/reorder-suggestions'
 */
reorderSuggestions.url = (options?: RouteQueryOptions) => {
    return reorderSuggestions.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::reorderSuggestions
 * @see app/Http/Controllers/Api/OperationalInsightController.php:26
 * @route '/api/insights/reorder-suggestions'
 */
reorderSuggestions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reorderSuggestions.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\OperationalInsightController::reorderSuggestions
 * @see app/Http/Controllers/Api/OperationalInsightController.php:26
 * @route '/api/insights/reorder-suggestions'
 */
reorderSuggestions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: reorderSuggestions.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\OperationalInsightController::reorderSuggestions
 * @see app/Http/Controllers/Api/OperationalInsightController.php:26
 * @route '/api/insights/reorder-suggestions'
 */
    const reorderSuggestionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: reorderSuggestions.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\OperationalInsightController::reorderSuggestions
 * @see app/Http/Controllers/Api/OperationalInsightController.php:26
 * @route '/api/insights/reorder-suggestions'
 */
        reorderSuggestionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: reorderSuggestions.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\OperationalInsightController::reorderSuggestions
 * @see app/Http/Controllers/Api/OperationalInsightController.php:26
 * @route '/api/insights/reorder-suggestions'
 */
        reorderSuggestionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: reorderSuggestions.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    reorderSuggestions.form = reorderSuggestionsForm
/**
* @see \App\Http\Controllers\Api\OperationalInsightController::forecasts
 * @see app/Http/Controllers/Api/OperationalInsightController.php:50
 * @route '/api/insights/forecasts'
 */
export const forecasts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: forecasts.url(options),
    method: 'get',
})

forecasts.definition = {
    methods: ["get","head"],
    url: '/api/insights/forecasts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::forecasts
 * @see app/Http/Controllers/Api/OperationalInsightController.php:50
 * @route '/api/insights/forecasts'
 */
forecasts.url = (options?: RouteQueryOptions) => {
    return forecasts.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::forecasts
 * @see app/Http/Controllers/Api/OperationalInsightController.php:50
 * @route '/api/insights/forecasts'
 */
forecasts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: forecasts.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\OperationalInsightController::forecasts
 * @see app/Http/Controllers/Api/OperationalInsightController.php:50
 * @route '/api/insights/forecasts'
 */
forecasts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: forecasts.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\OperationalInsightController::forecasts
 * @see app/Http/Controllers/Api/OperationalInsightController.php:50
 * @route '/api/insights/forecasts'
 */
    const forecastsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: forecasts.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\OperationalInsightController::forecasts
 * @see app/Http/Controllers/Api/OperationalInsightController.php:50
 * @route '/api/insights/forecasts'
 */
        forecastsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: forecasts.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\OperationalInsightController::forecasts
 * @see app/Http/Controllers/Api/OperationalInsightController.php:50
 * @route '/api/insights/forecasts'
 */
        forecastsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: forecasts.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    forecasts.form = forecastsForm
/**
* @see \App\Http\Controllers\Api\OperationalInsightController::checkInteractions
 * @see app/Http/Controllers/Api/OperationalInsightController.php:74
 * @route '/api/insights/check-interactions'
 */
export const checkInteractions = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkInteractions.url(options),
    method: 'post',
})

checkInteractions.definition = {
    methods: ["post"],
    url: '/api/insights/check-interactions',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::checkInteractions
 * @see app/Http/Controllers/Api/OperationalInsightController.php:74
 * @route '/api/insights/check-interactions'
 */
checkInteractions.url = (options?: RouteQueryOptions) => {
    return checkInteractions.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::checkInteractions
 * @see app/Http/Controllers/Api/OperationalInsightController.php:74
 * @route '/api/insights/check-interactions'
 */
checkInteractions.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkInteractions.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\OperationalInsightController::checkInteractions
 * @see app/Http/Controllers/Api/OperationalInsightController.php:74
 * @route '/api/insights/check-interactions'
 */
    const checkInteractionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: checkInteractions.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\OperationalInsightController::checkInteractions
 * @see app/Http/Controllers/Api/OperationalInsightController.php:74
 * @route '/api/insights/check-interactions'
 */
        checkInteractionsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: checkInteractions.url(options),
            method: 'post',
        })
    
    checkInteractions.form = checkInteractionsForm
/**
* @see \App\Http\Controllers\Api\OperationalInsightController::approvalQueue
 * @see app/Http/Controllers/Api/OperationalInsightController.php:89
 * @route '/api/insights/approval-queue'
 */
export const approvalQueue = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: approvalQueue.url(options),
    method: 'get',
})

approvalQueue.definition = {
    methods: ["get","head"],
    url: '/api/insights/approval-queue',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::approvalQueue
 * @see app/Http/Controllers/Api/OperationalInsightController.php:89
 * @route '/api/insights/approval-queue'
 */
approvalQueue.url = (options?: RouteQueryOptions) => {
    return approvalQueue.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::approvalQueue
 * @see app/Http/Controllers/Api/OperationalInsightController.php:89
 * @route '/api/insights/approval-queue'
 */
approvalQueue.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: approvalQueue.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\OperationalInsightController::approvalQueue
 * @see app/Http/Controllers/Api/OperationalInsightController.php:89
 * @route '/api/insights/approval-queue'
 */
approvalQueue.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: approvalQueue.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\OperationalInsightController::approvalQueue
 * @see app/Http/Controllers/Api/OperationalInsightController.php:89
 * @route '/api/insights/approval-queue'
 */
    const approvalQueueForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: approvalQueue.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\OperationalInsightController::approvalQueue
 * @see app/Http/Controllers/Api/OperationalInsightController.php:89
 * @route '/api/insights/approval-queue'
 */
        approvalQueueForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: approvalQueue.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\OperationalInsightController::approvalQueue
 * @see app/Http/Controllers/Api/OperationalInsightController.php:89
 * @route '/api/insights/approval-queue'
 */
        approvalQueueForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: approvalQueue.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    approvalQueue.form = approvalQueueForm
/**
* @see \App\Http\Controllers\Api\OperationalInsightController::approve
 * @see app/Http/Controllers/Api/OperationalInsightController.php:100
 * @route '/api/insights/approvals/{approval}/decision'
 */
export const approve = (args: { approval: number | { id: number } } | [approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

approve.definition = {
    methods: ["post"],
    url: '/api/insights/approvals/{approval}/decision',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::approve
 * @see app/Http/Controllers/Api/OperationalInsightController.php:100
 * @route '/api/insights/approvals/{approval}/decision'
 */
approve.url = (args: { approval: number | { id: number } } | [approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { approval: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { approval: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    approval: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        approval: typeof args.approval === 'object'
                ? args.approval.id
                : args.approval,
                }

    return approve.definition.url
            .replace('{approval}', parsedArgs.approval.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::approve
 * @see app/Http/Controllers/Api/OperationalInsightController.php:100
 * @route '/api/insights/approvals/{approval}/decision'
 */
approve.post = (args: { approval: number | { id: number } } | [approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\OperationalInsightController::approve
 * @see app/Http/Controllers/Api/OperationalInsightController.php:100
 * @route '/api/insights/approvals/{approval}/decision'
 */
    const approveForm = (args: { approval: number | { id: number } } | [approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: approve.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\OperationalInsightController::approve
 * @see app/Http/Controllers/Api/OperationalInsightController.php:100
 * @route '/api/insights/approvals/{approval}/decision'
 */
        approveForm.post = (args: { approval: number | { id: number } } | [approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: approve.url(args, options),
            method: 'post',
        })
    
    approve.form = approveForm
/**
* @see \App\Http\Controllers\Api\OperationalInsightController::transactionAudit
 * @see app/Http/Controllers/Api/OperationalInsightController.php:126
 * @route '/api/insights/transaction-audit/{transaksiId}'
 */
export const transactionAudit = (args: { transaksiId: string | number } | [transaksiId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactionAudit.url(args, options),
    method: 'get',
})

transactionAudit.definition = {
    methods: ["get","head"],
    url: '/api/insights/transaction-audit/{transaksiId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::transactionAudit
 * @see app/Http/Controllers/Api/OperationalInsightController.php:126
 * @route '/api/insights/transaction-audit/{transaksiId}'
 */
transactionAudit.url = (args: { transaksiId: string | number } | [transaksiId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { transaksiId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    transaksiId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        transaksiId: args.transaksiId,
                }

    return transactionAudit.definition.url
            .replace('{transaksiId}', parsedArgs.transaksiId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::transactionAudit
 * @see app/Http/Controllers/Api/OperationalInsightController.php:126
 * @route '/api/insights/transaction-audit/{transaksiId}'
 */
transactionAudit.get = (args: { transaksiId: string | number } | [transaksiId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactionAudit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\OperationalInsightController::transactionAudit
 * @see app/Http/Controllers/Api/OperationalInsightController.php:126
 * @route '/api/insights/transaction-audit/{transaksiId}'
 */
transactionAudit.head = (args: { transaksiId: string | number } | [transaksiId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: transactionAudit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\OperationalInsightController::transactionAudit
 * @see app/Http/Controllers/Api/OperationalInsightController.php:126
 * @route '/api/insights/transaction-audit/{transaksiId}'
 */
    const transactionAuditForm = (args: { transaksiId: string | number } | [transaksiId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: transactionAudit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\OperationalInsightController::transactionAudit
 * @see app/Http/Controllers/Api/OperationalInsightController.php:126
 * @route '/api/insights/transaction-audit/{transaksiId}'
 */
        transactionAuditForm.get = (args: { transaksiId: string | number } | [transaksiId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: transactionAudit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\OperationalInsightController::transactionAudit
 * @see app/Http/Controllers/Api/OperationalInsightController.php:126
 * @route '/api/insights/transaction-audit/{transaksiId}'
 */
        transactionAuditForm.head = (args: { transaksiId: string | number } | [transaksiId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: transactionAudit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    transactionAudit.form = transactionAuditForm
/**
* @see \App\Http\Controllers\Api\OperationalInsightController::startStockScanSession
 * @see app/Http/Controllers/Api/OperationalInsightController.php:159
 * @route '/api/insights/stock-scan-sessions/start'
 */
export const startStockScanSession = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: startStockScanSession.url(options),
    method: 'post',
})

startStockScanSession.definition = {
    methods: ["post"],
    url: '/api/insights/stock-scan-sessions/start',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::startStockScanSession
 * @see app/Http/Controllers/Api/OperationalInsightController.php:159
 * @route '/api/insights/stock-scan-sessions/start'
 */
startStockScanSession.url = (options?: RouteQueryOptions) => {
    return startStockScanSession.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::startStockScanSession
 * @see app/Http/Controllers/Api/OperationalInsightController.php:159
 * @route '/api/insights/stock-scan-sessions/start'
 */
startStockScanSession.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: startStockScanSession.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\OperationalInsightController::startStockScanSession
 * @see app/Http/Controllers/Api/OperationalInsightController.php:159
 * @route '/api/insights/stock-scan-sessions/start'
 */
    const startStockScanSessionForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: startStockScanSession.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\OperationalInsightController::startStockScanSession
 * @see app/Http/Controllers/Api/OperationalInsightController.php:159
 * @route '/api/insights/stock-scan-sessions/start'
 */
        startStockScanSessionForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: startStockScanSession.url(options),
            method: 'post',
        })
    
    startStockScanSession.form = startStockScanSessionForm
/**
* @see \App\Http\Controllers\Api\OperationalInsightController::scanStockSession
 * @see app/Http/Controllers/Api/OperationalInsightController.php:171
 * @route '/api/insights/stock-scan-sessions/{session}/scan'
 */
export const scanStockSession = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: scanStockSession.url(args, options),
    method: 'post',
})

scanStockSession.definition = {
    methods: ["post"],
    url: '/api/insights/stock-scan-sessions/{session}/scan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::scanStockSession
 * @see app/Http/Controllers/Api/OperationalInsightController.php:171
 * @route '/api/insights/stock-scan-sessions/{session}/scan'
 */
scanStockSession.url = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { session: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { session: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    session: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        session: typeof args.session === 'object'
                ? args.session.id
                : args.session,
                }

    return scanStockSession.definition.url
            .replace('{session}', parsedArgs.session.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::scanStockSession
 * @see app/Http/Controllers/Api/OperationalInsightController.php:171
 * @route '/api/insights/stock-scan-sessions/{session}/scan'
 */
scanStockSession.post = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: scanStockSession.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\OperationalInsightController::scanStockSession
 * @see app/Http/Controllers/Api/OperationalInsightController.php:171
 * @route '/api/insights/stock-scan-sessions/{session}/scan'
 */
    const scanStockSessionForm = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: scanStockSession.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\OperationalInsightController::scanStockSession
 * @see app/Http/Controllers/Api/OperationalInsightController.php:171
 * @route '/api/insights/stock-scan-sessions/{session}/scan'
 */
        scanStockSessionForm.post = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: scanStockSession.url(args, options),
            method: 'post',
        })
    
    scanStockSession.form = scanStockSessionForm
/**
* @see \App\Http\Controllers\Api\OperationalInsightController::completeStockScanSession
 * @see app/Http/Controllers/Api/OperationalInsightController.php:214
 * @route '/api/insights/stock-scan-sessions/{session}/complete'
 */
export const completeStockScanSession = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: completeStockScanSession.url(args, options),
    method: 'post',
})

completeStockScanSession.definition = {
    methods: ["post"],
    url: '/api/insights/stock-scan-sessions/{session}/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::completeStockScanSession
 * @see app/Http/Controllers/Api/OperationalInsightController.php:214
 * @route '/api/insights/stock-scan-sessions/{session}/complete'
 */
completeStockScanSession.url = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { session: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { session: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    session: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        session: typeof args.session === 'object'
                ? args.session.id
                : args.session,
                }

    return completeStockScanSession.definition.url
            .replace('{session}', parsedArgs.session.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::completeStockScanSession
 * @see app/Http/Controllers/Api/OperationalInsightController.php:214
 * @route '/api/insights/stock-scan-sessions/{session}/complete'
 */
completeStockScanSession.post = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: completeStockScanSession.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\OperationalInsightController::completeStockScanSession
 * @see app/Http/Controllers/Api/OperationalInsightController.php:214
 * @route '/api/insights/stock-scan-sessions/{session}/complete'
 */
    const completeStockScanSessionForm = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: completeStockScanSession.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\OperationalInsightController::completeStockScanSession
 * @see app/Http/Controllers/Api/OperationalInsightController.php:214
 * @route '/api/insights/stock-scan-sessions/{session}/complete'
 */
        completeStockScanSessionForm.post = (args: { session: number | { id: number } } | [session: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: completeStockScanSession.url(args, options),
            method: 'post',
        })
    
    completeStockScanSession.form = completeStockScanSessionForm
/**
* @see \App\Http\Controllers\Api\OperationalInsightController::margins
 * @see app/Http/Controllers/Api/OperationalInsightController.php:230
 * @route '/api/insights/margins'
 */
export const margins = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: margins.url(options),
    method: 'get',
})

margins.definition = {
    methods: ["get","head"],
    url: '/api/insights/margins',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::margins
 * @see app/Http/Controllers/Api/OperationalInsightController.php:230
 * @route '/api/insights/margins'
 */
margins.url = (options?: RouteQueryOptions) => {
    return margins.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::margins
 * @see app/Http/Controllers/Api/OperationalInsightController.php:230
 * @route '/api/insights/margins'
 */
margins.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: margins.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\OperationalInsightController::margins
 * @see app/Http/Controllers/Api/OperationalInsightController.php:230
 * @route '/api/insights/margins'
 */
margins.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: margins.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\OperationalInsightController::margins
 * @see app/Http/Controllers/Api/OperationalInsightController.php:230
 * @route '/api/insights/margins'
 */
    const marginsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: margins.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\OperationalInsightController::margins
 * @see app/Http/Controllers/Api/OperationalInsightController.php:230
 * @route '/api/insights/margins'
 */
        marginsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: margins.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\OperationalInsightController::margins
 * @see app/Http/Controllers/Api/OperationalInsightController.php:230
 * @route '/api/insights/margins'
 */
        marginsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: margins.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    margins.form = marginsForm
const OperationalInsightController = { reorderSuggestions, forecasts, checkInteractions, approvalQueue, approve, transactionAudit, startStockScanSession, scanStockSession, completeStockScanSession, margins }

export default OperationalInsightController
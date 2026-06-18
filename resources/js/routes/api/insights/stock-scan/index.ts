import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\OperationalInsightController::start
 * @see app/Http/Controllers/Api/OperationalInsightController.php:159
 * @route '/api/insights/stock-scan-sessions/start'
 */
export const start = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(options),
    method: 'post',
})

start.definition = {
    methods: ["post"],
    url: '/api/insights/stock-scan-sessions/start',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::start
 * @see app/Http/Controllers/Api/OperationalInsightController.php:159
 * @route '/api/insights/stock-scan-sessions/start'
 */
start.url = (options?: RouteQueryOptions) => {
    return start.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::start
 * @see app/Http/Controllers/Api/OperationalInsightController.php:159
 * @route '/api/insights/stock-scan-sessions/start'
 */
start.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\OperationalInsightController::start
 * @see app/Http/Controllers/Api/OperationalInsightController.php:159
 * @route '/api/insights/stock-scan-sessions/start'
 */
    const startForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: start.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\OperationalInsightController::start
 * @see app/Http/Controllers/Api/OperationalInsightController.php:159
 * @route '/api/insights/stock-scan-sessions/start'
 */
        startForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: start.url(options),
            method: 'post',
        })
    
    start.form = startForm
/**
* @see \App\Http\Controllers\Api\OperationalInsightController::scan
 * @see app/Http/Controllers/Api/OperationalInsightController.php:171
 * @route '/api/insights/stock-scan-sessions/{session}/scan'
 */
export const scan = (args: { session: string | number | { id: string | number } } | [session: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: scan.url(args, options),
    method: 'post',
})

scan.definition = {
    methods: ["post"],
    url: '/api/insights/stock-scan-sessions/{session}/scan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::scan
 * @see app/Http/Controllers/Api/OperationalInsightController.php:171
 * @route '/api/insights/stock-scan-sessions/{session}/scan'
 */
scan.url = (args: { session: string | number | { id: string | number } } | [session: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return scan.definition.url
            .replace('{session}', parsedArgs.session.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::scan
 * @see app/Http/Controllers/Api/OperationalInsightController.php:171
 * @route '/api/insights/stock-scan-sessions/{session}/scan'
 */
scan.post = (args: { session: string | number | { id: string | number } } | [session: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: scan.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\OperationalInsightController::scan
 * @see app/Http/Controllers/Api/OperationalInsightController.php:171
 * @route '/api/insights/stock-scan-sessions/{session}/scan'
 */
    const scanForm = (args: { session: string | number | { id: string | number } } | [session: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: scan.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\OperationalInsightController::scan
 * @see app/Http/Controllers/Api/OperationalInsightController.php:171
 * @route '/api/insights/stock-scan-sessions/{session}/scan'
 */
        scanForm.post = (args: { session: string | number | { id: string | number } } | [session: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: scan.url(args, options),
            method: 'post',
        })
    
    scan.form = scanForm
/**
* @see \App\Http\Controllers\Api\OperationalInsightController::complete
 * @see app/Http/Controllers/Api/OperationalInsightController.php:214
 * @route '/api/insights/stock-scan-sessions/{session}/complete'
 */
export const complete = (args: { session: string | number | { id: string | number } } | [session: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

complete.definition = {
    methods: ["post"],
    url: '/api/insights/stock-scan-sessions/{session}/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::complete
 * @see app/Http/Controllers/Api/OperationalInsightController.php:214
 * @route '/api/insights/stock-scan-sessions/{session}/complete'
 */
complete.url = (args: { session: string | number | { id: string | number } } | [session: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return complete.definition.url
            .replace('{session}', parsedArgs.session.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::complete
 * @see app/Http/Controllers/Api/OperationalInsightController.php:214
 * @route '/api/insights/stock-scan-sessions/{session}/complete'
 */
complete.post = (args: { session: string | number | { id: string | number } } | [session: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\OperationalInsightController::complete
 * @see app/Http/Controllers/Api/OperationalInsightController.php:214
 * @route '/api/insights/stock-scan-sessions/{session}/complete'
 */
    const completeForm = (args: { session: string | number | { id: string | number } } | [session: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: complete.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\OperationalInsightController::complete
 * @see app/Http/Controllers/Api/OperationalInsightController.php:214
 * @route '/api/insights/stock-scan-sessions/{session}/complete'
 */
        completeForm.post = (args: { session: string | number | { id: string | number } } | [session: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: complete.url(args, options),
            method: 'post',
        })
    
    complete.form = completeForm
const stockScan = {
    start: Object.assign(start, start),
scan: Object.assign(scan, scan),
complete: Object.assign(complete, complete),
}

export default stockScan
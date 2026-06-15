import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\OperationalInsightController::decision
 * @see app/Http/Controllers/Api/OperationalInsightController.php:100
 * @route '/api/insights/approvals/{approval}/decision'
 */
export const decision = (args: { approval: number | { id: number } } | [approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: decision.url(args, options),
    method: 'post',
})

decision.definition = {
    methods: ["post"],
    url: '/api/insights/approvals/{approval}/decision',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::decision
 * @see app/Http/Controllers/Api/OperationalInsightController.php:100
 * @route '/api/insights/approvals/{approval}/decision'
 */
decision.url = (args: { approval: number | { id: number } } | [approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return decision.definition.url
            .replace('{approval}', parsedArgs.approval.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\OperationalInsightController::decision
 * @see app/Http/Controllers/Api/OperationalInsightController.php:100
 * @route '/api/insights/approvals/{approval}/decision'
 */
decision.post = (args: { approval: number | { id: number } } | [approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: decision.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\OperationalInsightController::decision
 * @see app/Http/Controllers/Api/OperationalInsightController.php:100
 * @route '/api/insights/approvals/{approval}/decision'
 */
    const decisionForm = (args: { approval: number | { id: number } } | [approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: decision.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\OperationalInsightController::decision
 * @see app/Http/Controllers/Api/OperationalInsightController.php:100
 * @route '/api/insights/approvals/{approval}/decision'
 */
        decisionForm.post = (args: { approval: number | { id: number } } | [approval: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: decision.url(args, options),
            method: 'post',
        })
    
    decision.form = decisionForm
const approvals = {
    decision: Object.assign(decision, decision),
}

export default approvals
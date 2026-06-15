import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\TransaksiController::resume
 * @see app/Http/Controllers/TransaksiController.php:326
 * @route '/kasir/checkout/resume/{approvalRequest}'
 */
export const resume = (args: { approvalRequest: number | { id: number } } | [approvalRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resume.url(args, options),
    method: 'post',
})

resume.definition = {
    methods: ["post"],
    url: '/kasir/checkout/resume/{approvalRequest}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TransaksiController::resume
 * @see app/Http/Controllers/TransaksiController.php:326
 * @route '/kasir/checkout/resume/{approvalRequest}'
 */
resume.url = (args: { approvalRequest: number | { id: number } } | [approvalRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { approvalRequest: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { approvalRequest: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    approvalRequest: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        approvalRequest: typeof args.approvalRequest === 'object'
                ? args.approvalRequest.id
                : args.approvalRequest,
                }

    return resume.definition.url
            .replace('{approvalRequest}', parsedArgs.approvalRequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TransaksiController::resume
 * @see app/Http/Controllers/TransaksiController.php:326
 * @route '/kasir/checkout/resume/{approvalRequest}'
 */
resume.post = (args: { approvalRequest: number | { id: number } } | [approvalRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resume.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\TransaksiController::resume
 * @see app/Http/Controllers/TransaksiController.php:326
 * @route '/kasir/checkout/resume/{approvalRequest}'
 */
    const resumeForm = (args: { approvalRequest: number | { id: number } } | [approvalRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: resume.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TransaksiController::resume
 * @see app/Http/Controllers/TransaksiController.php:326
 * @route '/kasir/checkout/resume/{approvalRequest}'
 */
        resumeForm.post = (args: { approvalRequest: number | { id: number } } | [approvalRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: resume.url(args, options),
            method: 'post',
        })
    
    resume.form = resumeForm
const checkout = {
    resume: Object.assign(resume, resume),
}

export default checkout
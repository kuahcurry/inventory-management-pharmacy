import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\ReportController::exportMethod
 * @see app/Http/Controllers/ReportController.php:103
 * @route '/reports/suite/{suite}/export'
 */
export const exportMethod = (args: { suite: string | number } | [suite: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(args, options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/reports/suite/{suite}/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::exportMethod
 * @see app/Http/Controllers/ReportController.php:103
 * @route '/reports/suite/{suite}/export'
 */
exportMethod.url = (args: { suite: string | number } | [suite: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { suite: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    suite: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        suite: args.suite,
                }

    return exportMethod.definition.url
            .replace('{suite}', parsedArgs.suite.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::exportMethod
 * @see app/Http/Controllers/ReportController.php:103
 * @route '/reports/suite/{suite}/export'
 */
exportMethod.get = (args: { suite: string | number } | [suite: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::exportMethod
 * @see app/Http/Controllers/ReportController.php:103
 * @route '/reports/suite/{suite}/export'
 */
exportMethod.head = (args: { suite: string | number } | [suite: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::exportMethod
 * @see app/Http/Controllers/ReportController.php:103
 * @route '/reports/suite/{suite}/export'
 */
    const exportMethodForm = (args: { suite: string | number } | [suite: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: exportMethod.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::exportMethod
 * @see app/Http/Controllers/ReportController.php:103
 * @route '/reports/suite/{suite}/export'
 */
        exportMethodForm.get = (args: { suite: string | number } | [suite: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportMethod.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::exportMethod
 * @see app/Http/Controllers/ReportController.php:103
 * @route '/reports/suite/{suite}/export'
 */
        exportMethodForm.head = (args: { suite: string | number } | [suite: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportMethod.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    exportMethod.form = exportMethodForm
const suite = {
    export: Object.assign(exportMethod, exportMethod),
}

export default suite
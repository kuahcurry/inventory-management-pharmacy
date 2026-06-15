import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\ObatController::search
 * @see app/Http/Controllers/Api/ObatController.php:193
 * @route '/api/medicines/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

search.definition = {
    methods: ["get","head"],
    url: '/api/medicines/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ObatController::search
 * @see app/Http/Controllers/Api/ObatController.php:193
 * @route '/api/medicines/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ObatController::search
 * @see app/Http/Controllers/Api/ObatController.php:193
 * @route '/api/medicines/search'
 */
search.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\ObatController::search
 * @see app/Http/Controllers/Api/ObatController.php:193
 * @route '/api/medicines/search'
 */
search.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\ObatController::search
 * @see app/Http/Controllers/Api/ObatController.php:193
 * @route '/api/medicines/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: search.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\ObatController::search
 * @see app/Http/Controllers/Api/ObatController.php:193
 * @route '/api/medicines/search'
 */
        searchForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: search.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\ObatController::search
 * @see app/Http/Controllers/Api/ObatController.php:193
 * @route '/api/medicines/search'
 */
        searchForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: search.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    search.form = searchForm
const medicines = {
    search: Object.assign(search, search),
}

export default medicines
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\KategoriObatController::index
 * @see app/Http/Controllers/KategoriObatController.php:18
 * @route '/masterdata'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/masterdata',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KategoriObatController::index
 * @see app/Http/Controllers/KategoriObatController.php:18
 * @route '/masterdata'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KategoriObatController::index
 * @see app/Http/Controllers/KategoriObatController.php:18
 * @route '/masterdata'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\KategoriObatController::index
 * @see app/Http/Controllers/KategoriObatController.php:18
 * @route '/masterdata'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\KategoriObatController::index
 * @see app/Http/Controllers/KategoriObatController.php:18
 * @route '/masterdata'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\KategoriObatController::index
 * @see app/Http/Controllers/KategoriObatController.php:18
 * @route '/masterdata'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\KategoriObatController::index
 * @see app/Http/Controllers/KategoriObatController.php:18
 * @route '/masterdata'
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
const masterdata = {
    index: Object.assign(index, index),
}

export default masterdata
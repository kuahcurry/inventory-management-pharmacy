import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori-obat'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/kategori-obat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori-obat'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori-obat'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori-obat'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori-obat'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori-obat'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori-obat'
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
/**
* @see \App\Http\Controllers\Api\KategoriObatController::store
 * @see app/Http/Controllers/Api/KategoriObatController.php:62
 * @route '/api/kategori-obat'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/kategori-obat',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\KategoriObatController::store
 * @see app/Http/Controllers/Api/KategoriObatController.php:62
 * @route '/api/kategori-obat'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::store
 * @see app/Http/Controllers/Api/KategoriObatController.php:62
 * @route '/api/kategori-obat'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\KategoriObatController::store
 * @see app/Http/Controllers/Api/KategoriObatController.php:62
 * @route '/api/kategori-obat'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\KategoriObatController::store
 * @see app/Http/Controllers/Api/KategoriObatController.php:62
 * @route '/api/kategori-obat'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori-obat/{kategori_obat}'
 */
export const show = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/kategori-obat/{kategori_obat}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori-obat/{kategori_obat}'
 */
show.url = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kategori_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    kategori_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kategori_obat: args.kategori_obat,
                }

    return show.definition.url
            .replace('{kategori_obat}', parsedArgs.kategori_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori-obat/{kategori_obat}'
 */
show.get = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori-obat/{kategori_obat}'
 */
show.head = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori-obat/{kategori_obat}'
 */
    const showForm = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori-obat/{kategori_obat}'
 */
        showForm.get = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori-obat/{kategori_obat}'
 */
        showForm.head = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\Api\KategoriObatController::update
 * @see app/Http/Controllers/Api/KategoriObatController.php:99
 * @route '/api/kategori-obat/{kategori_obat}'
 */
export const update = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/kategori-obat/{kategori_obat}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\KategoriObatController::update
 * @see app/Http/Controllers/Api/KategoriObatController.php:99
 * @route '/api/kategori-obat/{kategori_obat}'
 */
update.url = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kategori_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    kategori_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kategori_obat: args.kategori_obat,
                }

    return update.definition.url
            .replace('{kategori_obat}', parsedArgs.kategori_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::update
 * @see app/Http/Controllers/Api/KategoriObatController.php:99
 * @route '/api/kategori-obat/{kategori_obat}'
 */
update.put = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\KategoriObatController::update
 * @see app/Http/Controllers/Api/KategoriObatController.php:99
 * @route '/api/kategori-obat/{kategori_obat}'
 */
update.patch = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\KategoriObatController::update
 * @see app/Http/Controllers/Api/KategoriObatController.php:99
 * @route '/api/kategori-obat/{kategori_obat}'
 */
    const updateForm = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\KategoriObatController::update
 * @see app/Http/Controllers/Api/KategoriObatController.php:99
 * @route '/api/kategori-obat/{kategori_obat}'
 */
        updateForm.put = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Api\KategoriObatController::update
 * @see app/Http/Controllers/Api/KategoriObatController.php:99
 * @route '/api/kategori-obat/{kategori_obat}'
 */
        updateForm.patch = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Api\KategoriObatController::destroy
 * @see app/Http/Controllers/Api/KategoriObatController.php:126
 * @route '/api/kategori-obat/{kategori_obat}'
 */
export const destroy = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/kategori-obat/{kategori_obat}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\KategoriObatController::destroy
 * @see app/Http/Controllers/Api/KategoriObatController.php:126
 * @route '/api/kategori-obat/{kategori_obat}'
 */
destroy.url = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kategori_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    kategori_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kategori_obat: args.kategori_obat,
                }

    return destroy.definition.url
            .replace('{kategori_obat}', parsedArgs.kategori_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::destroy
 * @see app/Http/Controllers/Api/KategoriObatController.php:126
 * @route '/api/kategori-obat/{kategori_obat}'
 */
destroy.delete = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\KategoriObatController::destroy
 * @see app/Http/Controllers/Api/KategoriObatController.php:126
 * @route '/api/kategori-obat/{kategori_obat}'
 */
    const destroyForm = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\KategoriObatController::destroy
 * @see app/Http/Controllers/Api/KategoriObatController.php:126
 * @route '/api/kategori-obat/{kategori_obat}'
 */
        destroyForm.delete = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const kategoriObat = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default kategoriObat
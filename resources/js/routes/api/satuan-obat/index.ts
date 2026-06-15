import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan-obat'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/satuan-obat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan-obat'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan-obat'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan-obat'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan-obat'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan-obat'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan-obat'
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
* @see \App\Http\Controllers\Api\SatuanObatController::store
 * @see app/Http/Controllers/Api/SatuanObatController.php:62
 * @route '/api/satuan-obat'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/satuan-obat',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\SatuanObatController::store
 * @see app/Http/Controllers/Api/SatuanObatController.php:62
 * @route '/api/satuan-obat'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::store
 * @see app/Http/Controllers/Api/SatuanObatController.php:62
 * @route '/api/satuan-obat'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\SatuanObatController::store
 * @see app/Http/Controllers/Api/SatuanObatController.php:62
 * @route '/api/satuan-obat'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\SatuanObatController::store
 * @see app/Http/Controllers/Api/SatuanObatController.php:62
 * @route '/api/satuan-obat'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan-obat/{satuan_obat}'
 */
export const show = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/satuan-obat/{satuan_obat}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan-obat/{satuan_obat}'
 */
show.url = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { satuan_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    satuan_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        satuan_obat: args.satuan_obat,
                }

    return show.definition.url
            .replace('{satuan_obat}', parsedArgs.satuan_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan-obat/{satuan_obat}'
 */
show.get = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan-obat/{satuan_obat}'
 */
show.head = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan-obat/{satuan_obat}'
 */
    const showForm = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan-obat/{satuan_obat}'
 */
        showForm.get = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan-obat/{satuan_obat}'
 */
        showForm.head = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Api\SatuanObatController::update
 * @see app/Http/Controllers/Api/SatuanObatController.php:99
 * @route '/api/satuan-obat/{satuan_obat}'
 */
export const update = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/satuan-obat/{satuan_obat}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\SatuanObatController::update
 * @see app/Http/Controllers/Api/SatuanObatController.php:99
 * @route '/api/satuan-obat/{satuan_obat}'
 */
update.url = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { satuan_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    satuan_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        satuan_obat: args.satuan_obat,
                }

    return update.definition.url
            .replace('{satuan_obat}', parsedArgs.satuan_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::update
 * @see app/Http/Controllers/Api/SatuanObatController.php:99
 * @route '/api/satuan-obat/{satuan_obat}'
 */
update.put = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\SatuanObatController::update
 * @see app/Http/Controllers/Api/SatuanObatController.php:99
 * @route '/api/satuan-obat/{satuan_obat}'
 */
update.patch = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\SatuanObatController::update
 * @see app/Http/Controllers/Api/SatuanObatController.php:99
 * @route '/api/satuan-obat/{satuan_obat}'
 */
    const updateForm = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\SatuanObatController::update
 * @see app/Http/Controllers/Api/SatuanObatController.php:99
 * @route '/api/satuan-obat/{satuan_obat}'
 */
        updateForm.put = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Api\SatuanObatController::update
 * @see app/Http/Controllers/Api/SatuanObatController.php:99
 * @route '/api/satuan-obat/{satuan_obat}'
 */
        updateForm.patch = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\SatuanObatController::destroy
 * @see app/Http/Controllers/Api/SatuanObatController.php:126
 * @route '/api/satuan-obat/{satuan_obat}'
 */
export const destroy = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/satuan-obat/{satuan_obat}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\SatuanObatController::destroy
 * @see app/Http/Controllers/Api/SatuanObatController.php:126
 * @route '/api/satuan-obat/{satuan_obat}'
 */
destroy.url = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { satuan_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    satuan_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        satuan_obat: args.satuan_obat,
                }

    return destroy.definition.url
            .replace('{satuan_obat}', parsedArgs.satuan_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::destroy
 * @see app/Http/Controllers/Api/SatuanObatController.php:126
 * @route '/api/satuan-obat/{satuan_obat}'
 */
destroy.delete = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\SatuanObatController::destroy
 * @see app/Http/Controllers/Api/SatuanObatController.php:126
 * @route '/api/satuan-obat/{satuan_obat}'
 */
    const destroyForm = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\SatuanObatController::destroy
 * @see app/Http/Controllers/Api/SatuanObatController.php:126
 * @route '/api/satuan-obat/{satuan_obat}'
 */
        destroyForm.delete = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const satuanObat = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default satuanObat
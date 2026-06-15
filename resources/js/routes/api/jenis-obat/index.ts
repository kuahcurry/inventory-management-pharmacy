import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis-obat'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/jenis-obat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis-obat'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis-obat'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis-obat'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis-obat'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis-obat'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis-obat'
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
* @see \App\Http\Controllers\Api\JenisObatController::store
 * @see app/Http/Controllers/Api/JenisObatController.php:62
 * @route '/api/jenis-obat'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/jenis-obat',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\JenisObatController::store
 * @see app/Http/Controllers/Api/JenisObatController.php:62
 * @route '/api/jenis-obat'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::store
 * @see app/Http/Controllers/Api/JenisObatController.php:62
 * @route '/api/jenis-obat'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\JenisObatController::store
 * @see app/Http/Controllers/Api/JenisObatController.php:62
 * @route '/api/jenis-obat'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\JenisObatController::store
 * @see app/Http/Controllers/Api/JenisObatController.php:62
 * @route '/api/jenis-obat'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis-obat/{jenis_obat}'
 */
export const show = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/jenis-obat/{jenis_obat}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis-obat/{jenis_obat}'
 */
show.url = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jenis_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    jenis_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        jenis_obat: args.jenis_obat,
                }

    return show.definition.url
            .replace('{jenis_obat}', parsedArgs.jenis_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis-obat/{jenis_obat}'
 */
show.get = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis-obat/{jenis_obat}'
 */
show.head = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis-obat/{jenis_obat}'
 */
    const showForm = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis-obat/{jenis_obat}'
 */
        showForm.get = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis-obat/{jenis_obat}'
 */
        showForm.head = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Api\JenisObatController::update
 * @see app/Http/Controllers/Api/JenisObatController.php:99
 * @route '/api/jenis-obat/{jenis_obat}'
 */
export const update = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/jenis-obat/{jenis_obat}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\JenisObatController::update
 * @see app/Http/Controllers/Api/JenisObatController.php:99
 * @route '/api/jenis-obat/{jenis_obat}'
 */
update.url = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jenis_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    jenis_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        jenis_obat: args.jenis_obat,
                }

    return update.definition.url
            .replace('{jenis_obat}', parsedArgs.jenis_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::update
 * @see app/Http/Controllers/Api/JenisObatController.php:99
 * @route '/api/jenis-obat/{jenis_obat}'
 */
update.put = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\JenisObatController::update
 * @see app/Http/Controllers/Api/JenisObatController.php:99
 * @route '/api/jenis-obat/{jenis_obat}'
 */
update.patch = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\JenisObatController::update
 * @see app/Http/Controllers/Api/JenisObatController.php:99
 * @route '/api/jenis-obat/{jenis_obat}'
 */
    const updateForm = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\JenisObatController::update
 * @see app/Http/Controllers/Api/JenisObatController.php:99
 * @route '/api/jenis-obat/{jenis_obat}'
 */
        updateForm.put = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Api\JenisObatController::update
 * @see app/Http/Controllers/Api/JenisObatController.php:99
 * @route '/api/jenis-obat/{jenis_obat}'
 */
        updateForm.patch = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\JenisObatController::destroy
 * @see app/Http/Controllers/Api/JenisObatController.php:126
 * @route '/api/jenis-obat/{jenis_obat}'
 */
export const destroy = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/jenis-obat/{jenis_obat}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\JenisObatController::destroy
 * @see app/Http/Controllers/Api/JenisObatController.php:126
 * @route '/api/jenis-obat/{jenis_obat}'
 */
destroy.url = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jenis_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    jenis_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        jenis_obat: args.jenis_obat,
                }

    return destroy.definition.url
            .replace('{jenis_obat}', parsedArgs.jenis_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::destroy
 * @see app/Http/Controllers/Api/JenisObatController.php:126
 * @route '/api/jenis-obat/{jenis_obat}'
 */
destroy.delete = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\JenisObatController::destroy
 * @see app/Http/Controllers/Api/JenisObatController.php:126
 * @route '/api/jenis-obat/{jenis_obat}'
 */
    const destroyForm = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\JenisObatController::destroy
 * @see app/Http/Controllers/Api/JenisObatController.php:126
 * @route '/api/jenis-obat/{jenis_obat}'
 */
        destroyForm.delete = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const jenisObat = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default jenisObat
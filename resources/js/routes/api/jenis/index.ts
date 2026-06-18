import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\JenisObatController::active
 * @see app/Http/Controllers/Api/JenisObatController.php:50
 * @route '/api/jenis/active'
 */
export const active = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: active.url(options),
    method: 'get',
})

active.definition = {
    methods: ["get","head"],
    url: '/api/jenis/active',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\JenisObatController::active
 * @see app/Http/Controllers/Api/JenisObatController.php:50
 * @route '/api/jenis/active'
 */
active.url = (options?: RouteQueryOptions) => {
    return active.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::active
 * @see app/Http/Controllers/Api/JenisObatController.php:50
 * @route '/api/jenis/active'
 */
active.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: active.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\JenisObatController::active
 * @see app/Http/Controllers/Api/JenisObatController.php:50
 * @route '/api/jenis/active'
 */
active.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: active.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\JenisObatController::active
 * @see app/Http/Controllers/Api/JenisObatController.php:50
 * @route '/api/jenis/active'
 */
    const activeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: active.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\JenisObatController::active
 * @see app/Http/Controllers/Api/JenisObatController.php:50
 * @route '/api/jenis/active'
 */
        activeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: active.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\JenisObatController::active
 * @see app/Http/Controllers/Api/JenisObatController.php:50
 * @route '/api/jenis/active'
 */
        activeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: active.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    active.form = activeForm
/**
* @see \App\Http\Controllers\Api\JenisObatController::toggleStatus
 * @see app/Http/Controllers/Api/JenisObatController.php:145
 * @route '/api/jenis/{jenisObat}/toggle-status'
 */
export const toggleStatus = (args: { jenisObat: number | { id: number } } | [jenisObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

toggleStatus.definition = {
    methods: ["post"],
    url: '/api/jenis/{jenisObat}/toggle-status',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\JenisObatController::toggleStatus
 * @see app/Http/Controllers/Api/JenisObatController.php:145
 * @route '/api/jenis/{jenisObat}/toggle-status'
 */
toggleStatus.url = (args: { jenisObat: number | { id: number } } | [jenisObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jenisObat: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { jenisObat: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    jenisObat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        jenisObat: typeof args.jenisObat === 'object'
                ? args.jenisObat.id
                : args.jenisObat,
                }

    return toggleStatus.definition.url
            .replace('{jenisObat}', parsedArgs.jenisObat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::toggleStatus
 * @see app/Http/Controllers/Api/JenisObatController.php:145
 * @route '/api/jenis/{jenisObat}/toggle-status'
 */
toggleStatus.post = (args: { jenisObat: number | { id: number } } | [jenisObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\JenisObatController::toggleStatus
 * @see app/Http/Controllers/Api/JenisObatController.php:145
 * @route '/api/jenis/{jenisObat}/toggle-status'
 */
    const toggleStatusForm = (args: { jenisObat: number | { id: number } } | [jenisObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggleStatus.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\JenisObatController::toggleStatus
 * @see app/Http/Controllers/Api/JenisObatController.php:145
 * @route '/api/jenis/{jenisObat}/toggle-status'
 */
        toggleStatusForm.post = (args: { jenisObat: number | { id: number } } | [jenisObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggleStatus.url(args, options),
            method: 'post',
        })
    
    toggleStatus.form = toggleStatusForm
/**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/jenis',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis'
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
 * @route '/api/jenis'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/jenis',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\JenisObatController::store
 * @see app/Http/Controllers/Api/JenisObatController.php:62
 * @route '/api/jenis'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::store
 * @see app/Http/Controllers/Api/JenisObatController.php:62
 * @route '/api/jenis'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\JenisObatController::store
 * @see app/Http/Controllers/Api/JenisObatController.php:62
 * @route '/api/jenis'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\JenisObatController::store
 * @see app/Http/Controllers/Api/JenisObatController.php:62
 * @route '/api/jenis'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis/{jeni}'
 */
export const show = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/jenis/{jeni}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis/{jeni}'
 */
show.url = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jeni: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    jeni: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        jeni: args.jeni,
                }

    return show.definition.url
            .replace('{jeni}', parsedArgs.jeni.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis/{jeni}'
 */
show.get = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis/{jeni}'
 */
show.head = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis/{jeni}'
 */
    const showForm = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis/{jeni}'
 */
        showForm.get = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis/{jeni}'
 */
        showForm.head = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
 * @route '/api/jenis/{jeni}'
 */
export const update = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/jenis/{jeni}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\JenisObatController::update
 * @see app/Http/Controllers/Api/JenisObatController.php:99
 * @route '/api/jenis/{jeni}'
 */
update.url = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jeni: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    jeni: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        jeni: args.jeni,
                }

    return update.definition.url
            .replace('{jeni}', parsedArgs.jeni.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::update
 * @see app/Http/Controllers/Api/JenisObatController.php:99
 * @route '/api/jenis/{jeni}'
 */
update.put = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\JenisObatController::update
 * @see app/Http/Controllers/Api/JenisObatController.php:99
 * @route '/api/jenis/{jeni}'
 */
update.patch = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\JenisObatController::update
 * @see app/Http/Controllers/Api/JenisObatController.php:99
 * @route '/api/jenis/{jeni}'
 */
    const updateForm = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '/api/jenis/{jeni}'
 */
        updateForm.put = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '/api/jenis/{jeni}'
 */
        updateForm.patch = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '/api/jenis/{jeni}'
 */
export const destroy = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/jenis/{jeni}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\JenisObatController::destroy
 * @see app/Http/Controllers/Api/JenisObatController.php:126
 * @route '/api/jenis/{jeni}'
 */
destroy.url = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jeni: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    jeni: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        jeni: args.jeni,
                }

    return destroy.definition.url
            .replace('{jeni}', parsedArgs.jeni.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::destroy
 * @see app/Http/Controllers/Api/JenisObatController.php:126
 * @route '/api/jenis/{jeni}'
 */
destroy.delete = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\JenisObatController::destroy
 * @see app/Http/Controllers/Api/JenisObatController.php:126
 * @route '/api/jenis/{jeni}'
 */
    const destroyForm = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '/api/jenis/{jeni}'
 */
        destroyForm.delete = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const jenis = {
    active: Object.assign(active, active),
toggleStatus: Object.assign(toggleStatus, toggleStatus),
index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default jenis
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\KategoriObatController::active
 * @see app/Http/Controllers/Api/KategoriObatController.php:50
 * @route '/api/kategori/active'
 */
export const active = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: active.url(options),
    method: 'get',
})

active.definition = {
    methods: ["get","head"],
    url: '/api/kategori/active',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\KategoriObatController::active
 * @see app/Http/Controllers/Api/KategoriObatController.php:50
 * @route '/api/kategori/active'
 */
active.url = (options?: RouteQueryOptions) => {
    return active.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::active
 * @see app/Http/Controllers/Api/KategoriObatController.php:50
 * @route '/api/kategori/active'
 */
active.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: active.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\KategoriObatController::active
 * @see app/Http/Controllers/Api/KategoriObatController.php:50
 * @route '/api/kategori/active'
 */
active.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: active.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\KategoriObatController::active
 * @see app/Http/Controllers/Api/KategoriObatController.php:50
 * @route '/api/kategori/active'
 */
    const activeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: active.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\KategoriObatController::active
 * @see app/Http/Controllers/Api/KategoriObatController.php:50
 * @route '/api/kategori/active'
 */
        activeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: active.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\KategoriObatController::active
 * @see app/Http/Controllers/Api/KategoriObatController.php:50
 * @route '/api/kategori/active'
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
* @see \App\Http\Controllers\Api\KategoriObatController::toggleStatus
 * @see app/Http/Controllers/Api/KategoriObatController.php:145
 * @route '/api/kategori/{kategoriObat}/toggle-status'
 */
export const toggleStatus = (args: { kategoriObat: string | number | { id: string | number } } | [kategoriObat: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

toggleStatus.definition = {
    methods: ["post"],
    url: '/api/kategori/{kategoriObat}/toggle-status',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\KategoriObatController::toggleStatus
 * @see app/Http/Controllers/Api/KategoriObatController.php:145
 * @route '/api/kategori/{kategoriObat}/toggle-status'
 */
toggleStatus.url = (args: { kategoriObat: string | number | { id: string | number } } | [kategoriObat: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kategoriObat: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { kategoriObat: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    kategoriObat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kategoriObat: typeof args.kategoriObat === 'object'
                ? args.kategoriObat.id
                : args.kategoriObat,
                }

    return toggleStatus.definition.url
            .replace('{kategoriObat}', parsedArgs.kategoriObat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::toggleStatus
 * @see app/Http/Controllers/Api/KategoriObatController.php:145
 * @route '/api/kategori/{kategoriObat}/toggle-status'
 */
toggleStatus.post = (args: { kategoriObat: string | number | { id: string | number } } | [kategoriObat: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\KategoriObatController::toggleStatus
 * @see app/Http/Controllers/Api/KategoriObatController.php:145
 * @route '/api/kategori/{kategoriObat}/toggle-status'
 */
    const toggleStatusForm = (args: { kategoriObat: string | number | { id: string | number } } | [kategoriObat: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggleStatus.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\KategoriObatController::toggleStatus
 * @see app/Http/Controllers/Api/KategoriObatController.php:145
 * @route '/api/kategori/{kategoriObat}/toggle-status'
 */
        toggleStatusForm.post = (args: { kategoriObat: string | number | { id: string | number } } | [kategoriObat: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggleStatus.url(args, options),
            method: 'post',
        })
    
    toggleStatus.form = toggleStatusForm
/**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/kategori',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori'
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
 * @route '/api/kategori'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/kategori',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\KategoriObatController::store
 * @see app/Http/Controllers/Api/KategoriObatController.php:62
 * @route '/api/kategori'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::store
 * @see app/Http/Controllers/Api/KategoriObatController.php:62
 * @route '/api/kategori'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\KategoriObatController::store
 * @see app/Http/Controllers/Api/KategoriObatController.php:62
 * @route '/api/kategori'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\KategoriObatController::store
 * @see app/Http/Controllers/Api/KategoriObatController.php:62
 * @route '/api/kategori'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori/{kategori}'
 */
export const show = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/kategori/{kategori}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori/{kategori}'
 */
show.url = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kategori: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    kategori: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kategori: args.kategori,
                }

    return show.definition.url
            .replace('{kategori}', parsedArgs.kategori.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori/{kategori}'
 */
show.get = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori/{kategori}'
 */
show.head = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori/{kategori}'
 */
    const showForm = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori/{kategori}'
 */
        showForm.get = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori/{kategori}'
 */
        showForm.head = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
 * @route '/api/kategori/{kategori}'
 */
export const update = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/kategori/{kategori}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\KategoriObatController::update
 * @see app/Http/Controllers/Api/KategoriObatController.php:99
 * @route '/api/kategori/{kategori}'
 */
update.url = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kategori: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    kategori: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kategori: args.kategori,
                }

    return update.definition.url
            .replace('{kategori}', parsedArgs.kategori.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::update
 * @see app/Http/Controllers/Api/KategoriObatController.php:99
 * @route '/api/kategori/{kategori}'
 */
update.put = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\KategoriObatController::update
 * @see app/Http/Controllers/Api/KategoriObatController.php:99
 * @route '/api/kategori/{kategori}'
 */
update.patch = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\KategoriObatController::update
 * @see app/Http/Controllers/Api/KategoriObatController.php:99
 * @route '/api/kategori/{kategori}'
 */
    const updateForm = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '/api/kategori/{kategori}'
 */
        updateForm.put = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '/api/kategori/{kategori}'
 */
        updateForm.patch = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '/api/kategori/{kategori}'
 */
export const destroy = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/kategori/{kategori}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\KategoriObatController::destroy
 * @see app/Http/Controllers/Api/KategoriObatController.php:126
 * @route '/api/kategori/{kategori}'
 */
destroy.url = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kategori: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    kategori: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kategori: args.kategori,
                }

    return destroy.definition.url
            .replace('{kategori}', parsedArgs.kategori.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::destroy
 * @see app/Http/Controllers/Api/KategoriObatController.php:126
 * @route '/api/kategori/{kategori}'
 */
destroy.delete = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\KategoriObatController::destroy
 * @see app/Http/Controllers/Api/KategoriObatController.php:126
 * @route '/api/kategori/{kategori}'
 */
    const destroyForm = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '/api/kategori/{kategori}'
 */
        destroyForm.delete = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const kategori = {
    active: Object.assign(active, active),
toggleStatus: Object.assign(toggleStatus, toggleStatus),
index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default kategori
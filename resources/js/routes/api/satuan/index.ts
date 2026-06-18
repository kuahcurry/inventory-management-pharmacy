import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\SatuanObatController::active
 * @see app/Http/Controllers/Api/SatuanObatController.php:50
 * @route '/api/satuan/active'
 */
export const active = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: active.url(options),
    method: 'get',
})

active.definition = {
    methods: ["get","head"],
    url: '/api/satuan/active',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SatuanObatController::active
 * @see app/Http/Controllers/Api/SatuanObatController.php:50
 * @route '/api/satuan/active'
 */
active.url = (options?: RouteQueryOptions) => {
    return active.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::active
 * @see app/Http/Controllers/Api/SatuanObatController.php:50
 * @route '/api/satuan/active'
 */
active.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: active.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\SatuanObatController::active
 * @see app/Http/Controllers/Api/SatuanObatController.php:50
 * @route '/api/satuan/active'
 */
active.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: active.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\SatuanObatController::active
 * @see app/Http/Controllers/Api/SatuanObatController.php:50
 * @route '/api/satuan/active'
 */
    const activeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: active.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\SatuanObatController::active
 * @see app/Http/Controllers/Api/SatuanObatController.php:50
 * @route '/api/satuan/active'
 */
        activeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: active.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\SatuanObatController::active
 * @see app/Http/Controllers/Api/SatuanObatController.php:50
 * @route '/api/satuan/active'
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
* @see \App\Http\Controllers\Api\SatuanObatController::toggleStatus
 * @see app/Http/Controllers/Api/SatuanObatController.php:145
 * @route '/api/satuan/{satuanObat}/toggle-status'
 */
export const toggleStatus = (args: { satuanObat: number | { id: number } } | [satuanObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

toggleStatus.definition = {
    methods: ["post"],
    url: '/api/satuan/{satuanObat}/toggle-status',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\SatuanObatController::toggleStatus
 * @see app/Http/Controllers/Api/SatuanObatController.php:145
 * @route '/api/satuan/{satuanObat}/toggle-status'
 */
toggleStatus.url = (args: { satuanObat: number | { id: number } } | [satuanObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { satuanObat: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { satuanObat: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    satuanObat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        satuanObat: typeof args.satuanObat === 'object'
                ? args.satuanObat.id
                : args.satuanObat,
                }

    return toggleStatus.definition.url
            .replace('{satuanObat}', parsedArgs.satuanObat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::toggleStatus
 * @see app/Http/Controllers/Api/SatuanObatController.php:145
 * @route '/api/satuan/{satuanObat}/toggle-status'
 */
toggleStatus.post = (args: { satuanObat: number | { id: number } } | [satuanObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\SatuanObatController::toggleStatus
 * @see app/Http/Controllers/Api/SatuanObatController.php:145
 * @route '/api/satuan/{satuanObat}/toggle-status'
 */
    const toggleStatusForm = (args: { satuanObat: number | { id: number } } | [satuanObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggleStatus.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\SatuanObatController::toggleStatus
 * @see app/Http/Controllers/Api/SatuanObatController.php:145
 * @route '/api/satuan/{satuanObat}/toggle-status'
 */
        toggleStatusForm.post = (args: { satuanObat: number | { id: number } } | [satuanObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggleStatus.url(args, options),
            method: 'post',
        })
    
    toggleStatus.form = toggleStatusForm
/**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/satuan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan'
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
 * @route '/api/satuan'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/satuan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\SatuanObatController::store
 * @see app/Http/Controllers/Api/SatuanObatController.php:62
 * @route '/api/satuan'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::store
 * @see app/Http/Controllers/Api/SatuanObatController.php:62
 * @route '/api/satuan'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\SatuanObatController::store
 * @see app/Http/Controllers/Api/SatuanObatController.php:62
 * @route '/api/satuan'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\SatuanObatController::store
 * @see app/Http/Controllers/Api/SatuanObatController.php:62
 * @route '/api/satuan'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan/{satuan}'
 */
export const show = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/satuan/{satuan}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan/{satuan}'
 */
show.url = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { satuan: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    satuan: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        satuan: args.satuan,
                }

    return show.definition.url
            .replace('{satuan}', parsedArgs.satuan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan/{satuan}'
 */
show.get = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan/{satuan}'
 */
show.head = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan/{satuan}'
 */
    const showForm = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan/{satuan}'
 */
        showForm.get = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan/{satuan}'
 */
        showForm.head = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
 * @route '/api/satuan/{satuan}'
 */
export const update = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/satuan/{satuan}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\SatuanObatController::update
 * @see app/Http/Controllers/Api/SatuanObatController.php:99
 * @route '/api/satuan/{satuan}'
 */
update.url = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { satuan: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    satuan: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        satuan: args.satuan,
                }

    return update.definition.url
            .replace('{satuan}', parsedArgs.satuan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::update
 * @see app/Http/Controllers/Api/SatuanObatController.php:99
 * @route '/api/satuan/{satuan}'
 */
update.put = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\SatuanObatController::update
 * @see app/Http/Controllers/Api/SatuanObatController.php:99
 * @route '/api/satuan/{satuan}'
 */
update.patch = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\SatuanObatController::update
 * @see app/Http/Controllers/Api/SatuanObatController.php:99
 * @route '/api/satuan/{satuan}'
 */
    const updateForm = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '/api/satuan/{satuan}'
 */
        updateForm.put = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '/api/satuan/{satuan}'
 */
        updateForm.patch = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '/api/satuan/{satuan}'
 */
export const destroy = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/satuan/{satuan}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\SatuanObatController::destroy
 * @see app/Http/Controllers/Api/SatuanObatController.php:126
 * @route '/api/satuan/{satuan}'
 */
destroy.url = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { satuan: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    satuan: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        satuan: args.satuan,
                }

    return destroy.definition.url
            .replace('{satuan}', parsedArgs.satuan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::destroy
 * @see app/Http/Controllers/Api/SatuanObatController.php:126
 * @route '/api/satuan/{satuan}'
 */
destroy.delete = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\SatuanObatController::destroy
 * @see app/Http/Controllers/Api/SatuanObatController.php:126
 * @route '/api/satuan/{satuan}'
 */
    const destroyForm = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @route '/api/satuan/{satuan}'
 */
        destroyForm.delete = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const satuan = {
    active: Object.assign(active, active),
toggleStatus: Object.assign(toggleStatus, toggleStatus),
index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default satuan
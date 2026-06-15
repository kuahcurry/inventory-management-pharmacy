import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::active
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:54
 * @route '/api/unit/active'
 */
export const active = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: active.url(options),
    method: 'get',
})

active.definition = {
    methods: ["get","head"],
    url: '/api/unit/active',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::active
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:54
 * @route '/api/unit/active'
 */
active.url = (options?: RouteQueryOptions) => {
    return active.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::active
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:54
 * @route '/api/unit/active'
 */
active.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: active.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::active
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:54
 * @route '/api/unit/active'
 */
active.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: active.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::active
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:54
 * @route '/api/unit/active'
 */
    const activeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: active.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::active
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:54
 * @route '/api/unit/active'
 */
        activeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: active.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::active
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:54
 * @route '/api/unit/active'
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
* @see \App\Http\Controllers\Api\UnitRumahSakitController::statistics
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:184
 * @route '/api/unit/{unitRumahSakit}/statistics'
 */
export const statistics = (args: { unitRumahSakit: number | { id: number } } | [unitRumahSakit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: statistics.url(args, options),
    method: 'get',
})

statistics.definition = {
    methods: ["get","head"],
    url: '/api/unit/{unitRumahSakit}/statistics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::statistics
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:184
 * @route '/api/unit/{unitRumahSakit}/statistics'
 */
statistics.url = (args: { unitRumahSakit: number | { id: number } } | [unitRumahSakit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { unitRumahSakit: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { unitRumahSakit: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    unitRumahSakit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        unitRumahSakit: typeof args.unitRumahSakit === 'object'
                ? args.unitRumahSakit.id
                : args.unitRumahSakit,
                }

    return statistics.definition.url
            .replace('{unitRumahSakit}', parsedArgs.unitRumahSakit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::statistics
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:184
 * @route '/api/unit/{unitRumahSakit}/statistics'
 */
statistics.get = (args: { unitRumahSakit: number | { id: number } } | [unitRumahSakit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: statistics.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::statistics
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:184
 * @route '/api/unit/{unitRumahSakit}/statistics'
 */
statistics.head = (args: { unitRumahSakit: number | { id: number } } | [unitRumahSakit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: statistics.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::statistics
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:184
 * @route '/api/unit/{unitRumahSakit}/statistics'
 */
    const statisticsForm = (args: { unitRumahSakit: number | { id: number } } | [unitRumahSakit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: statistics.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::statistics
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:184
 * @route '/api/unit/{unitRumahSakit}/statistics'
 */
        statisticsForm.get = (args: { unitRumahSakit: number | { id: number } } | [unitRumahSakit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: statistics.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::statistics
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:184
 * @route '/api/unit/{unitRumahSakit}/statistics'
 */
        statisticsForm.head = (args: { unitRumahSakit: number | { id: number } } | [unitRumahSakit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: statistics.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    statistics.form = statisticsForm
/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::toggleStatus
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:169
 * @route '/api/unit/{unitRumahSakit}/toggle-status'
 */
export const toggleStatus = (args: { unitRumahSakit: number | { id: number } } | [unitRumahSakit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

toggleStatus.definition = {
    methods: ["post"],
    url: '/api/unit/{unitRumahSakit}/toggle-status',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::toggleStatus
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:169
 * @route '/api/unit/{unitRumahSakit}/toggle-status'
 */
toggleStatus.url = (args: { unitRumahSakit: number | { id: number } } | [unitRumahSakit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { unitRumahSakit: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { unitRumahSakit: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    unitRumahSakit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        unitRumahSakit: typeof args.unitRumahSakit === 'object'
                ? args.unitRumahSakit.id
                : args.unitRumahSakit,
                }

    return toggleStatus.definition.url
            .replace('{unitRumahSakit}', parsedArgs.unitRumahSakit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::toggleStatus
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:169
 * @route '/api/unit/{unitRumahSakit}/toggle-status'
 */
toggleStatus.post = (args: { unitRumahSakit: number | { id: number } } | [unitRumahSakit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::toggleStatus
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:169
 * @route '/api/unit/{unitRumahSakit}/toggle-status'
 */
    const toggleStatusForm = (args: { unitRumahSakit: number | { id: number } } | [unitRumahSakit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggleStatus.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::toggleStatus
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:169
 * @route '/api/unit/{unitRumahSakit}/toggle-status'
 */
        toggleStatusForm.post = (args: { unitRumahSakit: number | { id: number } } | [unitRumahSakit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggleStatus.url(args, options),
            method: 'post',
        })
    
    toggleStatus.form = toggleStatusForm
/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::index
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:16
 * @route '/api/unit'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/unit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::index
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:16
 * @route '/api/unit'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::index
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:16
 * @route '/api/unit'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::index
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:16
 * @route '/api/unit'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::index
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:16
 * @route '/api/unit'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::index
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:16
 * @route '/api/unit'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::index
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:16
 * @route '/api/unit'
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
* @see \App\Http\Controllers\Api\UnitRumahSakitController::store
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:66
 * @route '/api/unit'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/unit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::store
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:66
 * @route '/api/unit'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::store
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:66
 * @route '/api/unit'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::store
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:66
 * @route '/api/unit'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::store
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:66
 * @route '/api/unit'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::show
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:104
 * @route '/api/unit/{unit}'
 */
export const show = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/unit/{unit}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::show
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:104
 * @route '/api/unit/{unit}'
 */
show.url = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { unit: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    unit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        unit: args.unit,
                }

    return show.definition.url
            .replace('{unit}', parsedArgs.unit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::show
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:104
 * @route '/api/unit/{unit}'
 */
show.get = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::show
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:104
 * @route '/api/unit/{unit}'
 */
show.head = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::show
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:104
 * @route '/api/unit/{unit}'
 */
    const showForm = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::show
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:104
 * @route '/api/unit/{unit}'
 */
        showForm.get = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::show
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:104
 * @route '/api/unit/{unit}'
 */
        showForm.head = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Api\UnitRumahSakitController::update
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:112
 * @route '/api/unit/{unit}'
 */
export const update = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/unit/{unit}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::update
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:112
 * @route '/api/unit/{unit}'
 */
update.url = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { unit: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    unit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        unit: args.unit,
                }

    return update.definition.url
            .replace('{unit}', parsedArgs.unit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::update
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:112
 * @route '/api/unit/{unit}'
 */
update.put = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::update
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:112
 * @route '/api/unit/{unit}'
 */
update.patch = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::update
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:112
 * @route '/api/unit/{unit}'
 */
    const updateForm = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::update
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:112
 * @route '/api/unit/{unit}'
 */
        updateForm.put = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::update
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:112
 * @route '/api/unit/{unit}'
 */
        updateForm.patch = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\UnitRumahSakitController::destroy
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:150
 * @route '/api/unit/{unit}'
 */
export const destroy = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/unit/{unit}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::destroy
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:150
 * @route '/api/unit/{unit}'
 */
destroy.url = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { unit: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    unit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        unit: args.unit,
                }

    return destroy.definition.url
            .replace('{unit}', parsedArgs.unit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::destroy
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:150
 * @route '/api/unit/{unit}'
 */
destroy.delete = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::destroy
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:150
 * @route '/api/unit/{unit}'
 */
    const destroyForm = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::destroy
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:150
 * @route '/api/unit/{unit}'
 */
        destroyForm.delete = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const unit = {
    active: Object.assign(active, active),
statistics: Object.assign(statistics, statistics),
toggleStatus: Object.assign(toggleStatus, toggleStatus),
index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default unit
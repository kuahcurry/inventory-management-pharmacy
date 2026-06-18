import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\SupplierController::active
 * @see app/Http/Controllers/Api/SupplierController.php:56
 * @route '/api/supplier/active'
 */
export const active = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: active.url(options),
    method: 'get',
})

active.definition = {
    methods: ["get","head"],
    url: '/api/supplier/active',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SupplierController::active
 * @see app/Http/Controllers/Api/SupplierController.php:56
 * @route '/api/supplier/active'
 */
active.url = (options?: RouteQueryOptions) => {
    return active.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SupplierController::active
 * @see app/Http/Controllers/Api/SupplierController.php:56
 * @route '/api/supplier/active'
 */
active.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: active.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\SupplierController::active
 * @see app/Http/Controllers/Api/SupplierController.php:56
 * @route '/api/supplier/active'
 */
active.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: active.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\SupplierController::active
 * @see app/Http/Controllers/Api/SupplierController.php:56
 * @route '/api/supplier/active'
 */
    const activeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: active.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\SupplierController::active
 * @see app/Http/Controllers/Api/SupplierController.php:56
 * @route '/api/supplier/active'
 */
        activeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: active.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\SupplierController::active
 * @see app/Http/Controllers/Api/SupplierController.php:56
 * @route '/api/supplier/active'
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
* @see \App\Http\Controllers\Api\SupplierController::search
 * @see app/Http/Controllers/Api/SupplierController.php:65
 * @route '/api/supplier/search'
 */
const search3160da71f4e05fccf1436468eb68f6fc = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search3160da71f4e05fccf1436468eb68f6fc.url(options),
    method: 'get',
})

search3160da71f4e05fccf1436468eb68f6fc.definition = {
    methods: ["get","head"],
    url: '/api/supplier/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SupplierController::search
 * @see app/Http/Controllers/Api/SupplierController.php:65
 * @route '/api/supplier/search'
 */
search3160da71f4e05fccf1436468eb68f6fc.url = (options?: RouteQueryOptions) => {
    return search3160da71f4e05fccf1436468eb68f6fc.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SupplierController::search
 * @see app/Http/Controllers/Api/SupplierController.php:65
 * @route '/api/supplier/search'
 */
search3160da71f4e05fccf1436468eb68f6fc.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search3160da71f4e05fccf1436468eb68f6fc.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\SupplierController::search
 * @see app/Http/Controllers/Api/SupplierController.php:65
 * @route '/api/supplier/search'
 */
search3160da71f4e05fccf1436468eb68f6fc.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search3160da71f4e05fccf1436468eb68f6fc.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\SupplierController::search
 * @see app/Http/Controllers/Api/SupplierController.php:65
 * @route '/api/supplier/search'
 */
    const search3160da71f4e05fccf1436468eb68f6fcForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: search3160da71f4e05fccf1436468eb68f6fc.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\SupplierController::search
 * @see app/Http/Controllers/Api/SupplierController.php:65
 * @route '/api/supplier/search'
 */
        search3160da71f4e05fccf1436468eb68f6fcForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: search3160da71f4e05fccf1436468eb68f6fc.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\SupplierController::search
 * @see app/Http/Controllers/Api/SupplierController.php:65
 * @route '/api/supplier/search'
 */
        search3160da71f4e05fccf1436468eb68f6fcForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: search3160da71f4e05fccf1436468eb68f6fc.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    search3160da71f4e05fccf1436468eb68f6fc.form = search3160da71f4e05fccf1436468eb68f6fcForm
    /**
* @see \App\Http\Controllers\Api\SupplierController::search
 * @see app/Http/Controllers/Api/SupplierController.php:65
 * @route '/api/suppliers/search'
 */
const search87473a3ee9cf566204331f009ab0a818 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search87473a3ee9cf566204331f009ab0a818.url(options),
    method: 'get',
})

search87473a3ee9cf566204331f009ab0a818.definition = {
    methods: ["get","head"],
    url: '/api/suppliers/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SupplierController::search
 * @see app/Http/Controllers/Api/SupplierController.php:65
 * @route '/api/suppliers/search'
 */
search87473a3ee9cf566204331f009ab0a818.url = (options?: RouteQueryOptions) => {
    return search87473a3ee9cf566204331f009ab0a818.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SupplierController::search
 * @see app/Http/Controllers/Api/SupplierController.php:65
 * @route '/api/suppliers/search'
 */
search87473a3ee9cf566204331f009ab0a818.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search87473a3ee9cf566204331f009ab0a818.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\SupplierController::search
 * @see app/Http/Controllers/Api/SupplierController.php:65
 * @route '/api/suppliers/search'
 */
search87473a3ee9cf566204331f009ab0a818.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search87473a3ee9cf566204331f009ab0a818.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\SupplierController::search
 * @see app/Http/Controllers/Api/SupplierController.php:65
 * @route '/api/suppliers/search'
 */
    const search87473a3ee9cf566204331f009ab0a818Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: search87473a3ee9cf566204331f009ab0a818.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\SupplierController::search
 * @see app/Http/Controllers/Api/SupplierController.php:65
 * @route '/api/suppliers/search'
 */
        search87473a3ee9cf566204331f009ab0a818Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: search87473a3ee9cf566204331f009ab0a818.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\SupplierController::search
 * @see app/Http/Controllers/Api/SupplierController.php:65
 * @route '/api/suppliers/search'
 */
        search87473a3ee9cf566204331f009ab0a818Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: search87473a3ee9cf566204331f009ab0a818.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    search87473a3ee9cf566204331f009ab0a818.form = search87473a3ee9cf566204331f009ab0a818Form

export const search = {
    '/api/supplier/search': search3160da71f4e05fccf1436468eb68f6fc,
    '/api/suppliers/search': search87473a3ee9cf566204331f009ab0a818,
}

/**
* @see \App\Http\Controllers\Api\SupplierController::statistics
 * @see app/Http/Controllers/Api/SupplierController.php:206
 * @route '/api/supplier/{supplier}/statistics'
 */
export const statistics = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: statistics.url(args, options),
    method: 'get',
})

statistics.definition = {
    methods: ["get","head"],
    url: '/api/supplier/{supplier}/statistics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SupplierController::statistics
 * @see app/Http/Controllers/Api/SupplierController.php:206
 * @route '/api/supplier/{supplier}/statistics'
 */
statistics.url = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { supplier: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { supplier: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    supplier: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        supplier: typeof args.supplier === 'object'
                ? args.supplier.id
                : args.supplier,
                }

    return statistics.definition.url
            .replace('{supplier}', parsedArgs.supplier.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SupplierController::statistics
 * @see app/Http/Controllers/Api/SupplierController.php:206
 * @route '/api/supplier/{supplier}/statistics'
 */
statistics.get = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: statistics.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\SupplierController::statistics
 * @see app/Http/Controllers/Api/SupplierController.php:206
 * @route '/api/supplier/{supplier}/statistics'
 */
statistics.head = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: statistics.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\SupplierController::statistics
 * @see app/Http/Controllers/Api/SupplierController.php:206
 * @route '/api/supplier/{supplier}/statistics'
 */
    const statisticsForm = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: statistics.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\SupplierController::statistics
 * @see app/Http/Controllers/Api/SupplierController.php:206
 * @route '/api/supplier/{supplier}/statistics'
 */
        statisticsForm.get = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: statistics.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\SupplierController::statistics
 * @see app/Http/Controllers/Api/SupplierController.php:206
 * @route '/api/supplier/{supplier}/statistics'
 */
        statisticsForm.head = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Api\SupplierController::toggleStatus
 * @see app/Http/Controllers/Api/SupplierController.php:191
 * @route '/api/supplier/{supplier}/toggle-status'
 */
export const toggleStatus = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

toggleStatus.definition = {
    methods: ["post"],
    url: '/api/supplier/{supplier}/toggle-status',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\SupplierController::toggleStatus
 * @see app/Http/Controllers/Api/SupplierController.php:191
 * @route '/api/supplier/{supplier}/toggle-status'
 */
toggleStatus.url = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { supplier: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { supplier: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    supplier: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        supplier: typeof args.supplier === 'object'
                ? args.supplier.id
                : args.supplier,
                }

    return toggleStatus.definition.url
            .replace('{supplier}', parsedArgs.supplier.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SupplierController::toggleStatus
 * @see app/Http/Controllers/Api/SupplierController.php:191
 * @route '/api/supplier/{supplier}/toggle-status'
 */
toggleStatus.post = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\SupplierController::toggleStatus
 * @see app/Http/Controllers/Api/SupplierController.php:191
 * @route '/api/supplier/{supplier}/toggle-status'
 */
    const toggleStatusForm = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggleStatus.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\SupplierController::toggleStatus
 * @see app/Http/Controllers/Api/SupplierController.php:191
 * @route '/api/supplier/{supplier}/toggle-status'
 */
        toggleStatusForm.post = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggleStatus.url(args, options),
            method: 'post',
        })
    
    toggleStatus.form = toggleStatusForm
/**
* @see \App\Http\Controllers\Api\SupplierController::index
 * @see app/Http/Controllers/Api/SupplierController.php:16
 * @route '/api/supplier'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/supplier',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SupplierController::index
 * @see app/Http/Controllers/Api/SupplierController.php:16
 * @route '/api/supplier'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SupplierController::index
 * @see app/Http/Controllers/Api/SupplierController.php:16
 * @route '/api/supplier'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\SupplierController::index
 * @see app/Http/Controllers/Api/SupplierController.php:16
 * @route '/api/supplier'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\SupplierController::index
 * @see app/Http/Controllers/Api/SupplierController.php:16
 * @route '/api/supplier'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\SupplierController::index
 * @see app/Http/Controllers/Api/SupplierController.php:16
 * @route '/api/supplier'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\SupplierController::index
 * @see app/Http/Controllers/Api/SupplierController.php:16
 * @route '/api/supplier'
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
* @see \App\Http\Controllers\Api\SupplierController::store
 * @see app/Http/Controllers/Api/SupplierController.php:91
 * @route '/api/supplier'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/supplier',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\SupplierController::store
 * @see app/Http/Controllers/Api/SupplierController.php:91
 * @route '/api/supplier'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SupplierController::store
 * @see app/Http/Controllers/Api/SupplierController.php:91
 * @route '/api/supplier'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\SupplierController::store
 * @see app/Http/Controllers/Api/SupplierController.php:91
 * @route '/api/supplier'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\SupplierController::store
 * @see app/Http/Controllers/Api/SupplierController.php:91
 * @route '/api/supplier'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Api\SupplierController::show
 * @see app/Http/Controllers/Api/SupplierController.php:123
 * @route '/api/supplier/{supplier}'
 */
export const show = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/supplier/{supplier}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SupplierController::show
 * @see app/Http/Controllers/Api/SupplierController.php:123
 * @route '/api/supplier/{supplier}'
 */
show.url = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { supplier: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { supplier: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    supplier: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        supplier: typeof args.supplier === 'object'
                ? args.supplier.id
                : args.supplier,
                }

    return show.definition.url
            .replace('{supplier}', parsedArgs.supplier.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SupplierController::show
 * @see app/Http/Controllers/Api/SupplierController.php:123
 * @route '/api/supplier/{supplier}'
 */
show.get = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\SupplierController::show
 * @see app/Http/Controllers/Api/SupplierController.php:123
 * @route '/api/supplier/{supplier}'
 */
show.head = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\SupplierController::show
 * @see app/Http/Controllers/Api/SupplierController.php:123
 * @route '/api/supplier/{supplier}'
 */
    const showForm = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\SupplierController::show
 * @see app/Http/Controllers/Api/SupplierController.php:123
 * @route '/api/supplier/{supplier}'
 */
        showForm.get = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\SupplierController::show
 * @see app/Http/Controllers/Api/SupplierController.php:123
 * @route '/api/supplier/{supplier}'
 */
        showForm.head = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Api\SupplierController::update
 * @see app/Http/Controllers/Api/SupplierController.php:140
 * @route '/api/supplier/{supplier}'
 */
export const update = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/supplier/{supplier}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\SupplierController::update
 * @see app/Http/Controllers/Api/SupplierController.php:140
 * @route '/api/supplier/{supplier}'
 */
update.url = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { supplier: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { supplier: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    supplier: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        supplier: typeof args.supplier === 'object'
                ? args.supplier.id
                : args.supplier,
                }

    return update.definition.url
            .replace('{supplier}', parsedArgs.supplier.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SupplierController::update
 * @see app/Http/Controllers/Api/SupplierController.php:140
 * @route '/api/supplier/{supplier}'
 */
update.put = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\SupplierController::update
 * @see app/Http/Controllers/Api/SupplierController.php:140
 * @route '/api/supplier/{supplier}'
 */
update.patch = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\SupplierController::update
 * @see app/Http/Controllers/Api/SupplierController.php:140
 * @route '/api/supplier/{supplier}'
 */
    const updateForm = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\SupplierController::update
 * @see app/Http/Controllers/Api/SupplierController.php:140
 * @route '/api/supplier/{supplier}'
 */
        updateForm.put = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Api\SupplierController::update
 * @see app/Http/Controllers/Api/SupplierController.php:140
 * @route '/api/supplier/{supplier}'
 */
        updateForm.patch = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\SupplierController::destroy
 * @see app/Http/Controllers/Api/SupplierController.php:172
 * @route '/api/supplier/{supplier}'
 */
export const destroy = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/supplier/{supplier}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\SupplierController::destroy
 * @see app/Http/Controllers/Api/SupplierController.php:172
 * @route '/api/supplier/{supplier}'
 */
destroy.url = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { supplier: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { supplier: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    supplier: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        supplier: typeof args.supplier === 'object'
                ? args.supplier.id
                : args.supplier,
                }

    return destroy.definition.url
            .replace('{supplier}', parsedArgs.supplier.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SupplierController::destroy
 * @see app/Http/Controllers/Api/SupplierController.php:172
 * @route '/api/supplier/{supplier}'
 */
destroy.delete = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\SupplierController::destroy
 * @see app/Http/Controllers/Api/SupplierController.php:172
 * @route '/api/supplier/{supplier}'
 */
    const destroyForm = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\SupplierController::destroy
 * @see app/Http/Controllers/Api/SupplierController.php:172
 * @route '/api/supplier/{supplier}'
 */
        destroyForm.delete = (args: { supplier: number | { id: number } } | [supplier: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const SupplierController = { active, search, statistics, toggleStatus, index, store, show, update, destroy }

export default SupplierController
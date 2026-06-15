import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\ObatController::lowStock
 * @see app/Http/Controllers/Api/ObatController.php:159
 * @route '/api/obat/low-stock'
 */
export const lowStock = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lowStock.url(options),
    method: 'get',
})

lowStock.definition = {
    methods: ["get","head"],
    url: '/api/obat/low-stock',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ObatController::lowStock
 * @see app/Http/Controllers/Api/ObatController.php:159
 * @route '/api/obat/low-stock'
 */
lowStock.url = (options?: RouteQueryOptions) => {
    return lowStock.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ObatController::lowStock
 * @see app/Http/Controllers/Api/ObatController.php:159
 * @route '/api/obat/low-stock'
 */
lowStock.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lowStock.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\ObatController::lowStock
 * @see app/Http/Controllers/Api/ObatController.php:159
 * @route '/api/obat/low-stock'
 */
lowStock.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: lowStock.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\ObatController::lowStock
 * @see app/Http/Controllers/Api/ObatController.php:159
 * @route '/api/obat/low-stock'
 */
    const lowStockForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: lowStock.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\ObatController::lowStock
 * @see app/Http/Controllers/Api/ObatController.php:159
 * @route '/api/obat/low-stock'
 */
        lowStockForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: lowStock.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\ObatController::lowStock
 * @see app/Http/Controllers/Api/ObatController.php:159
 * @route '/api/obat/low-stock'
 */
        lowStockForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: lowStock.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    lowStock.form = lowStockForm
/**
* @see \App\Http\Controllers\Api\ObatController::search
 * @see app/Http/Controllers/Api/ObatController.php:173
 * @route '/api/obat/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

search.definition = {
    methods: ["get","head"],
    url: '/api/obat/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ObatController::search
 * @see app/Http/Controllers/Api/ObatController.php:173
 * @route '/api/obat/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ObatController::search
 * @see app/Http/Controllers/Api/ObatController.php:173
 * @route '/api/obat/search'
 */
search.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\ObatController::search
 * @see app/Http/Controllers/Api/ObatController.php:173
 * @route '/api/obat/search'
 */
search.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\ObatController::search
 * @see app/Http/Controllers/Api/ObatController.php:173
 * @route '/api/obat/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: search.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\ObatController::search
 * @see app/Http/Controllers/Api/ObatController.php:173
 * @route '/api/obat/search'
 */
        searchForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: search.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\ObatController::search
 * @see app/Http/Controllers/Api/ObatController.php:173
 * @route '/api/obat/search'
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
/**
* @see \App\Http\Controllers\Api\ObatController::batches
 * @see app/Http/Controllers/Api/ObatController.php:268
 * @route '/api/obat/{obat}/batches'
 */
export const batches = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: batches.url(args, options),
    method: 'get',
})

batches.definition = {
    methods: ["get","head"],
    url: '/api/obat/{obat}/batches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ObatController::batches
 * @see app/Http/Controllers/Api/ObatController.php:268
 * @route '/api/obat/{obat}/batches'
 */
batches.url = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { obat: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { obat: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        obat: typeof args.obat === 'object'
                ? args.obat.id
                : args.obat,
                }

    return batches.definition.url
            .replace('{obat}', parsedArgs.obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ObatController::batches
 * @see app/Http/Controllers/Api/ObatController.php:268
 * @route '/api/obat/{obat}/batches'
 */
batches.get = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: batches.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\ObatController::batches
 * @see app/Http/Controllers/Api/ObatController.php:268
 * @route '/api/obat/{obat}/batches'
 */
batches.head = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: batches.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\ObatController::batches
 * @see app/Http/Controllers/Api/ObatController.php:268
 * @route '/api/obat/{obat}/batches'
 */
    const batchesForm = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: batches.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\ObatController::batches
 * @see app/Http/Controllers/Api/ObatController.php:268
 * @route '/api/obat/{obat}/batches'
 */
        batchesForm.get = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: batches.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\ObatController::batches
 * @see app/Http/Controllers/Api/ObatController.php:268
 * @route '/api/obat/{obat}/batches'
 */
        batchesForm.head = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: batches.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    batches.form = batchesForm
/**
* @see \App\Http\Controllers\Api\ObatController::recalculateStock
 * @see app/Http/Controllers/Api/ObatController.php:281
 * @route '/api/obat/{obat}/recalculate-stock'
 */
export const recalculateStock = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: recalculateStock.url(args, options),
    method: 'post',
})

recalculateStock.definition = {
    methods: ["post"],
    url: '/api/obat/{obat}/recalculate-stock',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\ObatController::recalculateStock
 * @see app/Http/Controllers/Api/ObatController.php:281
 * @route '/api/obat/{obat}/recalculate-stock'
 */
recalculateStock.url = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { obat: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { obat: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        obat: typeof args.obat === 'object'
                ? args.obat.id
                : args.obat,
                }

    return recalculateStock.definition.url
            .replace('{obat}', parsedArgs.obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ObatController::recalculateStock
 * @see app/Http/Controllers/Api/ObatController.php:281
 * @route '/api/obat/{obat}/recalculate-stock'
 */
recalculateStock.post = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: recalculateStock.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\ObatController::recalculateStock
 * @see app/Http/Controllers/Api/ObatController.php:281
 * @route '/api/obat/{obat}/recalculate-stock'
 */
    const recalculateStockForm = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: recalculateStock.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\ObatController::recalculateStock
 * @see app/Http/Controllers/Api/ObatController.php:281
 * @route '/api/obat/{obat}/recalculate-stock'
 */
        recalculateStockForm.post = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: recalculateStock.url(args, options),
            method: 'post',
        })
    
    recalculateStock.form = recalculateStockForm
/**
* @see \App\Http\Controllers\Api\ObatController::medicinesSearch
 * @see app/Http/Controllers/Api/ObatController.php:193
 * @route '/api/medicines/search'
 */
export const medicinesSearch = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: medicinesSearch.url(options),
    method: 'get',
})

medicinesSearch.definition = {
    methods: ["get","head"],
    url: '/api/medicines/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ObatController::medicinesSearch
 * @see app/Http/Controllers/Api/ObatController.php:193
 * @route '/api/medicines/search'
 */
medicinesSearch.url = (options?: RouteQueryOptions) => {
    return medicinesSearch.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ObatController::medicinesSearch
 * @see app/Http/Controllers/Api/ObatController.php:193
 * @route '/api/medicines/search'
 */
medicinesSearch.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: medicinesSearch.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\ObatController::medicinesSearch
 * @see app/Http/Controllers/Api/ObatController.php:193
 * @route '/api/medicines/search'
 */
medicinesSearch.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: medicinesSearch.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\ObatController::medicinesSearch
 * @see app/Http/Controllers/Api/ObatController.php:193
 * @route '/api/medicines/search'
 */
    const medicinesSearchForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: medicinesSearch.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\ObatController::medicinesSearch
 * @see app/Http/Controllers/Api/ObatController.php:193
 * @route '/api/medicines/search'
 */
        medicinesSearchForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: medicinesSearch.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\ObatController::medicinesSearch
 * @see app/Http/Controllers/Api/ObatController.php:193
 * @route '/api/medicines/search'
 */
        medicinesSearchForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: medicinesSearch.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    medicinesSearch.form = medicinesSearchForm
/**
* @see \App\Http\Controllers\Api\ObatController::index
 * @see app/Http/Controllers/Api/ObatController.php:18
 * @route '/api/obat'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/obat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ObatController::index
 * @see app/Http/Controllers/Api/ObatController.php:18
 * @route '/api/obat'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ObatController::index
 * @see app/Http/Controllers/Api/ObatController.php:18
 * @route '/api/obat'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\ObatController::index
 * @see app/Http/Controllers/Api/ObatController.php:18
 * @route '/api/obat'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\ObatController::index
 * @see app/Http/Controllers/Api/ObatController.php:18
 * @route '/api/obat'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\ObatController::index
 * @see app/Http/Controllers/Api/ObatController.php:18
 * @route '/api/obat'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\ObatController::index
 * @see app/Http/Controllers/Api/ObatController.php:18
 * @route '/api/obat'
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
* @see \App\Http\Controllers\Api\ObatController::store
 * @see app/Http/Controllers/Api/ObatController.php:52
 * @route '/api/obat'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/obat',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\ObatController::store
 * @see app/Http/Controllers/Api/ObatController.php:52
 * @route '/api/obat'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ObatController::store
 * @see app/Http/Controllers/Api/ObatController.php:52
 * @route '/api/obat'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\ObatController::store
 * @see app/Http/Controllers/Api/ObatController.php:52
 * @route '/api/obat'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\ObatController::store
 * @see app/Http/Controllers/Api/ObatController.php:52
 * @route '/api/obat'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Api\ObatController::show
 * @see app/Http/Controllers/Api/ObatController.php:90
 * @route '/api/obat/{obat}'
 */
export const show = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/obat/{obat}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ObatController::show
 * @see app/Http/Controllers/Api/ObatController.php:90
 * @route '/api/obat/{obat}'
 */
show.url = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { obat: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { obat: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        obat: typeof args.obat === 'object'
                ? args.obat.id
                : args.obat,
                }

    return show.definition.url
            .replace('{obat}', parsedArgs.obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ObatController::show
 * @see app/Http/Controllers/Api/ObatController.php:90
 * @route '/api/obat/{obat}'
 */
show.get = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\ObatController::show
 * @see app/Http/Controllers/Api/ObatController.php:90
 * @route '/api/obat/{obat}'
 */
show.head = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\ObatController::show
 * @see app/Http/Controllers/Api/ObatController.php:90
 * @route '/api/obat/{obat}'
 */
    const showForm = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\ObatController::show
 * @see app/Http/Controllers/Api/ObatController.php:90
 * @route '/api/obat/{obat}'
 */
        showForm.get = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\ObatController::show
 * @see app/Http/Controllers/Api/ObatController.php:90
 * @route '/api/obat/{obat}'
 */
        showForm.head = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Api\ObatController::update
 * @see app/Http/Controllers/Api/ObatController.php:100
 * @route '/api/obat/{obat}'
 */
export const update = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/obat/{obat}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\ObatController::update
 * @see app/Http/Controllers/Api/ObatController.php:100
 * @route '/api/obat/{obat}'
 */
update.url = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { obat: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { obat: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        obat: typeof args.obat === 'object'
                ? args.obat.id
                : args.obat,
                }

    return update.definition.url
            .replace('{obat}', parsedArgs.obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ObatController::update
 * @see app/Http/Controllers/Api/ObatController.php:100
 * @route '/api/obat/{obat}'
 */
update.put = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\ObatController::update
 * @see app/Http/Controllers/Api/ObatController.php:100
 * @route '/api/obat/{obat}'
 */
update.patch = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\ObatController::update
 * @see app/Http/Controllers/Api/ObatController.php:100
 * @route '/api/obat/{obat}'
 */
    const updateForm = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\ObatController::update
 * @see app/Http/Controllers/Api/ObatController.php:100
 * @route '/api/obat/{obat}'
 */
        updateForm.put = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Api\ObatController::update
 * @see app/Http/Controllers/Api/ObatController.php:100
 * @route '/api/obat/{obat}'
 */
        updateForm.patch = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\ObatController::destroy
 * @see app/Http/Controllers/Api/ObatController.php:139
 * @route '/api/obat/{obat}'
 */
export const destroy = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/obat/{obat}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\ObatController::destroy
 * @see app/Http/Controllers/Api/ObatController.php:139
 * @route '/api/obat/{obat}'
 */
destroy.url = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { obat: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { obat: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        obat: typeof args.obat === 'object'
                ? args.obat.id
                : args.obat,
                }

    return destroy.definition.url
            .replace('{obat}', parsedArgs.obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ObatController::destroy
 * @see app/Http/Controllers/Api/ObatController.php:139
 * @route '/api/obat/{obat}'
 */
destroy.delete = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\ObatController::destroy
 * @see app/Http/Controllers/Api/ObatController.php:139
 * @route '/api/obat/{obat}'
 */
    const destroyForm = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\ObatController::destroy
 * @see app/Http/Controllers/Api/ObatController.php:139
 * @route '/api/obat/{obat}'
 */
        destroyForm.delete = (args: { obat: number | { id: number } } | [obat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const ObatController = { lowStock, search, batches, recalculateStock, medicinesSearch, index, store, show, update, destroy }

export default ObatController
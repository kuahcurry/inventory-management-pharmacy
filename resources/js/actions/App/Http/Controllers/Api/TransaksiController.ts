import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\TransaksiController::today
 * @see app/Http/Controllers/Api/TransaksiController.php:342
 * @route '/api/transaksi/today'
 */
export const today = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: today.url(options),
    method: 'get',
})

today.definition = {
    methods: ["get","head"],
    url: '/api/transaksi/today',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\TransaksiController::today
 * @see app/Http/Controllers/Api/TransaksiController.php:342
 * @route '/api/transaksi/today'
 */
today.url = (options?: RouteQueryOptions) => {
    return today.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\TransaksiController::today
 * @see app/Http/Controllers/Api/TransaksiController.php:342
 * @route '/api/transaksi/today'
 */
today.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: today.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\TransaksiController::today
 * @see app/Http/Controllers/Api/TransaksiController.php:342
 * @route '/api/transaksi/today'
 */
today.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: today.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\TransaksiController::today
 * @see app/Http/Controllers/Api/TransaksiController.php:342
 * @route '/api/transaksi/today'
 */
    const todayForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: today.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\TransaksiController::today
 * @see app/Http/Controllers/Api/TransaksiController.php:342
 * @route '/api/transaksi/today'
 */
        todayForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: today.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\TransaksiController::today
 * @see app/Http/Controllers/Api/TransaksiController.php:342
 * @route '/api/transaksi/today'
 */
        todayForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: today.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    today.form = todayForm
/**
* @see \App\Http\Controllers\Api\TransaksiController::byType
 * @see app/Http/Controllers/Api/TransaksiController.php:356
 * @route '/api/transaksi/by-type/{type}'
 */
export const byType = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: byType.url(args, options),
    method: 'get',
})

byType.definition = {
    methods: ["get","head"],
    url: '/api/transaksi/by-type/{type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\TransaksiController::byType
 * @see app/Http/Controllers/Api/TransaksiController.php:356
 * @route '/api/transaksi/by-type/{type}'
 */
byType.url = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { type: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    type: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        type: args.type,
                }

    return byType.definition.url
            .replace('{type}', parsedArgs.type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\TransaksiController::byType
 * @see app/Http/Controllers/Api/TransaksiController.php:356
 * @route '/api/transaksi/by-type/{type}'
 */
byType.get = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: byType.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\TransaksiController::byType
 * @see app/Http/Controllers/Api/TransaksiController.php:356
 * @route '/api/transaksi/by-type/{type}'
 */
byType.head = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: byType.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\TransaksiController::byType
 * @see app/Http/Controllers/Api/TransaksiController.php:356
 * @route '/api/transaksi/by-type/{type}'
 */
    const byTypeForm = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: byType.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\TransaksiController::byType
 * @see app/Http/Controllers/Api/TransaksiController.php:356
 * @route '/api/transaksi/by-type/{type}'
 */
        byTypeForm.get = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: byType.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\TransaksiController::byType
 * @see app/Http/Controllers/Api/TransaksiController.php:356
 * @route '/api/transaksi/by-type/{type}'
 */
        byTypeForm.head = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: byType.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    byType.form = byTypeForm
/**
* @see \App\Http\Controllers\Api\TransaksiController::storeMasuk
 * @see app/Http/Controllers/Api/TransaksiController.php:61
 * @route '/api/transaksi/masuk'
 */
export const storeMasuk = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeMasuk.url(options),
    method: 'post',
})

storeMasuk.definition = {
    methods: ["post"],
    url: '/api/transaksi/masuk',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\TransaksiController::storeMasuk
 * @see app/Http/Controllers/Api/TransaksiController.php:61
 * @route '/api/transaksi/masuk'
 */
storeMasuk.url = (options?: RouteQueryOptions) => {
    return storeMasuk.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\TransaksiController::storeMasuk
 * @see app/Http/Controllers/Api/TransaksiController.php:61
 * @route '/api/transaksi/masuk'
 */
storeMasuk.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeMasuk.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\TransaksiController::storeMasuk
 * @see app/Http/Controllers/Api/TransaksiController.php:61
 * @route '/api/transaksi/masuk'
 */
    const storeMasukForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storeMasuk.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\TransaksiController::storeMasuk
 * @see app/Http/Controllers/Api/TransaksiController.php:61
 * @route '/api/transaksi/masuk'
 */
        storeMasukForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storeMasuk.url(options),
            method: 'post',
        })
    
    storeMasuk.form = storeMasukForm
/**
* @see \App\Http\Controllers\Api\TransaksiController::storeKeluar
 * @see app/Http/Controllers/Api/TransaksiController.php:122
 * @route '/api/transaksi/keluar'
 */
export const storeKeluar = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeKeluar.url(options),
    method: 'post',
})

storeKeluar.definition = {
    methods: ["post"],
    url: '/api/transaksi/keluar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\TransaksiController::storeKeluar
 * @see app/Http/Controllers/Api/TransaksiController.php:122
 * @route '/api/transaksi/keluar'
 */
storeKeluar.url = (options?: RouteQueryOptions) => {
    return storeKeluar.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\TransaksiController::storeKeluar
 * @see app/Http/Controllers/Api/TransaksiController.php:122
 * @route '/api/transaksi/keluar'
 */
storeKeluar.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeKeluar.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\TransaksiController::storeKeluar
 * @see app/Http/Controllers/Api/TransaksiController.php:122
 * @route '/api/transaksi/keluar'
 */
    const storeKeluarForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storeKeluar.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\TransaksiController::storeKeluar
 * @see app/Http/Controllers/Api/TransaksiController.php:122
 * @route '/api/transaksi/keluar'
 */
        storeKeluarForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storeKeluar.url(options),
            method: 'post',
        })
    
    storeKeluar.form = storeKeluarForm
/**
* @see \App\Http\Controllers\Api\TransaksiController::storePenjualan
 * @see app/Http/Controllers/Api/TransaksiController.php:215
 * @route '/api/transaksi/penjualan'
 */
const storePenjualanb36cd58662f8ae7489fc529f16e9ea9b = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storePenjualanb36cd58662f8ae7489fc529f16e9ea9b.url(options),
    method: 'post',
})

storePenjualanb36cd58662f8ae7489fc529f16e9ea9b.definition = {
    methods: ["post"],
    url: '/api/transaksi/penjualan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\TransaksiController::storePenjualan
 * @see app/Http/Controllers/Api/TransaksiController.php:215
 * @route '/api/transaksi/penjualan'
 */
storePenjualanb36cd58662f8ae7489fc529f16e9ea9b.url = (options?: RouteQueryOptions) => {
    return storePenjualanb36cd58662f8ae7489fc529f16e9ea9b.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\TransaksiController::storePenjualan
 * @see app/Http/Controllers/Api/TransaksiController.php:215
 * @route '/api/transaksi/penjualan'
 */
storePenjualanb36cd58662f8ae7489fc529f16e9ea9b.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storePenjualanb36cd58662f8ae7489fc529f16e9ea9b.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\TransaksiController::storePenjualan
 * @see app/Http/Controllers/Api/TransaksiController.php:215
 * @route '/api/transaksi/penjualan'
 */
    const storePenjualanb36cd58662f8ae7489fc529f16e9ea9bForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storePenjualanb36cd58662f8ae7489fc529f16e9ea9b.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\TransaksiController::storePenjualan
 * @see app/Http/Controllers/Api/TransaksiController.php:215
 * @route '/api/transaksi/penjualan'
 */
        storePenjualanb36cd58662f8ae7489fc529f16e9ea9bForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storePenjualanb36cd58662f8ae7489fc529f16e9ea9b.url(options),
            method: 'post',
        })
    
    storePenjualanb36cd58662f8ae7489fc529f16e9ea9b.form = storePenjualanb36cd58662f8ae7489fc529f16e9ea9bForm
    /**
* @see \App\Http\Controllers\Api\TransaksiController::storePenjualan
 * @see app/Http/Controllers/Api/TransaksiController.php:215
 * @route '/api/transactions'
 */
const storePenjualan9fa68b3ceb04d1df189c74d7fe68cd33 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storePenjualan9fa68b3ceb04d1df189c74d7fe68cd33.url(options),
    method: 'post',
})

storePenjualan9fa68b3ceb04d1df189c74d7fe68cd33.definition = {
    methods: ["post"],
    url: '/api/transactions',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\TransaksiController::storePenjualan
 * @see app/Http/Controllers/Api/TransaksiController.php:215
 * @route '/api/transactions'
 */
storePenjualan9fa68b3ceb04d1df189c74d7fe68cd33.url = (options?: RouteQueryOptions) => {
    return storePenjualan9fa68b3ceb04d1df189c74d7fe68cd33.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\TransaksiController::storePenjualan
 * @see app/Http/Controllers/Api/TransaksiController.php:215
 * @route '/api/transactions'
 */
storePenjualan9fa68b3ceb04d1df189c74d7fe68cd33.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storePenjualan9fa68b3ceb04d1df189c74d7fe68cd33.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\TransaksiController::storePenjualan
 * @see app/Http/Controllers/Api/TransaksiController.php:215
 * @route '/api/transactions'
 */
    const storePenjualan9fa68b3ceb04d1df189c74d7fe68cd33Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storePenjualan9fa68b3ceb04d1df189c74d7fe68cd33.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\TransaksiController::storePenjualan
 * @see app/Http/Controllers/Api/TransaksiController.php:215
 * @route '/api/transactions'
 */
        storePenjualan9fa68b3ceb04d1df189c74d7fe68cd33Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storePenjualan9fa68b3ceb04d1df189c74d7fe68cd33.url(options),
            method: 'post',
        })
    
    storePenjualan9fa68b3ceb04d1df189c74d7fe68cd33.form = storePenjualan9fa68b3ceb04d1df189c74d7fe68cd33Form

export const storePenjualan = {
    '/api/transaksi/penjualan': storePenjualanb36cd58662f8ae7489fc529f16e9ea9b,
    '/api/transactions': storePenjualan9fa68b3ceb04d1df189c74d7fe68cd33,
}

/**
* @see \App\Http\Controllers\Api\TransaksiController::index
 * @see app/Http/Controllers/Api/TransaksiController.php:24
 * @route '/api/transaksi'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/transaksi',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\TransaksiController::index
 * @see app/Http/Controllers/Api/TransaksiController.php:24
 * @route '/api/transaksi'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\TransaksiController::index
 * @see app/Http/Controllers/Api/TransaksiController.php:24
 * @route '/api/transaksi'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\TransaksiController::index
 * @see app/Http/Controllers/Api/TransaksiController.php:24
 * @route '/api/transaksi'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\TransaksiController::index
 * @see app/Http/Controllers/Api/TransaksiController.php:24
 * @route '/api/transaksi'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\TransaksiController::index
 * @see app/Http/Controllers/Api/TransaksiController.php:24
 * @route '/api/transaksi'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\TransaksiController::index
 * @see app/Http/Controllers/Api/TransaksiController.php:24
 * @route '/api/transaksi'
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
* @see \App\Http\Controllers\Api\TransaksiController::store
 * @see app/Http/Controllers/Api/TransaksiController.php:0
 * @route '/api/transaksi'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/transaksi',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\TransaksiController::store
 * @see app/Http/Controllers/Api/TransaksiController.php:0
 * @route '/api/transaksi'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\TransaksiController::store
 * @see app/Http/Controllers/Api/TransaksiController.php:0
 * @route '/api/transaksi'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\TransaksiController::store
 * @see app/Http/Controllers/Api/TransaksiController.php:0
 * @route '/api/transaksi'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\TransaksiController::store
 * @see app/Http/Controllers/Api/TransaksiController.php:0
 * @route '/api/transaksi'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Api\TransaksiController::show
 * @see app/Http/Controllers/Api/TransaksiController.php:51
 * @route '/api/transaksi/{transaksi}'
 */
export const show = (args: { transaksi: number | { id: number } } | [transaksi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/transaksi/{transaksi}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\TransaksiController::show
 * @see app/Http/Controllers/Api/TransaksiController.php:51
 * @route '/api/transaksi/{transaksi}'
 */
show.url = (args: { transaksi: number | { id: number } } | [transaksi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { transaksi: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { transaksi: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    transaksi: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        transaksi: typeof args.transaksi === 'object'
                ? args.transaksi.id
                : args.transaksi,
                }

    return show.definition.url
            .replace('{transaksi}', parsedArgs.transaksi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\TransaksiController::show
 * @see app/Http/Controllers/Api/TransaksiController.php:51
 * @route '/api/transaksi/{transaksi}'
 */
show.get = (args: { transaksi: number | { id: number } } | [transaksi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\TransaksiController::show
 * @see app/Http/Controllers/Api/TransaksiController.php:51
 * @route '/api/transaksi/{transaksi}'
 */
show.head = (args: { transaksi: number | { id: number } } | [transaksi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\TransaksiController::show
 * @see app/Http/Controllers/Api/TransaksiController.php:51
 * @route '/api/transaksi/{transaksi}'
 */
    const showForm = (args: { transaksi: number | { id: number } } | [transaksi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\TransaksiController::show
 * @see app/Http/Controllers/Api/TransaksiController.php:51
 * @route '/api/transaksi/{transaksi}'
 */
        showForm.get = (args: { transaksi: number | { id: number } } | [transaksi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\TransaksiController::show
 * @see app/Http/Controllers/Api/TransaksiController.php:51
 * @route '/api/transaksi/{transaksi}'
 */
        showForm.head = (args: { transaksi: number | { id: number } } | [transaksi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const TransaksiController = { today, byType, storeMasuk, storeKeluar, storePenjualan, index, store, show }

export default TransaksiController
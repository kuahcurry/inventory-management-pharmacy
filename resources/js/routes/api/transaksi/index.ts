import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\TransaksiController::today
 * @see app/Http/Controllers/Api/TransaksiController.php:340
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
 * @see app/Http/Controllers/Api/TransaksiController.php:340
 * @route '/api/transaksi/today'
 */
today.url = (options?: RouteQueryOptions) => {
    return today.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\TransaksiController::today
 * @see app/Http/Controllers/Api/TransaksiController.php:340
 * @route '/api/transaksi/today'
 */
today.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: today.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\TransaksiController::today
 * @see app/Http/Controllers/Api/TransaksiController.php:340
 * @route '/api/transaksi/today'
 */
today.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: today.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\TransaksiController::today
 * @see app/Http/Controllers/Api/TransaksiController.php:340
 * @route '/api/transaksi/today'
 */
    const todayForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: today.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\TransaksiController::today
 * @see app/Http/Controllers/Api/TransaksiController.php:340
 * @route '/api/transaksi/today'
 */
        todayForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: today.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\TransaksiController::today
 * @see app/Http/Controllers/Api/TransaksiController.php:340
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
 * @see app/Http/Controllers/Api/TransaksiController.php:354
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
 * @see app/Http/Controllers/Api/TransaksiController.php:354
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
 * @see app/Http/Controllers/Api/TransaksiController.php:354
 * @route '/api/transaksi/by-type/{type}'
 */
byType.get = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: byType.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\TransaksiController::byType
 * @see app/Http/Controllers/Api/TransaksiController.php:354
 * @route '/api/transaksi/by-type/{type}'
 */
byType.head = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: byType.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\TransaksiController::byType
 * @see app/Http/Controllers/Api/TransaksiController.php:354
 * @route '/api/transaksi/by-type/{type}'
 */
    const byTypeForm = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: byType.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\TransaksiController::byType
 * @see app/Http/Controllers/Api/TransaksiController.php:354
 * @route '/api/transaksi/by-type/{type}'
 */
        byTypeForm.get = (args: { type: string | number } | [type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: byType.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\TransaksiController::byType
 * @see app/Http/Controllers/Api/TransaksiController.php:354
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
* @see \App\Http\Controllers\Api\TransaksiController::masuk
 * @see app/Http/Controllers/Api/TransaksiController.php:61
 * @route '/api/transaksi/masuk'
 */
export const masuk = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: masuk.url(options),
    method: 'post',
})

masuk.definition = {
    methods: ["post"],
    url: '/api/transaksi/masuk',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\TransaksiController::masuk
 * @see app/Http/Controllers/Api/TransaksiController.php:61
 * @route '/api/transaksi/masuk'
 */
masuk.url = (options?: RouteQueryOptions) => {
    return masuk.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\TransaksiController::masuk
 * @see app/Http/Controllers/Api/TransaksiController.php:61
 * @route '/api/transaksi/masuk'
 */
masuk.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: masuk.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\TransaksiController::masuk
 * @see app/Http/Controllers/Api/TransaksiController.php:61
 * @route '/api/transaksi/masuk'
 */
    const masukForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: masuk.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\TransaksiController::masuk
 * @see app/Http/Controllers/Api/TransaksiController.php:61
 * @route '/api/transaksi/masuk'
 */
        masukForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: masuk.url(options),
            method: 'post',
        })
    
    masuk.form = masukForm
/**
* @see \App\Http\Controllers\Api\TransaksiController::keluar
 * @see app/Http/Controllers/Api/TransaksiController.php:122
 * @route '/api/transaksi/keluar'
 */
export const keluar = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: keluar.url(options),
    method: 'post',
})

keluar.definition = {
    methods: ["post"],
    url: '/api/transaksi/keluar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\TransaksiController::keluar
 * @see app/Http/Controllers/Api/TransaksiController.php:122
 * @route '/api/transaksi/keluar'
 */
keluar.url = (options?: RouteQueryOptions) => {
    return keluar.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\TransaksiController::keluar
 * @see app/Http/Controllers/Api/TransaksiController.php:122
 * @route '/api/transaksi/keluar'
 */
keluar.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: keluar.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\TransaksiController::keluar
 * @see app/Http/Controllers/Api/TransaksiController.php:122
 * @route '/api/transaksi/keluar'
 */
    const keluarForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: keluar.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\TransaksiController::keluar
 * @see app/Http/Controllers/Api/TransaksiController.php:122
 * @route '/api/transaksi/keluar'
 */
        keluarForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: keluar.url(options),
            method: 'post',
        })
    
    keluar.form = keluarForm
/**
* @see \App\Http\Controllers\Api\TransaksiController::penjualan
 * @see app/Http/Controllers/Api/TransaksiController.php:213
 * @route '/api/transaksi/penjualan'
 */
export const penjualan = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: penjualan.url(options),
    method: 'post',
})

penjualan.definition = {
    methods: ["post"],
    url: '/api/transaksi/penjualan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\TransaksiController::penjualan
 * @see app/Http/Controllers/Api/TransaksiController.php:213
 * @route '/api/transaksi/penjualan'
 */
penjualan.url = (options?: RouteQueryOptions) => {
    return penjualan.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\TransaksiController::penjualan
 * @see app/Http/Controllers/Api/TransaksiController.php:213
 * @route '/api/transaksi/penjualan'
 */
penjualan.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: penjualan.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\TransaksiController::penjualan
 * @see app/Http/Controllers/Api/TransaksiController.php:213
 * @route '/api/transaksi/penjualan'
 */
    const penjualanForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: penjualan.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\TransaksiController::penjualan
 * @see app/Http/Controllers/Api/TransaksiController.php:213
 * @route '/api/transaksi/penjualan'
 */
        penjualanForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: penjualan.url(options),
            method: 'post',
        })
    
    penjualan.form = penjualanForm
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
export const show = (args: { transaksi: string | number | { id: string | number } } | [transaksi: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
show.url = (args: { transaksi: string | number | { id: string | number } } | [transaksi: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
show.get = (args: { transaksi: string | number | { id: string | number } } | [transaksi: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\TransaksiController::show
 * @see app/Http/Controllers/Api/TransaksiController.php:51
 * @route '/api/transaksi/{transaksi}'
 */
show.head = (args: { transaksi: string | number | { id: string | number } } | [transaksi: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\TransaksiController::show
 * @see app/Http/Controllers/Api/TransaksiController.php:51
 * @route '/api/transaksi/{transaksi}'
 */
    const showForm = (args: { transaksi: string | number | { id: string | number } } | [transaksi: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\TransaksiController::show
 * @see app/Http/Controllers/Api/TransaksiController.php:51
 * @route '/api/transaksi/{transaksi}'
 */
        showForm.get = (args: { transaksi: string | number | { id: string | number } } | [transaksi: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\TransaksiController::show
 * @see app/Http/Controllers/Api/TransaksiController.php:51
 * @route '/api/transaksi/{transaksi}'
 */
        showForm.head = (args: { transaksi: string | number | { id: string | number } } | [transaksi: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const transaksi = {
    today: Object.assign(today, today),
byType: Object.assign(byType, byType),
masuk: Object.assign(masuk, masuk),
keluar: Object.assign(keluar, keluar),
penjualan: Object.assign(penjualan, penjualan),
index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
}

export default transaksi
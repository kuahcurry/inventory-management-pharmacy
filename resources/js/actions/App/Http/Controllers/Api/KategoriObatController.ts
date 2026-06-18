import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori-obat'
 */
const index51ba300ae48dc5af9ee925dfff0fe806 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index51ba300ae48dc5af9ee925dfff0fe806.url(options),
    method: 'get',
})

index51ba300ae48dc5af9ee925dfff0fe806.definition = {
    methods: ["get","head"],
    url: '/api/kategori-obat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori-obat'
 */
index51ba300ae48dc5af9ee925dfff0fe806.url = (options?: RouteQueryOptions) => {
    return index51ba300ae48dc5af9ee925dfff0fe806.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori-obat'
 */
index51ba300ae48dc5af9ee925dfff0fe806.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index51ba300ae48dc5af9ee925dfff0fe806.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori-obat'
 */
index51ba300ae48dc5af9ee925dfff0fe806.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index51ba300ae48dc5af9ee925dfff0fe806.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori-obat'
 */
    const index51ba300ae48dc5af9ee925dfff0fe806Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index51ba300ae48dc5af9ee925dfff0fe806.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori-obat'
 */
        index51ba300ae48dc5af9ee925dfff0fe806Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index51ba300ae48dc5af9ee925dfff0fe806.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori-obat'
 */
        index51ba300ae48dc5af9ee925dfff0fe806Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index51ba300ae48dc5af9ee925dfff0fe806.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index51ba300ae48dc5af9ee925dfff0fe806.form = index51ba300ae48dc5af9ee925dfff0fe806Form
    /**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori'
 */
const index3fc32e809a6fbabb1229f4ec76282969 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index3fc32e809a6fbabb1229f4ec76282969.url(options),
    method: 'get',
})

index3fc32e809a6fbabb1229f4ec76282969.definition = {
    methods: ["get","head"],
    url: '/api/kategori',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori'
 */
index3fc32e809a6fbabb1229f4ec76282969.url = (options?: RouteQueryOptions) => {
    return index3fc32e809a6fbabb1229f4ec76282969.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori'
 */
index3fc32e809a6fbabb1229f4ec76282969.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index3fc32e809a6fbabb1229f4ec76282969.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori'
 */
index3fc32e809a6fbabb1229f4ec76282969.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index3fc32e809a6fbabb1229f4ec76282969.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori'
 */
    const index3fc32e809a6fbabb1229f4ec76282969Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index3fc32e809a6fbabb1229f4ec76282969.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori'
 */
        index3fc32e809a6fbabb1229f4ec76282969Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index3fc32e809a6fbabb1229f4ec76282969.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\KategoriObatController::index
 * @see app/Http/Controllers/Api/KategoriObatController.php:16
 * @route '/api/kategori'
 */
        index3fc32e809a6fbabb1229f4ec76282969Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index3fc32e809a6fbabb1229f4ec76282969.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index3fc32e809a6fbabb1229f4ec76282969.form = index3fc32e809a6fbabb1229f4ec76282969Form

export const index = {
    '/api/kategori-obat': index51ba300ae48dc5af9ee925dfff0fe806,
    '/api/kategori': index3fc32e809a6fbabb1229f4ec76282969,
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::store
 * @see app/Http/Controllers/Api/KategoriObatController.php:62
 * @route '/api/kategori-obat'
 */
const store51ba300ae48dc5af9ee925dfff0fe806 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store51ba300ae48dc5af9ee925dfff0fe806.url(options),
    method: 'post',
})

store51ba300ae48dc5af9ee925dfff0fe806.definition = {
    methods: ["post"],
    url: '/api/kategori-obat',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\KategoriObatController::store
 * @see app/Http/Controllers/Api/KategoriObatController.php:62
 * @route '/api/kategori-obat'
 */
store51ba300ae48dc5af9ee925dfff0fe806.url = (options?: RouteQueryOptions) => {
    return store51ba300ae48dc5af9ee925dfff0fe806.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::store
 * @see app/Http/Controllers/Api/KategoriObatController.php:62
 * @route '/api/kategori-obat'
 */
store51ba300ae48dc5af9ee925dfff0fe806.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store51ba300ae48dc5af9ee925dfff0fe806.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\KategoriObatController::store
 * @see app/Http/Controllers/Api/KategoriObatController.php:62
 * @route '/api/kategori-obat'
 */
    const store51ba300ae48dc5af9ee925dfff0fe806Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store51ba300ae48dc5af9ee925dfff0fe806.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\KategoriObatController::store
 * @see app/Http/Controllers/Api/KategoriObatController.php:62
 * @route '/api/kategori-obat'
 */
        store51ba300ae48dc5af9ee925dfff0fe806Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store51ba300ae48dc5af9ee925dfff0fe806.url(options),
            method: 'post',
        })
    
    store51ba300ae48dc5af9ee925dfff0fe806.form = store51ba300ae48dc5af9ee925dfff0fe806Form
    /**
* @see \App\Http\Controllers\Api\KategoriObatController::store
 * @see app/Http/Controllers/Api/KategoriObatController.php:62
 * @route '/api/kategori'
 */
const store3fc32e809a6fbabb1229f4ec76282969 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store3fc32e809a6fbabb1229f4ec76282969.url(options),
    method: 'post',
})

store3fc32e809a6fbabb1229f4ec76282969.definition = {
    methods: ["post"],
    url: '/api/kategori',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\KategoriObatController::store
 * @see app/Http/Controllers/Api/KategoriObatController.php:62
 * @route '/api/kategori'
 */
store3fc32e809a6fbabb1229f4ec76282969.url = (options?: RouteQueryOptions) => {
    return store3fc32e809a6fbabb1229f4ec76282969.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::store
 * @see app/Http/Controllers/Api/KategoriObatController.php:62
 * @route '/api/kategori'
 */
store3fc32e809a6fbabb1229f4ec76282969.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store3fc32e809a6fbabb1229f4ec76282969.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\KategoriObatController::store
 * @see app/Http/Controllers/Api/KategoriObatController.php:62
 * @route '/api/kategori'
 */
    const store3fc32e809a6fbabb1229f4ec76282969Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store3fc32e809a6fbabb1229f4ec76282969.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\KategoriObatController::store
 * @see app/Http/Controllers/Api/KategoriObatController.php:62
 * @route '/api/kategori'
 */
        store3fc32e809a6fbabb1229f4ec76282969Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store3fc32e809a6fbabb1229f4ec76282969.url(options),
            method: 'post',
        })
    
    store3fc32e809a6fbabb1229f4ec76282969.form = store3fc32e809a6fbabb1229f4ec76282969Form

export const store = {
    '/api/kategori-obat': store51ba300ae48dc5af9ee925dfff0fe806,
    '/api/kategori': store3fc32e809a6fbabb1229f4ec76282969,
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori-obat/{kategori_obat}'
 */
const showfbbc5a64e0681eeecc0658607cf9a5b7 = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showfbbc5a64e0681eeecc0658607cf9a5b7.url(args, options),
    method: 'get',
})

showfbbc5a64e0681eeecc0658607cf9a5b7.definition = {
    methods: ["get","head"],
    url: '/api/kategori-obat/{kategori_obat}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori-obat/{kategori_obat}'
 */
showfbbc5a64e0681eeecc0658607cf9a5b7.url = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kategori_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    kategori_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kategori_obat: args.kategori_obat,
                }

    return showfbbc5a64e0681eeecc0658607cf9a5b7.definition.url
            .replace('{kategori_obat}', parsedArgs.kategori_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori-obat/{kategori_obat}'
 */
showfbbc5a64e0681eeecc0658607cf9a5b7.get = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showfbbc5a64e0681eeecc0658607cf9a5b7.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori-obat/{kategori_obat}'
 */
showfbbc5a64e0681eeecc0658607cf9a5b7.head = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showfbbc5a64e0681eeecc0658607cf9a5b7.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori-obat/{kategori_obat}'
 */
    const showfbbc5a64e0681eeecc0658607cf9a5b7Form = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showfbbc5a64e0681eeecc0658607cf9a5b7.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori-obat/{kategori_obat}'
 */
        showfbbc5a64e0681eeecc0658607cf9a5b7Form.get = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showfbbc5a64e0681eeecc0658607cf9a5b7.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori-obat/{kategori_obat}'
 */
        showfbbc5a64e0681eeecc0658607cf9a5b7Form.head = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showfbbc5a64e0681eeecc0658607cf9a5b7.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showfbbc5a64e0681eeecc0658607cf9a5b7.form = showfbbc5a64e0681eeecc0658607cf9a5b7Form
    /**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori/{kategori}'
 */
const showd82e363de26354843c111070728433bd = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showd82e363de26354843c111070728433bd.url(args, options),
    method: 'get',
})

showd82e363de26354843c111070728433bd.definition = {
    methods: ["get","head"],
    url: '/api/kategori/{kategori}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori/{kategori}'
 */
showd82e363de26354843c111070728433bd.url = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showd82e363de26354843c111070728433bd.definition.url
            .replace('{kategori}', parsedArgs.kategori.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori/{kategori}'
 */
showd82e363de26354843c111070728433bd.get = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showd82e363de26354843c111070728433bd.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori/{kategori}'
 */
showd82e363de26354843c111070728433bd.head = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showd82e363de26354843c111070728433bd.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori/{kategori}'
 */
    const showd82e363de26354843c111070728433bdForm = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showd82e363de26354843c111070728433bd.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori/{kategori}'
 */
        showd82e363de26354843c111070728433bdForm.get = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showd82e363de26354843c111070728433bd.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\KategoriObatController::show
 * @see app/Http/Controllers/Api/KategoriObatController.php:89
 * @route '/api/kategori/{kategori}'
 */
        showd82e363de26354843c111070728433bdForm.head = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showd82e363de26354843c111070728433bd.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showd82e363de26354843c111070728433bd.form = showd82e363de26354843c111070728433bdForm

export const show = {
    '/api/kategori-obat/{kategori_obat}': showfbbc5a64e0681eeecc0658607cf9a5b7,
    '/api/kategori/{kategori}': showd82e363de26354843c111070728433bd,
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::update
 * @see app/Http/Controllers/Api/KategoriObatController.php:99
 * @route '/api/kategori-obat/{kategori_obat}'
 */
const updatefbbc5a64e0681eeecc0658607cf9a5b7 = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatefbbc5a64e0681eeecc0658607cf9a5b7.url(args, options),
    method: 'put',
})

updatefbbc5a64e0681eeecc0658607cf9a5b7.definition = {
    methods: ["put","patch"],
    url: '/api/kategori-obat/{kategori_obat}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\KategoriObatController::update
 * @see app/Http/Controllers/Api/KategoriObatController.php:99
 * @route '/api/kategori-obat/{kategori_obat}'
 */
updatefbbc5a64e0681eeecc0658607cf9a5b7.url = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kategori_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    kategori_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kategori_obat: args.kategori_obat,
                }

    return updatefbbc5a64e0681eeecc0658607cf9a5b7.definition.url
            .replace('{kategori_obat}', parsedArgs.kategori_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::update
 * @see app/Http/Controllers/Api/KategoriObatController.php:99
 * @route '/api/kategori-obat/{kategori_obat}'
 */
updatefbbc5a64e0681eeecc0658607cf9a5b7.put = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatefbbc5a64e0681eeecc0658607cf9a5b7.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\KategoriObatController::update
 * @see app/Http/Controllers/Api/KategoriObatController.php:99
 * @route '/api/kategori-obat/{kategori_obat}'
 */
updatefbbc5a64e0681eeecc0658607cf9a5b7.patch = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatefbbc5a64e0681eeecc0658607cf9a5b7.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\KategoriObatController::update
 * @see app/Http/Controllers/Api/KategoriObatController.php:99
 * @route '/api/kategori-obat/{kategori_obat}'
 */
    const updatefbbc5a64e0681eeecc0658607cf9a5b7Form = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updatefbbc5a64e0681eeecc0658607cf9a5b7.url(args, {
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
 * @route '/api/kategori-obat/{kategori_obat}'
 */
        updatefbbc5a64e0681eeecc0658607cf9a5b7Form.put = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatefbbc5a64e0681eeecc0658607cf9a5b7.url(args, {
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
 * @route '/api/kategori-obat/{kategori_obat}'
 */
        updatefbbc5a64e0681eeecc0658607cf9a5b7Form.patch = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatefbbc5a64e0681eeecc0658607cf9a5b7.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updatefbbc5a64e0681eeecc0658607cf9a5b7.form = updatefbbc5a64e0681eeecc0658607cf9a5b7Form
    /**
* @see \App\Http\Controllers\Api\KategoriObatController::update
 * @see app/Http/Controllers/Api/KategoriObatController.php:99
 * @route '/api/kategori/{kategori}'
 */
const updated82e363de26354843c111070728433bd = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updated82e363de26354843c111070728433bd.url(args, options),
    method: 'put',
})

updated82e363de26354843c111070728433bd.definition = {
    methods: ["put","patch"],
    url: '/api/kategori/{kategori}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\KategoriObatController::update
 * @see app/Http/Controllers/Api/KategoriObatController.php:99
 * @route '/api/kategori/{kategori}'
 */
updated82e363de26354843c111070728433bd.url = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updated82e363de26354843c111070728433bd.definition.url
            .replace('{kategori}', parsedArgs.kategori.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::update
 * @see app/Http/Controllers/Api/KategoriObatController.php:99
 * @route '/api/kategori/{kategori}'
 */
updated82e363de26354843c111070728433bd.put = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updated82e363de26354843c111070728433bd.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\KategoriObatController::update
 * @see app/Http/Controllers/Api/KategoriObatController.php:99
 * @route '/api/kategori/{kategori}'
 */
updated82e363de26354843c111070728433bd.patch = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updated82e363de26354843c111070728433bd.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\KategoriObatController::update
 * @see app/Http/Controllers/Api/KategoriObatController.php:99
 * @route '/api/kategori/{kategori}'
 */
    const updated82e363de26354843c111070728433bdForm = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updated82e363de26354843c111070728433bd.url(args, {
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
        updated82e363de26354843c111070728433bdForm.put = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updated82e363de26354843c111070728433bd.url(args, {
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
        updated82e363de26354843c111070728433bdForm.patch = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updated82e363de26354843c111070728433bd.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updated82e363de26354843c111070728433bd.form = updated82e363de26354843c111070728433bdForm

export const update = {
    '/api/kategori-obat/{kategori_obat}': updatefbbc5a64e0681eeecc0658607cf9a5b7,
    '/api/kategori/{kategori}': updated82e363de26354843c111070728433bd,
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::destroy
 * @see app/Http/Controllers/Api/KategoriObatController.php:126
 * @route '/api/kategori-obat/{kategori_obat}'
 */
const destroyfbbc5a64e0681eeecc0658607cf9a5b7 = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyfbbc5a64e0681eeecc0658607cf9a5b7.url(args, options),
    method: 'delete',
})

destroyfbbc5a64e0681eeecc0658607cf9a5b7.definition = {
    methods: ["delete"],
    url: '/api/kategori-obat/{kategori_obat}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\KategoriObatController::destroy
 * @see app/Http/Controllers/Api/KategoriObatController.php:126
 * @route '/api/kategori-obat/{kategori_obat}'
 */
destroyfbbc5a64e0681eeecc0658607cf9a5b7.url = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kategori_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    kategori_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kategori_obat: args.kategori_obat,
                }

    return destroyfbbc5a64e0681eeecc0658607cf9a5b7.definition.url
            .replace('{kategori_obat}', parsedArgs.kategori_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::destroy
 * @see app/Http/Controllers/Api/KategoriObatController.php:126
 * @route '/api/kategori-obat/{kategori_obat}'
 */
destroyfbbc5a64e0681eeecc0658607cf9a5b7.delete = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyfbbc5a64e0681eeecc0658607cf9a5b7.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\KategoriObatController::destroy
 * @see app/Http/Controllers/Api/KategoriObatController.php:126
 * @route '/api/kategori-obat/{kategori_obat}'
 */
    const destroyfbbc5a64e0681eeecc0658607cf9a5b7Form = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroyfbbc5a64e0681eeecc0658607cf9a5b7.url(args, {
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
 * @route '/api/kategori-obat/{kategori_obat}'
 */
        destroyfbbc5a64e0681eeecc0658607cf9a5b7Form.delete = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroyfbbc5a64e0681eeecc0658607cf9a5b7.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroyfbbc5a64e0681eeecc0658607cf9a5b7.form = destroyfbbc5a64e0681eeecc0658607cf9a5b7Form
    /**
* @see \App\Http\Controllers\Api\KategoriObatController::destroy
 * @see app/Http/Controllers/Api/KategoriObatController.php:126
 * @route '/api/kategori/{kategori}'
 */
const destroyd82e363de26354843c111070728433bd = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyd82e363de26354843c111070728433bd.url(args, options),
    method: 'delete',
})

destroyd82e363de26354843c111070728433bd.definition = {
    methods: ["delete"],
    url: '/api/kategori/{kategori}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\KategoriObatController::destroy
 * @see app/Http/Controllers/Api/KategoriObatController.php:126
 * @route '/api/kategori/{kategori}'
 */
destroyd82e363de26354843c111070728433bd.url = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroyd82e363de26354843c111070728433bd.definition.url
            .replace('{kategori}', parsedArgs.kategori.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\KategoriObatController::destroy
 * @see app/Http/Controllers/Api/KategoriObatController.php:126
 * @route '/api/kategori/{kategori}'
 */
destroyd82e363de26354843c111070728433bd.delete = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyd82e363de26354843c111070728433bd.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\KategoriObatController::destroy
 * @see app/Http/Controllers/Api/KategoriObatController.php:126
 * @route '/api/kategori/{kategori}'
 */
    const destroyd82e363de26354843c111070728433bdForm = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroyd82e363de26354843c111070728433bd.url(args, {
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
        destroyd82e363de26354843c111070728433bdForm.delete = (args: { kategori: string | number } | [kategori: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroyd82e363de26354843c111070728433bd.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroyd82e363de26354843c111070728433bd.form = destroyd82e363de26354843c111070728433bdForm

export const destroy = {
    '/api/kategori-obat/{kategori_obat}': destroyfbbc5a64e0681eeecc0658607cf9a5b7,
    '/api/kategori/{kategori}': destroyd82e363de26354843c111070728433bd,
}

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
export const toggleStatus = (args: { kategoriObat: number | { id: number } } | [kategoriObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
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
toggleStatus.url = (args: { kategoriObat: number | { id: number } } | [kategoriObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
toggleStatus.post = (args: { kategoriObat: number | { id: number } } | [kategoriObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\KategoriObatController::toggleStatus
 * @see app/Http/Controllers/Api/KategoriObatController.php:145
 * @route '/api/kategori/{kategoriObat}/toggle-status'
 */
    const toggleStatusForm = (args: { kategoriObat: number | { id: number } } | [kategoriObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggleStatus.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\KategoriObatController::toggleStatus
 * @see app/Http/Controllers/Api/KategoriObatController.php:145
 * @route '/api/kategori/{kategoriObat}/toggle-status'
 */
        toggleStatusForm.post = (args: { kategoriObat: number | { id: number } } | [kategoriObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggleStatus.url(args, options),
            method: 'post',
        })
    
    toggleStatus.form = toggleStatusForm
const KategoriObatController = { index, store, show, update, destroy, active, toggleStatus }

export default KategoriObatController
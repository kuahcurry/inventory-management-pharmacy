import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan-obat'
 */
const indexcfd23c4dc0d6271a40e83a10769cbb65 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexcfd23c4dc0d6271a40e83a10769cbb65.url(options),
    method: 'get',
})

indexcfd23c4dc0d6271a40e83a10769cbb65.definition = {
    methods: ["get","head"],
    url: '/api/satuan-obat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan-obat'
 */
indexcfd23c4dc0d6271a40e83a10769cbb65.url = (options?: RouteQueryOptions) => {
    return indexcfd23c4dc0d6271a40e83a10769cbb65.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan-obat'
 */
indexcfd23c4dc0d6271a40e83a10769cbb65.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexcfd23c4dc0d6271a40e83a10769cbb65.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan-obat'
 */
indexcfd23c4dc0d6271a40e83a10769cbb65.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexcfd23c4dc0d6271a40e83a10769cbb65.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan-obat'
 */
    const indexcfd23c4dc0d6271a40e83a10769cbb65Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexcfd23c4dc0d6271a40e83a10769cbb65.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan-obat'
 */
        indexcfd23c4dc0d6271a40e83a10769cbb65Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexcfd23c4dc0d6271a40e83a10769cbb65.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan-obat'
 */
        indexcfd23c4dc0d6271a40e83a10769cbb65Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexcfd23c4dc0d6271a40e83a10769cbb65.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexcfd23c4dc0d6271a40e83a10769cbb65.form = indexcfd23c4dc0d6271a40e83a10769cbb65Form
    /**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan'
 */
const index6a1d915997ae6ddc1c95d90571912e96 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index6a1d915997ae6ddc1c95d90571912e96.url(options),
    method: 'get',
})

index6a1d915997ae6ddc1c95d90571912e96.definition = {
    methods: ["get","head"],
    url: '/api/satuan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan'
 */
index6a1d915997ae6ddc1c95d90571912e96.url = (options?: RouteQueryOptions) => {
    return index6a1d915997ae6ddc1c95d90571912e96.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan'
 */
index6a1d915997ae6ddc1c95d90571912e96.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index6a1d915997ae6ddc1c95d90571912e96.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan'
 */
index6a1d915997ae6ddc1c95d90571912e96.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index6a1d915997ae6ddc1c95d90571912e96.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan'
 */
    const index6a1d915997ae6ddc1c95d90571912e96Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index6a1d915997ae6ddc1c95d90571912e96.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan'
 */
        index6a1d915997ae6ddc1c95d90571912e96Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index6a1d915997ae6ddc1c95d90571912e96.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\SatuanObatController::index
 * @see app/Http/Controllers/Api/SatuanObatController.php:16
 * @route '/api/satuan'
 */
        index6a1d915997ae6ddc1c95d90571912e96Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index6a1d915997ae6ddc1c95d90571912e96.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index6a1d915997ae6ddc1c95d90571912e96.form = index6a1d915997ae6ddc1c95d90571912e96Form

export const index = {
    '/api/satuan-obat': indexcfd23c4dc0d6271a40e83a10769cbb65,
    '/api/satuan': index6a1d915997ae6ddc1c95d90571912e96,
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::store
 * @see app/Http/Controllers/Api/SatuanObatController.php:62
 * @route '/api/satuan-obat'
 */
const storecfd23c4dc0d6271a40e83a10769cbb65 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storecfd23c4dc0d6271a40e83a10769cbb65.url(options),
    method: 'post',
})

storecfd23c4dc0d6271a40e83a10769cbb65.definition = {
    methods: ["post"],
    url: '/api/satuan-obat',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\SatuanObatController::store
 * @see app/Http/Controllers/Api/SatuanObatController.php:62
 * @route '/api/satuan-obat'
 */
storecfd23c4dc0d6271a40e83a10769cbb65.url = (options?: RouteQueryOptions) => {
    return storecfd23c4dc0d6271a40e83a10769cbb65.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::store
 * @see app/Http/Controllers/Api/SatuanObatController.php:62
 * @route '/api/satuan-obat'
 */
storecfd23c4dc0d6271a40e83a10769cbb65.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storecfd23c4dc0d6271a40e83a10769cbb65.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\SatuanObatController::store
 * @see app/Http/Controllers/Api/SatuanObatController.php:62
 * @route '/api/satuan-obat'
 */
    const storecfd23c4dc0d6271a40e83a10769cbb65Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storecfd23c4dc0d6271a40e83a10769cbb65.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\SatuanObatController::store
 * @see app/Http/Controllers/Api/SatuanObatController.php:62
 * @route '/api/satuan-obat'
 */
        storecfd23c4dc0d6271a40e83a10769cbb65Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storecfd23c4dc0d6271a40e83a10769cbb65.url(options),
            method: 'post',
        })
    
    storecfd23c4dc0d6271a40e83a10769cbb65.form = storecfd23c4dc0d6271a40e83a10769cbb65Form
    /**
* @see \App\Http\Controllers\Api\SatuanObatController::store
 * @see app/Http/Controllers/Api/SatuanObatController.php:62
 * @route '/api/satuan'
 */
const store6a1d915997ae6ddc1c95d90571912e96 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store6a1d915997ae6ddc1c95d90571912e96.url(options),
    method: 'post',
})

store6a1d915997ae6ddc1c95d90571912e96.definition = {
    methods: ["post"],
    url: '/api/satuan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\SatuanObatController::store
 * @see app/Http/Controllers/Api/SatuanObatController.php:62
 * @route '/api/satuan'
 */
store6a1d915997ae6ddc1c95d90571912e96.url = (options?: RouteQueryOptions) => {
    return store6a1d915997ae6ddc1c95d90571912e96.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::store
 * @see app/Http/Controllers/Api/SatuanObatController.php:62
 * @route '/api/satuan'
 */
store6a1d915997ae6ddc1c95d90571912e96.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store6a1d915997ae6ddc1c95d90571912e96.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\SatuanObatController::store
 * @see app/Http/Controllers/Api/SatuanObatController.php:62
 * @route '/api/satuan'
 */
    const store6a1d915997ae6ddc1c95d90571912e96Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store6a1d915997ae6ddc1c95d90571912e96.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\SatuanObatController::store
 * @see app/Http/Controllers/Api/SatuanObatController.php:62
 * @route '/api/satuan'
 */
        store6a1d915997ae6ddc1c95d90571912e96Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store6a1d915997ae6ddc1c95d90571912e96.url(options),
            method: 'post',
        })
    
    store6a1d915997ae6ddc1c95d90571912e96.form = store6a1d915997ae6ddc1c95d90571912e96Form

export const store = {
    '/api/satuan-obat': storecfd23c4dc0d6271a40e83a10769cbb65,
    '/api/satuan': store6a1d915997ae6ddc1c95d90571912e96,
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan-obat/{satuan_obat}'
 */
const show89735e5ed6385ec283804350c231bba7 = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show89735e5ed6385ec283804350c231bba7.url(args, options),
    method: 'get',
})

show89735e5ed6385ec283804350c231bba7.definition = {
    methods: ["get","head"],
    url: '/api/satuan-obat/{satuan_obat}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan-obat/{satuan_obat}'
 */
show89735e5ed6385ec283804350c231bba7.url = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { satuan_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    satuan_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        satuan_obat: args.satuan_obat,
                }

    return show89735e5ed6385ec283804350c231bba7.definition.url
            .replace('{satuan_obat}', parsedArgs.satuan_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan-obat/{satuan_obat}'
 */
show89735e5ed6385ec283804350c231bba7.get = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show89735e5ed6385ec283804350c231bba7.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan-obat/{satuan_obat}'
 */
show89735e5ed6385ec283804350c231bba7.head = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show89735e5ed6385ec283804350c231bba7.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan-obat/{satuan_obat}'
 */
    const show89735e5ed6385ec283804350c231bba7Form = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show89735e5ed6385ec283804350c231bba7.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan-obat/{satuan_obat}'
 */
        show89735e5ed6385ec283804350c231bba7Form.get = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show89735e5ed6385ec283804350c231bba7.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan-obat/{satuan_obat}'
 */
        show89735e5ed6385ec283804350c231bba7Form.head = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show89735e5ed6385ec283804350c231bba7.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show89735e5ed6385ec283804350c231bba7.form = show89735e5ed6385ec283804350c231bba7Form
    /**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan/{satuan}'
 */
const show772ef6b53556704c2b076d5c257665a9 = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show772ef6b53556704c2b076d5c257665a9.url(args, options),
    method: 'get',
})

show772ef6b53556704c2b076d5c257665a9.definition = {
    methods: ["get","head"],
    url: '/api/satuan/{satuan}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan/{satuan}'
 */
show772ef6b53556704c2b076d5c257665a9.url = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show772ef6b53556704c2b076d5c257665a9.definition.url
            .replace('{satuan}', parsedArgs.satuan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan/{satuan}'
 */
show772ef6b53556704c2b076d5c257665a9.get = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show772ef6b53556704c2b076d5c257665a9.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan/{satuan}'
 */
show772ef6b53556704c2b076d5c257665a9.head = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show772ef6b53556704c2b076d5c257665a9.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan/{satuan}'
 */
    const show772ef6b53556704c2b076d5c257665a9Form = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show772ef6b53556704c2b076d5c257665a9.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan/{satuan}'
 */
        show772ef6b53556704c2b076d5c257665a9Form.get = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show772ef6b53556704c2b076d5c257665a9.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\SatuanObatController::show
 * @see app/Http/Controllers/Api/SatuanObatController.php:89
 * @route '/api/satuan/{satuan}'
 */
        show772ef6b53556704c2b076d5c257665a9Form.head = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show772ef6b53556704c2b076d5c257665a9.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show772ef6b53556704c2b076d5c257665a9.form = show772ef6b53556704c2b076d5c257665a9Form

export const show = {
    '/api/satuan-obat/{satuan_obat}': show89735e5ed6385ec283804350c231bba7,
    '/api/satuan/{satuan}': show772ef6b53556704c2b076d5c257665a9,
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::update
 * @see app/Http/Controllers/Api/SatuanObatController.php:99
 * @route '/api/satuan-obat/{satuan_obat}'
 */
const update89735e5ed6385ec283804350c231bba7 = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update89735e5ed6385ec283804350c231bba7.url(args, options),
    method: 'put',
})

update89735e5ed6385ec283804350c231bba7.definition = {
    methods: ["put","patch"],
    url: '/api/satuan-obat/{satuan_obat}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\SatuanObatController::update
 * @see app/Http/Controllers/Api/SatuanObatController.php:99
 * @route '/api/satuan-obat/{satuan_obat}'
 */
update89735e5ed6385ec283804350c231bba7.url = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { satuan_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    satuan_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        satuan_obat: args.satuan_obat,
                }

    return update89735e5ed6385ec283804350c231bba7.definition.url
            .replace('{satuan_obat}', parsedArgs.satuan_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::update
 * @see app/Http/Controllers/Api/SatuanObatController.php:99
 * @route '/api/satuan-obat/{satuan_obat}'
 */
update89735e5ed6385ec283804350c231bba7.put = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update89735e5ed6385ec283804350c231bba7.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\SatuanObatController::update
 * @see app/Http/Controllers/Api/SatuanObatController.php:99
 * @route '/api/satuan-obat/{satuan_obat}'
 */
update89735e5ed6385ec283804350c231bba7.patch = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update89735e5ed6385ec283804350c231bba7.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\SatuanObatController::update
 * @see app/Http/Controllers/Api/SatuanObatController.php:99
 * @route '/api/satuan-obat/{satuan_obat}'
 */
    const update89735e5ed6385ec283804350c231bba7Form = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update89735e5ed6385ec283804350c231bba7.url(args, {
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
 * @route '/api/satuan-obat/{satuan_obat}'
 */
        update89735e5ed6385ec283804350c231bba7Form.put = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update89735e5ed6385ec283804350c231bba7.url(args, {
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
 * @route '/api/satuan-obat/{satuan_obat}'
 */
        update89735e5ed6385ec283804350c231bba7Form.patch = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update89735e5ed6385ec283804350c231bba7.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update89735e5ed6385ec283804350c231bba7.form = update89735e5ed6385ec283804350c231bba7Form
    /**
* @see \App\Http\Controllers\Api\SatuanObatController::update
 * @see app/Http/Controllers/Api/SatuanObatController.php:99
 * @route '/api/satuan/{satuan}'
 */
const update772ef6b53556704c2b076d5c257665a9 = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update772ef6b53556704c2b076d5c257665a9.url(args, options),
    method: 'put',
})

update772ef6b53556704c2b076d5c257665a9.definition = {
    methods: ["put","patch"],
    url: '/api/satuan/{satuan}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\SatuanObatController::update
 * @see app/Http/Controllers/Api/SatuanObatController.php:99
 * @route '/api/satuan/{satuan}'
 */
update772ef6b53556704c2b076d5c257665a9.url = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update772ef6b53556704c2b076d5c257665a9.definition.url
            .replace('{satuan}', parsedArgs.satuan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::update
 * @see app/Http/Controllers/Api/SatuanObatController.php:99
 * @route '/api/satuan/{satuan}'
 */
update772ef6b53556704c2b076d5c257665a9.put = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update772ef6b53556704c2b076d5c257665a9.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\SatuanObatController::update
 * @see app/Http/Controllers/Api/SatuanObatController.php:99
 * @route '/api/satuan/{satuan}'
 */
update772ef6b53556704c2b076d5c257665a9.patch = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update772ef6b53556704c2b076d5c257665a9.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\SatuanObatController::update
 * @see app/Http/Controllers/Api/SatuanObatController.php:99
 * @route '/api/satuan/{satuan}'
 */
    const update772ef6b53556704c2b076d5c257665a9Form = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update772ef6b53556704c2b076d5c257665a9.url(args, {
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
        update772ef6b53556704c2b076d5c257665a9Form.put = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update772ef6b53556704c2b076d5c257665a9.url(args, {
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
        update772ef6b53556704c2b076d5c257665a9Form.patch = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update772ef6b53556704c2b076d5c257665a9.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update772ef6b53556704c2b076d5c257665a9.form = update772ef6b53556704c2b076d5c257665a9Form

export const update = {
    '/api/satuan-obat/{satuan_obat}': update89735e5ed6385ec283804350c231bba7,
    '/api/satuan/{satuan}': update772ef6b53556704c2b076d5c257665a9,
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::destroy
 * @see app/Http/Controllers/Api/SatuanObatController.php:126
 * @route '/api/satuan-obat/{satuan_obat}'
 */
const destroy89735e5ed6385ec283804350c231bba7 = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy89735e5ed6385ec283804350c231bba7.url(args, options),
    method: 'delete',
})

destroy89735e5ed6385ec283804350c231bba7.definition = {
    methods: ["delete"],
    url: '/api/satuan-obat/{satuan_obat}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\SatuanObatController::destroy
 * @see app/Http/Controllers/Api/SatuanObatController.php:126
 * @route '/api/satuan-obat/{satuan_obat}'
 */
destroy89735e5ed6385ec283804350c231bba7.url = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { satuan_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    satuan_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        satuan_obat: args.satuan_obat,
                }

    return destroy89735e5ed6385ec283804350c231bba7.definition.url
            .replace('{satuan_obat}', parsedArgs.satuan_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::destroy
 * @see app/Http/Controllers/Api/SatuanObatController.php:126
 * @route '/api/satuan-obat/{satuan_obat}'
 */
destroy89735e5ed6385ec283804350c231bba7.delete = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy89735e5ed6385ec283804350c231bba7.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\SatuanObatController::destroy
 * @see app/Http/Controllers/Api/SatuanObatController.php:126
 * @route '/api/satuan-obat/{satuan_obat}'
 */
    const destroy89735e5ed6385ec283804350c231bba7Form = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy89735e5ed6385ec283804350c231bba7.url(args, {
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
 * @route '/api/satuan-obat/{satuan_obat}'
 */
        destroy89735e5ed6385ec283804350c231bba7Form.delete = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy89735e5ed6385ec283804350c231bba7.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy89735e5ed6385ec283804350c231bba7.form = destroy89735e5ed6385ec283804350c231bba7Form
    /**
* @see \App\Http\Controllers\Api\SatuanObatController::destroy
 * @see app/Http/Controllers/Api/SatuanObatController.php:126
 * @route '/api/satuan/{satuan}'
 */
const destroy772ef6b53556704c2b076d5c257665a9 = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy772ef6b53556704c2b076d5c257665a9.url(args, options),
    method: 'delete',
})

destroy772ef6b53556704c2b076d5c257665a9.definition = {
    methods: ["delete"],
    url: '/api/satuan/{satuan}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\SatuanObatController::destroy
 * @see app/Http/Controllers/Api/SatuanObatController.php:126
 * @route '/api/satuan/{satuan}'
 */
destroy772ef6b53556704c2b076d5c257665a9.url = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy772ef6b53556704c2b076d5c257665a9.definition.url
            .replace('{satuan}', parsedArgs.satuan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SatuanObatController::destroy
 * @see app/Http/Controllers/Api/SatuanObatController.php:126
 * @route '/api/satuan/{satuan}'
 */
destroy772ef6b53556704c2b076d5c257665a9.delete = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy772ef6b53556704c2b076d5c257665a9.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\SatuanObatController::destroy
 * @see app/Http/Controllers/Api/SatuanObatController.php:126
 * @route '/api/satuan/{satuan}'
 */
    const destroy772ef6b53556704c2b076d5c257665a9Form = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy772ef6b53556704c2b076d5c257665a9.url(args, {
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
        destroy772ef6b53556704c2b076d5c257665a9Form.delete = (args: { satuan: string | number } | [satuan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy772ef6b53556704c2b076d5c257665a9.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy772ef6b53556704c2b076d5c257665a9.form = destroy772ef6b53556704c2b076d5c257665a9Form

export const destroy = {
    '/api/satuan-obat/{satuan_obat}': destroy89735e5ed6385ec283804350c231bba7,
    '/api/satuan/{satuan}': destroy772ef6b53556704c2b076d5c257665a9,
}

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
const SatuanObatController = { index, store, show, update, destroy, active, toggleStatus }

export default SatuanObatController
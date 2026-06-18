import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis-obat'
 */
const index1c013db76813de7416d0822f67689667 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index1c013db76813de7416d0822f67689667.url(options),
    method: 'get',
})

index1c013db76813de7416d0822f67689667.definition = {
    methods: ["get","head"],
    url: '/api/jenis-obat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis-obat'
 */
index1c013db76813de7416d0822f67689667.url = (options?: RouteQueryOptions) => {
    return index1c013db76813de7416d0822f67689667.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis-obat'
 */
index1c013db76813de7416d0822f67689667.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index1c013db76813de7416d0822f67689667.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis-obat'
 */
index1c013db76813de7416d0822f67689667.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index1c013db76813de7416d0822f67689667.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis-obat'
 */
    const index1c013db76813de7416d0822f67689667Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index1c013db76813de7416d0822f67689667.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis-obat'
 */
        index1c013db76813de7416d0822f67689667Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index1c013db76813de7416d0822f67689667.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis-obat'
 */
        index1c013db76813de7416d0822f67689667Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index1c013db76813de7416d0822f67689667.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index1c013db76813de7416d0822f67689667.form = index1c013db76813de7416d0822f67689667Form
    /**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis'
 */
const indexee49bbd4948f089ca0da86ff8cf4fe06 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexee49bbd4948f089ca0da86ff8cf4fe06.url(options),
    method: 'get',
})

indexee49bbd4948f089ca0da86ff8cf4fe06.definition = {
    methods: ["get","head"],
    url: '/api/jenis',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis'
 */
indexee49bbd4948f089ca0da86ff8cf4fe06.url = (options?: RouteQueryOptions) => {
    return indexee49bbd4948f089ca0da86ff8cf4fe06.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis'
 */
indexee49bbd4948f089ca0da86ff8cf4fe06.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexee49bbd4948f089ca0da86ff8cf4fe06.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis'
 */
indexee49bbd4948f089ca0da86ff8cf4fe06.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexee49bbd4948f089ca0da86ff8cf4fe06.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis'
 */
    const indexee49bbd4948f089ca0da86ff8cf4fe06Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexee49bbd4948f089ca0da86ff8cf4fe06.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis'
 */
        indexee49bbd4948f089ca0da86ff8cf4fe06Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexee49bbd4948f089ca0da86ff8cf4fe06.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\JenisObatController::index
 * @see app/Http/Controllers/Api/JenisObatController.php:16
 * @route '/api/jenis'
 */
        indexee49bbd4948f089ca0da86ff8cf4fe06Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexee49bbd4948f089ca0da86ff8cf4fe06.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexee49bbd4948f089ca0da86ff8cf4fe06.form = indexee49bbd4948f089ca0da86ff8cf4fe06Form

export const index = {
    '/api/jenis-obat': index1c013db76813de7416d0822f67689667,
    '/api/jenis': indexee49bbd4948f089ca0da86ff8cf4fe06,
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::store
 * @see app/Http/Controllers/Api/JenisObatController.php:62
 * @route '/api/jenis-obat'
 */
const store1c013db76813de7416d0822f67689667 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store1c013db76813de7416d0822f67689667.url(options),
    method: 'post',
})

store1c013db76813de7416d0822f67689667.definition = {
    methods: ["post"],
    url: '/api/jenis-obat',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\JenisObatController::store
 * @see app/Http/Controllers/Api/JenisObatController.php:62
 * @route '/api/jenis-obat'
 */
store1c013db76813de7416d0822f67689667.url = (options?: RouteQueryOptions) => {
    return store1c013db76813de7416d0822f67689667.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::store
 * @see app/Http/Controllers/Api/JenisObatController.php:62
 * @route '/api/jenis-obat'
 */
store1c013db76813de7416d0822f67689667.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store1c013db76813de7416d0822f67689667.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\JenisObatController::store
 * @see app/Http/Controllers/Api/JenisObatController.php:62
 * @route '/api/jenis-obat'
 */
    const store1c013db76813de7416d0822f67689667Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store1c013db76813de7416d0822f67689667.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\JenisObatController::store
 * @see app/Http/Controllers/Api/JenisObatController.php:62
 * @route '/api/jenis-obat'
 */
        store1c013db76813de7416d0822f67689667Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store1c013db76813de7416d0822f67689667.url(options),
            method: 'post',
        })
    
    store1c013db76813de7416d0822f67689667.form = store1c013db76813de7416d0822f67689667Form
    /**
* @see \App\Http\Controllers\Api\JenisObatController::store
 * @see app/Http/Controllers/Api/JenisObatController.php:62
 * @route '/api/jenis'
 */
const storeee49bbd4948f089ca0da86ff8cf4fe06 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeee49bbd4948f089ca0da86ff8cf4fe06.url(options),
    method: 'post',
})

storeee49bbd4948f089ca0da86ff8cf4fe06.definition = {
    methods: ["post"],
    url: '/api/jenis',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\JenisObatController::store
 * @see app/Http/Controllers/Api/JenisObatController.php:62
 * @route '/api/jenis'
 */
storeee49bbd4948f089ca0da86ff8cf4fe06.url = (options?: RouteQueryOptions) => {
    return storeee49bbd4948f089ca0da86ff8cf4fe06.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::store
 * @see app/Http/Controllers/Api/JenisObatController.php:62
 * @route '/api/jenis'
 */
storeee49bbd4948f089ca0da86ff8cf4fe06.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeee49bbd4948f089ca0da86ff8cf4fe06.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\JenisObatController::store
 * @see app/Http/Controllers/Api/JenisObatController.php:62
 * @route '/api/jenis'
 */
    const storeee49bbd4948f089ca0da86ff8cf4fe06Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storeee49bbd4948f089ca0da86ff8cf4fe06.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\JenisObatController::store
 * @see app/Http/Controllers/Api/JenisObatController.php:62
 * @route '/api/jenis'
 */
        storeee49bbd4948f089ca0da86ff8cf4fe06Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storeee49bbd4948f089ca0da86ff8cf4fe06.url(options),
            method: 'post',
        })
    
    storeee49bbd4948f089ca0da86ff8cf4fe06.form = storeee49bbd4948f089ca0da86ff8cf4fe06Form

export const store = {
    '/api/jenis-obat': store1c013db76813de7416d0822f67689667,
    '/api/jenis': storeee49bbd4948f089ca0da86ff8cf4fe06,
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis-obat/{jenis_obat}'
 */
const showcd0b9a0025bc3dbde61666c52720ca0c = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showcd0b9a0025bc3dbde61666c52720ca0c.url(args, options),
    method: 'get',
})

showcd0b9a0025bc3dbde61666c52720ca0c.definition = {
    methods: ["get","head"],
    url: '/api/jenis-obat/{jenis_obat}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis-obat/{jenis_obat}'
 */
showcd0b9a0025bc3dbde61666c52720ca0c.url = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jenis_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    jenis_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        jenis_obat: args.jenis_obat,
                }

    return showcd0b9a0025bc3dbde61666c52720ca0c.definition.url
            .replace('{jenis_obat}', parsedArgs.jenis_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis-obat/{jenis_obat}'
 */
showcd0b9a0025bc3dbde61666c52720ca0c.get = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showcd0b9a0025bc3dbde61666c52720ca0c.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis-obat/{jenis_obat}'
 */
showcd0b9a0025bc3dbde61666c52720ca0c.head = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showcd0b9a0025bc3dbde61666c52720ca0c.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis-obat/{jenis_obat}'
 */
    const showcd0b9a0025bc3dbde61666c52720ca0cForm = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showcd0b9a0025bc3dbde61666c52720ca0c.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis-obat/{jenis_obat}'
 */
        showcd0b9a0025bc3dbde61666c52720ca0cForm.get = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showcd0b9a0025bc3dbde61666c52720ca0c.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis-obat/{jenis_obat}'
 */
        showcd0b9a0025bc3dbde61666c52720ca0cForm.head = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showcd0b9a0025bc3dbde61666c52720ca0c.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showcd0b9a0025bc3dbde61666c52720ca0c.form = showcd0b9a0025bc3dbde61666c52720ca0cForm
    /**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis/{jeni}'
 */
const showb23473f8ddccb2c2b5208e2b36b9a5a3 = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showb23473f8ddccb2c2b5208e2b36b9a5a3.url(args, options),
    method: 'get',
})

showb23473f8ddccb2c2b5208e2b36b9a5a3.definition = {
    methods: ["get","head"],
    url: '/api/jenis/{jeni}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis/{jeni}'
 */
showb23473f8ddccb2c2b5208e2b36b9a5a3.url = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showb23473f8ddccb2c2b5208e2b36b9a5a3.definition.url
            .replace('{jeni}', parsedArgs.jeni.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis/{jeni}'
 */
showb23473f8ddccb2c2b5208e2b36b9a5a3.get = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showb23473f8ddccb2c2b5208e2b36b9a5a3.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis/{jeni}'
 */
showb23473f8ddccb2c2b5208e2b36b9a5a3.head = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showb23473f8ddccb2c2b5208e2b36b9a5a3.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis/{jeni}'
 */
    const showb23473f8ddccb2c2b5208e2b36b9a5a3Form = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showb23473f8ddccb2c2b5208e2b36b9a5a3.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis/{jeni}'
 */
        showb23473f8ddccb2c2b5208e2b36b9a5a3Form.get = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showb23473f8ddccb2c2b5208e2b36b9a5a3.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\JenisObatController::show
 * @see app/Http/Controllers/Api/JenisObatController.php:89
 * @route '/api/jenis/{jeni}'
 */
        showb23473f8ddccb2c2b5208e2b36b9a5a3Form.head = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showb23473f8ddccb2c2b5208e2b36b9a5a3.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showb23473f8ddccb2c2b5208e2b36b9a5a3.form = showb23473f8ddccb2c2b5208e2b36b9a5a3Form

export const show = {
    '/api/jenis-obat/{jenis_obat}': showcd0b9a0025bc3dbde61666c52720ca0c,
    '/api/jenis/{jeni}': showb23473f8ddccb2c2b5208e2b36b9a5a3,
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::update
 * @see app/Http/Controllers/Api/JenisObatController.php:99
 * @route '/api/jenis-obat/{jenis_obat}'
 */
const updatecd0b9a0025bc3dbde61666c52720ca0c = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatecd0b9a0025bc3dbde61666c52720ca0c.url(args, options),
    method: 'put',
})

updatecd0b9a0025bc3dbde61666c52720ca0c.definition = {
    methods: ["put","patch"],
    url: '/api/jenis-obat/{jenis_obat}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\JenisObatController::update
 * @see app/Http/Controllers/Api/JenisObatController.php:99
 * @route '/api/jenis-obat/{jenis_obat}'
 */
updatecd0b9a0025bc3dbde61666c52720ca0c.url = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jenis_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    jenis_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        jenis_obat: args.jenis_obat,
                }

    return updatecd0b9a0025bc3dbde61666c52720ca0c.definition.url
            .replace('{jenis_obat}', parsedArgs.jenis_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::update
 * @see app/Http/Controllers/Api/JenisObatController.php:99
 * @route '/api/jenis-obat/{jenis_obat}'
 */
updatecd0b9a0025bc3dbde61666c52720ca0c.put = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatecd0b9a0025bc3dbde61666c52720ca0c.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\JenisObatController::update
 * @see app/Http/Controllers/Api/JenisObatController.php:99
 * @route '/api/jenis-obat/{jenis_obat}'
 */
updatecd0b9a0025bc3dbde61666c52720ca0c.patch = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatecd0b9a0025bc3dbde61666c52720ca0c.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\JenisObatController::update
 * @see app/Http/Controllers/Api/JenisObatController.php:99
 * @route '/api/jenis-obat/{jenis_obat}'
 */
    const updatecd0b9a0025bc3dbde61666c52720ca0cForm = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updatecd0b9a0025bc3dbde61666c52720ca0c.url(args, {
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
 * @route '/api/jenis-obat/{jenis_obat}'
 */
        updatecd0b9a0025bc3dbde61666c52720ca0cForm.put = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatecd0b9a0025bc3dbde61666c52720ca0c.url(args, {
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
 * @route '/api/jenis-obat/{jenis_obat}'
 */
        updatecd0b9a0025bc3dbde61666c52720ca0cForm.patch = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatecd0b9a0025bc3dbde61666c52720ca0c.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updatecd0b9a0025bc3dbde61666c52720ca0c.form = updatecd0b9a0025bc3dbde61666c52720ca0cForm
    /**
* @see \App\Http\Controllers\Api\JenisObatController::update
 * @see app/Http/Controllers/Api/JenisObatController.php:99
 * @route '/api/jenis/{jeni}'
 */
const updateb23473f8ddccb2c2b5208e2b36b9a5a3 = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateb23473f8ddccb2c2b5208e2b36b9a5a3.url(args, options),
    method: 'put',
})

updateb23473f8ddccb2c2b5208e2b36b9a5a3.definition = {
    methods: ["put","patch"],
    url: '/api/jenis/{jeni}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\JenisObatController::update
 * @see app/Http/Controllers/Api/JenisObatController.php:99
 * @route '/api/jenis/{jeni}'
 */
updateb23473f8ddccb2c2b5208e2b36b9a5a3.url = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updateb23473f8ddccb2c2b5208e2b36b9a5a3.definition.url
            .replace('{jeni}', parsedArgs.jeni.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::update
 * @see app/Http/Controllers/Api/JenisObatController.php:99
 * @route '/api/jenis/{jeni}'
 */
updateb23473f8ddccb2c2b5208e2b36b9a5a3.put = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateb23473f8ddccb2c2b5208e2b36b9a5a3.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\JenisObatController::update
 * @see app/Http/Controllers/Api/JenisObatController.php:99
 * @route '/api/jenis/{jeni}'
 */
updateb23473f8ddccb2c2b5208e2b36b9a5a3.patch = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateb23473f8ddccb2c2b5208e2b36b9a5a3.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\JenisObatController::update
 * @see app/Http/Controllers/Api/JenisObatController.php:99
 * @route '/api/jenis/{jeni}'
 */
    const updateb23473f8ddccb2c2b5208e2b36b9a5a3Form = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateb23473f8ddccb2c2b5208e2b36b9a5a3.url(args, {
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
        updateb23473f8ddccb2c2b5208e2b36b9a5a3Form.put = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateb23473f8ddccb2c2b5208e2b36b9a5a3.url(args, {
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
        updateb23473f8ddccb2c2b5208e2b36b9a5a3Form.patch = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateb23473f8ddccb2c2b5208e2b36b9a5a3.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateb23473f8ddccb2c2b5208e2b36b9a5a3.form = updateb23473f8ddccb2c2b5208e2b36b9a5a3Form

export const update = {
    '/api/jenis-obat/{jenis_obat}': updatecd0b9a0025bc3dbde61666c52720ca0c,
    '/api/jenis/{jeni}': updateb23473f8ddccb2c2b5208e2b36b9a5a3,
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::destroy
 * @see app/Http/Controllers/Api/JenisObatController.php:126
 * @route '/api/jenis-obat/{jenis_obat}'
 */
const destroycd0b9a0025bc3dbde61666c52720ca0c = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroycd0b9a0025bc3dbde61666c52720ca0c.url(args, options),
    method: 'delete',
})

destroycd0b9a0025bc3dbde61666c52720ca0c.definition = {
    methods: ["delete"],
    url: '/api/jenis-obat/{jenis_obat}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\JenisObatController::destroy
 * @see app/Http/Controllers/Api/JenisObatController.php:126
 * @route '/api/jenis-obat/{jenis_obat}'
 */
destroycd0b9a0025bc3dbde61666c52720ca0c.url = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jenis_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    jenis_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        jenis_obat: args.jenis_obat,
                }

    return destroycd0b9a0025bc3dbde61666c52720ca0c.definition.url
            .replace('{jenis_obat}', parsedArgs.jenis_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::destroy
 * @see app/Http/Controllers/Api/JenisObatController.php:126
 * @route '/api/jenis-obat/{jenis_obat}'
 */
destroycd0b9a0025bc3dbde61666c52720ca0c.delete = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroycd0b9a0025bc3dbde61666c52720ca0c.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\JenisObatController::destroy
 * @see app/Http/Controllers/Api/JenisObatController.php:126
 * @route '/api/jenis-obat/{jenis_obat}'
 */
    const destroycd0b9a0025bc3dbde61666c52720ca0cForm = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroycd0b9a0025bc3dbde61666c52720ca0c.url(args, {
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
 * @route '/api/jenis-obat/{jenis_obat}'
 */
        destroycd0b9a0025bc3dbde61666c52720ca0cForm.delete = (args: { jenis_obat: string | number } | [jenis_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroycd0b9a0025bc3dbde61666c52720ca0c.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroycd0b9a0025bc3dbde61666c52720ca0c.form = destroycd0b9a0025bc3dbde61666c52720ca0cForm
    /**
* @see \App\Http\Controllers\Api\JenisObatController::destroy
 * @see app/Http/Controllers/Api/JenisObatController.php:126
 * @route '/api/jenis/{jeni}'
 */
const destroyb23473f8ddccb2c2b5208e2b36b9a5a3 = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyb23473f8ddccb2c2b5208e2b36b9a5a3.url(args, options),
    method: 'delete',
})

destroyb23473f8ddccb2c2b5208e2b36b9a5a3.definition = {
    methods: ["delete"],
    url: '/api/jenis/{jeni}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\JenisObatController::destroy
 * @see app/Http/Controllers/Api/JenisObatController.php:126
 * @route '/api/jenis/{jeni}'
 */
destroyb23473f8ddccb2c2b5208e2b36b9a5a3.url = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroyb23473f8ddccb2c2b5208e2b36b9a5a3.definition.url
            .replace('{jeni}', parsedArgs.jeni.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JenisObatController::destroy
 * @see app/Http/Controllers/Api/JenisObatController.php:126
 * @route '/api/jenis/{jeni}'
 */
destroyb23473f8ddccb2c2b5208e2b36b9a5a3.delete = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyb23473f8ddccb2c2b5208e2b36b9a5a3.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\JenisObatController::destroy
 * @see app/Http/Controllers/Api/JenisObatController.php:126
 * @route '/api/jenis/{jeni}'
 */
    const destroyb23473f8ddccb2c2b5208e2b36b9a5a3Form = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroyb23473f8ddccb2c2b5208e2b36b9a5a3.url(args, {
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
        destroyb23473f8ddccb2c2b5208e2b36b9a5a3Form.delete = (args: { jeni: string | number } | [jeni: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroyb23473f8ddccb2c2b5208e2b36b9a5a3.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroyb23473f8ddccb2c2b5208e2b36b9a5a3.form = destroyb23473f8ddccb2c2b5208e2b36b9a5a3Form

export const destroy = {
    '/api/jenis-obat/{jenis_obat}': destroycd0b9a0025bc3dbde61666c52720ca0c,
    '/api/jenis/{jeni}': destroyb23473f8ddccb2c2b5208e2b36b9a5a3,
}

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
const JenisObatController = { index, store, show, update, destroy, active, toggleStatus }

export default JenisObatController
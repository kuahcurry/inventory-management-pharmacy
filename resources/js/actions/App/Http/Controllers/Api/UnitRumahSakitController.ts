import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::index
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:16
 * @route '/api/unit-rumah-sakit'
 */
const index3d8e9afd4420909d4196f4f57382b87d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index3d8e9afd4420909d4196f4f57382b87d.url(options),
    method: 'get',
})

index3d8e9afd4420909d4196f4f57382b87d.definition = {
    methods: ["get","head"],
    url: '/api/unit-rumah-sakit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::index
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:16
 * @route '/api/unit-rumah-sakit'
 */
index3d8e9afd4420909d4196f4f57382b87d.url = (options?: RouteQueryOptions) => {
    return index3d8e9afd4420909d4196f4f57382b87d.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::index
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:16
 * @route '/api/unit-rumah-sakit'
 */
index3d8e9afd4420909d4196f4f57382b87d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index3d8e9afd4420909d4196f4f57382b87d.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::index
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:16
 * @route '/api/unit-rumah-sakit'
 */
index3d8e9afd4420909d4196f4f57382b87d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index3d8e9afd4420909d4196f4f57382b87d.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::index
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:16
 * @route '/api/unit-rumah-sakit'
 */
    const index3d8e9afd4420909d4196f4f57382b87dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index3d8e9afd4420909d4196f4f57382b87d.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::index
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:16
 * @route '/api/unit-rumah-sakit'
 */
        index3d8e9afd4420909d4196f4f57382b87dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index3d8e9afd4420909d4196f4f57382b87d.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::index
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:16
 * @route '/api/unit-rumah-sakit'
 */
        index3d8e9afd4420909d4196f4f57382b87dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index3d8e9afd4420909d4196f4f57382b87d.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index3d8e9afd4420909d4196f4f57382b87d.form = index3d8e9afd4420909d4196f4f57382b87dForm
    /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::index
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:16
 * @route '/api/unit'
 */
const index97449de0c039617ad2e9051b0d8fce99 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index97449de0c039617ad2e9051b0d8fce99.url(options),
    method: 'get',
})

index97449de0c039617ad2e9051b0d8fce99.definition = {
    methods: ["get","head"],
    url: '/api/unit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::index
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:16
 * @route '/api/unit'
 */
index97449de0c039617ad2e9051b0d8fce99.url = (options?: RouteQueryOptions) => {
    return index97449de0c039617ad2e9051b0d8fce99.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::index
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:16
 * @route '/api/unit'
 */
index97449de0c039617ad2e9051b0d8fce99.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index97449de0c039617ad2e9051b0d8fce99.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::index
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:16
 * @route '/api/unit'
 */
index97449de0c039617ad2e9051b0d8fce99.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index97449de0c039617ad2e9051b0d8fce99.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::index
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:16
 * @route '/api/unit'
 */
    const index97449de0c039617ad2e9051b0d8fce99Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index97449de0c039617ad2e9051b0d8fce99.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::index
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:16
 * @route '/api/unit'
 */
        index97449de0c039617ad2e9051b0d8fce99Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index97449de0c039617ad2e9051b0d8fce99.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::index
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:16
 * @route '/api/unit'
 */
        index97449de0c039617ad2e9051b0d8fce99Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index97449de0c039617ad2e9051b0d8fce99.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index97449de0c039617ad2e9051b0d8fce99.form = index97449de0c039617ad2e9051b0d8fce99Form

export const index = {
    '/api/unit-rumah-sakit': index3d8e9afd4420909d4196f4f57382b87d,
    '/api/unit': index97449de0c039617ad2e9051b0d8fce99,
}

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::store
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:66
 * @route '/api/unit-rumah-sakit'
 */
const store3d8e9afd4420909d4196f4f57382b87d = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store3d8e9afd4420909d4196f4f57382b87d.url(options),
    method: 'post',
})

store3d8e9afd4420909d4196f4f57382b87d.definition = {
    methods: ["post"],
    url: '/api/unit-rumah-sakit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::store
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:66
 * @route '/api/unit-rumah-sakit'
 */
store3d8e9afd4420909d4196f4f57382b87d.url = (options?: RouteQueryOptions) => {
    return store3d8e9afd4420909d4196f4f57382b87d.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::store
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:66
 * @route '/api/unit-rumah-sakit'
 */
store3d8e9afd4420909d4196f4f57382b87d.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store3d8e9afd4420909d4196f4f57382b87d.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::store
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:66
 * @route '/api/unit-rumah-sakit'
 */
    const store3d8e9afd4420909d4196f4f57382b87dForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store3d8e9afd4420909d4196f4f57382b87d.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::store
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:66
 * @route '/api/unit-rumah-sakit'
 */
        store3d8e9afd4420909d4196f4f57382b87dForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store3d8e9afd4420909d4196f4f57382b87d.url(options),
            method: 'post',
        })
    
    store3d8e9afd4420909d4196f4f57382b87d.form = store3d8e9afd4420909d4196f4f57382b87dForm
    /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::store
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:66
 * @route '/api/unit'
 */
const store97449de0c039617ad2e9051b0d8fce99 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store97449de0c039617ad2e9051b0d8fce99.url(options),
    method: 'post',
})

store97449de0c039617ad2e9051b0d8fce99.definition = {
    methods: ["post"],
    url: '/api/unit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::store
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:66
 * @route '/api/unit'
 */
store97449de0c039617ad2e9051b0d8fce99.url = (options?: RouteQueryOptions) => {
    return store97449de0c039617ad2e9051b0d8fce99.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::store
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:66
 * @route '/api/unit'
 */
store97449de0c039617ad2e9051b0d8fce99.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store97449de0c039617ad2e9051b0d8fce99.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::store
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:66
 * @route '/api/unit'
 */
    const store97449de0c039617ad2e9051b0d8fce99Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store97449de0c039617ad2e9051b0d8fce99.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::store
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:66
 * @route '/api/unit'
 */
        store97449de0c039617ad2e9051b0d8fce99Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store97449de0c039617ad2e9051b0d8fce99.url(options),
            method: 'post',
        })
    
    store97449de0c039617ad2e9051b0d8fce99.form = store97449de0c039617ad2e9051b0d8fce99Form

export const store = {
    '/api/unit-rumah-sakit': store3d8e9afd4420909d4196f4f57382b87d,
    '/api/unit': store97449de0c039617ad2e9051b0d8fce99,
}

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::show
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:104
 * @route '/api/unit-rumah-sakit/{unit_rumah_sakit}'
 */
const showef4008f1762e9df28deb6f8bef9ac62c = (args: { unit_rumah_sakit: string | number } | [unit_rumah_sakit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showef4008f1762e9df28deb6f8bef9ac62c.url(args, options),
    method: 'get',
})

showef4008f1762e9df28deb6f8bef9ac62c.definition = {
    methods: ["get","head"],
    url: '/api/unit-rumah-sakit/{unit_rumah_sakit}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::show
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:104
 * @route '/api/unit-rumah-sakit/{unit_rumah_sakit}'
 */
showef4008f1762e9df28deb6f8bef9ac62c.url = (args: { unit_rumah_sakit: string | number } | [unit_rumah_sakit: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { unit_rumah_sakit: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    unit_rumah_sakit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        unit_rumah_sakit: args.unit_rumah_sakit,
                }

    return showef4008f1762e9df28deb6f8bef9ac62c.definition.url
            .replace('{unit_rumah_sakit}', parsedArgs.unit_rumah_sakit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::show
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:104
 * @route '/api/unit-rumah-sakit/{unit_rumah_sakit}'
 */
showef4008f1762e9df28deb6f8bef9ac62c.get = (args: { unit_rumah_sakit: string | number } | [unit_rumah_sakit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showef4008f1762e9df28deb6f8bef9ac62c.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::show
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:104
 * @route '/api/unit-rumah-sakit/{unit_rumah_sakit}'
 */
showef4008f1762e9df28deb6f8bef9ac62c.head = (args: { unit_rumah_sakit: string | number } | [unit_rumah_sakit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showef4008f1762e9df28deb6f8bef9ac62c.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::show
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:104
 * @route '/api/unit-rumah-sakit/{unit_rumah_sakit}'
 */
    const showef4008f1762e9df28deb6f8bef9ac62cForm = (args: { unit_rumah_sakit: string | number } | [unit_rumah_sakit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showef4008f1762e9df28deb6f8bef9ac62c.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::show
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:104
 * @route '/api/unit-rumah-sakit/{unit_rumah_sakit}'
 */
        showef4008f1762e9df28deb6f8bef9ac62cForm.get = (args: { unit_rumah_sakit: string | number } | [unit_rumah_sakit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showef4008f1762e9df28deb6f8bef9ac62c.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::show
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:104
 * @route '/api/unit-rumah-sakit/{unit_rumah_sakit}'
 */
        showef4008f1762e9df28deb6f8bef9ac62cForm.head = (args: { unit_rumah_sakit: string | number } | [unit_rumah_sakit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showef4008f1762e9df28deb6f8bef9ac62c.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showef4008f1762e9df28deb6f8bef9ac62c.form = showef4008f1762e9df28deb6f8bef9ac62cForm
    /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::show
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:104
 * @route '/api/unit/{unit}'
 */
const showb96a13a56571978b8e59637d6819abfc = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showb96a13a56571978b8e59637d6819abfc.url(args, options),
    method: 'get',
})

showb96a13a56571978b8e59637d6819abfc.definition = {
    methods: ["get","head"],
    url: '/api/unit/{unit}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::show
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:104
 * @route '/api/unit/{unit}'
 */
showb96a13a56571978b8e59637d6819abfc.url = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showb96a13a56571978b8e59637d6819abfc.definition.url
            .replace('{unit}', parsedArgs.unit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::show
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:104
 * @route '/api/unit/{unit}'
 */
showb96a13a56571978b8e59637d6819abfc.get = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showb96a13a56571978b8e59637d6819abfc.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::show
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:104
 * @route '/api/unit/{unit}'
 */
showb96a13a56571978b8e59637d6819abfc.head = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showb96a13a56571978b8e59637d6819abfc.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::show
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:104
 * @route '/api/unit/{unit}'
 */
    const showb96a13a56571978b8e59637d6819abfcForm = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showb96a13a56571978b8e59637d6819abfc.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::show
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:104
 * @route '/api/unit/{unit}'
 */
        showb96a13a56571978b8e59637d6819abfcForm.get = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showb96a13a56571978b8e59637d6819abfc.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::show
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:104
 * @route '/api/unit/{unit}'
 */
        showb96a13a56571978b8e59637d6819abfcForm.head = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showb96a13a56571978b8e59637d6819abfc.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showb96a13a56571978b8e59637d6819abfc.form = showb96a13a56571978b8e59637d6819abfcForm

export const show = {
    '/api/unit-rumah-sakit/{unit_rumah_sakit}': showef4008f1762e9df28deb6f8bef9ac62c,
    '/api/unit/{unit}': showb96a13a56571978b8e59637d6819abfc,
}

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::update
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:112
 * @route '/api/unit-rumah-sakit/{unit_rumah_sakit}'
 */
const updateef4008f1762e9df28deb6f8bef9ac62c = (args: { unit_rumah_sakit: string | number } | [unit_rumah_sakit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateef4008f1762e9df28deb6f8bef9ac62c.url(args, options),
    method: 'put',
})

updateef4008f1762e9df28deb6f8bef9ac62c.definition = {
    methods: ["put","patch"],
    url: '/api/unit-rumah-sakit/{unit_rumah_sakit}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::update
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:112
 * @route '/api/unit-rumah-sakit/{unit_rumah_sakit}'
 */
updateef4008f1762e9df28deb6f8bef9ac62c.url = (args: { unit_rumah_sakit: string | number } | [unit_rumah_sakit: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { unit_rumah_sakit: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    unit_rumah_sakit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        unit_rumah_sakit: args.unit_rumah_sakit,
                }

    return updateef4008f1762e9df28deb6f8bef9ac62c.definition.url
            .replace('{unit_rumah_sakit}', parsedArgs.unit_rumah_sakit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::update
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:112
 * @route '/api/unit-rumah-sakit/{unit_rumah_sakit}'
 */
updateef4008f1762e9df28deb6f8bef9ac62c.put = (args: { unit_rumah_sakit: string | number } | [unit_rumah_sakit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateef4008f1762e9df28deb6f8bef9ac62c.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::update
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:112
 * @route '/api/unit-rumah-sakit/{unit_rumah_sakit}'
 */
updateef4008f1762e9df28deb6f8bef9ac62c.patch = (args: { unit_rumah_sakit: string | number } | [unit_rumah_sakit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateef4008f1762e9df28deb6f8bef9ac62c.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::update
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:112
 * @route '/api/unit-rumah-sakit/{unit_rumah_sakit}'
 */
    const updateef4008f1762e9df28deb6f8bef9ac62cForm = (args: { unit_rumah_sakit: string | number } | [unit_rumah_sakit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateef4008f1762e9df28deb6f8bef9ac62c.url(args, {
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
 * @route '/api/unit-rumah-sakit/{unit_rumah_sakit}'
 */
        updateef4008f1762e9df28deb6f8bef9ac62cForm.put = (args: { unit_rumah_sakit: string | number } | [unit_rumah_sakit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateef4008f1762e9df28deb6f8bef9ac62c.url(args, {
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
 * @route '/api/unit-rumah-sakit/{unit_rumah_sakit}'
 */
        updateef4008f1762e9df28deb6f8bef9ac62cForm.patch = (args: { unit_rumah_sakit: string | number } | [unit_rumah_sakit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateef4008f1762e9df28deb6f8bef9ac62c.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateef4008f1762e9df28deb6f8bef9ac62c.form = updateef4008f1762e9df28deb6f8bef9ac62cForm
    /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::update
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:112
 * @route '/api/unit/{unit}'
 */
const updateb96a13a56571978b8e59637d6819abfc = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateb96a13a56571978b8e59637d6819abfc.url(args, options),
    method: 'put',
})

updateb96a13a56571978b8e59637d6819abfc.definition = {
    methods: ["put","patch"],
    url: '/api/unit/{unit}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::update
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:112
 * @route '/api/unit/{unit}'
 */
updateb96a13a56571978b8e59637d6819abfc.url = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updateb96a13a56571978b8e59637d6819abfc.definition.url
            .replace('{unit}', parsedArgs.unit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::update
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:112
 * @route '/api/unit/{unit}'
 */
updateb96a13a56571978b8e59637d6819abfc.put = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateb96a13a56571978b8e59637d6819abfc.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::update
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:112
 * @route '/api/unit/{unit}'
 */
updateb96a13a56571978b8e59637d6819abfc.patch = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateb96a13a56571978b8e59637d6819abfc.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::update
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:112
 * @route '/api/unit/{unit}'
 */
    const updateb96a13a56571978b8e59637d6819abfcForm = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateb96a13a56571978b8e59637d6819abfc.url(args, {
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
        updateb96a13a56571978b8e59637d6819abfcForm.put = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateb96a13a56571978b8e59637d6819abfc.url(args, {
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
        updateb96a13a56571978b8e59637d6819abfcForm.patch = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateb96a13a56571978b8e59637d6819abfc.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateb96a13a56571978b8e59637d6819abfc.form = updateb96a13a56571978b8e59637d6819abfcForm

export const update = {
    '/api/unit-rumah-sakit/{unit_rumah_sakit}': updateef4008f1762e9df28deb6f8bef9ac62c,
    '/api/unit/{unit}': updateb96a13a56571978b8e59637d6819abfc,
}

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::destroy
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:150
 * @route '/api/unit-rumah-sakit/{unit_rumah_sakit}'
 */
const destroyef4008f1762e9df28deb6f8bef9ac62c = (args: { unit_rumah_sakit: string | number } | [unit_rumah_sakit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyef4008f1762e9df28deb6f8bef9ac62c.url(args, options),
    method: 'delete',
})

destroyef4008f1762e9df28deb6f8bef9ac62c.definition = {
    methods: ["delete"],
    url: '/api/unit-rumah-sakit/{unit_rumah_sakit}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::destroy
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:150
 * @route '/api/unit-rumah-sakit/{unit_rumah_sakit}'
 */
destroyef4008f1762e9df28deb6f8bef9ac62c.url = (args: { unit_rumah_sakit: string | number } | [unit_rumah_sakit: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { unit_rumah_sakit: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    unit_rumah_sakit: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        unit_rumah_sakit: args.unit_rumah_sakit,
                }

    return destroyef4008f1762e9df28deb6f8bef9ac62c.definition.url
            .replace('{unit_rumah_sakit}', parsedArgs.unit_rumah_sakit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::destroy
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:150
 * @route '/api/unit-rumah-sakit/{unit_rumah_sakit}'
 */
destroyef4008f1762e9df28deb6f8bef9ac62c.delete = (args: { unit_rumah_sakit: string | number } | [unit_rumah_sakit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyef4008f1762e9df28deb6f8bef9ac62c.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::destroy
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:150
 * @route '/api/unit-rumah-sakit/{unit_rumah_sakit}'
 */
    const destroyef4008f1762e9df28deb6f8bef9ac62cForm = (args: { unit_rumah_sakit: string | number } | [unit_rumah_sakit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroyef4008f1762e9df28deb6f8bef9ac62c.url(args, {
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
 * @route '/api/unit-rumah-sakit/{unit_rumah_sakit}'
 */
        destroyef4008f1762e9df28deb6f8bef9ac62cForm.delete = (args: { unit_rumah_sakit: string | number } | [unit_rumah_sakit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroyef4008f1762e9df28deb6f8bef9ac62c.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroyef4008f1762e9df28deb6f8bef9ac62c.form = destroyef4008f1762e9df28deb6f8bef9ac62cForm
    /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::destroy
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:150
 * @route '/api/unit/{unit}'
 */
const destroyb96a13a56571978b8e59637d6819abfc = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyb96a13a56571978b8e59637d6819abfc.url(args, options),
    method: 'delete',
})

destroyb96a13a56571978b8e59637d6819abfc.definition = {
    methods: ["delete"],
    url: '/api/unit/{unit}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::destroy
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:150
 * @route '/api/unit/{unit}'
 */
destroyb96a13a56571978b8e59637d6819abfc.url = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroyb96a13a56571978b8e59637d6819abfc.definition.url
            .replace('{unit}', parsedArgs.unit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::destroy
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:150
 * @route '/api/unit/{unit}'
 */
destroyb96a13a56571978b8e59637d6819abfc.delete = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyb96a13a56571978b8e59637d6819abfc.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\UnitRumahSakitController::destroy
 * @see app/Http/Controllers/Api/UnitRumahSakitController.php:150
 * @route '/api/unit/{unit}'
 */
    const destroyb96a13a56571978b8e59637d6819abfcForm = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroyb96a13a56571978b8e59637d6819abfc.url(args, {
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
        destroyb96a13a56571978b8e59637d6819abfcForm.delete = (args: { unit: string | number } | [unit: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroyb96a13a56571978b8e59637d6819abfc.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroyb96a13a56571978b8e59637d6819abfc.form = destroyb96a13a56571978b8e59637d6819abfcForm

export const destroy = {
    '/api/unit-rumah-sakit/{unit_rumah_sakit}': destroyef4008f1762e9df28deb6f8bef9ac62c,
    '/api/unit/{unit}': destroyb96a13a56571978b8e59637d6819abfc,
}

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
const UnitRumahSakitController = { index, store, show, update, destroy, active, statistics, toggleStatus }

export default UnitRumahSakitController
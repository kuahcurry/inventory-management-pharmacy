import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\HutangController::index
 * @see app/Http/Controllers/Api/HutangController.php:14
 * @route '/api/hutang'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/hutang',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\HutangController::index
 * @see app/Http/Controllers/Api/HutangController.php:14
 * @route '/api/hutang'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HutangController::index
 * @see app/Http/Controllers/Api/HutangController.php:14
 * @route '/api/hutang'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\HutangController::index
 * @see app/Http/Controllers/Api/HutangController.php:14
 * @route '/api/hutang'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\HutangController::index
 * @see app/Http/Controllers/Api/HutangController.php:14
 * @route '/api/hutang'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\HutangController::index
 * @see app/Http/Controllers/Api/HutangController.php:14
 * @route '/api/hutang'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\HutangController::index
 * @see app/Http/Controllers/Api/HutangController.php:14
 * @route '/api/hutang'
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
* @see \App\Http\Controllers\Api\HutangController::pay
 * @see app/Http/Controllers/Api/HutangController.php:34
 * @route '/api/hutang/{hutang}/pay'
 */
export const pay = (args: { hutang: number | { id: number } } | [hutang: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: pay.url(args, options),
    method: 'post',
})

pay.definition = {
    methods: ["post"],
    url: '/api/hutang/{hutang}/pay',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\HutangController::pay
 * @see app/Http/Controllers/Api/HutangController.php:34
 * @route '/api/hutang/{hutang}/pay'
 */
pay.url = (args: { hutang: number | { id: number } } | [hutang: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hutang: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { hutang: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    hutang: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        hutang: typeof args.hutang === 'object'
                ? args.hutang.id
                : args.hutang,
                }

    return pay.definition.url
            .replace('{hutang}', parsedArgs.hutang.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HutangController::pay
 * @see app/Http/Controllers/Api/HutangController.php:34
 * @route '/api/hutang/{hutang}/pay'
 */
pay.post = (args: { hutang: number | { id: number } } | [hutang: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: pay.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\HutangController::pay
 * @see app/Http/Controllers/Api/HutangController.php:34
 * @route '/api/hutang/{hutang}/pay'
 */
    const payForm = (args: { hutang: number | { id: number } } | [hutang: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: pay.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\HutangController::pay
 * @see app/Http/Controllers/Api/HutangController.php:34
 * @route '/api/hutang/{hutang}/pay'
 */
        payForm.post = (args: { hutang: number | { id: number } } | [hutang: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: pay.url(args, options),
            method: 'post',
        })
    
    pay.form = payForm
/**
* @see \App\Http\Controllers\Api\HutangController::partialPay
 * @see app/Http/Controllers/Api/HutangController.php:72
 * @route '/api/hutang/{hutang}/partial-pay'
 */
export const partialPay = (args: { hutang: number | { id: number } } | [hutang: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: partialPay.url(args, options),
    method: 'post',
})

partialPay.definition = {
    methods: ["post"],
    url: '/api/hutang/{hutang}/partial-pay',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\HutangController::partialPay
 * @see app/Http/Controllers/Api/HutangController.php:72
 * @route '/api/hutang/{hutang}/partial-pay'
 */
partialPay.url = (args: { hutang: number | { id: number } } | [hutang: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hutang: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { hutang: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    hutang: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        hutang: typeof args.hutang === 'object'
                ? args.hutang.id
                : args.hutang,
                }

    return partialPay.definition.url
            .replace('{hutang}', parsedArgs.hutang.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\HutangController::partialPay
 * @see app/Http/Controllers/Api/HutangController.php:72
 * @route '/api/hutang/{hutang}/partial-pay'
 */
partialPay.post = (args: { hutang: number | { id: number } } | [hutang: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: partialPay.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\HutangController::partialPay
 * @see app/Http/Controllers/Api/HutangController.php:72
 * @route '/api/hutang/{hutang}/partial-pay'
 */
    const partialPayForm = (args: { hutang: number | { id: number } } | [hutang: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: partialPay.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\HutangController::partialPay
 * @see app/Http/Controllers/Api/HutangController.php:72
 * @route '/api/hutang/{hutang}/partial-pay'
 */
        partialPayForm.post = (args: { hutang: number | { id: number } } | [hutang: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: partialPay.url(args, options),
            method: 'post',
        })
    
    partialPay.form = partialPayForm
const hutang = {
    index: Object.assign(index, index),
pay: Object.assign(pay, pay),
partialPay: Object.assign(partialPay, partialPay),
}

export default hutang
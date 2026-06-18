import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\LogAktivitasController::index
 * @see app/Http/Controllers/Api/LogAktivitasController.php:16
 * @route '/api/log-aktivitas'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/log-aktivitas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\LogAktivitasController::index
 * @see app/Http/Controllers/Api/LogAktivitasController.php:16
 * @route '/api/log-aktivitas'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\LogAktivitasController::index
 * @see app/Http/Controllers/Api/LogAktivitasController.php:16
 * @route '/api/log-aktivitas'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\LogAktivitasController::index
 * @see app/Http/Controllers/Api/LogAktivitasController.php:16
 * @route '/api/log-aktivitas'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\LogAktivitasController::index
 * @see app/Http/Controllers/Api/LogAktivitasController.php:16
 * @route '/api/log-aktivitas'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\LogAktivitasController::index
 * @see app/Http/Controllers/Api/LogAktivitasController.php:16
 * @route '/api/log-aktivitas'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\LogAktivitasController::index
 * @see app/Http/Controllers/Api/LogAktivitasController.php:16
 * @route '/api/log-aktivitas'
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
* @see \App\Http\Controllers\Api\LogAktivitasController::show
 * @see app/Http/Controllers/Api/LogAktivitasController.php:69
 * @route '/api/log-aktivitas/{log}'
 */
export const show = (args: { log: string | number | { id: string | number } } | [log: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/log-aktivitas/{log}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\LogAktivitasController::show
 * @see app/Http/Controllers/Api/LogAktivitasController.php:69
 * @route '/api/log-aktivitas/{log}'
 */
show.url = (args: { log: string | number | { id: string | number } } | [log: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { log: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { log: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    log: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        log: typeof args.log === 'object'
                ? args.log.id
                : args.log,
                }

    return show.definition.url
            .replace('{log}', parsedArgs.log.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\LogAktivitasController::show
 * @see app/Http/Controllers/Api/LogAktivitasController.php:69
 * @route '/api/log-aktivitas/{log}'
 */
show.get = (args: { log: string | number | { id: string | number } } | [log: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\LogAktivitasController::show
 * @see app/Http/Controllers/Api/LogAktivitasController.php:69
 * @route '/api/log-aktivitas/{log}'
 */
show.head = (args: { log: string | number | { id: string | number } } | [log: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\LogAktivitasController::show
 * @see app/Http/Controllers/Api/LogAktivitasController.php:69
 * @route '/api/log-aktivitas/{log}'
 */
    const showForm = (args: { log: string | number | { id: string | number } } | [log: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\LogAktivitasController::show
 * @see app/Http/Controllers/Api/LogAktivitasController.php:69
 * @route '/api/log-aktivitas/{log}'
 */
        showForm.get = (args: { log: string | number | { id: string | number } } | [log: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\LogAktivitasController::show
 * @see app/Http/Controllers/Api/LogAktivitasController.php:69
 * @route '/api/log-aktivitas/{log}'
 */
        showForm.head = (args: { log: string | number | { id: string | number } } | [log: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Api\LogAktivitasController::byUser
 * @see app/Http/Controllers/Api/LogAktivitasController.php:79
 * @route '/api/log-aktivitas/user/{user}'
 */
export const byUser = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: byUser.url(args, options),
    method: 'get',
})

byUser.definition = {
    methods: ["get","head"],
    url: '/api/log-aktivitas/user/{user}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\LogAktivitasController::byUser
 * @see app/Http/Controllers/Api/LogAktivitasController.php:79
 * @route '/api/log-aktivitas/user/{user}'
 */
byUser.url = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { user: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    user: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user: typeof args.user === 'object'
                ? args.user.id
                : args.user,
                }

    return byUser.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\LogAktivitasController::byUser
 * @see app/Http/Controllers/Api/LogAktivitasController.php:79
 * @route '/api/log-aktivitas/user/{user}'
 */
byUser.get = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: byUser.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\LogAktivitasController::byUser
 * @see app/Http/Controllers/Api/LogAktivitasController.php:79
 * @route '/api/log-aktivitas/user/{user}'
 */
byUser.head = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: byUser.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\LogAktivitasController::byUser
 * @see app/Http/Controllers/Api/LogAktivitasController.php:79
 * @route '/api/log-aktivitas/user/{user}'
 */
    const byUserForm = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: byUser.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\LogAktivitasController::byUser
 * @see app/Http/Controllers/Api/LogAktivitasController.php:79
 * @route '/api/log-aktivitas/user/{user}'
 */
        byUserForm.get = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: byUser.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\LogAktivitasController::byUser
 * @see app/Http/Controllers/Api/LogAktivitasController.php:79
 * @route '/api/log-aktivitas/user/{user}'
 */
        byUserForm.head = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: byUser.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    byUser.form = byUserForm
const logAktivitas = {
    index: Object.assign(index, index),
show: Object.assign(show, show),
byUser: Object.assign(byUser, byUser),
}

export default logAktivitas
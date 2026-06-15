import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\NotifikasiController::index
 * @see app/Http/Controllers/Api/NotifikasiController.php:15
 * @route '/api/notifikasi'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/notifikasi',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\NotifikasiController::index
 * @see app/Http/Controllers/Api/NotifikasiController.php:15
 * @route '/api/notifikasi'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\NotifikasiController::index
 * @see app/Http/Controllers/Api/NotifikasiController.php:15
 * @route '/api/notifikasi'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\NotifikasiController::index
 * @see app/Http/Controllers/Api/NotifikasiController.php:15
 * @route '/api/notifikasi'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\NotifikasiController::index
 * @see app/Http/Controllers/Api/NotifikasiController.php:15
 * @route '/api/notifikasi'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\NotifikasiController::index
 * @see app/Http/Controllers/Api/NotifikasiController.php:15
 * @route '/api/notifikasi'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\NotifikasiController::index
 * @see app/Http/Controllers/Api/NotifikasiController.php:15
 * @route '/api/notifikasi'
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
* @see \App\Http\Controllers\Api\NotifikasiController::unread
 * @see app/Http/Controllers/Api/NotifikasiController.php:35
 * @route '/api/notifikasi/unread'
 */
export const unread = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unread.url(options),
    method: 'get',
})

unread.definition = {
    methods: ["get","head"],
    url: '/api/notifikasi/unread',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\NotifikasiController::unread
 * @see app/Http/Controllers/Api/NotifikasiController.php:35
 * @route '/api/notifikasi/unread'
 */
unread.url = (options?: RouteQueryOptions) => {
    return unread.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\NotifikasiController::unread
 * @see app/Http/Controllers/Api/NotifikasiController.php:35
 * @route '/api/notifikasi/unread'
 */
unread.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unread.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\NotifikasiController::unread
 * @see app/Http/Controllers/Api/NotifikasiController.php:35
 * @route '/api/notifikasi/unread'
 */
unread.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: unread.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\NotifikasiController::unread
 * @see app/Http/Controllers/Api/NotifikasiController.php:35
 * @route '/api/notifikasi/unread'
 */
    const unreadForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: unread.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\NotifikasiController::unread
 * @see app/Http/Controllers/Api/NotifikasiController.php:35
 * @route '/api/notifikasi/unread'
 */
        unreadForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: unread.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\NotifikasiController::unread
 * @see app/Http/Controllers/Api/NotifikasiController.php:35
 * @route '/api/notifikasi/unread'
 */
        unreadForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: unread.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    unread.form = unreadForm
/**
* @see \App\Http\Controllers\Api\NotifikasiController::unreadCount
 * @see app/Http/Controllers/Api/NotifikasiController.php:48
 * @route '/api/notifikasi/unread-count'
 */
export const unreadCount = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unreadCount.url(options),
    method: 'get',
})

unreadCount.definition = {
    methods: ["get","head"],
    url: '/api/notifikasi/unread-count',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\NotifikasiController::unreadCount
 * @see app/Http/Controllers/Api/NotifikasiController.php:48
 * @route '/api/notifikasi/unread-count'
 */
unreadCount.url = (options?: RouteQueryOptions) => {
    return unreadCount.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\NotifikasiController::unreadCount
 * @see app/Http/Controllers/Api/NotifikasiController.php:48
 * @route '/api/notifikasi/unread-count'
 */
unreadCount.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unreadCount.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\NotifikasiController::unreadCount
 * @see app/Http/Controllers/Api/NotifikasiController.php:48
 * @route '/api/notifikasi/unread-count'
 */
unreadCount.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: unreadCount.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\NotifikasiController::unreadCount
 * @see app/Http/Controllers/Api/NotifikasiController.php:48
 * @route '/api/notifikasi/unread-count'
 */
    const unreadCountForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: unreadCount.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\NotifikasiController::unreadCount
 * @see app/Http/Controllers/Api/NotifikasiController.php:48
 * @route '/api/notifikasi/unread-count'
 */
        unreadCountForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: unreadCount.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\NotifikasiController::unreadCount
 * @see app/Http/Controllers/Api/NotifikasiController.php:48
 * @route '/api/notifikasi/unread-count'
 */
        unreadCountForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: unreadCount.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    unreadCount.form = unreadCountForm
/**
* @see \App\Http\Controllers\Api\NotifikasiController::markAsRead
 * @see app/Http/Controllers/Api/NotifikasiController.php:60
 * @route '/api/notifikasi/{notifikasi}/read'
 */
export const markAsRead = (args: { notifikasi: number | { id: number } } | [notifikasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAsRead.url(args, options),
    method: 'post',
})

markAsRead.definition = {
    methods: ["post"],
    url: '/api/notifikasi/{notifikasi}/read',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\NotifikasiController::markAsRead
 * @see app/Http/Controllers/Api/NotifikasiController.php:60
 * @route '/api/notifikasi/{notifikasi}/read'
 */
markAsRead.url = (args: { notifikasi: number | { id: number } } | [notifikasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notifikasi: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { notifikasi: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    notifikasi: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notifikasi: typeof args.notifikasi === 'object'
                ? args.notifikasi.id
                : args.notifikasi,
                }

    return markAsRead.definition.url
            .replace('{notifikasi}', parsedArgs.notifikasi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\NotifikasiController::markAsRead
 * @see app/Http/Controllers/Api/NotifikasiController.php:60
 * @route '/api/notifikasi/{notifikasi}/read'
 */
markAsRead.post = (args: { notifikasi: number | { id: number } } | [notifikasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAsRead.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\NotifikasiController::markAsRead
 * @see app/Http/Controllers/Api/NotifikasiController.php:60
 * @route '/api/notifikasi/{notifikasi}/read'
 */
    const markAsReadForm = (args: { notifikasi: number | { id: number } } | [notifikasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: markAsRead.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\NotifikasiController::markAsRead
 * @see app/Http/Controllers/Api/NotifikasiController.php:60
 * @route '/api/notifikasi/{notifikasi}/read'
 */
        markAsReadForm.post = (args: { notifikasi: number | { id: number } } | [notifikasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: markAsRead.url(args, options),
            method: 'post',
        })
    
    markAsRead.form = markAsReadForm
/**
* @see \App\Http\Controllers\Api\NotifikasiController::markAllAsRead
 * @see app/Http/Controllers/Api/NotifikasiController.php:73
 * @route '/api/notifikasi/read-all'
 */
export const markAllAsRead = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAllAsRead.url(options),
    method: 'post',
})

markAllAsRead.definition = {
    methods: ["post"],
    url: '/api/notifikasi/read-all',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\NotifikasiController::markAllAsRead
 * @see app/Http/Controllers/Api/NotifikasiController.php:73
 * @route '/api/notifikasi/read-all'
 */
markAllAsRead.url = (options?: RouteQueryOptions) => {
    return markAllAsRead.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\NotifikasiController::markAllAsRead
 * @see app/Http/Controllers/Api/NotifikasiController.php:73
 * @route '/api/notifikasi/read-all'
 */
markAllAsRead.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAllAsRead.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\NotifikasiController::markAllAsRead
 * @see app/Http/Controllers/Api/NotifikasiController.php:73
 * @route '/api/notifikasi/read-all'
 */
    const markAllAsReadForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: markAllAsRead.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\NotifikasiController::markAllAsRead
 * @see app/Http/Controllers/Api/NotifikasiController.php:73
 * @route '/api/notifikasi/read-all'
 */
        markAllAsReadForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: markAllAsRead.url(options),
            method: 'post',
        })
    
    markAllAsRead.form = markAllAsReadForm
const notifikasi = {
    index: Object.assign(index, index),
unread: Object.assign(unread, unread),
unreadCount: Object.assign(unreadCount, unreadCount),
markAsRead: Object.assign(markAsRead, markAsRead),
markAllAsRead: Object.assign(markAllAsRead, markAllAsRead),
}

export default notifikasi
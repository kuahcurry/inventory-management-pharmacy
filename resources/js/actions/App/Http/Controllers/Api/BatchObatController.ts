import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\BatchObatController::expiringSoon
 * @see app/Http/Controllers/Api/BatchObatController.php:65
 * @route '/api/batch/expiring-soon'
 */
export const expiringSoon = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: expiringSoon.url(options),
    method: 'get',
})

expiringSoon.definition = {
    methods: ["get","head"],
    url: '/api/batch/expiring-soon',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\BatchObatController::expiringSoon
 * @see app/Http/Controllers/Api/BatchObatController.php:65
 * @route '/api/batch/expiring-soon'
 */
expiringSoon.url = (options?: RouteQueryOptions) => {
    return expiringSoon.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\BatchObatController::expiringSoon
 * @see app/Http/Controllers/Api/BatchObatController.php:65
 * @route '/api/batch/expiring-soon'
 */
expiringSoon.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: expiringSoon.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\BatchObatController::expiringSoon
 * @see app/Http/Controllers/Api/BatchObatController.php:65
 * @route '/api/batch/expiring-soon'
 */
expiringSoon.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: expiringSoon.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\BatchObatController::expiringSoon
 * @see app/Http/Controllers/Api/BatchObatController.php:65
 * @route '/api/batch/expiring-soon'
 */
    const expiringSoonForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: expiringSoon.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\BatchObatController::expiringSoon
 * @see app/Http/Controllers/Api/BatchObatController.php:65
 * @route '/api/batch/expiring-soon'
 */
        expiringSoonForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: expiringSoon.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\BatchObatController::expiringSoon
 * @see app/Http/Controllers/Api/BatchObatController.php:65
 * @route '/api/batch/expiring-soon'
 */
        expiringSoonForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: expiringSoon.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    expiringSoon.form = expiringSoonForm
/**
* @see \App\Http\Controllers\Api\BatchObatController::expired
 * @see app/Http/Controllers/Api/BatchObatController.php:82
 * @route '/api/batch/expired'
 */
export const expired = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: expired.url(options),
    method: 'get',
})

expired.definition = {
    methods: ["get","head"],
    url: '/api/batch/expired',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\BatchObatController::expired
 * @see app/Http/Controllers/Api/BatchObatController.php:82
 * @route '/api/batch/expired'
 */
expired.url = (options?: RouteQueryOptions) => {
    return expired.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\BatchObatController::expired
 * @see app/Http/Controllers/Api/BatchObatController.php:82
 * @route '/api/batch/expired'
 */
expired.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: expired.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\BatchObatController::expired
 * @see app/Http/Controllers/Api/BatchObatController.php:82
 * @route '/api/batch/expired'
 */
expired.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: expired.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\BatchObatController::expired
 * @see app/Http/Controllers/Api/BatchObatController.php:82
 * @route '/api/batch/expired'
 */
    const expiredForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: expired.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\BatchObatController::expired
 * @see app/Http/Controllers/Api/BatchObatController.php:82
 * @route '/api/batch/expired'
 */
        expiredForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: expired.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\BatchObatController::expired
 * @see app/Http/Controllers/Api/BatchObatController.php:82
 * @route '/api/batch/expired'
 */
        expiredForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: expired.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    expired.form = expiredForm
/**
* @see \App\Http\Controllers\Api\BatchObatController::updateStatus
 * @see app/Http/Controllers/Api/BatchObatController.php:106
 * @route '/api/batch/{batch}/update-status'
 */
export const updateStatus = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateStatus.url(args, options),
    method: 'post',
})

updateStatus.definition = {
    methods: ["post"],
    url: '/api/batch/{batch}/update-status',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\BatchObatController::updateStatus
 * @see app/Http/Controllers/Api/BatchObatController.php:106
 * @route '/api/batch/{batch}/update-status'
 */
updateStatus.url = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { batch: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { batch: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    batch: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        batch: typeof args.batch === 'object'
                ? args.batch.id
                : args.batch,
                }

    return updateStatus.definition.url
            .replace('{batch}', parsedArgs.batch.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\BatchObatController::updateStatus
 * @see app/Http/Controllers/Api/BatchObatController.php:106
 * @route '/api/batch/{batch}/update-status'
 */
updateStatus.post = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateStatus.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\BatchObatController::updateStatus
 * @see app/Http/Controllers/Api/BatchObatController.php:106
 * @route '/api/batch/{batch}/update-status'
 */
    const updateStatusForm = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateStatus.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\BatchObatController::updateStatus
 * @see app/Http/Controllers/Api/BatchObatController.php:106
 * @route '/api/batch/{batch}/update-status'
 */
        updateStatusForm.post = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateStatus.url(args, options),
            method: 'post',
        })
    
    updateStatus.form = updateStatusForm
/**
* @see \App\Http\Controllers\Api\BatchObatController::index
 * @see app/Http/Controllers/Api/BatchObatController.php:16
 * @route '/api/batch'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/batch',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\BatchObatController::index
 * @see app/Http/Controllers/Api/BatchObatController.php:16
 * @route '/api/batch'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\BatchObatController::index
 * @see app/Http/Controllers/Api/BatchObatController.php:16
 * @route '/api/batch'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\BatchObatController::index
 * @see app/Http/Controllers/Api/BatchObatController.php:16
 * @route '/api/batch'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\BatchObatController::index
 * @see app/Http/Controllers/Api/BatchObatController.php:16
 * @route '/api/batch'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\BatchObatController::index
 * @see app/Http/Controllers/Api/BatchObatController.php:16
 * @route '/api/batch'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\BatchObatController::index
 * @see app/Http/Controllers/Api/BatchObatController.php:16
 * @route '/api/batch'
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
* @see \App\Http\Controllers\Api\BatchObatController::store
 * @see app/Http/Controllers/Api/BatchObatController.php:0
 * @route '/api/batch'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/batch',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\BatchObatController::store
 * @see app/Http/Controllers/Api/BatchObatController.php:0
 * @route '/api/batch'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\BatchObatController::store
 * @see app/Http/Controllers/Api/BatchObatController.php:0
 * @route '/api/batch'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\BatchObatController::store
 * @see app/Http/Controllers/Api/BatchObatController.php:0
 * @route '/api/batch'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\BatchObatController::store
 * @see app/Http/Controllers/Api/BatchObatController.php:0
 * @route '/api/batch'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Api\BatchObatController::show
 * @see app/Http/Controllers/Api/BatchObatController.php:96
 * @route '/api/batch/{batch}'
 */
export const show = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/batch/{batch}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\BatchObatController::show
 * @see app/Http/Controllers/Api/BatchObatController.php:96
 * @route '/api/batch/{batch}'
 */
show.url = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { batch: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { batch: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    batch: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        batch: typeof args.batch === 'object'
                ? args.batch.id
                : args.batch,
                }

    return show.definition.url
            .replace('{batch}', parsedArgs.batch.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\BatchObatController::show
 * @see app/Http/Controllers/Api/BatchObatController.php:96
 * @route '/api/batch/{batch}'
 */
show.get = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\BatchObatController::show
 * @see app/Http/Controllers/Api/BatchObatController.php:96
 * @route '/api/batch/{batch}'
 */
show.head = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\BatchObatController::show
 * @see app/Http/Controllers/Api/BatchObatController.php:96
 * @route '/api/batch/{batch}'
 */
    const showForm = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\BatchObatController::show
 * @see app/Http/Controllers/Api/BatchObatController.php:96
 * @route '/api/batch/{batch}'
 */
        showForm.get = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\BatchObatController::show
 * @see app/Http/Controllers/Api/BatchObatController.php:96
 * @route '/api/batch/{batch}'
 */
        showForm.head = (args: { batch: number | { id: number } } | [batch: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Api\BatchObatController::update
 * @see app/Http/Controllers/Api/BatchObatController.php:0
 * @route '/api/batch/{batch}'
 */
export const update = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/batch/{batch}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\BatchObatController::update
 * @see app/Http/Controllers/Api/BatchObatController.php:0
 * @route '/api/batch/{batch}'
 */
update.url = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { batch: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    batch: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        batch: args.batch,
                }

    return update.definition.url
            .replace('{batch}', parsedArgs.batch.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\BatchObatController::update
 * @see app/Http/Controllers/Api/BatchObatController.php:0
 * @route '/api/batch/{batch}'
 */
update.put = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\BatchObatController::update
 * @see app/Http/Controllers/Api/BatchObatController.php:0
 * @route '/api/batch/{batch}'
 */
update.patch = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\BatchObatController::update
 * @see app/Http/Controllers/Api/BatchObatController.php:0
 * @route '/api/batch/{batch}'
 */
    const updateForm = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\BatchObatController::update
 * @see app/Http/Controllers/Api/BatchObatController.php:0
 * @route '/api/batch/{batch}'
 */
        updateForm.put = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Api\BatchObatController::update
 * @see app/Http/Controllers/Api/BatchObatController.php:0
 * @route '/api/batch/{batch}'
 */
        updateForm.patch = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\BatchObatController::destroy
 * @see app/Http/Controllers/Api/BatchObatController.php:0
 * @route '/api/batch/{batch}'
 */
export const destroy = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/batch/{batch}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\BatchObatController::destroy
 * @see app/Http/Controllers/Api/BatchObatController.php:0
 * @route '/api/batch/{batch}'
 */
destroy.url = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { batch: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    batch: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        batch: args.batch,
                }

    return destroy.definition.url
            .replace('{batch}', parsedArgs.batch.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\BatchObatController::destroy
 * @see app/Http/Controllers/Api/BatchObatController.php:0
 * @route '/api/batch/{batch}'
 */
destroy.delete = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\BatchObatController::destroy
 * @see app/Http/Controllers/Api/BatchObatController.php:0
 * @route '/api/batch/{batch}'
 */
    const destroyForm = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\BatchObatController::destroy
 * @see app/Http/Controllers/Api/BatchObatController.php:0
 * @route '/api/batch/{batch}'
 */
        destroyForm.delete = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const BatchObatController = { expiringSoon, expired, updateStatus, index, store, show, update, destroy }

export default BatchObatController
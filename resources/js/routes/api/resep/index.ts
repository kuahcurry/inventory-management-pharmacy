import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\ResepController::pending
 * @see app/Http/Controllers/Api/ResepController.php:124
 * @route '/api/resep/pending'
 */
export const pending = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pending.url(options),
    method: 'get',
})

pending.definition = {
    methods: ["get","head"],
    url: '/api/resep/pending',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ResepController::pending
 * @see app/Http/Controllers/Api/ResepController.php:124
 * @route '/api/resep/pending'
 */
pending.url = (options?: RouteQueryOptions) => {
    return pending.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ResepController::pending
 * @see app/Http/Controllers/Api/ResepController.php:124
 * @route '/api/resep/pending'
 */
pending.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pending.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\ResepController::pending
 * @see app/Http/Controllers/Api/ResepController.php:124
 * @route '/api/resep/pending'
 */
pending.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pending.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\ResepController::pending
 * @see app/Http/Controllers/Api/ResepController.php:124
 * @route '/api/resep/pending'
 */
    const pendingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: pending.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\ResepController::pending
 * @see app/Http/Controllers/Api/ResepController.php:124
 * @route '/api/resep/pending'
 */
        pendingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pending.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\ResepController::pending
 * @see app/Http/Controllers/Api/ResepController.php:124
 * @route '/api/resep/pending'
 */
        pendingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pending.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    pending.form = pendingForm
/**
* @see \App\Http\Controllers\Api\ResepController::process
 * @see app/Http/Controllers/Api/ResepController.php:137
 * @route '/api/resep/{resep}/process'
 */
export const process = (args: { resep: string | number | { id: string | number } } | [resep: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: process.url(args, options),
    method: 'post',
})

process.definition = {
    methods: ["post"],
    url: '/api/resep/{resep}/process',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\ResepController::process
 * @see app/Http/Controllers/Api/ResepController.php:137
 * @route '/api/resep/{resep}/process'
 */
process.url = (args: { resep: string | number | { id: string | number } } | [resep: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { resep: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { resep: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    resep: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        resep: typeof args.resep === 'object'
                ? args.resep.id
                : args.resep,
                }

    return process.definition.url
            .replace('{resep}', parsedArgs.resep.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ResepController::process
 * @see app/Http/Controllers/Api/ResepController.php:137
 * @route '/api/resep/{resep}/process'
 */
process.post = (args: { resep: string | number | { id: string | number } } | [resep: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: process.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\ResepController::process
 * @see app/Http/Controllers/Api/ResepController.php:137
 * @route '/api/resep/{resep}/process'
 */
    const processForm = (args: { resep: string | number | { id: string | number } } | [resep: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: process.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\ResepController::process
 * @see app/Http/Controllers/Api/ResepController.php:137
 * @route '/api/resep/{resep}/process'
 */
        processForm.post = (args: { resep: string | number | { id: string | number } } | [resep: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: process.url(args, options),
            method: 'post',
        })
    
    process.form = processForm
/**
* @see \App\Http\Controllers\Api\ResepController::complete
 * @see app/Http/Controllers/Api/ResepController.php:173
 * @route '/api/resep/{resep}/complete'
 */
export const complete = (args: { resep: string | number | { id: string | number } } | [resep: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

complete.definition = {
    methods: ["post"],
    url: '/api/resep/{resep}/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\ResepController::complete
 * @see app/Http/Controllers/Api/ResepController.php:173
 * @route '/api/resep/{resep}/complete'
 */
complete.url = (args: { resep: string | number | { id: string | number } } | [resep: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { resep: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { resep: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    resep: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        resep: typeof args.resep === 'object'
                ? args.resep.id
                : args.resep,
                }

    return complete.definition.url
            .replace('{resep}', parsedArgs.resep.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ResepController::complete
 * @see app/Http/Controllers/Api/ResepController.php:173
 * @route '/api/resep/{resep}/complete'
 */
complete.post = (args: { resep: string | number | { id: string | number } } | [resep: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\ResepController::complete
 * @see app/Http/Controllers/Api/ResepController.php:173
 * @route '/api/resep/{resep}/complete'
 */
    const completeForm = (args: { resep: string | number | { id: string | number } } | [resep: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: complete.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\ResepController::complete
 * @see app/Http/Controllers/Api/ResepController.php:173
 * @route '/api/resep/{resep}/complete'
 */
        completeForm.post = (args: { resep: string | number | { id: string | number } } | [resep: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: complete.url(args, options),
            method: 'post',
        })
    
    complete.form = completeForm
/**
* @see \App\Http\Controllers\Api\ResepController::index
 * @see app/Http/Controllers/Api/ResepController.php:23
 * @route '/api/resep'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/resep',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ResepController::index
 * @see app/Http/Controllers/Api/ResepController.php:23
 * @route '/api/resep'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ResepController::index
 * @see app/Http/Controllers/Api/ResepController.php:23
 * @route '/api/resep'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\ResepController::index
 * @see app/Http/Controllers/Api/ResepController.php:23
 * @route '/api/resep'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\ResepController::index
 * @see app/Http/Controllers/Api/ResepController.php:23
 * @route '/api/resep'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\ResepController::index
 * @see app/Http/Controllers/Api/ResepController.php:23
 * @route '/api/resep'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\ResepController::index
 * @see app/Http/Controllers/Api/ResepController.php:23
 * @route '/api/resep'
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
* @see \App\Http\Controllers\Api\ResepController::store
 * @see app/Http/Controllers/Api/ResepController.php:52
 * @route '/api/resep'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/resep',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\ResepController::store
 * @see app/Http/Controllers/Api/ResepController.php:52
 * @route '/api/resep'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ResepController::store
 * @see app/Http/Controllers/Api/ResepController.php:52
 * @route '/api/resep'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\ResepController::store
 * @see app/Http/Controllers/Api/ResepController.php:52
 * @route '/api/resep'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\ResepController::store
 * @see app/Http/Controllers/Api/ResepController.php:52
 * @route '/api/resep'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Api\ResepController::show
 * @see app/Http/Controllers/Api/ResepController.php:114
 * @route '/api/resep/{resep}'
 */
export const show = (args: { resep: string | number | { id: string | number } } | [resep: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/resep/{resep}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\ResepController::show
 * @see app/Http/Controllers/Api/ResepController.php:114
 * @route '/api/resep/{resep}'
 */
show.url = (args: { resep: string | number | { id: string | number } } | [resep: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { resep: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { resep: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    resep: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        resep: typeof args.resep === 'object'
                ? args.resep.id
                : args.resep,
                }

    return show.definition.url
            .replace('{resep}', parsedArgs.resep.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ResepController::show
 * @see app/Http/Controllers/Api/ResepController.php:114
 * @route '/api/resep/{resep}'
 */
show.get = (args: { resep: string | number | { id: string | number } } | [resep: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\ResepController::show
 * @see app/Http/Controllers/Api/ResepController.php:114
 * @route '/api/resep/{resep}'
 */
show.head = (args: { resep: string | number | { id: string | number } } | [resep: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\ResepController::show
 * @see app/Http/Controllers/Api/ResepController.php:114
 * @route '/api/resep/{resep}'
 */
    const showForm = (args: { resep: string | number | { id: string | number } } | [resep: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\ResepController::show
 * @see app/Http/Controllers/Api/ResepController.php:114
 * @route '/api/resep/{resep}'
 */
        showForm.get = (args: { resep: string | number | { id: string | number } } | [resep: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\ResepController::show
 * @see app/Http/Controllers/Api/ResepController.php:114
 * @route '/api/resep/{resep}'
 */
        showForm.head = (args: { resep: string | number | { id: string | number } } | [resep: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Api\ResepController::update
 * @see app/Http/Controllers/Api/ResepController.php:0
 * @route '/api/resep/{resep}'
 */
export const update = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/resep/{resep}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\ResepController::update
 * @see app/Http/Controllers/Api/ResepController.php:0
 * @route '/api/resep/{resep}'
 */
update.url = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { resep: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    resep: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        resep: args.resep,
                }

    return update.definition.url
            .replace('{resep}', parsedArgs.resep.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ResepController::update
 * @see app/Http/Controllers/Api/ResepController.php:0
 * @route '/api/resep/{resep}'
 */
update.put = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\ResepController::update
 * @see app/Http/Controllers/Api/ResepController.php:0
 * @route '/api/resep/{resep}'
 */
update.patch = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\ResepController::update
 * @see app/Http/Controllers/Api/ResepController.php:0
 * @route '/api/resep/{resep}'
 */
    const updateForm = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\ResepController::update
 * @see app/Http/Controllers/Api/ResepController.php:0
 * @route '/api/resep/{resep}'
 */
        updateForm.put = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Api\ResepController::update
 * @see app/Http/Controllers/Api/ResepController.php:0
 * @route '/api/resep/{resep}'
 */
        updateForm.patch = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\ResepController::destroy
 * @see app/Http/Controllers/Api/ResepController.php:0
 * @route '/api/resep/{resep}'
 */
export const destroy = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/resep/{resep}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\ResepController::destroy
 * @see app/Http/Controllers/Api/ResepController.php:0
 * @route '/api/resep/{resep}'
 */
destroy.url = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { resep: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    resep: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        resep: args.resep,
                }

    return destroy.definition.url
            .replace('{resep}', parsedArgs.resep.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\ResepController::destroy
 * @see app/Http/Controllers/Api/ResepController.php:0
 * @route '/api/resep/{resep}'
 */
destroy.delete = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\ResepController::destroy
 * @see app/Http/Controllers/Api/ResepController.php:0
 * @route '/api/resep/{resep}'
 */
    const destroyForm = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\ResepController::destroy
 * @see app/Http/Controllers/Api/ResepController.php:0
 * @route '/api/resep/{resep}'
 */
        destroyForm.delete = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const resep = {
    pending: Object.assign(pending, pending),
process: Object.assign(process, process),
complete: Object.assign(complete, complete),
index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default resep
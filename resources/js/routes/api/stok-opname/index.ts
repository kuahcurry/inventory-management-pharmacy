import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\StokOpnameController::pendingApproval
 * @see app/Http/Controllers/Api/StokOpnameController.php:167
 * @route '/api/stok-opname/pending-approval'
 */
export const pendingApproval = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pendingApproval.url(options),
    method: 'get',
})

pendingApproval.definition = {
    methods: ["get","head"],
    url: '/api/stok-opname/pending-approval',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\StokOpnameController::pendingApproval
 * @see app/Http/Controllers/Api/StokOpnameController.php:167
 * @route '/api/stok-opname/pending-approval'
 */
pendingApproval.url = (options?: RouteQueryOptions) => {
    return pendingApproval.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\StokOpnameController::pendingApproval
 * @see app/Http/Controllers/Api/StokOpnameController.php:167
 * @route '/api/stok-opname/pending-approval'
 */
pendingApproval.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pendingApproval.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\StokOpnameController::pendingApproval
 * @see app/Http/Controllers/Api/StokOpnameController.php:167
 * @route '/api/stok-opname/pending-approval'
 */
pendingApproval.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pendingApproval.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\StokOpnameController::pendingApproval
 * @see app/Http/Controllers/Api/StokOpnameController.php:167
 * @route '/api/stok-opname/pending-approval'
 */
    const pendingApprovalForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: pendingApproval.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\StokOpnameController::pendingApproval
 * @see app/Http/Controllers/Api/StokOpnameController.php:167
 * @route '/api/stok-opname/pending-approval'
 */
        pendingApprovalForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pendingApproval.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\StokOpnameController::pendingApproval
 * @see app/Http/Controllers/Api/StokOpnameController.php:167
 * @route '/api/stok-opname/pending-approval'
 */
        pendingApprovalForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pendingApproval.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    pendingApproval.form = pendingApprovalForm
/**
* @see \App\Http\Controllers\Api\StokOpnameController::complete
 * @see app/Http/Controllers/Api/StokOpnameController.php:110
 * @route '/api/stok-opname/{stokOpname}/complete'
 */
export const complete = (args: { stokOpname: number | { id: number } } | [stokOpname: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

complete.definition = {
    methods: ["post"],
    url: '/api/stok-opname/{stokOpname}/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\StokOpnameController::complete
 * @see app/Http/Controllers/Api/StokOpnameController.php:110
 * @route '/api/stok-opname/{stokOpname}/complete'
 */
complete.url = (args: { stokOpname: number | { id: number } } | [stokOpname: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { stokOpname: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { stokOpname: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    stokOpname: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        stokOpname: typeof args.stokOpname === 'object'
                ? args.stokOpname.id
                : args.stokOpname,
                }

    return complete.definition.url
            .replace('{stokOpname}', parsedArgs.stokOpname.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\StokOpnameController::complete
 * @see app/Http/Controllers/Api/StokOpnameController.php:110
 * @route '/api/stok-opname/{stokOpname}/complete'
 */
complete.post = (args: { stokOpname: number | { id: number } } | [stokOpname: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\StokOpnameController::complete
 * @see app/Http/Controllers/Api/StokOpnameController.php:110
 * @route '/api/stok-opname/{stokOpname}/complete'
 */
    const completeForm = (args: { stokOpname: number | { id: number } } | [stokOpname: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: complete.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\StokOpnameController::complete
 * @see app/Http/Controllers/Api/StokOpnameController.php:110
 * @route '/api/stok-opname/{stokOpname}/complete'
 */
        completeForm.post = (args: { stokOpname: number | { id: number } } | [stokOpname: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: complete.url(args, options),
            method: 'post',
        })
    
    complete.form = completeForm
/**
* @see \App\Http\Controllers\Api\StokOpnameController::approve
 * @see app/Http/Controllers/Api/StokOpnameController.php:142
 * @route '/api/stok-opname/{stokOpname}/approve'
 */
export const approve = (args: { stokOpname: number | { id: number } } | [stokOpname: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

approve.definition = {
    methods: ["post"],
    url: '/api/stok-opname/{stokOpname}/approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\StokOpnameController::approve
 * @see app/Http/Controllers/Api/StokOpnameController.php:142
 * @route '/api/stok-opname/{stokOpname}/approve'
 */
approve.url = (args: { stokOpname: number | { id: number } } | [stokOpname: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { stokOpname: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { stokOpname: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    stokOpname: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        stokOpname: typeof args.stokOpname === 'object'
                ? args.stokOpname.id
                : args.stokOpname,
                }

    return approve.definition.url
            .replace('{stokOpname}', parsedArgs.stokOpname.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\StokOpnameController::approve
 * @see app/Http/Controllers/Api/StokOpnameController.php:142
 * @route '/api/stok-opname/{stokOpname}/approve'
 */
approve.post = (args: { stokOpname: number | { id: number } } | [stokOpname: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\StokOpnameController::approve
 * @see app/Http/Controllers/Api/StokOpnameController.php:142
 * @route '/api/stok-opname/{stokOpname}/approve'
 */
    const approveForm = (args: { stokOpname: number | { id: number } } | [stokOpname: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: approve.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\StokOpnameController::approve
 * @see app/Http/Controllers/Api/StokOpnameController.php:142
 * @route '/api/stok-opname/{stokOpname}/approve'
 */
        approveForm.post = (args: { stokOpname: number | { id: number } } | [stokOpname: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: approve.url(args, options),
            method: 'post',
        })
    
    approve.form = approveForm
/**
* @see \App\Http\Controllers\Api\StokOpnameController::index
 * @see app/Http/Controllers/Api/StokOpnameController.php:20
 * @route '/api/stok-opname'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/stok-opname',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\StokOpnameController::index
 * @see app/Http/Controllers/Api/StokOpnameController.php:20
 * @route '/api/stok-opname'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\StokOpnameController::index
 * @see app/Http/Controllers/Api/StokOpnameController.php:20
 * @route '/api/stok-opname'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\StokOpnameController::index
 * @see app/Http/Controllers/Api/StokOpnameController.php:20
 * @route '/api/stok-opname'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\StokOpnameController::index
 * @see app/Http/Controllers/Api/StokOpnameController.php:20
 * @route '/api/stok-opname'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\StokOpnameController::index
 * @see app/Http/Controllers/Api/StokOpnameController.php:20
 * @route '/api/stok-opname'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\StokOpnameController::index
 * @see app/Http/Controllers/Api/StokOpnameController.php:20
 * @route '/api/stok-opname'
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
* @see \App\Http\Controllers\Api\StokOpnameController::store
 * @see app/Http/Controllers/Api/StokOpnameController.php:40
 * @route '/api/stok-opname'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/stok-opname',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\StokOpnameController::store
 * @see app/Http/Controllers/Api/StokOpnameController.php:40
 * @route '/api/stok-opname'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\StokOpnameController::store
 * @see app/Http/Controllers/Api/StokOpnameController.php:40
 * @route '/api/stok-opname'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\StokOpnameController::store
 * @see app/Http/Controllers/Api/StokOpnameController.php:40
 * @route '/api/stok-opname'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\StokOpnameController::store
 * @see app/Http/Controllers/Api/StokOpnameController.php:40
 * @route '/api/stok-opname'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Api\StokOpnameController::show
 * @see app/Http/Controllers/Api/StokOpnameController.php:100
 * @route '/api/stok-opname/{stok_opname}'
 */
export const show = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/stok-opname/{stok_opname}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\StokOpnameController::show
 * @see app/Http/Controllers/Api/StokOpnameController.php:100
 * @route '/api/stok-opname/{stok_opname}'
 */
show.url = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { stok_opname: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    stok_opname: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        stok_opname: args.stok_opname,
                }

    return show.definition.url
            .replace('{stok_opname}', parsedArgs.stok_opname.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\StokOpnameController::show
 * @see app/Http/Controllers/Api/StokOpnameController.php:100
 * @route '/api/stok-opname/{stok_opname}'
 */
show.get = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\StokOpnameController::show
 * @see app/Http/Controllers/Api/StokOpnameController.php:100
 * @route '/api/stok-opname/{stok_opname}'
 */
show.head = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\StokOpnameController::show
 * @see app/Http/Controllers/Api/StokOpnameController.php:100
 * @route '/api/stok-opname/{stok_opname}'
 */
    const showForm = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\StokOpnameController::show
 * @see app/Http/Controllers/Api/StokOpnameController.php:100
 * @route '/api/stok-opname/{stok_opname}'
 */
        showForm.get = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\StokOpnameController::show
 * @see app/Http/Controllers/Api/StokOpnameController.php:100
 * @route '/api/stok-opname/{stok_opname}'
 */
        showForm.head = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Api\StokOpnameController::update
 * @see app/Http/Controllers/Api/StokOpnameController.php:0
 * @route '/api/stok-opname/{stok_opname}'
 */
export const update = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/stok-opname/{stok_opname}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\StokOpnameController::update
 * @see app/Http/Controllers/Api/StokOpnameController.php:0
 * @route '/api/stok-opname/{stok_opname}'
 */
update.url = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { stok_opname: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    stok_opname: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        stok_opname: args.stok_opname,
                }

    return update.definition.url
            .replace('{stok_opname}', parsedArgs.stok_opname.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\StokOpnameController::update
 * @see app/Http/Controllers/Api/StokOpnameController.php:0
 * @route '/api/stok-opname/{stok_opname}'
 */
update.put = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\StokOpnameController::update
 * @see app/Http/Controllers/Api/StokOpnameController.php:0
 * @route '/api/stok-opname/{stok_opname}'
 */
update.patch = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\StokOpnameController::update
 * @see app/Http/Controllers/Api/StokOpnameController.php:0
 * @route '/api/stok-opname/{stok_opname}'
 */
    const updateForm = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\StokOpnameController::update
 * @see app/Http/Controllers/Api/StokOpnameController.php:0
 * @route '/api/stok-opname/{stok_opname}'
 */
        updateForm.put = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Api\StokOpnameController::update
 * @see app/Http/Controllers/Api/StokOpnameController.php:0
 * @route '/api/stok-opname/{stok_opname}'
 */
        updateForm.patch = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\StokOpnameController::destroy
 * @see app/Http/Controllers/Api/StokOpnameController.php:0
 * @route '/api/stok-opname/{stok_opname}'
 */
export const destroy = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/stok-opname/{stok_opname}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\StokOpnameController::destroy
 * @see app/Http/Controllers/Api/StokOpnameController.php:0
 * @route '/api/stok-opname/{stok_opname}'
 */
destroy.url = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { stok_opname: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    stok_opname: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        stok_opname: args.stok_opname,
                }

    return destroy.definition.url
            .replace('{stok_opname}', parsedArgs.stok_opname.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\StokOpnameController::destroy
 * @see app/Http/Controllers/Api/StokOpnameController.php:0
 * @route '/api/stok-opname/{stok_opname}'
 */
destroy.delete = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\StokOpnameController::destroy
 * @see app/Http/Controllers/Api/StokOpnameController.php:0
 * @route '/api/stok-opname/{stok_opname}'
 */
    const destroyForm = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\StokOpnameController::destroy
 * @see app/Http/Controllers/Api/StokOpnameController.php:0
 * @route '/api/stok-opname/{stok_opname}'
 */
        destroyForm.delete = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const stokOpname = {
    pendingApproval: Object.assign(pendingApproval, pendingApproval),
complete: Object.assign(complete, complete),
approve: Object.assign(approve, approve),
index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default stokOpname
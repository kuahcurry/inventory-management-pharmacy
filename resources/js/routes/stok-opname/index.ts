import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\StokOpnameController::start
 * @see app/Http/Controllers/StokOpnameController.php:266
 * @route '/stok-opname/{stokOpname}/start'
 */
export const start = (args: { stokOpname: string | number | { id: string | number } } | [stokOpname: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

start.definition = {
    methods: ["post"],
    url: '/stok-opname/{stokOpname}/start',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StokOpnameController::start
 * @see app/Http/Controllers/StokOpnameController.php:266
 * @route '/stok-opname/{stokOpname}/start'
 */
start.url = (args: { stokOpname: string | number | { id: string | number } } | [stokOpname: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return start.definition.url
            .replace('{stokOpname}', parsedArgs.stokOpname.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StokOpnameController::start
 * @see app/Http/Controllers/StokOpnameController.php:266
 * @route '/stok-opname/{stokOpname}/start'
 */
start.post = (args: { stokOpname: string | number | { id: string | number } } | [stokOpname: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\StokOpnameController::start
 * @see app/Http/Controllers/StokOpnameController.php:266
 * @route '/stok-opname/{stokOpname}/start'
 */
    const startForm = (args: { stokOpname: string | number | { id: string | number } } | [stokOpname: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: start.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StokOpnameController::start
 * @see app/Http/Controllers/StokOpnameController.php:266
 * @route '/stok-opname/{stokOpname}/start'
 */
        startForm.post = (args: { stokOpname: string | number | { id: string | number } } | [stokOpname: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: start.url(args, options),
            method: 'post',
        })
    
    start.form = startForm
/**
* @see \App\Http\Controllers\StokOpnameController::complete
 * @see app/Http/Controllers/StokOpnameController.php:280
 * @route '/stok-opname/{stokOpname}/complete'
 */
export const complete = (args: { stokOpname: string | number | { id: string | number } } | [stokOpname: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

complete.definition = {
    methods: ["post"],
    url: '/stok-opname/{stokOpname}/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StokOpnameController::complete
 * @see app/Http/Controllers/StokOpnameController.php:280
 * @route '/stok-opname/{stokOpname}/complete'
 */
complete.url = (args: { stokOpname: string | number | { id: string | number } } | [stokOpname: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
* @see \App\Http\Controllers\StokOpnameController::complete
 * @see app/Http/Controllers/StokOpnameController.php:280
 * @route '/stok-opname/{stokOpname}/complete'
 */
complete.post = (args: { stokOpname: string | number | { id: string | number } } | [stokOpname: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\StokOpnameController::complete
 * @see app/Http/Controllers/StokOpnameController.php:280
 * @route '/stok-opname/{stokOpname}/complete'
 */
    const completeForm = (args: { stokOpname: string | number | { id: string | number } } | [stokOpname: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: complete.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StokOpnameController::complete
 * @see app/Http/Controllers/StokOpnameController.php:280
 * @route '/stok-opname/{stokOpname}/complete'
 */
        completeForm.post = (args: { stokOpname: string | number | { id: string | number } } | [stokOpname: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: complete.url(args, options),
            method: 'post',
        })
    
    complete.form = completeForm
/**
* @see \App\Http\Controllers\StokOpnameController::approve
 * @see app/Http/Controllers/StokOpnameController.php:294
 * @route '/stok-opname/{stokOpname}/approve'
 */
export const approve = (args: { stokOpname: string | number | { id: string | number } } | [stokOpname: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

approve.definition = {
    methods: ["post"],
    url: '/stok-opname/{stokOpname}/approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StokOpnameController::approve
 * @see app/Http/Controllers/StokOpnameController.php:294
 * @route '/stok-opname/{stokOpname}/approve'
 */
approve.url = (args: { stokOpname: string | number | { id: string | number } } | [stokOpname: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
* @see \App\Http\Controllers\StokOpnameController::approve
 * @see app/Http/Controllers/StokOpnameController.php:294
 * @route '/stok-opname/{stokOpname}/approve'
 */
approve.post = (args: { stokOpname: string | number | { id: string | number } } | [stokOpname: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\StokOpnameController::approve
 * @see app/Http/Controllers/StokOpnameController.php:294
 * @route '/stok-opname/{stokOpname}/approve'
 */
    const approveForm = (args: { stokOpname: string | number | { id: string | number } } | [stokOpname: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: approve.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StokOpnameController::approve
 * @see app/Http/Controllers/StokOpnameController.php:294
 * @route '/stok-opname/{stokOpname}/approve'
 */
        approveForm.post = (args: { stokOpname: string | number | { id: string | number } } | [stokOpname: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: approve.url(args, options),
            method: 'post',
        })
    
    approve.form = approveForm
/**
* @see \App\Http\Controllers\StokOpnameController::index
 * @see app/Http/Controllers/StokOpnameController.php:17
 * @route '/stok-opname'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/stok-opname',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StokOpnameController::index
 * @see app/Http/Controllers/StokOpnameController.php:17
 * @route '/stok-opname'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StokOpnameController::index
 * @see app/Http/Controllers/StokOpnameController.php:17
 * @route '/stok-opname'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StokOpnameController::index
 * @see app/Http/Controllers/StokOpnameController.php:17
 * @route '/stok-opname'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StokOpnameController::index
 * @see app/Http/Controllers/StokOpnameController.php:17
 * @route '/stok-opname'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StokOpnameController::index
 * @see app/Http/Controllers/StokOpnameController.php:17
 * @route '/stok-opname'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StokOpnameController::index
 * @see app/Http/Controllers/StokOpnameController.php:17
 * @route '/stok-opname'
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
* @see \App\Http\Controllers\StokOpnameController::create
 * @see app/Http/Controllers/StokOpnameController.php:61
 * @route '/stok-opname/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/stok-opname/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StokOpnameController::create
 * @see app/Http/Controllers/StokOpnameController.php:61
 * @route '/stok-opname/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StokOpnameController::create
 * @see app/Http/Controllers/StokOpnameController.php:61
 * @route '/stok-opname/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StokOpnameController::create
 * @see app/Http/Controllers/StokOpnameController.php:61
 * @route '/stok-opname/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StokOpnameController::create
 * @see app/Http/Controllers/StokOpnameController.php:61
 * @route '/stok-opname/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StokOpnameController::create
 * @see app/Http/Controllers/StokOpnameController.php:61
 * @route '/stok-opname/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StokOpnameController::create
 * @see app/Http/Controllers/StokOpnameController.php:61
 * @route '/stok-opname/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\StokOpnameController::store
 * @see app/Http/Controllers/StokOpnameController.php:94
 * @route '/stok-opname'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/stok-opname',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StokOpnameController::store
 * @see app/Http/Controllers/StokOpnameController.php:94
 * @route '/stok-opname'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StokOpnameController::store
 * @see app/Http/Controllers/StokOpnameController.php:94
 * @route '/stok-opname'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\StokOpnameController::store
 * @see app/Http/Controllers/StokOpnameController.php:94
 * @route '/stok-opname'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StokOpnameController::store
 * @see app/Http/Controllers/StokOpnameController.php:94
 * @route '/stok-opname'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\StokOpnameController::show
 * @see app/Http/Controllers/StokOpnameController.php:140
 * @route '/stok-opname/{stok_opname}'
 */
export const show = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/stok-opname/{stok_opname}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StokOpnameController::show
 * @see app/Http/Controllers/StokOpnameController.php:140
 * @route '/stok-opname/{stok_opname}'
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
* @see \App\Http\Controllers\StokOpnameController::show
 * @see app/Http/Controllers/StokOpnameController.php:140
 * @route '/stok-opname/{stok_opname}'
 */
show.get = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StokOpnameController::show
 * @see app/Http/Controllers/StokOpnameController.php:140
 * @route '/stok-opname/{stok_opname}'
 */
show.head = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StokOpnameController::show
 * @see app/Http/Controllers/StokOpnameController.php:140
 * @route '/stok-opname/{stok_opname}'
 */
    const showForm = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StokOpnameController::show
 * @see app/Http/Controllers/StokOpnameController.php:140
 * @route '/stok-opname/{stok_opname}'
 */
        showForm.get = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StokOpnameController::show
 * @see app/Http/Controllers/StokOpnameController.php:140
 * @route '/stok-opname/{stok_opname}'
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
* @see \App\Http\Controllers\StokOpnameController::edit
 * @see app/Http/Controllers/StokOpnameController.php:157
 * @route '/stok-opname/{stok_opname}/edit'
 */
export const edit = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/stok-opname/{stok_opname}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StokOpnameController::edit
 * @see app/Http/Controllers/StokOpnameController.php:157
 * @route '/stok-opname/{stok_opname}/edit'
 */
edit.url = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{stok_opname}', parsedArgs.stok_opname.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StokOpnameController::edit
 * @see app/Http/Controllers/StokOpnameController.php:157
 * @route '/stok-opname/{stok_opname}/edit'
 */
edit.get = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StokOpnameController::edit
 * @see app/Http/Controllers/StokOpnameController.php:157
 * @route '/stok-opname/{stok_opname}/edit'
 */
edit.head = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StokOpnameController::edit
 * @see app/Http/Controllers/StokOpnameController.php:157
 * @route '/stok-opname/{stok_opname}/edit'
 */
    const editForm = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StokOpnameController::edit
 * @see app/Http/Controllers/StokOpnameController.php:157
 * @route '/stok-opname/{stok_opname}/edit'
 */
        editForm.get = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StokOpnameController::edit
 * @see app/Http/Controllers/StokOpnameController.php:157
 * @route '/stok-opname/{stok_opname}/edit'
 */
        editForm.head = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\StokOpnameController::update
 * @see app/Http/Controllers/StokOpnameController.php:200
 * @route '/stok-opname/{stok_opname}'
 */
export const update = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/stok-opname/{stok_opname}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\StokOpnameController::update
 * @see app/Http/Controllers/StokOpnameController.php:200
 * @route '/stok-opname/{stok_opname}'
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
* @see \App\Http\Controllers\StokOpnameController::update
 * @see app/Http/Controllers/StokOpnameController.php:200
 * @route '/stok-opname/{stok_opname}'
 */
update.put = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\StokOpnameController::update
 * @see app/Http/Controllers/StokOpnameController.php:200
 * @route '/stok-opname/{stok_opname}'
 */
update.patch = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\StokOpnameController::update
 * @see app/Http/Controllers/StokOpnameController.php:200
 * @route '/stok-opname/{stok_opname}'
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
* @see \App\Http\Controllers\StokOpnameController::update
 * @see app/Http/Controllers/StokOpnameController.php:200
 * @route '/stok-opname/{stok_opname}'
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
* @see \App\Http\Controllers\StokOpnameController::update
 * @see app/Http/Controllers/StokOpnameController.php:200
 * @route '/stok-opname/{stok_opname}'
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
* @see \App\Http\Controllers\StokOpnameController::destroy
 * @see app/Http/Controllers/StokOpnameController.php:250
 * @route '/stok-opname/{stok_opname}'
 */
export const destroy = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/stok-opname/{stok_opname}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\StokOpnameController::destroy
 * @see app/Http/Controllers/StokOpnameController.php:250
 * @route '/stok-opname/{stok_opname}'
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
* @see \App\Http\Controllers\StokOpnameController::destroy
 * @see app/Http/Controllers/StokOpnameController.php:250
 * @route '/stok-opname/{stok_opname}'
 */
destroy.delete = (args: { stok_opname: string | number } | [stok_opname: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\StokOpnameController::destroy
 * @see app/Http/Controllers/StokOpnameController.php:250
 * @route '/stok-opname/{stok_opname}'
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
* @see \App\Http\Controllers\StokOpnameController::destroy
 * @see app/Http/Controllers/StokOpnameController.php:250
 * @route '/stok-opname/{stok_opname}'
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
    start: Object.assign(start, start),
complete: Object.assign(complete, complete),
approve: Object.assign(approve, approve),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default stokOpname
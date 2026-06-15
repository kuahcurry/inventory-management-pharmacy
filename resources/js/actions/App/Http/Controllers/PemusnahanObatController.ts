import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PemusnahanObatController::approve
 * @see app/Http/Controllers/PemusnahanObatController.php:206
 * @route '/pemusnahan/{pemusnahan}/approve'
 */
export const approve = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

approve.definition = {
    methods: ["post"],
    url: '/pemusnahan/{pemusnahan}/approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PemusnahanObatController::approve
 * @see app/Http/Controllers/PemusnahanObatController.php:206
 * @route '/pemusnahan/{pemusnahan}/approve'
 */
approve.url = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pemusnahan: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    pemusnahan: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pemusnahan: args.pemusnahan,
                }

    return approve.definition.url
            .replace('{pemusnahan}', parsedArgs.pemusnahan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PemusnahanObatController::approve
 * @see app/Http/Controllers/PemusnahanObatController.php:206
 * @route '/pemusnahan/{pemusnahan}/approve'
 */
approve.post = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PemusnahanObatController::approve
 * @see app/Http/Controllers/PemusnahanObatController.php:206
 * @route '/pemusnahan/{pemusnahan}/approve'
 */
    const approveForm = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: approve.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PemusnahanObatController::approve
 * @see app/Http/Controllers/PemusnahanObatController.php:206
 * @route '/pemusnahan/{pemusnahan}/approve'
 */
        approveForm.post = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: approve.url(args, options),
            method: 'post',
        })
    
    approve.form = approveForm
/**
* @see \App\Http\Controllers\PemusnahanObatController::index
 * @see app/Http/Controllers/PemusnahanObatController.php:18
 * @route '/pemusnahan'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/pemusnahan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PemusnahanObatController::index
 * @see app/Http/Controllers/PemusnahanObatController.php:18
 * @route '/pemusnahan'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PemusnahanObatController::index
 * @see app/Http/Controllers/PemusnahanObatController.php:18
 * @route '/pemusnahan'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PemusnahanObatController::index
 * @see app/Http/Controllers/PemusnahanObatController.php:18
 * @route '/pemusnahan'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PemusnahanObatController::index
 * @see app/Http/Controllers/PemusnahanObatController.php:18
 * @route '/pemusnahan'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PemusnahanObatController::index
 * @see app/Http/Controllers/PemusnahanObatController.php:18
 * @route '/pemusnahan'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PemusnahanObatController::index
 * @see app/Http/Controllers/PemusnahanObatController.php:18
 * @route '/pemusnahan'
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
* @see \App\Http\Controllers\PemusnahanObatController::create
 * @see app/Http/Controllers/PemusnahanObatController.php:32
 * @route '/pemusnahan/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/pemusnahan/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PemusnahanObatController::create
 * @see app/Http/Controllers/PemusnahanObatController.php:32
 * @route '/pemusnahan/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PemusnahanObatController::create
 * @see app/Http/Controllers/PemusnahanObatController.php:32
 * @route '/pemusnahan/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PemusnahanObatController::create
 * @see app/Http/Controllers/PemusnahanObatController.php:32
 * @route '/pemusnahan/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PemusnahanObatController::create
 * @see app/Http/Controllers/PemusnahanObatController.php:32
 * @route '/pemusnahan/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PemusnahanObatController::create
 * @see app/Http/Controllers/PemusnahanObatController.php:32
 * @route '/pemusnahan/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PemusnahanObatController::create
 * @see app/Http/Controllers/PemusnahanObatController.php:32
 * @route '/pemusnahan/create'
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
* @see \App\Http\Controllers\PemusnahanObatController::store
 * @see app/Http/Controllers/PemusnahanObatController.php:51
 * @route '/pemusnahan'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/pemusnahan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PemusnahanObatController::store
 * @see app/Http/Controllers/PemusnahanObatController.php:51
 * @route '/pemusnahan'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PemusnahanObatController::store
 * @see app/Http/Controllers/PemusnahanObatController.php:51
 * @route '/pemusnahan'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PemusnahanObatController::store
 * @see app/Http/Controllers/PemusnahanObatController.php:51
 * @route '/pemusnahan'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PemusnahanObatController::store
 * @see app/Http/Controllers/PemusnahanObatController.php:51
 * @route '/pemusnahan'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\PemusnahanObatController::show
 * @see app/Http/Controllers/PemusnahanObatController.php:93
 * @route '/pemusnahan/{pemusnahan}'
 */
export const show = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/pemusnahan/{pemusnahan}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PemusnahanObatController::show
 * @see app/Http/Controllers/PemusnahanObatController.php:93
 * @route '/pemusnahan/{pemusnahan}'
 */
show.url = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pemusnahan: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    pemusnahan: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pemusnahan: args.pemusnahan,
                }

    return show.definition.url
            .replace('{pemusnahan}', parsedArgs.pemusnahan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PemusnahanObatController::show
 * @see app/Http/Controllers/PemusnahanObatController.php:93
 * @route '/pemusnahan/{pemusnahan}'
 */
show.get = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PemusnahanObatController::show
 * @see app/Http/Controllers/PemusnahanObatController.php:93
 * @route '/pemusnahan/{pemusnahan}'
 */
show.head = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PemusnahanObatController::show
 * @see app/Http/Controllers/PemusnahanObatController.php:93
 * @route '/pemusnahan/{pemusnahan}'
 */
    const showForm = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PemusnahanObatController::show
 * @see app/Http/Controllers/PemusnahanObatController.php:93
 * @route '/pemusnahan/{pemusnahan}'
 */
        showForm.get = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PemusnahanObatController::show
 * @see app/Http/Controllers/PemusnahanObatController.php:93
 * @route '/pemusnahan/{pemusnahan}'
 */
        showForm.head = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\PemusnahanObatController::edit
 * @see app/Http/Controllers/PemusnahanObatController.php:109
 * @route '/pemusnahan/{pemusnahan}/edit'
 */
export const edit = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/pemusnahan/{pemusnahan}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PemusnahanObatController::edit
 * @see app/Http/Controllers/PemusnahanObatController.php:109
 * @route '/pemusnahan/{pemusnahan}/edit'
 */
edit.url = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pemusnahan: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    pemusnahan: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pemusnahan: args.pemusnahan,
                }

    return edit.definition.url
            .replace('{pemusnahan}', parsedArgs.pemusnahan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PemusnahanObatController::edit
 * @see app/Http/Controllers/PemusnahanObatController.php:109
 * @route '/pemusnahan/{pemusnahan}/edit'
 */
edit.get = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PemusnahanObatController::edit
 * @see app/Http/Controllers/PemusnahanObatController.php:109
 * @route '/pemusnahan/{pemusnahan}/edit'
 */
edit.head = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PemusnahanObatController::edit
 * @see app/Http/Controllers/PemusnahanObatController.php:109
 * @route '/pemusnahan/{pemusnahan}/edit'
 */
    const editForm = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PemusnahanObatController::edit
 * @see app/Http/Controllers/PemusnahanObatController.php:109
 * @route '/pemusnahan/{pemusnahan}/edit'
 */
        editForm.get = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PemusnahanObatController::edit
 * @see app/Http/Controllers/PemusnahanObatController.php:109
 * @route '/pemusnahan/{pemusnahan}/edit'
 */
        editForm.head = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\PemusnahanObatController::update
 * @see app/Http/Controllers/PemusnahanObatController.php:136
 * @route '/pemusnahan/{pemusnahan}'
 */
export const update = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/pemusnahan/{pemusnahan}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\PemusnahanObatController::update
 * @see app/Http/Controllers/PemusnahanObatController.php:136
 * @route '/pemusnahan/{pemusnahan}'
 */
update.url = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pemusnahan: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    pemusnahan: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pemusnahan: args.pemusnahan,
                }

    return update.definition.url
            .replace('{pemusnahan}', parsedArgs.pemusnahan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PemusnahanObatController::update
 * @see app/Http/Controllers/PemusnahanObatController.php:136
 * @route '/pemusnahan/{pemusnahan}'
 */
update.put = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\PemusnahanObatController::update
 * @see app/Http/Controllers/PemusnahanObatController.php:136
 * @route '/pemusnahan/{pemusnahan}'
 */
update.patch = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\PemusnahanObatController::update
 * @see app/Http/Controllers/PemusnahanObatController.php:136
 * @route '/pemusnahan/{pemusnahan}'
 */
    const updateForm = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PemusnahanObatController::update
 * @see app/Http/Controllers/PemusnahanObatController.php:136
 * @route '/pemusnahan/{pemusnahan}'
 */
        updateForm.put = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\PemusnahanObatController::update
 * @see app/Http/Controllers/PemusnahanObatController.php:136
 * @route '/pemusnahan/{pemusnahan}'
 */
        updateForm.patch = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\PemusnahanObatController::destroy
 * @see app/Http/Controllers/PemusnahanObatController.php:187
 * @route '/pemusnahan/{pemusnahan}'
 */
export const destroy = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/pemusnahan/{pemusnahan}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PemusnahanObatController::destroy
 * @see app/Http/Controllers/PemusnahanObatController.php:187
 * @route '/pemusnahan/{pemusnahan}'
 */
destroy.url = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pemusnahan: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    pemusnahan: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pemusnahan: args.pemusnahan,
                }

    return destroy.definition.url
            .replace('{pemusnahan}', parsedArgs.pemusnahan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PemusnahanObatController::destroy
 * @see app/Http/Controllers/PemusnahanObatController.php:187
 * @route '/pemusnahan/{pemusnahan}'
 */
destroy.delete = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PemusnahanObatController::destroy
 * @see app/Http/Controllers/PemusnahanObatController.php:187
 * @route '/pemusnahan/{pemusnahan}'
 */
    const destroyForm = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PemusnahanObatController::destroy
 * @see app/Http/Controllers/PemusnahanObatController.php:187
 * @route '/pemusnahan/{pemusnahan}'
 */
        destroyForm.delete = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const PemusnahanObatController = { approve, index, create, store, show, edit, update, destroy }

export default PemusnahanObatController
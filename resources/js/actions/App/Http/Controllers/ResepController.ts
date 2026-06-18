import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ResepController::create
 * @see app/Http/Controllers/ResepController.php:34
 * @route '/resep/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/resep/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ResepController::create
 * @see app/Http/Controllers/ResepController.php:34
 * @route '/resep/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ResepController::create
 * @see app/Http/Controllers/ResepController.php:34
 * @route '/resep/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ResepController::create
 * @see app/Http/Controllers/ResepController.php:34
 * @route '/resep/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ResepController::create
 * @see app/Http/Controllers/ResepController.php:34
 * @route '/resep/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ResepController::create
 * @see app/Http/Controllers/ResepController.php:34
 * @route '/resep/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ResepController::create
 * @see app/Http/Controllers/ResepController.php:34
 * @route '/resep/create'
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
* @see \App\Http\Controllers\ResepController::store
 * @see app/Http/Controllers/ResepController.php:49
 * @route '/resep'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/resep',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ResepController::store
 * @see app/Http/Controllers/ResepController.php:49
 * @route '/resep'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ResepController::store
 * @see app/Http/Controllers/ResepController.php:49
 * @route '/resep'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ResepController::store
 * @see app/Http/Controllers/ResepController.php:49
 * @route '/resep'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ResepController::store
 * @see app/Http/Controllers/ResepController.php:49
 * @route '/resep'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ResepController::edit
 * @see app/Http/Controllers/ResepController.php:98
 * @route '/resep/{resep}/edit'
 */
export const edit = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/resep/{resep}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ResepController::edit
 * @see app/Http/Controllers/ResepController.php:98
 * @route '/resep/{resep}/edit'
 */
edit.url = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{resep}', parsedArgs.resep.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ResepController::edit
 * @see app/Http/Controllers/ResepController.php:98
 * @route '/resep/{resep}/edit'
 */
edit.get = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ResepController::edit
 * @see app/Http/Controllers/ResepController.php:98
 * @route '/resep/{resep}/edit'
 */
edit.head = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ResepController::edit
 * @see app/Http/Controllers/ResepController.php:98
 * @route '/resep/{resep}/edit'
 */
    const editForm = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ResepController::edit
 * @see app/Http/Controllers/ResepController.php:98
 * @route '/resep/{resep}/edit'
 */
        editForm.get = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ResepController::edit
 * @see app/Http/Controllers/ResepController.php:98
 * @route '/resep/{resep}/edit'
 */
        editForm.head = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ResepController::update
 * @see app/Http/Controllers/ResepController.php:122
 * @route '/resep/{resep}'
 */
export const update = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/resep/{resep}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ResepController::update
 * @see app/Http/Controllers/ResepController.php:122
 * @route '/resep/{resep}'
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
* @see \App\Http\Controllers\ResepController::update
 * @see app/Http/Controllers/ResepController.php:122
 * @route '/resep/{resep}'
 */
update.put = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ResepController::update
 * @see app/Http/Controllers/ResepController.php:122
 * @route '/resep/{resep}'
 */
update.patch = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ResepController::update
 * @see app/Http/Controllers/ResepController.php:122
 * @route '/resep/{resep}'
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
* @see \App\Http\Controllers\ResepController::update
 * @see app/Http/Controllers/ResepController.php:122
 * @route '/resep/{resep}'
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
* @see \App\Http\Controllers\ResepController::update
 * @see app/Http/Controllers/ResepController.php:122
 * @route '/resep/{resep}'
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
* @see \App\Http\Controllers\ResepController::destroy
 * @see app/Http/Controllers/ResepController.php:199
 * @route '/resep/{resep}'
 */
export const destroy = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/resep/{resep}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ResepController::destroy
 * @see app/Http/Controllers/ResepController.php:199
 * @route '/resep/{resep}'
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
* @see \App\Http\Controllers\ResepController::destroy
 * @see app/Http/Controllers/ResepController.php:199
 * @route '/resep/{resep}'
 */
destroy.delete = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ResepController::destroy
 * @see app/Http/Controllers/ResepController.php:199
 * @route '/resep/{resep}'
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
* @see \App\Http\Controllers\ResepController::destroy
 * @see app/Http/Controllers/ResepController.php:199
 * @route '/resep/{resep}'
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
/**
* @see \App\Http\Controllers\ResepController::index
 * @see app/Http/Controllers/ResepController.php:20
 * @route '/resep'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/resep',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ResepController::index
 * @see app/Http/Controllers/ResepController.php:20
 * @route '/resep'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ResepController::index
 * @see app/Http/Controllers/ResepController.php:20
 * @route '/resep'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ResepController::index
 * @see app/Http/Controllers/ResepController.php:20
 * @route '/resep'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ResepController::index
 * @see app/Http/Controllers/ResepController.php:20
 * @route '/resep'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ResepController::index
 * @see app/Http/Controllers/ResepController.php:20
 * @route '/resep'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ResepController::index
 * @see app/Http/Controllers/ResepController.php:20
 * @route '/resep'
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
* @see \App\Http\Controllers\ResepController::show
 * @see app/Http/Controllers/ResepController.php:85
 * @route '/resep/{resep}'
 */
export const show = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/resep/{resep}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ResepController::show
 * @see app/Http/Controllers/ResepController.php:85
 * @route '/resep/{resep}'
 */
show.url = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{resep}', parsedArgs.resep.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ResepController::show
 * @see app/Http/Controllers/ResepController.php:85
 * @route '/resep/{resep}'
 */
show.get = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ResepController::show
 * @see app/Http/Controllers/ResepController.php:85
 * @route '/resep/{resep}'
 */
show.head = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ResepController::show
 * @see app/Http/Controllers/ResepController.php:85
 * @route '/resep/{resep}'
 */
    const showForm = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ResepController::show
 * @see app/Http/Controllers/ResepController.php:85
 * @route '/resep/{resep}'
 */
        showForm.get = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ResepController::show
 * @see app/Http/Controllers/ResepController.php:85
 * @route '/resep/{resep}'
 */
        showForm.head = (args: { resep: string | number } | [resep: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const ResepController = { create, store, edit, update, destroy, index, show }

export default ResepController
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\BatchObatController::trash
 * @see app/Http/Controllers/BatchObatController.php:172
 * @route '/obat/batch-trash'
 */
export const trash = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

trash.definition = {
    methods: ["get","head"],
    url: '/obat/batch-trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BatchObatController::trash
 * @see app/Http/Controllers/BatchObatController.php:172
 * @route '/obat/batch-trash'
 */
trash.url = (options?: RouteQueryOptions) => {
    return trash.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BatchObatController::trash
 * @see app/Http/Controllers/BatchObatController.php:172
 * @route '/obat/batch-trash'
 */
trash.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BatchObatController::trash
 * @see app/Http/Controllers/BatchObatController.php:172
 * @route '/obat/batch-trash'
 */
trash.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trash.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BatchObatController::trash
 * @see app/Http/Controllers/BatchObatController.php:172
 * @route '/obat/batch-trash'
 */
    const trashForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: trash.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BatchObatController::trash
 * @see app/Http/Controllers/BatchObatController.php:172
 * @route '/obat/batch-trash'
 */
        trashForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: trash.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BatchObatController::trash
 * @see app/Http/Controllers/BatchObatController.php:172
 * @route '/obat/batch-trash'
 */
        trashForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: trash.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    trash.form = trashForm
/**
* @see \App\Http\Controllers\BatchObatController::restore
 * @see app/Http/Controllers/BatchObatController.php:187
 * @route '/obat/batch/{batch}/restore'
 */
export const restore = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: restore.url(args, options),
    method: 'post',
})

restore.definition = {
    methods: ["post"],
    url: '/obat/batch/{batch}/restore',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BatchObatController::restore
 * @see app/Http/Controllers/BatchObatController.php:187
 * @route '/obat/batch/{batch}/restore'
 */
restore.url = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return restore.definition.url
            .replace('{batch}', parsedArgs.batch.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BatchObatController::restore
 * @see app/Http/Controllers/BatchObatController.php:187
 * @route '/obat/batch/{batch}/restore'
 */
restore.post = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: restore.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\BatchObatController::restore
 * @see app/Http/Controllers/BatchObatController.php:187
 * @route '/obat/batch/{batch}/restore'
 */
    const restoreForm = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: restore.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BatchObatController::restore
 * @see app/Http/Controllers/BatchObatController.php:187
 * @route '/obat/batch/{batch}/restore'
 */
        restoreForm.post = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: restore.url(args, options),
            method: 'post',
        })
    
    restore.form = restoreForm
/**
* @see \App\Http\Controllers\BatchObatController::forceDelete
 * @see app/Http/Controllers/BatchObatController.php:207
 * @route '/obat/batch/{batch}/force'
 */
export const forceDelete = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/obat/batch/{batch}/force',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BatchObatController::forceDelete
 * @see app/Http/Controllers/BatchObatController.php:207
 * @route '/obat/batch/{batch}/force'
 */
forceDelete.url = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return forceDelete.definition.url
            .replace('{batch}', parsedArgs.batch.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BatchObatController::forceDelete
 * @see app/Http/Controllers/BatchObatController.php:207
 * @route '/obat/batch/{batch}/force'
 */
forceDelete.delete = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\BatchObatController::forceDelete
 * @see app/Http/Controllers/BatchObatController.php:207
 * @route '/obat/batch/{batch}/force'
 */
    const forceDeleteForm = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: forceDelete.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BatchObatController::forceDelete
 * @see app/Http/Controllers/BatchObatController.php:207
 * @route '/obat/batch/{batch}/force'
 */
        forceDeleteForm.delete = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: forceDelete.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    forceDelete.form = forceDeleteForm
/**
* @see \App\Http\Controllers\BatchObatController::create
 * @see app/Http/Controllers/BatchObatController.php:32
 * @route '/obat/batch/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/obat/batch/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BatchObatController::create
 * @see app/Http/Controllers/BatchObatController.php:32
 * @route '/obat/batch/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BatchObatController::create
 * @see app/Http/Controllers/BatchObatController.php:32
 * @route '/obat/batch/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BatchObatController::create
 * @see app/Http/Controllers/BatchObatController.php:32
 * @route '/obat/batch/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BatchObatController::create
 * @see app/Http/Controllers/BatchObatController.php:32
 * @route '/obat/batch/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BatchObatController::create
 * @see app/Http/Controllers/BatchObatController.php:32
 * @route '/obat/batch/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BatchObatController::create
 * @see app/Http/Controllers/BatchObatController.php:32
 * @route '/obat/batch/create'
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
* @see \App\Http\Controllers\BatchObatController::store
 * @see app/Http/Controllers/BatchObatController.php:41
 * @route '/obat/batch'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/obat/batch',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BatchObatController::store
 * @see app/Http/Controllers/BatchObatController.php:41
 * @route '/obat/batch'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BatchObatController::store
 * @see app/Http/Controllers/BatchObatController.php:41
 * @route '/obat/batch'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\BatchObatController::store
 * @see app/Http/Controllers/BatchObatController.php:41
 * @route '/obat/batch'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BatchObatController::store
 * @see app/Http/Controllers/BatchObatController.php:41
 * @route '/obat/batch'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\BatchObatController::edit
 * @see app/Http/Controllers/BatchObatController.php:89
 * @route '/obat/batch/{batch}/edit'
 */
export const edit = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/obat/batch/{batch}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BatchObatController::edit
 * @see app/Http/Controllers/BatchObatController.php:89
 * @route '/obat/batch/{batch}/edit'
 */
edit.url = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{batch}', parsedArgs.batch.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BatchObatController::edit
 * @see app/Http/Controllers/BatchObatController.php:89
 * @route '/obat/batch/{batch}/edit'
 */
edit.get = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BatchObatController::edit
 * @see app/Http/Controllers/BatchObatController.php:89
 * @route '/obat/batch/{batch}/edit'
 */
edit.head = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BatchObatController::edit
 * @see app/Http/Controllers/BatchObatController.php:89
 * @route '/obat/batch/{batch}/edit'
 */
    const editForm = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BatchObatController::edit
 * @see app/Http/Controllers/BatchObatController.php:89
 * @route '/obat/batch/{batch}/edit'
 */
        editForm.get = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BatchObatController::edit
 * @see app/Http/Controllers/BatchObatController.php:89
 * @route '/obat/batch/{batch}/edit'
 */
        editForm.head = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\BatchObatController::update
 * @see app/Http/Controllers/BatchObatController.php:112
 * @route '/obat/batch/{batch}'
 */
export const update = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/obat/batch/{batch}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\BatchObatController::update
 * @see app/Http/Controllers/BatchObatController.php:112
 * @route '/obat/batch/{batch}'
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
* @see \App\Http\Controllers\BatchObatController::update
 * @see app/Http/Controllers/BatchObatController.php:112
 * @route '/obat/batch/{batch}'
 */
update.put = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\BatchObatController::update
 * @see app/Http/Controllers/BatchObatController.php:112
 * @route '/obat/batch/{batch}'
 */
update.patch = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\BatchObatController::update
 * @see app/Http/Controllers/BatchObatController.php:112
 * @route '/obat/batch/{batch}'
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
* @see \App\Http\Controllers\BatchObatController::update
 * @see app/Http/Controllers/BatchObatController.php:112
 * @route '/obat/batch/{batch}'
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
* @see \App\Http\Controllers\BatchObatController::update
 * @see app/Http/Controllers/BatchObatController.php:112
 * @route '/obat/batch/{batch}'
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
* @see \App\Http\Controllers\BatchObatController::destroy
 * @see app/Http/Controllers/BatchObatController.php:145
 * @route '/obat/batch/{batch}'
 */
export const destroy = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/obat/batch/{batch}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BatchObatController::destroy
 * @see app/Http/Controllers/BatchObatController.php:145
 * @route '/obat/batch/{batch}'
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
* @see \App\Http\Controllers\BatchObatController::destroy
 * @see app/Http/Controllers/BatchObatController.php:145
 * @route '/obat/batch/{batch}'
 */
destroy.delete = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\BatchObatController::destroy
 * @see app/Http/Controllers/BatchObatController.php:145
 * @route '/obat/batch/{batch}'
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
* @see \App\Http\Controllers\BatchObatController::destroy
 * @see app/Http/Controllers/BatchObatController.php:145
 * @route '/obat/batch/{batch}'
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
/**
* @see \App\Http\Controllers\BatchObatController::index
 * @see app/Http/Controllers/BatchObatController.php:18
 * @route '/obat/batch'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/obat/batch',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BatchObatController::index
 * @see app/Http/Controllers/BatchObatController.php:18
 * @route '/obat/batch'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BatchObatController::index
 * @see app/Http/Controllers/BatchObatController.php:18
 * @route '/obat/batch'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BatchObatController::index
 * @see app/Http/Controllers/BatchObatController.php:18
 * @route '/obat/batch'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BatchObatController::index
 * @see app/Http/Controllers/BatchObatController.php:18
 * @route '/obat/batch'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BatchObatController::index
 * @see app/Http/Controllers/BatchObatController.php:18
 * @route '/obat/batch'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BatchObatController::index
 * @see app/Http/Controllers/BatchObatController.php:18
 * @route '/obat/batch'
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
* @see \App\Http\Controllers\BatchObatController::show
 * @see app/Http/Controllers/BatchObatController.php:76
 * @route '/obat/batch/{batch}'
 */
export const show = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/obat/batch/{batch}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BatchObatController::show
 * @see app/Http/Controllers/BatchObatController.php:76
 * @route '/obat/batch/{batch}'
 */
show.url = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{batch}', parsedArgs.batch.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BatchObatController::show
 * @see app/Http/Controllers/BatchObatController.php:76
 * @route '/obat/batch/{batch}'
 */
show.get = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BatchObatController::show
 * @see app/Http/Controllers/BatchObatController.php:76
 * @route '/obat/batch/{batch}'
 */
show.head = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BatchObatController::show
 * @see app/Http/Controllers/BatchObatController.php:76
 * @route '/obat/batch/{batch}'
 */
    const showForm = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BatchObatController::show
 * @see app/Http/Controllers/BatchObatController.php:76
 * @route '/obat/batch/{batch}'
 */
        showForm.get = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BatchObatController::show
 * @see app/Http/Controllers/BatchObatController.php:76
 * @route '/obat/batch/{batch}'
 */
        showForm.head = (args: { batch: string | number } | [batch: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const BatchObatController = { trash, restore, forceDelete, create, store, edit, update, destroy, index, show }

export default BatchObatController
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\SatuanObatController::index
 * @see app/Http/Controllers/SatuanObatController.php:15
 * @route '/satuan-obat'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/satuan-obat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SatuanObatController::index
 * @see app/Http/Controllers/SatuanObatController.php:15
 * @route '/satuan-obat'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SatuanObatController::index
 * @see app/Http/Controllers/SatuanObatController.php:15
 * @route '/satuan-obat'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SatuanObatController::index
 * @see app/Http/Controllers/SatuanObatController.php:15
 * @route '/satuan-obat'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SatuanObatController::index
 * @see app/Http/Controllers/SatuanObatController.php:15
 * @route '/satuan-obat'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SatuanObatController::index
 * @see app/Http/Controllers/SatuanObatController.php:15
 * @route '/satuan-obat'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SatuanObatController::index
 * @see app/Http/Controllers/SatuanObatController.php:15
 * @route '/satuan-obat'
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
* @see \App\Http\Controllers\SatuanObatController::create
 * @see app/Http/Controllers/SatuanObatController.php:23
 * @route '/satuan-obat/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/satuan-obat/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SatuanObatController::create
 * @see app/Http/Controllers/SatuanObatController.php:23
 * @route '/satuan-obat/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SatuanObatController::create
 * @see app/Http/Controllers/SatuanObatController.php:23
 * @route '/satuan-obat/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SatuanObatController::create
 * @see app/Http/Controllers/SatuanObatController.php:23
 * @route '/satuan-obat/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SatuanObatController::create
 * @see app/Http/Controllers/SatuanObatController.php:23
 * @route '/satuan-obat/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SatuanObatController::create
 * @see app/Http/Controllers/SatuanObatController.php:23
 * @route '/satuan-obat/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SatuanObatController::create
 * @see app/Http/Controllers/SatuanObatController.php:23
 * @route '/satuan-obat/create'
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
* @see \App\Http\Controllers\SatuanObatController::store
 * @see app/Http/Controllers/SatuanObatController.php:31
 * @route '/satuan-obat'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/satuan-obat',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SatuanObatController::store
 * @see app/Http/Controllers/SatuanObatController.php:31
 * @route '/satuan-obat'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SatuanObatController::store
 * @see app/Http/Controllers/SatuanObatController.php:31
 * @route '/satuan-obat'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SatuanObatController::store
 * @see app/Http/Controllers/SatuanObatController.php:31
 * @route '/satuan-obat'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SatuanObatController::store
 * @see app/Http/Controllers/SatuanObatController.php:31
 * @route '/satuan-obat'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\SatuanObatController::show
 * @see app/Http/Controllers/SatuanObatController.php:50
 * @route '/satuan-obat/{satuan_obat}'
 */
export const show = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/satuan-obat/{satuan_obat}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SatuanObatController::show
 * @see app/Http/Controllers/SatuanObatController.php:50
 * @route '/satuan-obat/{satuan_obat}'
 */
show.url = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { satuan_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    satuan_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        satuan_obat: args.satuan_obat,
                }

    return show.definition.url
            .replace('{satuan_obat}', parsedArgs.satuan_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SatuanObatController::show
 * @see app/Http/Controllers/SatuanObatController.php:50
 * @route '/satuan-obat/{satuan_obat}'
 */
show.get = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SatuanObatController::show
 * @see app/Http/Controllers/SatuanObatController.php:50
 * @route '/satuan-obat/{satuan_obat}'
 */
show.head = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SatuanObatController::show
 * @see app/Http/Controllers/SatuanObatController.php:50
 * @route '/satuan-obat/{satuan_obat}'
 */
    const showForm = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SatuanObatController::show
 * @see app/Http/Controllers/SatuanObatController.php:50
 * @route '/satuan-obat/{satuan_obat}'
 */
        showForm.get = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SatuanObatController::show
 * @see app/Http/Controllers/SatuanObatController.php:50
 * @route '/satuan-obat/{satuan_obat}'
 */
        showForm.head = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\SatuanObatController::edit
 * @see app/Http/Controllers/SatuanObatController.php:58
 * @route '/satuan-obat/{satuan_obat}/edit'
 */
export const edit = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/satuan-obat/{satuan_obat}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SatuanObatController::edit
 * @see app/Http/Controllers/SatuanObatController.php:58
 * @route '/satuan-obat/{satuan_obat}/edit'
 */
edit.url = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { satuan_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    satuan_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        satuan_obat: args.satuan_obat,
                }

    return edit.definition.url
            .replace('{satuan_obat}', parsedArgs.satuan_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SatuanObatController::edit
 * @see app/Http/Controllers/SatuanObatController.php:58
 * @route '/satuan-obat/{satuan_obat}/edit'
 */
edit.get = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SatuanObatController::edit
 * @see app/Http/Controllers/SatuanObatController.php:58
 * @route '/satuan-obat/{satuan_obat}/edit'
 */
edit.head = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SatuanObatController::edit
 * @see app/Http/Controllers/SatuanObatController.php:58
 * @route '/satuan-obat/{satuan_obat}/edit'
 */
    const editForm = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SatuanObatController::edit
 * @see app/Http/Controllers/SatuanObatController.php:58
 * @route '/satuan-obat/{satuan_obat}/edit'
 */
        editForm.get = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SatuanObatController::edit
 * @see app/Http/Controllers/SatuanObatController.php:58
 * @route '/satuan-obat/{satuan_obat}/edit'
 */
        editForm.head = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\SatuanObatController::update
 * @see app/Http/Controllers/SatuanObatController.php:66
 * @route '/satuan-obat/{satuan_obat}'
 */
export const update = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/satuan-obat/{satuan_obat}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\SatuanObatController::update
 * @see app/Http/Controllers/SatuanObatController.php:66
 * @route '/satuan-obat/{satuan_obat}'
 */
update.url = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { satuan_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    satuan_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        satuan_obat: args.satuan_obat,
                }

    return update.definition.url
            .replace('{satuan_obat}', parsedArgs.satuan_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SatuanObatController::update
 * @see app/Http/Controllers/SatuanObatController.php:66
 * @route '/satuan-obat/{satuan_obat}'
 */
update.put = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\SatuanObatController::update
 * @see app/Http/Controllers/SatuanObatController.php:66
 * @route '/satuan-obat/{satuan_obat}'
 */
update.patch = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\SatuanObatController::update
 * @see app/Http/Controllers/SatuanObatController.php:66
 * @route '/satuan-obat/{satuan_obat}'
 */
    const updateForm = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SatuanObatController::update
 * @see app/Http/Controllers/SatuanObatController.php:66
 * @route '/satuan-obat/{satuan_obat}'
 */
        updateForm.put = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\SatuanObatController::update
 * @see app/Http/Controllers/SatuanObatController.php:66
 * @route '/satuan-obat/{satuan_obat}'
 */
        updateForm.patch = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\SatuanObatController::destroy
 * @see app/Http/Controllers/SatuanObatController.php:85
 * @route '/satuan-obat/{satuan_obat}'
 */
export const destroy = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/satuan-obat/{satuan_obat}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\SatuanObatController::destroy
 * @see app/Http/Controllers/SatuanObatController.php:85
 * @route '/satuan-obat/{satuan_obat}'
 */
destroy.url = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { satuan_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    satuan_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        satuan_obat: args.satuan_obat,
                }

    return destroy.definition.url
            .replace('{satuan_obat}', parsedArgs.satuan_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SatuanObatController::destroy
 * @see app/Http/Controllers/SatuanObatController.php:85
 * @route '/satuan-obat/{satuan_obat}'
 */
destroy.delete = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\SatuanObatController::destroy
 * @see app/Http/Controllers/SatuanObatController.php:85
 * @route '/satuan-obat/{satuan_obat}'
 */
    const destroyForm = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SatuanObatController::destroy
 * @see app/Http/Controllers/SatuanObatController.php:85
 * @route '/satuan-obat/{satuan_obat}'
 */
        destroyForm.delete = (args: { satuan_obat: string | number } | [satuan_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const satuanObat = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default satuanObat
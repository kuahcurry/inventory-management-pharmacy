import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\KategoriObatController::index
 * @see app/Http/Controllers/KategoriObatController.php:18
 * @route '/masterdata'
 */
const index2581c3b260b8764aaf391f04530f423d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index2581c3b260b8764aaf391f04530f423d.url(options),
    method: 'get',
})

index2581c3b260b8764aaf391f04530f423d.definition = {
    methods: ["get","head"],
    url: '/masterdata',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KategoriObatController::index
 * @see app/Http/Controllers/KategoriObatController.php:18
 * @route '/masterdata'
 */
index2581c3b260b8764aaf391f04530f423d.url = (options?: RouteQueryOptions) => {
    return index2581c3b260b8764aaf391f04530f423d.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KategoriObatController::index
 * @see app/Http/Controllers/KategoriObatController.php:18
 * @route '/masterdata'
 */
index2581c3b260b8764aaf391f04530f423d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index2581c3b260b8764aaf391f04530f423d.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\KategoriObatController::index
 * @see app/Http/Controllers/KategoriObatController.php:18
 * @route '/masterdata'
 */
index2581c3b260b8764aaf391f04530f423d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index2581c3b260b8764aaf391f04530f423d.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\KategoriObatController::index
 * @see app/Http/Controllers/KategoriObatController.php:18
 * @route '/masterdata'
 */
    const index2581c3b260b8764aaf391f04530f423dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index2581c3b260b8764aaf391f04530f423d.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\KategoriObatController::index
 * @see app/Http/Controllers/KategoriObatController.php:18
 * @route '/masterdata'
 */
        index2581c3b260b8764aaf391f04530f423dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index2581c3b260b8764aaf391f04530f423d.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\KategoriObatController::index
 * @see app/Http/Controllers/KategoriObatController.php:18
 * @route '/masterdata'
 */
        index2581c3b260b8764aaf391f04530f423dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index2581c3b260b8764aaf391f04530f423d.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index2581c3b260b8764aaf391f04530f423d.form = index2581c3b260b8764aaf391f04530f423dForm
    /**
* @see \App\Http\Controllers\KategoriObatController::index
 * @see app/Http/Controllers/KategoriObatController.php:18
 * @route '/kategori-obat'
 */
const index8e9071e48d8209474a6894deab05501f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index8e9071e48d8209474a6894deab05501f.url(options),
    method: 'get',
})

index8e9071e48d8209474a6894deab05501f.definition = {
    methods: ["get","head"],
    url: '/kategori-obat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KategoriObatController::index
 * @see app/Http/Controllers/KategoriObatController.php:18
 * @route '/kategori-obat'
 */
index8e9071e48d8209474a6894deab05501f.url = (options?: RouteQueryOptions) => {
    return index8e9071e48d8209474a6894deab05501f.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KategoriObatController::index
 * @see app/Http/Controllers/KategoriObatController.php:18
 * @route '/kategori-obat'
 */
index8e9071e48d8209474a6894deab05501f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index8e9071e48d8209474a6894deab05501f.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\KategoriObatController::index
 * @see app/Http/Controllers/KategoriObatController.php:18
 * @route '/kategori-obat'
 */
index8e9071e48d8209474a6894deab05501f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index8e9071e48d8209474a6894deab05501f.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\KategoriObatController::index
 * @see app/Http/Controllers/KategoriObatController.php:18
 * @route '/kategori-obat'
 */
    const index8e9071e48d8209474a6894deab05501fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index8e9071e48d8209474a6894deab05501f.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\KategoriObatController::index
 * @see app/Http/Controllers/KategoriObatController.php:18
 * @route '/kategori-obat'
 */
        index8e9071e48d8209474a6894deab05501fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index8e9071e48d8209474a6894deab05501f.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\KategoriObatController::index
 * @see app/Http/Controllers/KategoriObatController.php:18
 * @route '/kategori-obat'
 */
        index8e9071e48d8209474a6894deab05501fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index8e9071e48d8209474a6894deab05501f.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index8e9071e48d8209474a6894deab05501f.form = index8e9071e48d8209474a6894deab05501fForm

export const index = {
    '/masterdata': index2581c3b260b8764aaf391f04530f423d,
    '/kategori-obat': index8e9071e48d8209474a6894deab05501f,
}

/**
* @see \App\Http\Controllers\KategoriObatController::create
 * @see app/Http/Controllers/KategoriObatController.php:31
 * @route '/kategori-obat/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/kategori-obat/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KategoriObatController::create
 * @see app/Http/Controllers/KategoriObatController.php:31
 * @route '/kategori-obat/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KategoriObatController::create
 * @see app/Http/Controllers/KategoriObatController.php:31
 * @route '/kategori-obat/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\KategoriObatController::create
 * @see app/Http/Controllers/KategoriObatController.php:31
 * @route '/kategori-obat/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\KategoriObatController::create
 * @see app/Http/Controllers/KategoriObatController.php:31
 * @route '/kategori-obat/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\KategoriObatController::create
 * @see app/Http/Controllers/KategoriObatController.php:31
 * @route '/kategori-obat/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\KategoriObatController::create
 * @see app/Http/Controllers/KategoriObatController.php:31
 * @route '/kategori-obat/create'
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
* @see \App\Http\Controllers\KategoriObatController::store
 * @see app/Http/Controllers/KategoriObatController.php:39
 * @route '/kategori-obat'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/kategori-obat',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\KategoriObatController::store
 * @see app/Http/Controllers/KategoriObatController.php:39
 * @route '/kategori-obat'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KategoriObatController::store
 * @see app/Http/Controllers/KategoriObatController.php:39
 * @route '/kategori-obat'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\KategoriObatController::store
 * @see app/Http/Controllers/KategoriObatController.php:39
 * @route '/kategori-obat'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\KategoriObatController::store
 * @see app/Http/Controllers/KategoriObatController.php:39
 * @route '/kategori-obat'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\KategoriObatController::show
 * @see app/Http/Controllers/KategoriObatController.php:58
 * @route '/kategori-obat/{kategori_obat}'
 */
export const show = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/kategori-obat/{kategori_obat}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KategoriObatController::show
 * @see app/Http/Controllers/KategoriObatController.php:58
 * @route '/kategori-obat/{kategori_obat}'
 */
show.url = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kategori_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    kategori_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kategori_obat: args.kategori_obat,
                }

    return show.definition.url
            .replace('{kategori_obat}', parsedArgs.kategori_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KategoriObatController::show
 * @see app/Http/Controllers/KategoriObatController.php:58
 * @route '/kategori-obat/{kategori_obat}'
 */
show.get = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\KategoriObatController::show
 * @see app/Http/Controllers/KategoriObatController.php:58
 * @route '/kategori-obat/{kategori_obat}'
 */
show.head = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\KategoriObatController::show
 * @see app/Http/Controllers/KategoriObatController.php:58
 * @route '/kategori-obat/{kategori_obat}'
 */
    const showForm = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\KategoriObatController::show
 * @see app/Http/Controllers/KategoriObatController.php:58
 * @route '/kategori-obat/{kategori_obat}'
 */
        showForm.get = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\KategoriObatController::show
 * @see app/Http/Controllers/KategoriObatController.php:58
 * @route '/kategori-obat/{kategori_obat}'
 */
        showForm.head = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\KategoriObatController::edit
 * @see app/Http/Controllers/KategoriObatController.php:66
 * @route '/kategori-obat/{kategori_obat}/edit'
 */
export const edit = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/kategori-obat/{kategori_obat}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KategoriObatController::edit
 * @see app/Http/Controllers/KategoriObatController.php:66
 * @route '/kategori-obat/{kategori_obat}/edit'
 */
edit.url = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kategori_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    kategori_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kategori_obat: args.kategori_obat,
                }

    return edit.definition.url
            .replace('{kategori_obat}', parsedArgs.kategori_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KategoriObatController::edit
 * @see app/Http/Controllers/KategoriObatController.php:66
 * @route '/kategori-obat/{kategori_obat}/edit'
 */
edit.get = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\KategoriObatController::edit
 * @see app/Http/Controllers/KategoriObatController.php:66
 * @route '/kategori-obat/{kategori_obat}/edit'
 */
edit.head = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\KategoriObatController::edit
 * @see app/Http/Controllers/KategoriObatController.php:66
 * @route '/kategori-obat/{kategori_obat}/edit'
 */
    const editForm = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\KategoriObatController::edit
 * @see app/Http/Controllers/KategoriObatController.php:66
 * @route '/kategori-obat/{kategori_obat}/edit'
 */
        editForm.get = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\KategoriObatController::edit
 * @see app/Http/Controllers/KategoriObatController.php:66
 * @route '/kategori-obat/{kategori_obat}/edit'
 */
        editForm.head = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\KategoriObatController::update
 * @see app/Http/Controllers/KategoriObatController.php:74
 * @route '/kategori-obat/{kategori_obat}'
 */
export const update = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/kategori-obat/{kategori_obat}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\KategoriObatController::update
 * @see app/Http/Controllers/KategoriObatController.php:74
 * @route '/kategori-obat/{kategori_obat}'
 */
update.url = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kategori_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    kategori_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kategori_obat: args.kategori_obat,
                }

    return update.definition.url
            .replace('{kategori_obat}', parsedArgs.kategori_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KategoriObatController::update
 * @see app/Http/Controllers/KategoriObatController.php:74
 * @route '/kategori-obat/{kategori_obat}'
 */
update.put = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\KategoriObatController::update
 * @see app/Http/Controllers/KategoriObatController.php:74
 * @route '/kategori-obat/{kategori_obat}'
 */
update.patch = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\KategoriObatController::update
 * @see app/Http/Controllers/KategoriObatController.php:74
 * @route '/kategori-obat/{kategori_obat}'
 */
    const updateForm = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\KategoriObatController::update
 * @see app/Http/Controllers/KategoriObatController.php:74
 * @route '/kategori-obat/{kategori_obat}'
 */
        updateForm.put = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\KategoriObatController::update
 * @see app/Http/Controllers/KategoriObatController.php:74
 * @route '/kategori-obat/{kategori_obat}'
 */
        updateForm.patch = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\KategoriObatController::destroy
 * @see app/Http/Controllers/KategoriObatController.php:93
 * @route '/kategori-obat/{kategori_obat}'
 */
export const destroy = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/kategori-obat/{kategori_obat}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\KategoriObatController::destroy
 * @see app/Http/Controllers/KategoriObatController.php:93
 * @route '/kategori-obat/{kategori_obat}'
 */
destroy.url = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kategori_obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    kategori_obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kategori_obat: args.kategori_obat,
                }

    return destroy.definition.url
            .replace('{kategori_obat}', parsedArgs.kategori_obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KategoriObatController::destroy
 * @see app/Http/Controllers/KategoriObatController.php:93
 * @route '/kategori-obat/{kategori_obat}'
 */
destroy.delete = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\KategoriObatController::destroy
 * @see app/Http/Controllers/KategoriObatController.php:93
 * @route '/kategori-obat/{kategori_obat}'
 */
    const destroyForm = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\KategoriObatController::destroy
 * @see app/Http/Controllers/KategoriObatController.php:93
 * @route '/kategori-obat/{kategori_obat}'
 */
        destroyForm.delete = (args: { kategori_obat: string | number } | [kategori_obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const KategoriObatController = { index, create, store, show, edit, update, destroy }

export default KategoriObatController
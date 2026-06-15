import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ObatController::downloadTemplate
 * @see app/Http/Controllers/ObatController.php:324
 * @route '/obat/download-template'
 */
export const downloadTemplate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadTemplate.url(options),
    method: 'get',
})

downloadTemplate.definition = {
    methods: ["get","head"],
    url: '/obat/download-template',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ObatController::downloadTemplate
 * @see app/Http/Controllers/ObatController.php:324
 * @route '/obat/download-template'
 */
downloadTemplate.url = (options?: RouteQueryOptions) => {
    return downloadTemplate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ObatController::downloadTemplate
 * @see app/Http/Controllers/ObatController.php:324
 * @route '/obat/download-template'
 */
downloadTemplate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadTemplate.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ObatController::downloadTemplate
 * @see app/Http/Controllers/ObatController.php:324
 * @route '/obat/download-template'
 */
downloadTemplate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadTemplate.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ObatController::downloadTemplate
 * @see app/Http/Controllers/ObatController.php:324
 * @route '/obat/download-template'
 */
    const downloadTemplateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: downloadTemplate.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ObatController::downloadTemplate
 * @see app/Http/Controllers/ObatController.php:324
 * @route '/obat/download-template'
 */
        downloadTemplateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadTemplate.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ObatController::downloadTemplate
 * @see app/Http/Controllers/ObatController.php:324
 * @route '/obat/download-template'
 */
        downloadTemplateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadTemplate.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    downloadTemplate.form = downloadTemplateForm
/**
* @see \App\Http\Controllers\ObatController::importMethod
 * @see app/Http/Controllers/ObatController.php:416
 * @route '/obat/import'
 */
export const importMethod = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMethod.url(options),
    method: 'post',
})

importMethod.definition = {
    methods: ["post"],
    url: '/obat/import',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ObatController::importMethod
 * @see app/Http/Controllers/ObatController.php:416
 * @route '/obat/import'
 */
importMethod.url = (options?: RouteQueryOptions) => {
    return importMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ObatController::importMethod
 * @see app/Http/Controllers/ObatController.php:416
 * @route '/obat/import'
 */
importMethod.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMethod.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ObatController::importMethod
 * @see app/Http/Controllers/ObatController.php:416
 * @route '/obat/import'
 */
    const importMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: importMethod.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ObatController::importMethod
 * @see app/Http/Controllers/ObatController.php:416
 * @route '/obat/import'
 */
        importMethodForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: importMethod.url(options),
            method: 'post',
        })
    
    importMethod.form = importMethodForm
/**
* @see \App\Http\Controllers\ObatController::trash
 * @see app/Http/Controllers/ObatController.php:275
 * @route '/obat/trash'
 */
export const trash = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

trash.definition = {
    methods: ["get","head"],
    url: '/obat/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ObatController::trash
 * @see app/Http/Controllers/ObatController.php:275
 * @route '/obat/trash'
 */
trash.url = (options?: RouteQueryOptions) => {
    return trash.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ObatController::trash
 * @see app/Http/Controllers/ObatController.php:275
 * @route '/obat/trash'
 */
trash.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ObatController::trash
 * @see app/Http/Controllers/ObatController.php:275
 * @route '/obat/trash'
 */
trash.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trash.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ObatController::trash
 * @see app/Http/Controllers/ObatController.php:275
 * @route '/obat/trash'
 */
    const trashForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: trash.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ObatController::trash
 * @see app/Http/Controllers/ObatController.php:275
 * @route '/obat/trash'
 */
        trashForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: trash.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ObatController::trash
 * @see app/Http/Controllers/ObatController.php:275
 * @route '/obat/trash'
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
* @see \App\Http\Controllers\ObatController::restore
 * @see app/Http/Controllers/ObatController.php:300
 * @route '/obat/{obat}/restore'
 */
export const restore = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: restore.url(args, options),
    method: 'post',
})

restore.definition = {
    methods: ["post"],
    url: '/obat/{obat}/restore',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ObatController::restore
 * @see app/Http/Controllers/ObatController.php:300
 * @route '/obat/{obat}/restore'
 */
restore.url = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        obat: args.obat,
                }

    return restore.definition.url
            .replace('{obat}', parsedArgs.obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ObatController::restore
 * @see app/Http/Controllers/ObatController.php:300
 * @route '/obat/{obat}/restore'
 */
restore.post = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: restore.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ObatController::restore
 * @see app/Http/Controllers/ObatController.php:300
 * @route '/obat/{obat}/restore'
 */
    const restoreForm = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: restore.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ObatController::restore
 * @see app/Http/Controllers/ObatController.php:300
 * @route '/obat/{obat}/restore'
 */
        restoreForm.post = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: restore.url(args, options),
            method: 'post',
        })
    
    restore.form = restoreForm
/**
* @see \App\Http\Controllers\ObatController::forceDelete
 * @see app/Http/Controllers/ObatController.php:312
 * @route '/obat/{obat}/force'
 */
export const forceDelete = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/obat/{obat}/force',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ObatController::forceDelete
 * @see app/Http/Controllers/ObatController.php:312
 * @route '/obat/{obat}/force'
 */
forceDelete.url = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        obat: args.obat,
                }

    return forceDelete.definition.url
            .replace('{obat}', parsedArgs.obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ObatController::forceDelete
 * @see app/Http/Controllers/ObatController.php:312
 * @route '/obat/{obat}/force'
 */
forceDelete.delete = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ObatController::forceDelete
 * @see app/Http/Controllers/ObatController.php:312
 * @route '/obat/{obat}/force'
 */
    const forceDeleteForm = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: forceDelete.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ObatController::forceDelete
 * @see app/Http/Controllers/ObatController.php:312
 * @route '/obat/{obat}/force'
 */
        forceDeleteForm.delete = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ObatController::index
 * @see app/Http/Controllers/ObatController.php:28
 * @route '/obat'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/obat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ObatController::index
 * @see app/Http/Controllers/ObatController.php:28
 * @route '/obat'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ObatController::index
 * @see app/Http/Controllers/ObatController.php:28
 * @route '/obat'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ObatController::index
 * @see app/Http/Controllers/ObatController.php:28
 * @route '/obat'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ObatController::index
 * @see app/Http/Controllers/ObatController.php:28
 * @route '/obat'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ObatController::index
 * @see app/Http/Controllers/ObatController.php:28
 * @route '/obat'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ObatController::index
 * @see app/Http/Controllers/ObatController.php:28
 * @route '/obat'
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
* @see \App\Http\Controllers\ObatController::create
 * @see app/Http/Controllers/ObatController.php:66
 * @route '/obat/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/obat/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ObatController::create
 * @see app/Http/Controllers/ObatController.php:66
 * @route '/obat/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ObatController::create
 * @see app/Http/Controllers/ObatController.php:66
 * @route '/obat/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ObatController::create
 * @see app/Http/Controllers/ObatController.php:66
 * @route '/obat/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ObatController::create
 * @see app/Http/Controllers/ObatController.php:66
 * @route '/obat/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ObatController::create
 * @see app/Http/Controllers/ObatController.php:66
 * @route '/obat/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ObatController::create
 * @see app/Http/Controllers/ObatController.php:66
 * @route '/obat/create'
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
* @see \App\Http\Controllers\ObatController::store
 * @see app/Http/Controllers/ObatController.php:79
 * @route '/obat'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/obat',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ObatController::store
 * @see app/Http/Controllers/ObatController.php:79
 * @route '/obat'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ObatController::store
 * @see app/Http/Controllers/ObatController.php:79
 * @route '/obat'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ObatController::store
 * @see app/Http/Controllers/ObatController.php:79
 * @route '/obat'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ObatController::store
 * @see app/Http/Controllers/ObatController.php:79
 * @route '/obat'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ObatController::show
 * @see app/Http/Controllers/ObatController.php:201
 * @route '/obat/{obat}'
 */
export const show = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/obat/{obat}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ObatController::show
 * @see app/Http/Controllers/ObatController.php:201
 * @route '/obat/{obat}'
 */
show.url = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        obat: args.obat,
                }

    return show.definition.url
            .replace('{obat}', parsedArgs.obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ObatController::show
 * @see app/Http/Controllers/ObatController.php:201
 * @route '/obat/{obat}'
 */
show.get = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ObatController::show
 * @see app/Http/Controllers/ObatController.php:201
 * @route '/obat/{obat}'
 */
show.head = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ObatController::show
 * @see app/Http/Controllers/ObatController.php:201
 * @route '/obat/{obat}'
 */
    const showForm = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ObatController::show
 * @see app/Http/Controllers/ObatController.php:201
 * @route '/obat/{obat}'
 */
        showForm.get = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ObatController::show
 * @see app/Http/Controllers/ObatController.php:201
 * @route '/obat/{obat}'
 */
        showForm.head = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ObatController::edit
 * @see app/Http/Controllers/ObatController.php:217
 * @route '/obat/{obat}/edit'
 */
export const edit = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/obat/{obat}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ObatController::edit
 * @see app/Http/Controllers/ObatController.php:217
 * @route '/obat/{obat}/edit'
 */
edit.url = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        obat: args.obat,
                }

    return edit.definition.url
            .replace('{obat}', parsedArgs.obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ObatController::edit
 * @see app/Http/Controllers/ObatController.php:217
 * @route '/obat/{obat}/edit'
 */
edit.get = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ObatController::edit
 * @see app/Http/Controllers/ObatController.php:217
 * @route '/obat/{obat}/edit'
 */
edit.head = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ObatController::edit
 * @see app/Http/Controllers/ObatController.php:217
 * @route '/obat/{obat}/edit'
 */
    const editForm = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ObatController::edit
 * @see app/Http/Controllers/ObatController.php:217
 * @route '/obat/{obat}/edit'
 */
        editForm.get = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ObatController::edit
 * @see app/Http/Controllers/ObatController.php:217
 * @route '/obat/{obat}/edit'
 */
        editForm.head = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ObatController::update
 * @see app/Http/Controllers/ObatController.php:232
 * @route '/obat/{obat}'
 */
export const update = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/obat/{obat}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ObatController::update
 * @see app/Http/Controllers/ObatController.php:232
 * @route '/obat/{obat}'
 */
update.url = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        obat: args.obat,
                }

    return update.definition.url
            .replace('{obat}', parsedArgs.obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ObatController::update
 * @see app/Http/Controllers/ObatController.php:232
 * @route '/obat/{obat}'
 */
update.put = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ObatController::update
 * @see app/Http/Controllers/ObatController.php:232
 * @route '/obat/{obat}'
 */
update.patch = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ObatController::update
 * @see app/Http/Controllers/ObatController.php:232
 * @route '/obat/{obat}'
 */
    const updateForm = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ObatController::update
 * @see app/Http/Controllers/ObatController.php:232
 * @route '/obat/{obat}'
 */
        updateForm.put = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\ObatController::update
 * @see app/Http/Controllers/ObatController.php:232
 * @route '/obat/{obat}'
 */
        updateForm.patch = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ObatController::destroy
 * @see app/Http/Controllers/ObatController.php:263
 * @route '/obat/{obat}'
 */
export const destroy = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/obat/{obat}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ObatController::destroy
 * @see app/Http/Controllers/ObatController.php:263
 * @route '/obat/{obat}'
 */
destroy.url = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { obat: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    obat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        obat: args.obat,
                }

    return destroy.definition.url
            .replace('{obat}', parsedArgs.obat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ObatController::destroy
 * @see app/Http/Controllers/ObatController.php:263
 * @route '/obat/{obat}'
 */
destroy.delete = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ObatController::destroy
 * @see app/Http/Controllers/ObatController.php:263
 * @route '/obat/{obat}'
 */
    const destroyForm = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ObatController::destroy
 * @see app/Http/Controllers/ObatController.php:263
 * @route '/obat/{obat}'
 */
        destroyForm.delete = (args: { obat: string | number } | [obat: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const ObatController = { downloadTemplate, importMethod, trash, restore, forceDelete, index, create, store, show, edit, update, destroy, import: importMethod }

export default ObatController
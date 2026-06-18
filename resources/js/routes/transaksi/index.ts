import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import kasir85294d from './kasir'
/**
* @see \App\Http\Controllers\TransaksiController::kasir
 * @see app/Http/Controllers/TransaksiController.php:26
 * @route '/kasir'
 */
export const kasir = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: kasir.url(options),
    method: 'get',
})

kasir.definition = {
    methods: ["get","head"],
    url: '/kasir',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TransaksiController::kasir
 * @see app/Http/Controllers/TransaksiController.php:26
 * @route '/kasir'
 */
kasir.url = (options?: RouteQueryOptions) => {
    return kasir.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TransaksiController::kasir
 * @see app/Http/Controllers/TransaksiController.php:26
 * @route '/kasir'
 */
kasir.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: kasir.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TransaksiController::kasir
 * @see app/Http/Controllers/TransaksiController.php:26
 * @route '/kasir'
 */
kasir.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: kasir.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TransaksiController::kasir
 * @see app/Http/Controllers/TransaksiController.php:26
 * @route '/kasir'
 */
    const kasirForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: kasir.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TransaksiController::kasir
 * @see app/Http/Controllers/TransaksiController.php:26
 * @route '/kasir'
 */
        kasirForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: kasir.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TransaksiController::kasir
 * @see app/Http/Controllers/TransaksiController.php:26
 * @route '/kasir'
 */
        kasirForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: kasir.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    kasir.form = kasirForm
/**
* @see \App\Http\Controllers\TransaksiController::index
 * @see app/Http/Controllers/TransaksiController.php:353
 * @route '/transaksi'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/transaksi',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TransaksiController::index
 * @see app/Http/Controllers/TransaksiController.php:353
 * @route '/transaksi'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TransaksiController::index
 * @see app/Http/Controllers/TransaksiController.php:353
 * @route '/transaksi'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TransaksiController::index
 * @see app/Http/Controllers/TransaksiController.php:353
 * @route '/transaksi'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TransaksiController::index
 * @see app/Http/Controllers/TransaksiController.php:353
 * @route '/transaksi'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TransaksiController::index
 * @see app/Http/Controllers/TransaksiController.php:353
 * @route '/transaksi'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TransaksiController::index
 * @see app/Http/Controllers/TransaksiController.php:353
 * @route '/transaksi'
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
* @see \App\Http\Controllers\TransaksiController::masuk
 * @see app/Http/Controllers/TransaksiController.php:777
 * @route '/transaksi/masuk'
 */
export const masuk = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: masuk.url(options),
    method: 'get',
})

masuk.definition = {
    methods: ["get","head"],
    url: '/transaksi/masuk',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TransaksiController::masuk
 * @see app/Http/Controllers/TransaksiController.php:777
 * @route '/transaksi/masuk'
 */
masuk.url = (options?: RouteQueryOptions) => {
    return masuk.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TransaksiController::masuk
 * @see app/Http/Controllers/TransaksiController.php:777
 * @route '/transaksi/masuk'
 */
masuk.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: masuk.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TransaksiController::masuk
 * @see app/Http/Controllers/TransaksiController.php:777
 * @route '/transaksi/masuk'
 */
masuk.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: masuk.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TransaksiController::masuk
 * @see app/Http/Controllers/TransaksiController.php:777
 * @route '/transaksi/masuk'
 */
    const masukForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: masuk.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TransaksiController::masuk
 * @see app/Http/Controllers/TransaksiController.php:777
 * @route '/transaksi/masuk'
 */
        masukForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: masuk.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TransaksiController::masuk
 * @see app/Http/Controllers/TransaksiController.php:777
 * @route '/transaksi/masuk'
 */
        masukForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: masuk.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    masuk.form = masukForm
/**
* @see \App\Http\Controllers\TransaksiController::keluar
 * @see app/Http/Controllers/TransaksiController.php:831
 * @route '/transaksi/keluar'
 */
export const keluar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: keluar.url(options),
    method: 'get',
})

keluar.definition = {
    methods: ["get","head"],
    url: '/transaksi/keluar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TransaksiController::keluar
 * @see app/Http/Controllers/TransaksiController.php:831
 * @route '/transaksi/keluar'
 */
keluar.url = (options?: RouteQueryOptions) => {
    return keluar.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TransaksiController::keluar
 * @see app/Http/Controllers/TransaksiController.php:831
 * @route '/transaksi/keluar'
 */
keluar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: keluar.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TransaksiController::keluar
 * @see app/Http/Controllers/TransaksiController.php:831
 * @route '/transaksi/keluar'
 */
keluar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: keluar.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TransaksiController::keluar
 * @see app/Http/Controllers/TransaksiController.php:831
 * @route '/transaksi/keluar'
 */
    const keluarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: keluar.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TransaksiController::keluar
 * @see app/Http/Controllers/TransaksiController.php:831
 * @route '/transaksi/keluar'
 */
        keluarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: keluar.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TransaksiController::keluar
 * @see app/Http/Controllers/TransaksiController.php:831
 * @route '/transaksi/keluar'
 */
        keluarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: keluar.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    keluar.form = keluarForm
/**
* @see \App\Http\Controllers\TransaksiController::create
 * @see app/Http/Controllers/TransaksiController.php:406
 * @route '/transaksi/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/transaksi/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TransaksiController::create
 * @see app/Http/Controllers/TransaksiController.php:406
 * @route '/transaksi/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TransaksiController::create
 * @see app/Http/Controllers/TransaksiController.php:406
 * @route '/transaksi/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TransaksiController::create
 * @see app/Http/Controllers/TransaksiController.php:406
 * @route '/transaksi/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TransaksiController::create
 * @see app/Http/Controllers/TransaksiController.php:406
 * @route '/transaksi/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TransaksiController::create
 * @see app/Http/Controllers/TransaksiController.php:406
 * @route '/transaksi/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TransaksiController::create
 * @see app/Http/Controllers/TransaksiController.php:406
 * @route '/transaksi/create'
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
* @see \App\Http\Controllers\TransaksiController::store
 * @see app/Http/Controllers/TransaksiController.php:425
 * @route '/transaksi'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/transaksi',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TransaksiController::store
 * @see app/Http/Controllers/TransaksiController.php:425
 * @route '/transaksi'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TransaksiController::store
 * @see app/Http/Controllers/TransaksiController.php:425
 * @route '/transaksi'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\TransaksiController::store
 * @see app/Http/Controllers/TransaksiController.php:425
 * @route '/transaksi'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TransaksiController::store
 * @see app/Http/Controllers/TransaksiController.php:425
 * @route '/transaksi'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\TransaksiController::edit
 * @see app/Http/Controllers/TransaksiController.php:579
 * @route '/transaksi/{transaksi}/edit'
 */
export const edit = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/transaksi/{transaksi}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TransaksiController::edit
 * @see app/Http/Controllers/TransaksiController.php:579
 * @route '/transaksi/{transaksi}/edit'
 */
edit.url = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { transaksi: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    transaksi: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        transaksi: args.transaksi,
                }

    return edit.definition.url
            .replace('{transaksi}', parsedArgs.transaksi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TransaksiController::edit
 * @see app/Http/Controllers/TransaksiController.php:579
 * @route '/transaksi/{transaksi}/edit'
 */
edit.get = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TransaksiController::edit
 * @see app/Http/Controllers/TransaksiController.php:579
 * @route '/transaksi/{transaksi}/edit'
 */
edit.head = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TransaksiController::edit
 * @see app/Http/Controllers/TransaksiController.php:579
 * @route '/transaksi/{transaksi}/edit'
 */
    const editForm = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TransaksiController::edit
 * @see app/Http/Controllers/TransaksiController.php:579
 * @route '/transaksi/{transaksi}/edit'
 */
        editForm.get = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TransaksiController::edit
 * @see app/Http/Controllers/TransaksiController.php:579
 * @route '/transaksi/{transaksi}/edit'
 */
        editForm.head = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\TransaksiController::update
 * @see app/Http/Controllers/TransaksiController.php:604
 * @route '/transaksi/{transaksi}'
 */
export const update = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/transaksi/{transaksi}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\TransaksiController::update
 * @see app/Http/Controllers/TransaksiController.php:604
 * @route '/transaksi/{transaksi}'
 */
update.url = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { transaksi: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    transaksi: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        transaksi: args.transaksi,
                }

    return update.definition.url
            .replace('{transaksi}', parsedArgs.transaksi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TransaksiController::update
 * @see app/Http/Controllers/TransaksiController.php:604
 * @route '/transaksi/{transaksi}'
 */
update.put = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\TransaksiController::update
 * @see app/Http/Controllers/TransaksiController.php:604
 * @route '/transaksi/{transaksi}'
 */
update.patch = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\TransaksiController::update
 * @see app/Http/Controllers/TransaksiController.php:604
 * @route '/transaksi/{transaksi}'
 */
    const updateForm = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TransaksiController::update
 * @see app/Http/Controllers/TransaksiController.php:604
 * @route '/transaksi/{transaksi}'
 */
        updateForm.put = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\TransaksiController::update
 * @see app/Http/Controllers/TransaksiController.php:604
 * @route '/transaksi/{transaksi}'
 */
        updateForm.patch = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\TransaksiController::destroy
 * @see app/Http/Controllers/TransaksiController.php:666
 * @route '/transaksi/{transaksi}'
 */
export const destroy = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/transaksi/{transaksi}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\TransaksiController::destroy
 * @see app/Http/Controllers/TransaksiController.php:666
 * @route '/transaksi/{transaksi}'
 */
destroy.url = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { transaksi: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    transaksi: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        transaksi: args.transaksi,
                }

    return destroy.definition.url
            .replace('{transaksi}', parsedArgs.transaksi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TransaksiController::destroy
 * @see app/Http/Controllers/TransaksiController.php:666
 * @route '/transaksi/{transaksi}'
 */
destroy.delete = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\TransaksiController::destroy
 * @see app/Http/Controllers/TransaksiController.php:666
 * @route '/transaksi/{transaksi}'
 */
    const destroyForm = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TransaksiController::destroy
 * @see app/Http/Controllers/TransaksiController.php:666
 * @route '/transaksi/{transaksi}'
 */
        destroyForm.delete = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\TransaksiController::show
 * @see app/Http/Controllers/TransaksiController.php:555
 * @route '/transaksi/{transaksi}'
 */
export const show = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/transaksi/{transaksi}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TransaksiController::show
 * @see app/Http/Controllers/TransaksiController.php:555
 * @route '/transaksi/{transaksi}'
 */
show.url = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { transaksi: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    transaksi: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        transaksi: args.transaksi,
                }

    return show.definition.url
            .replace('{transaksi}', parsedArgs.transaksi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TransaksiController::show
 * @see app/Http/Controllers/TransaksiController.php:555
 * @route '/transaksi/{transaksi}'
 */
show.get = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TransaksiController::show
 * @see app/Http/Controllers/TransaksiController.php:555
 * @route '/transaksi/{transaksi}'
 */
show.head = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TransaksiController::show
 * @see app/Http/Controllers/TransaksiController.php:555
 * @route '/transaksi/{transaksi}'
 */
    const showForm = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TransaksiController::show
 * @see app/Http/Controllers/TransaksiController.php:555
 * @route '/transaksi/{transaksi}'
 */
        showForm.get = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TransaksiController::show
 * @see app/Http/Controllers/TransaksiController.php:555
 * @route '/transaksi/{transaksi}'
 */
        showForm.head = (args: { transaksi: string | number } | [transaksi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const transaksi = {
    kasir: Object.assign(kasir, kasir85294d),
index: Object.assign(index, index),
masuk: Object.assign(masuk, masuk),
keluar: Object.assign(keluar, keluar),
create: Object.assign(create, create),
store: Object.assign(store, store),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
show: Object.assign(show, show),
}

export default transaksi
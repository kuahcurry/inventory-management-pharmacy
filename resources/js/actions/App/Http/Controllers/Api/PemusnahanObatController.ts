import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::eligibleForDestruction
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:180
 * @route '/api/pemusnahan/eligible'
 */
export const eligibleForDestruction = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eligibleForDestruction.url(options),
    method: 'get',
})

eligibleForDestruction.definition = {
    methods: ["get","head"],
    url: '/api/pemusnahan/eligible',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::eligibleForDestruction
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:180
 * @route '/api/pemusnahan/eligible'
 */
eligibleForDestruction.url = (options?: RouteQueryOptions) => {
    return eligibleForDestruction.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::eligibleForDestruction
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:180
 * @route '/api/pemusnahan/eligible'
 */
eligibleForDestruction.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eligibleForDestruction.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::eligibleForDestruction
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:180
 * @route '/api/pemusnahan/eligible'
 */
eligibleForDestruction.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: eligibleForDestruction.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::eligibleForDestruction
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:180
 * @route '/api/pemusnahan/eligible'
 */
    const eligibleForDestructionForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: eligibleForDestruction.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::eligibleForDestruction
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:180
 * @route '/api/pemusnahan/eligible'
 */
        eligibleForDestructionForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: eligibleForDestruction.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::eligibleForDestruction
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:180
 * @route '/api/pemusnahan/eligible'
 */
        eligibleForDestructionForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: eligibleForDestruction.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    eligibleForDestruction.form = eligibleForDestructionForm
/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::pendingApproval
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:167
 * @route '/api/pemusnahan/pending-approval'
 */
export const pendingApproval = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pendingApproval.url(options),
    method: 'get',
})

pendingApproval.definition = {
    methods: ["get","head"],
    url: '/api/pemusnahan/pending-approval',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::pendingApproval
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:167
 * @route '/api/pemusnahan/pending-approval'
 */
pendingApproval.url = (options?: RouteQueryOptions) => {
    return pendingApproval.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::pendingApproval
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:167
 * @route '/api/pemusnahan/pending-approval'
 */
pendingApproval.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pendingApproval.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::pendingApproval
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:167
 * @route '/api/pemusnahan/pending-approval'
 */
pendingApproval.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pendingApproval.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::pendingApproval
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:167
 * @route '/api/pemusnahan/pending-approval'
 */
    const pendingApprovalForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: pendingApproval.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::pendingApproval
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:167
 * @route '/api/pemusnahan/pending-approval'
 */
        pendingApprovalForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pendingApproval.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::pendingApproval
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:167
 * @route '/api/pemusnahan/pending-approval'
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
* @see \App\Http\Controllers\Api\PemusnahanObatController::uploadBeritaAcara
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:115
 * @route '/api/pemusnahan/{pemusnahanObat}/upload-ba'
 */
export const uploadBeritaAcara = (args: { pemusnahanObat: number | { id: number } } | [pemusnahanObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadBeritaAcara.url(args, options),
    method: 'post',
})

uploadBeritaAcara.definition = {
    methods: ["post"],
    url: '/api/pemusnahan/{pemusnahanObat}/upload-ba',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::uploadBeritaAcara
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:115
 * @route '/api/pemusnahan/{pemusnahanObat}/upload-ba'
 */
uploadBeritaAcara.url = (args: { pemusnahanObat: number | { id: number } } | [pemusnahanObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pemusnahanObat: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { pemusnahanObat: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    pemusnahanObat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pemusnahanObat: typeof args.pemusnahanObat === 'object'
                ? args.pemusnahanObat.id
                : args.pemusnahanObat,
                }

    return uploadBeritaAcara.definition.url
            .replace('{pemusnahanObat}', parsedArgs.pemusnahanObat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::uploadBeritaAcara
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:115
 * @route '/api/pemusnahan/{pemusnahanObat}/upload-ba'
 */
uploadBeritaAcara.post = (args: { pemusnahanObat: number | { id: number } } | [pemusnahanObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadBeritaAcara.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::uploadBeritaAcara
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:115
 * @route '/api/pemusnahan/{pemusnahanObat}/upload-ba'
 */
    const uploadBeritaAcaraForm = (args: { pemusnahanObat: number | { id: number } } | [pemusnahanObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: uploadBeritaAcara.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::uploadBeritaAcara
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:115
 * @route '/api/pemusnahan/{pemusnahanObat}/upload-ba'
 */
        uploadBeritaAcaraForm.post = (args: { pemusnahanObat: number | { id: number } } | [pemusnahanObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: uploadBeritaAcara.url(args, options),
            method: 'post',
        })
    
    uploadBeritaAcara.form = uploadBeritaAcaraForm
/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::approve
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:141
 * @route '/api/pemusnahan/{pemusnahanObat}/approve'
 */
export const approve = (args: { pemusnahanObat: number | { id: number } } | [pemusnahanObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

approve.definition = {
    methods: ["post"],
    url: '/api/pemusnahan/{pemusnahanObat}/approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::approve
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:141
 * @route '/api/pemusnahan/{pemusnahanObat}/approve'
 */
approve.url = (args: { pemusnahanObat: number | { id: number } } | [pemusnahanObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pemusnahanObat: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { pemusnahanObat: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    pemusnahanObat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pemusnahanObat: typeof args.pemusnahanObat === 'object'
                ? args.pemusnahanObat.id
                : args.pemusnahanObat,
                }

    return approve.definition.url
            .replace('{pemusnahanObat}', parsedArgs.pemusnahanObat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::approve
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:141
 * @route '/api/pemusnahan/{pemusnahanObat}/approve'
 */
approve.post = (args: { pemusnahanObat: number | { id: number } } | [pemusnahanObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::approve
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:141
 * @route '/api/pemusnahan/{pemusnahanObat}/approve'
 */
    const approveForm = (args: { pemusnahanObat: number | { id: number } } | [pemusnahanObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: approve.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::approve
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:141
 * @route '/api/pemusnahan/{pemusnahanObat}/approve'
 */
        approveForm.post = (args: { pemusnahanObat: number | { id: number } } | [pemusnahanObat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: approve.url(args, options),
            method: 'post',
        })
    
    approve.form = approveForm
/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::index
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:20
 * @route '/api/pemusnahan'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/pemusnahan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::index
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:20
 * @route '/api/pemusnahan'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::index
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:20
 * @route '/api/pemusnahan'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::index
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:20
 * @route '/api/pemusnahan'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::index
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:20
 * @route '/api/pemusnahan'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::index
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:20
 * @route '/api/pemusnahan'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::index
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:20
 * @route '/api/pemusnahan'
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
* @see \App\Http\Controllers\Api\PemusnahanObatController::store
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:40
 * @route '/api/pemusnahan'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/pemusnahan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::store
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:40
 * @route '/api/pemusnahan'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::store
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:40
 * @route '/api/pemusnahan'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::store
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:40
 * @route '/api/pemusnahan'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::store
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:40
 * @route '/api/pemusnahan'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::show
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:105
 * @route '/api/pemusnahan/{pemusnahan}'
 */
export const show = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/pemusnahan/{pemusnahan}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::show
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:105
 * @route '/api/pemusnahan/{pemusnahan}'
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
* @see \App\Http\Controllers\Api\PemusnahanObatController::show
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:105
 * @route '/api/pemusnahan/{pemusnahan}'
 */
show.get = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::show
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:105
 * @route '/api/pemusnahan/{pemusnahan}'
 */
show.head = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::show
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:105
 * @route '/api/pemusnahan/{pemusnahan}'
 */
    const showForm = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::show
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:105
 * @route '/api/pemusnahan/{pemusnahan}'
 */
        showForm.get = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::show
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:105
 * @route '/api/pemusnahan/{pemusnahan}'
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
* @see \App\Http\Controllers\Api\PemusnahanObatController::update
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:0
 * @route '/api/pemusnahan/{pemusnahan}'
 */
export const update = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/pemusnahan/{pemusnahan}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::update
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:0
 * @route '/api/pemusnahan/{pemusnahan}'
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
* @see \App\Http\Controllers\Api\PemusnahanObatController::update
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:0
 * @route '/api/pemusnahan/{pemusnahan}'
 */
update.put = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::update
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:0
 * @route '/api/pemusnahan/{pemusnahan}'
 */
update.patch = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::update
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:0
 * @route '/api/pemusnahan/{pemusnahan}'
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
* @see \App\Http\Controllers\Api\PemusnahanObatController::update
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:0
 * @route '/api/pemusnahan/{pemusnahan}'
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
* @see \App\Http\Controllers\Api\PemusnahanObatController::update
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:0
 * @route '/api/pemusnahan/{pemusnahan}'
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
* @see \App\Http\Controllers\Api\PemusnahanObatController::destroy
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:0
 * @route '/api/pemusnahan/{pemusnahan}'
 */
export const destroy = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/pemusnahan/{pemusnahan}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::destroy
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:0
 * @route '/api/pemusnahan/{pemusnahan}'
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
* @see \App\Http\Controllers\Api\PemusnahanObatController::destroy
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:0
 * @route '/api/pemusnahan/{pemusnahan}'
 */
destroy.delete = (args: { pemusnahan: string | number } | [pemusnahan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::destroy
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:0
 * @route '/api/pemusnahan/{pemusnahan}'
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
* @see \App\Http\Controllers\Api\PemusnahanObatController::destroy
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:0
 * @route '/api/pemusnahan/{pemusnahan}'
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
const PemusnahanObatController = { eligibleForDestruction, pendingApproval, uploadBeritaAcara, approve, index, store, show, update, destroy }

export default PemusnahanObatController
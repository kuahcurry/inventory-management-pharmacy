import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::eligible
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:180
 * @route '/api/pemusnahan/eligible'
 */
export const eligible = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eligible.url(options),
    method: 'get',
})

eligible.definition = {
    methods: ["get","head"],
    url: '/api/pemusnahan/eligible',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::eligible
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:180
 * @route '/api/pemusnahan/eligible'
 */
eligible.url = (options?: RouteQueryOptions) => {
    return eligible.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::eligible
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:180
 * @route '/api/pemusnahan/eligible'
 */
eligible.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eligible.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::eligible
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:180
 * @route '/api/pemusnahan/eligible'
 */
eligible.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: eligible.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::eligible
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:180
 * @route '/api/pemusnahan/eligible'
 */
    const eligibleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: eligible.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::eligible
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:180
 * @route '/api/pemusnahan/eligible'
 */
        eligibleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: eligible.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::eligible
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:180
 * @route '/api/pemusnahan/eligible'
 */
        eligibleForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: eligible.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    eligible.form = eligibleForm
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
* @see \App\Http\Controllers\Api\PemusnahanObatController::uploadBa
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:115
 * @route '/api/pemusnahan/{pemusnahanObat}/upload-ba'
 */
export const uploadBa = (args: { pemusnahanObat: string | number | { id: string | number } } | [pemusnahanObat: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadBa.url(args, options),
    method: 'post',
})

uploadBa.definition = {
    methods: ["post"],
    url: '/api/pemusnahan/{pemusnahanObat}/upload-ba',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::uploadBa
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:115
 * @route '/api/pemusnahan/{pemusnahanObat}/upload-ba'
 */
uploadBa.url = (args: { pemusnahanObat: string | number | { id: string | number } } | [pemusnahanObat: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return uploadBa.definition.url
            .replace('{pemusnahanObat}', parsedArgs.pemusnahanObat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::uploadBa
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:115
 * @route '/api/pemusnahan/{pemusnahanObat}/upload-ba'
 */
uploadBa.post = (args: { pemusnahanObat: string | number | { id: string | number } } | [pemusnahanObat: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadBa.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::uploadBa
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:115
 * @route '/api/pemusnahan/{pemusnahanObat}/upload-ba'
 */
    const uploadBaForm = (args: { pemusnahanObat: string | number | { id: string | number } } | [pemusnahanObat: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: uploadBa.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::uploadBa
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:115
 * @route '/api/pemusnahan/{pemusnahanObat}/upload-ba'
 */
        uploadBaForm.post = (args: { pemusnahanObat: string | number | { id: string | number } } | [pemusnahanObat: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: uploadBa.url(args, options),
            method: 'post',
        })
    
    uploadBa.form = uploadBaForm
/**
* @see \App\Http\Controllers\Api\PemusnahanObatController::approve
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:141
 * @route '/api/pemusnahan/{pemusnahanObat}/approve'
 */
export const approve = (args: { pemusnahanObat: string | number | { id: string | number } } | [pemusnahanObat: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
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
approve.url = (args: { pemusnahanObat: string | number | { id: string | number } } | [pemusnahanObat: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
approve.post = (args: { pemusnahanObat: string | number | { id: string | number } } | [pemusnahanObat: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::approve
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:141
 * @route '/api/pemusnahan/{pemusnahanObat}/approve'
 */
    const approveForm = (args: { pemusnahanObat: string | number | { id: string | number } } | [pemusnahanObat: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: approve.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\PemusnahanObatController::approve
 * @see app/Http/Controllers/Api/PemusnahanObatController.php:141
 * @route '/api/pemusnahan/{pemusnahanObat}/approve'
 */
        approveForm.post = (args: { pemusnahanObat: string | number | { id: string | number } } | [pemusnahanObat: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
const pemusnahan = {
    eligible: Object.assign(eligible, eligible),
pendingApproval: Object.assign(pendingApproval, pendingApproval),
uploadBa: Object.assign(uploadBa, uploadBa),
approve: Object.assign(approve, approve),
index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default pemusnahan
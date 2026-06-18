import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:33
 * @route '/reports'
 */
const index58ce3b21459752ee73930d924bf98aec = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index58ce3b21459752ee73930d924bf98aec.url(options),
    method: 'get',
})

index58ce3b21459752ee73930d924bf98aec.definition = {
    methods: ["get","head"],
    url: '/reports',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:33
 * @route '/reports'
 */
index58ce3b21459752ee73930d924bf98aec.url = (options?: RouteQueryOptions) => {
    return index58ce3b21459752ee73930d924bf98aec.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:33
 * @route '/reports'
 */
index58ce3b21459752ee73930d924bf98aec.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index58ce3b21459752ee73930d924bf98aec.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:33
 * @route '/reports'
 */
index58ce3b21459752ee73930d924bf98aec.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index58ce3b21459752ee73930d924bf98aec.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:33
 * @route '/reports'
 */
    const index58ce3b21459752ee73930d924bf98aecForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index58ce3b21459752ee73930d924bf98aec.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:33
 * @route '/reports'
 */
        index58ce3b21459752ee73930d924bf98aecForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index58ce3b21459752ee73930d924bf98aec.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:33
 * @route '/reports'
 */
        index58ce3b21459752ee73930d924bf98aecForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index58ce3b21459752ee73930d924bf98aec.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index58ce3b21459752ee73930d924bf98aec.form = index58ce3b21459752ee73930d924bf98aecForm
    /**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:33
 * @route '/laporan'
 */
const indexaa40b76d95e9a485d3db1f7094792d8f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexaa40b76d95e9a485d3db1f7094792d8f.url(options),
    method: 'get',
})

indexaa40b76d95e9a485d3db1f7094792d8f.definition = {
    methods: ["get","head"],
    url: '/laporan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:33
 * @route '/laporan'
 */
indexaa40b76d95e9a485d3db1f7094792d8f.url = (options?: RouteQueryOptions) => {
    return indexaa40b76d95e9a485d3db1f7094792d8f.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:33
 * @route '/laporan'
 */
indexaa40b76d95e9a485d3db1f7094792d8f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexaa40b76d95e9a485d3db1f7094792d8f.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:33
 * @route '/laporan'
 */
indexaa40b76d95e9a485d3db1f7094792d8f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexaa40b76d95e9a485d3db1f7094792d8f.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:33
 * @route '/laporan'
 */
    const indexaa40b76d95e9a485d3db1f7094792d8fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexaa40b76d95e9a485d3db1f7094792d8f.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:33
 * @route '/laporan'
 */
        indexaa40b76d95e9a485d3db1f7094792d8fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexaa40b76d95e9a485d3db1f7094792d8f.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:33
 * @route '/laporan'
 */
        indexaa40b76d95e9a485d3db1f7094792d8fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexaa40b76d95e9a485d3db1f7094792d8f.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexaa40b76d95e9a485d3db1f7094792d8f.form = indexaa40b76d95e9a485d3db1f7094792d8fForm

export const index = {
    '/reports': index58ce3b21459752ee73930d924bf98aec,
    '/laporan': indexaa40b76d95e9a485d3db1f7094792d8f,
}

/**
* @see \App\Http\Controllers\ReportController::pembelian
 * @see app/Http/Controllers/ReportController.php:38
 * @route '/reports/pembelian'
 */
export const pembelian = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pembelian.url(options),
    method: 'get',
})

pembelian.definition = {
    methods: ["get","head"],
    url: '/reports/pembelian',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::pembelian
 * @see app/Http/Controllers/ReportController.php:38
 * @route '/reports/pembelian'
 */
pembelian.url = (options?: RouteQueryOptions) => {
    return pembelian.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::pembelian
 * @see app/Http/Controllers/ReportController.php:38
 * @route '/reports/pembelian'
 */
pembelian.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pembelian.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::pembelian
 * @see app/Http/Controllers/ReportController.php:38
 * @route '/reports/pembelian'
 */
pembelian.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pembelian.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::pembelian
 * @see app/Http/Controllers/ReportController.php:38
 * @route '/reports/pembelian'
 */
    const pembelianForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: pembelian.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::pembelian
 * @see app/Http/Controllers/ReportController.php:38
 * @route '/reports/pembelian'
 */
        pembelianForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pembelian.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::pembelian
 * @see app/Http/Controllers/ReportController.php:38
 * @route '/reports/pembelian'
 */
        pembelianForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pembelian.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    pembelian.form = pembelianForm
/**
* @see \App\Http\Controllers\ReportController::pembelianExport
 * @see app/Http/Controllers/ReportController.php:43
 * @route '/reports/pembelian/export'
 */
export const pembelianExport = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pembelianExport.url(options),
    method: 'get',
})

pembelianExport.definition = {
    methods: ["get","head"],
    url: '/reports/pembelian/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::pembelianExport
 * @see app/Http/Controllers/ReportController.php:43
 * @route '/reports/pembelian/export'
 */
pembelianExport.url = (options?: RouteQueryOptions) => {
    return pembelianExport.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::pembelianExport
 * @see app/Http/Controllers/ReportController.php:43
 * @route '/reports/pembelian/export'
 */
pembelianExport.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pembelianExport.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::pembelianExport
 * @see app/Http/Controllers/ReportController.php:43
 * @route '/reports/pembelian/export'
 */
pembelianExport.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pembelianExport.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::pembelianExport
 * @see app/Http/Controllers/ReportController.php:43
 * @route '/reports/pembelian/export'
 */
    const pembelianExportForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: pembelianExport.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::pembelianExport
 * @see app/Http/Controllers/ReportController.php:43
 * @route '/reports/pembelian/export'
 */
        pembelianExportForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pembelianExport.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::pembelianExport
 * @see app/Http/Controllers/ReportController.php:43
 * @route '/reports/pembelian/export'
 */
        pembelianExportForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pembelianExport.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    pembelianExport.form = pembelianExportForm
/**
* @see \App\Http\Controllers\ReportController::penjualan
 * @see app/Http/Controllers/ReportController.php:48
 * @route '/reports/penjualan'
 */
export const penjualan = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: penjualan.url(options),
    method: 'get',
})

penjualan.definition = {
    methods: ["get","head"],
    url: '/reports/penjualan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::penjualan
 * @see app/Http/Controllers/ReportController.php:48
 * @route '/reports/penjualan'
 */
penjualan.url = (options?: RouteQueryOptions) => {
    return penjualan.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::penjualan
 * @see app/Http/Controllers/ReportController.php:48
 * @route '/reports/penjualan'
 */
penjualan.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: penjualan.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::penjualan
 * @see app/Http/Controllers/ReportController.php:48
 * @route '/reports/penjualan'
 */
penjualan.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: penjualan.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::penjualan
 * @see app/Http/Controllers/ReportController.php:48
 * @route '/reports/penjualan'
 */
    const penjualanForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: penjualan.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::penjualan
 * @see app/Http/Controllers/ReportController.php:48
 * @route '/reports/penjualan'
 */
        penjualanForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: penjualan.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::penjualan
 * @see app/Http/Controllers/ReportController.php:48
 * @route '/reports/penjualan'
 */
        penjualanForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: penjualan.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    penjualan.form = penjualanForm
/**
* @see \App\Http\Controllers\ReportController::penjualanExport
 * @see app/Http/Controllers/ReportController.php:53
 * @route '/reports/penjualan/export'
 */
export const penjualanExport = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: penjualanExport.url(options),
    method: 'get',
})

penjualanExport.definition = {
    methods: ["get","head"],
    url: '/reports/penjualan/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::penjualanExport
 * @see app/Http/Controllers/ReportController.php:53
 * @route '/reports/penjualan/export'
 */
penjualanExport.url = (options?: RouteQueryOptions) => {
    return penjualanExport.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::penjualanExport
 * @see app/Http/Controllers/ReportController.php:53
 * @route '/reports/penjualan/export'
 */
penjualanExport.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: penjualanExport.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::penjualanExport
 * @see app/Http/Controllers/ReportController.php:53
 * @route '/reports/penjualan/export'
 */
penjualanExport.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: penjualanExport.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::penjualanExport
 * @see app/Http/Controllers/ReportController.php:53
 * @route '/reports/penjualan/export'
 */
    const penjualanExportForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: penjualanExport.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::penjualanExport
 * @see app/Http/Controllers/ReportController.php:53
 * @route '/reports/penjualan/export'
 */
        penjualanExportForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: penjualanExport.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::penjualanExport
 * @see app/Http/Controllers/ReportController.php:53
 * @route '/reports/penjualan/export'
 */
        penjualanExportForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: penjualanExport.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    penjualanExport.form = penjualanExportForm
/**
* @see \App\Http\Controllers\ReportController::hutangPiutang
 * @see app/Http/Controllers/ReportController.php:58
 * @route '/reports/hutang-piutang'
 */
export const hutangPiutang = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: hutangPiutang.url(options),
    method: 'get',
})

hutangPiutang.definition = {
    methods: ["get","head"],
    url: '/reports/hutang-piutang',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::hutangPiutang
 * @see app/Http/Controllers/ReportController.php:58
 * @route '/reports/hutang-piutang'
 */
hutangPiutang.url = (options?: RouteQueryOptions) => {
    return hutangPiutang.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::hutangPiutang
 * @see app/Http/Controllers/ReportController.php:58
 * @route '/reports/hutang-piutang'
 */
hutangPiutang.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: hutangPiutang.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::hutangPiutang
 * @see app/Http/Controllers/ReportController.php:58
 * @route '/reports/hutang-piutang'
 */
hutangPiutang.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: hutangPiutang.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::hutangPiutang
 * @see app/Http/Controllers/ReportController.php:58
 * @route '/reports/hutang-piutang'
 */
    const hutangPiutangForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: hutangPiutang.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::hutangPiutang
 * @see app/Http/Controllers/ReportController.php:58
 * @route '/reports/hutang-piutang'
 */
        hutangPiutangForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: hutangPiutang.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::hutangPiutang
 * @see app/Http/Controllers/ReportController.php:58
 * @route '/reports/hutang-piutang'
 */
        hutangPiutangForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: hutangPiutang.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    hutangPiutang.form = hutangPiutangForm
/**
* @see \App\Http\Controllers\ReportController::hutangPiutangExport
 * @see app/Http/Controllers/ReportController.php:63
 * @route '/reports/hutang-piutang/export'
 */
export const hutangPiutangExport = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: hutangPiutangExport.url(options),
    method: 'get',
})

hutangPiutangExport.definition = {
    methods: ["get","head"],
    url: '/reports/hutang-piutang/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::hutangPiutangExport
 * @see app/Http/Controllers/ReportController.php:63
 * @route '/reports/hutang-piutang/export'
 */
hutangPiutangExport.url = (options?: RouteQueryOptions) => {
    return hutangPiutangExport.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::hutangPiutangExport
 * @see app/Http/Controllers/ReportController.php:63
 * @route '/reports/hutang-piutang/export'
 */
hutangPiutangExport.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: hutangPiutangExport.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::hutangPiutangExport
 * @see app/Http/Controllers/ReportController.php:63
 * @route '/reports/hutang-piutang/export'
 */
hutangPiutangExport.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: hutangPiutangExport.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::hutangPiutangExport
 * @see app/Http/Controllers/ReportController.php:63
 * @route '/reports/hutang-piutang/export'
 */
    const hutangPiutangExportForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: hutangPiutangExport.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::hutangPiutangExport
 * @see app/Http/Controllers/ReportController.php:63
 * @route '/reports/hutang-piutang/export'
 */
        hutangPiutangExportForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: hutangPiutangExport.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::hutangPiutangExport
 * @see app/Http/Controllers/ReportController.php:63
 * @route '/reports/hutang-piutang/export'
 */
        hutangPiutangExportForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: hutangPiutangExport.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    hutangPiutangExport.form = hutangPiutangExportForm
/**
* @see \App\Http\Controllers\ReportController::cashflow
 * @see app/Http/Controllers/ReportController.php:68
 * @route '/reports/cashflow'
 */
export const cashflow = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cashflow.url(options),
    method: 'get',
})

cashflow.definition = {
    methods: ["get","head"],
    url: '/reports/cashflow',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::cashflow
 * @see app/Http/Controllers/ReportController.php:68
 * @route '/reports/cashflow'
 */
cashflow.url = (options?: RouteQueryOptions) => {
    return cashflow.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::cashflow
 * @see app/Http/Controllers/ReportController.php:68
 * @route '/reports/cashflow'
 */
cashflow.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cashflow.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::cashflow
 * @see app/Http/Controllers/ReportController.php:68
 * @route '/reports/cashflow'
 */
cashflow.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cashflow.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::cashflow
 * @see app/Http/Controllers/ReportController.php:68
 * @route '/reports/cashflow'
 */
    const cashflowForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: cashflow.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::cashflow
 * @see app/Http/Controllers/ReportController.php:68
 * @route '/reports/cashflow'
 */
        cashflowForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cashflow.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::cashflow
 * @see app/Http/Controllers/ReportController.php:68
 * @route '/reports/cashflow'
 */
        cashflowForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cashflow.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    cashflow.form = cashflowForm
/**
* @see \App\Http\Controllers\ReportController::cashflowExport
 * @see app/Http/Controllers/ReportController.php:73
 * @route '/reports/cashflow/export'
 */
export const cashflowExport = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cashflowExport.url(options),
    method: 'get',
})

cashflowExport.definition = {
    methods: ["get","head"],
    url: '/reports/cashflow/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::cashflowExport
 * @see app/Http/Controllers/ReportController.php:73
 * @route '/reports/cashflow/export'
 */
cashflowExport.url = (options?: RouteQueryOptions) => {
    return cashflowExport.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::cashflowExport
 * @see app/Http/Controllers/ReportController.php:73
 * @route '/reports/cashflow/export'
 */
cashflowExport.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cashflowExport.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::cashflowExport
 * @see app/Http/Controllers/ReportController.php:73
 * @route '/reports/cashflow/export'
 */
cashflowExport.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cashflowExport.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::cashflowExport
 * @see app/Http/Controllers/ReportController.php:73
 * @route '/reports/cashflow/export'
 */
    const cashflowExportForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: cashflowExport.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::cashflowExport
 * @see app/Http/Controllers/ReportController.php:73
 * @route '/reports/cashflow/export'
 */
        cashflowExportForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cashflowExport.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::cashflowExport
 * @see app/Http/Controllers/ReportController.php:73
 * @route '/reports/cashflow/export'
 */
        cashflowExportForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cashflowExport.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    cashflowExport.form = cashflowExportForm
/**
* @see \App\Http\Controllers\ReportController::obat
 * @see app/Http/Controllers/ReportController.php:78
 * @route '/reports/obat'
 */
export const obat = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: obat.url(options),
    method: 'get',
})

obat.definition = {
    methods: ["get","head"],
    url: '/reports/obat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::obat
 * @see app/Http/Controllers/ReportController.php:78
 * @route '/reports/obat'
 */
obat.url = (options?: RouteQueryOptions) => {
    return obat.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::obat
 * @see app/Http/Controllers/ReportController.php:78
 * @route '/reports/obat'
 */
obat.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: obat.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::obat
 * @see app/Http/Controllers/ReportController.php:78
 * @route '/reports/obat'
 */
obat.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: obat.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::obat
 * @see app/Http/Controllers/ReportController.php:78
 * @route '/reports/obat'
 */
    const obatForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: obat.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::obat
 * @see app/Http/Controllers/ReportController.php:78
 * @route '/reports/obat'
 */
        obatForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: obat.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::obat
 * @see app/Http/Controllers/ReportController.php:78
 * @route '/reports/obat'
 */
        obatForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: obat.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    obat.form = obatForm
/**
* @see \App\Http\Controllers\ReportController::obatExport
 * @see app/Http/Controllers/ReportController.php:83
 * @route '/reports/obat/export'
 */
export const obatExport = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: obatExport.url(options),
    method: 'get',
})

obatExport.definition = {
    methods: ["get","head"],
    url: '/reports/obat/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::obatExport
 * @see app/Http/Controllers/ReportController.php:83
 * @route '/reports/obat/export'
 */
obatExport.url = (options?: RouteQueryOptions) => {
    return obatExport.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::obatExport
 * @see app/Http/Controllers/ReportController.php:83
 * @route '/reports/obat/export'
 */
obatExport.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: obatExport.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::obatExport
 * @see app/Http/Controllers/ReportController.php:83
 * @route '/reports/obat/export'
 */
obatExport.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: obatExport.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::obatExport
 * @see app/Http/Controllers/ReportController.php:83
 * @route '/reports/obat/export'
 */
    const obatExportForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: obatExport.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::obatExport
 * @see app/Http/Controllers/ReportController.php:83
 * @route '/reports/obat/export'
 */
        obatExportForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: obatExport.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::obatExport
 * @see app/Http/Controllers/ReportController.php:83
 * @route '/reports/obat/export'
 */
        obatExportForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: obatExport.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    obatExport.form = obatExportForm
/**
* @see \App\Http\Controllers\ReportController::keuangan
 * @see app/Http/Controllers/ReportController.php:88
 * @route '/reports/keuangan'
 */
export const keuangan = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: keuangan.url(options),
    method: 'get',
})

keuangan.definition = {
    methods: ["get","head"],
    url: '/reports/keuangan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::keuangan
 * @see app/Http/Controllers/ReportController.php:88
 * @route '/reports/keuangan'
 */
keuangan.url = (options?: RouteQueryOptions) => {
    return keuangan.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::keuangan
 * @see app/Http/Controllers/ReportController.php:88
 * @route '/reports/keuangan'
 */
keuangan.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: keuangan.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::keuangan
 * @see app/Http/Controllers/ReportController.php:88
 * @route '/reports/keuangan'
 */
keuangan.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: keuangan.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::keuangan
 * @see app/Http/Controllers/ReportController.php:88
 * @route '/reports/keuangan'
 */
    const keuanganForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: keuangan.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::keuangan
 * @see app/Http/Controllers/ReportController.php:88
 * @route '/reports/keuangan'
 */
        keuanganForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: keuangan.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::keuangan
 * @see app/Http/Controllers/ReportController.php:88
 * @route '/reports/keuangan'
 */
        keuanganForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: keuangan.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    keuangan.form = keuanganForm
/**
* @see \App\Http\Controllers\ReportController::keuanganExport
 * @see app/Http/Controllers/ReportController.php:93
 * @route '/reports/keuangan/export'
 */
export const keuanganExport = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: keuanganExport.url(options),
    method: 'get',
})

keuanganExport.definition = {
    methods: ["get","head"],
    url: '/reports/keuangan/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::keuanganExport
 * @see app/Http/Controllers/ReportController.php:93
 * @route '/reports/keuangan/export'
 */
keuanganExport.url = (options?: RouteQueryOptions) => {
    return keuanganExport.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::keuanganExport
 * @see app/Http/Controllers/ReportController.php:93
 * @route '/reports/keuangan/export'
 */
keuanganExport.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: keuanganExport.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::keuanganExport
 * @see app/Http/Controllers/ReportController.php:93
 * @route '/reports/keuangan/export'
 */
keuanganExport.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: keuanganExport.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::keuanganExport
 * @see app/Http/Controllers/ReportController.php:93
 * @route '/reports/keuangan/export'
 */
    const keuanganExportForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: keuanganExport.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::keuanganExport
 * @see app/Http/Controllers/ReportController.php:93
 * @route '/reports/keuangan/export'
 */
        keuanganExportForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: keuanganExport.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::keuanganExport
 * @see app/Http/Controllers/ReportController.php:93
 * @route '/reports/keuangan/export'
 */
        keuanganExportForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: keuanganExport.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    keuanganExport.form = keuanganExportForm
/**
* @see \App\Http\Controllers\ReportController::suite
 * @see app/Http/Controllers/ReportController.php:98
 * @route '/reports/suite/{suite}'
 */
export const suite = (args: { suite: string | number } | [suite: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: suite.url(args, options),
    method: 'get',
})

suite.definition = {
    methods: ["get","head"],
    url: '/reports/suite/{suite}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::suite
 * @see app/Http/Controllers/ReportController.php:98
 * @route '/reports/suite/{suite}'
 */
suite.url = (args: { suite: string | number } | [suite: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { suite: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    suite: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        suite: args.suite,
                }

    return suite.definition.url
            .replace('{suite}', parsedArgs.suite.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::suite
 * @see app/Http/Controllers/ReportController.php:98
 * @route '/reports/suite/{suite}'
 */
suite.get = (args: { suite: string | number } | [suite: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: suite.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::suite
 * @see app/Http/Controllers/ReportController.php:98
 * @route '/reports/suite/{suite}'
 */
suite.head = (args: { suite: string | number } | [suite: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: suite.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::suite
 * @see app/Http/Controllers/ReportController.php:98
 * @route '/reports/suite/{suite}'
 */
    const suiteForm = (args: { suite: string | number } | [suite: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: suite.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::suite
 * @see app/Http/Controllers/ReportController.php:98
 * @route '/reports/suite/{suite}'
 */
        suiteForm.get = (args: { suite: string | number } | [suite: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: suite.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::suite
 * @see app/Http/Controllers/ReportController.php:98
 * @route '/reports/suite/{suite}'
 */
        suiteForm.head = (args: { suite: string | number } | [suite: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: suite.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    suite.form = suiteForm
/**
* @see \App\Http\Controllers\ReportController::suiteExport
 * @see app/Http/Controllers/ReportController.php:103
 * @route '/reports/suite/{suite}/export'
 */
export const suiteExport = (args: { suite: string | number } | [suite: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: suiteExport.url(args, options),
    method: 'get',
})

suiteExport.definition = {
    methods: ["get","head"],
    url: '/reports/suite/{suite}/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::suiteExport
 * @see app/Http/Controllers/ReportController.php:103
 * @route '/reports/suite/{suite}/export'
 */
suiteExport.url = (args: { suite: string | number } | [suite: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { suite: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    suite: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        suite: args.suite,
                }

    return suiteExport.definition.url
            .replace('{suite}', parsedArgs.suite.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::suiteExport
 * @see app/Http/Controllers/ReportController.php:103
 * @route '/reports/suite/{suite}/export'
 */
suiteExport.get = (args: { suite: string | number } | [suite: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: suiteExport.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::suiteExport
 * @see app/Http/Controllers/ReportController.php:103
 * @route '/reports/suite/{suite}/export'
 */
suiteExport.head = (args: { suite: string | number } | [suite: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: suiteExport.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::suiteExport
 * @see app/Http/Controllers/ReportController.php:103
 * @route '/reports/suite/{suite}/export'
 */
    const suiteExportForm = (args: { suite: string | number } | [suite: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: suiteExport.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::suiteExport
 * @see app/Http/Controllers/ReportController.php:103
 * @route '/reports/suite/{suite}/export'
 */
        suiteExportForm.get = (args: { suite: string | number } | [suite: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: suiteExport.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::suiteExport
 * @see app/Http/Controllers/ReportController.php:103
 * @route '/reports/suite/{suite}/export'
 */
        suiteExportForm.head = (args: { suite: string | number } | [suite: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: suiteExport.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    suiteExport.form = suiteExportForm
/**
* @see \App\Http\Controllers\ReportController::stock
 * @see app/Http/Controllers/ReportController.php:831
 * @route '/reports/stock'
 */
export const stock = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stock.url(options),
    method: 'get',
})

stock.definition = {
    methods: ["get","head"],
    url: '/reports/stock',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::stock
 * @see app/Http/Controllers/ReportController.php:831
 * @route '/reports/stock'
 */
stock.url = (options?: RouteQueryOptions) => {
    return stock.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::stock
 * @see app/Http/Controllers/ReportController.php:831
 * @route '/reports/stock'
 */
stock.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stock.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::stock
 * @see app/Http/Controllers/ReportController.php:831
 * @route '/reports/stock'
 */
stock.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stock.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::stock
 * @see app/Http/Controllers/ReportController.php:831
 * @route '/reports/stock'
 */
    const stockForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: stock.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::stock
 * @see app/Http/Controllers/ReportController.php:831
 * @route '/reports/stock'
 */
        stockForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stock.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::stock
 * @see app/Http/Controllers/ReportController.php:831
 * @route '/reports/stock'
 */
        stockForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stock.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    stock.form = stockForm
/**
* @see \App\Http\Controllers\ReportController::stockExport
 * @see app/Http/Controllers/ReportController.php:891
 * @route '/reports/stock/export'
 */
export const stockExport = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stockExport.url(options),
    method: 'get',
})

stockExport.definition = {
    methods: ["get","head"],
    url: '/reports/stock/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::stockExport
 * @see app/Http/Controllers/ReportController.php:891
 * @route '/reports/stock/export'
 */
stockExport.url = (options?: RouteQueryOptions) => {
    return stockExport.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::stockExport
 * @see app/Http/Controllers/ReportController.php:891
 * @route '/reports/stock/export'
 */
stockExport.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stockExport.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::stockExport
 * @see app/Http/Controllers/ReportController.php:891
 * @route '/reports/stock/export'
 */
stockExport.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stockExport.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::stockExport
 * @see app/Http/Controllers/ReportController.php:891
 * @route '/reports/stock/export'
 */
    const stockExportForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: stockExport.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::stockExport
 * @see app/Http/Controllers/ReportController.php:891
 * @route '/reports/stock/export'
 */
        stockExportForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stockExport.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::stockExport
 * @see app/Http/Controllers/ReportController.php:891
 * @route '/reports/stock/export'
 */
        stockExportForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stockExport.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    stockExport.form = stockExportForm
/**
* @see \App\Http\Controllers\ReportController::transactions
 * @see app/Http/Controllers/ReportController.php:951
 * @route '/reports/transactions'
 */
export const transactions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactions.url(options),
    method: 'get',
})

transactions.definition = {
    methods: ["get","head"],
    url: '/reports/transactions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::transactions
 * @see app/Http/Controllers/ReportController.php:951
 * @route '/reports/transactions'
 */
transactions.url = (options?: RouteQueryOptions) => {
    return transactions.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::transactions
 * @see app/Http/Controllers/ReportController.php:951
 * @route '/reports/transactions'
 */
transactions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactions.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::transactions
 * @see app/Http/Controllers/ReportController.php:951
 * @route '/reports/transactions'
 */
transactions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: transactions.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::transactions
 * @see app/Http/Controllers/ReportController.php:951
 * @route '/reports/transactions'
 */
    const transactionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: transactions.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::transactions
 * @see app/Http/Controllers/ReportController.php:951
 * @route '/reports/transactions'
 */
        transactionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: transactions.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::transactions
 * @see app/Http/Controllers/ReportController.php:951
 * @route '/reports/transactions'
 */
        transactionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: transactions.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    transactions.form = transactionsForm
/**
* @see \App\Http\Controllers\ReportController::transactionsExport
 * @see app/Http/Controllers/ReportController.php:1027
 * @route '/reports/transactions/export'
 */
export const transactionsExport = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactionsExport.url(options),
    method: 'get',
})

transactionsExport.definition = {
    methods: ["get","head"],
    url: '/reports/transactions/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::transactionsExport
 * @see app/Http/Controllers/ReportController.php:1027
 * @route '/reports/transactions/export'
 */
transactionsExport.url = (options?: RouteQueryOptions) => {
    return transactionsExport.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::transactionsExport
 * @see app/Http/Controllers/ReportController.php:1027
 * @route '/reports/transactions/export'
 */
transactionsExport.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactionsExport.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::transactionsExport
 * @see app/Http/Controllers/ReportController.php:1027
 * @route '/reports/transactions/export'
 */
transactionsExport.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: transactionsExport.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::transactionsExport
 * @see app/Http/Controllers/ReportController.php:1027
 * @route '/reports/transactions/export'
 */
    const transactionsExportForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: transactionsExport.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::transactionsExport
 * @see app/Http/Controllers/ReportController.php:1027
 * @route '/reports/transactions/export'
 */
        transactionsExportForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: transactionsExport.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::transactionsExport
 * @see app/Http/Controllers/ReportController.php:1027
 * @route '/reports/transactions/export'
 */
        transactionsExportForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: transactionsExport.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    transactionsExport.form = transactionsExportForm
/**
* @see \App\Http\Controllers\ReportController::expiry
 * @see app/Http/Controllers/ReportController.php:1091
 * @route '/reports/expiry'
 */
export const expiry = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: expiry.url(options),
    method: 'get',
})

expiry.definition = {
    methods: ["get","head"],
    url: '/reports/expiry',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::expiry
 * @see app/Http/Controllers/ReportController.php:1091
 * @route '/reports/expiry'
 */
expiry.url = (options?: RouteQueryOptions) => {
    return expiry.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::expiry
 * @see app/Http/Controllers/ReportController.php:1091
 * @route '/reports/expiry'
 */
expiry.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: expiry.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::expiry
 * @see app/Http/Controllers/ReportController.php:1091
 * @route '/reports/expiry'
 */
expiry.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: expiry.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::expiry
 * @see app/Http/Controllers/ReportController.php:1091
 * @route '/reports/expiry'
 */
    const expiryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: expiry.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::expiry
 * @see app/Http/Controllers/ReportController.php:1091
 * @route '/reports/expiry'
 */
        expiryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: expiry.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::expiry
 * @see app/Http/Controllers/ReportController.php:1091
 * @route '/reports/expiry'
 */
        expiryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: expiry.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    expiry.form = expiryForm
/**
* @see \App\Http\Controllers\ReportController::expiryExport
 * @see app/Http/Controllers/ReportController.php:1192
 * @route '/reports/expiry/export'
 */
export const expiryExport = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: expiryExport.url(options),
    method: 'get',
})

expiryExport.definition = {
    methods: ["get","head"],
    url: '/reports/expiry/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::expiryExport
 * @see app/Http/Controllers/ReportController.php:1192
 * @route '/reports/expiry/export'
 */
expiryExport.url = (options?: RouteQueryOptions) => {
    return expiryExport.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::expiryExport
 * @see app/Http/Controllers/ReportController.php:1192
 * @route '/reports/expiry/export'
 */
expiryExport.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: expiryExport.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::expiryExport
 * @see app/Http/Controllers/ReportController.php:1192
 * @route '/reports/expiry/export'
 */
expiryExport.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: expiryExport.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::expiryExport
 * @see app/Http/Controllers/ReportController.php:1192
 * @route '/reports/expiry/export'
 */
    const expiryExportForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: expiryExport.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::expiryExport
 * @see app/Http/Controllers/ReportController.php:1192
 * @route '/reports/expiry/export'
 */
        expiryExportForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: expiryExport.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::expiryExport
 * @see app/Http/Controllers/ReportController.php:1192
 * @route '/reports/expiry/export'
 */
        expiryExportForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: expiryExport.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    expiryExport.form = expiryExportForm
/**
* @see \App\Http\Controllers\ReportController::operational
 * @see app/Http/Controllers/ReportController.php:1262
 * @route '/reports/operational'
 */
export const operational = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: operational.url(options),
    method: 'get',
})

operational.definition = {
    methods: ["get","head"],
    url: '/reports/operational',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::operational
 * @see app/Http/Controllers/ReportController.php:1262
 * @route '/reports/operational'
 */
operational.url = (options?: RouteQueryOptions) => {
    return operational.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::operational
 * @see app/Http/Controllers/ReportController.php:1262
 * @route '/reports/operational'
 */
operational.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: operational.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::operational
 * @see app/Http/Controllers/ReportController.php:1262
 * @route '/reports/operational'
 */
operational.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: operational.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::operational
 * @see app/Http/Controllers/ReportController.php:1262
 * @route '/reports/operational'
 */
    const operationalForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: operational.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::operational
 * @see app/Http/Controllers/ReportController.php:1262
 * @route '/reports/operational'
 */
        operationalForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: operational.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::operational
 * @see app/Http/Controllers/ReportController.php:1262
 * @route '/reports/operational'
 */
        operationalForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: operational.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    operational.form = operationalForm
const ReportController = { index, pembelian, pembelianExport, penjualan, penjualanExport, hutangPiutang, hutangPiutangExport, cashflow, cashflowExport, obat, obatExport, keuangan, keuanganExport, suite, suiteExport, stock, stockExport, transactions, transactionsExport, expiry, expiryExport, operational }

export default ReportController
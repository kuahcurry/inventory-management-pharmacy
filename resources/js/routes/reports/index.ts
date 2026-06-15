import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import pembelianDe383d from './pembelian'
import penjualan92f760 from './penjualan'
import hutang_piutang45c35c from './hutang_piutang'
import cashflowDce30b from './cashflow'
import obatE6960e from './obat'
import keuangan59e328 from './keuangan'
import suiteB2504e from './suite'
import stock0387f8 from './stock'
import transactionsBbd80d from './transactions'
import expiry88de41 from './expiry'
/**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:33
 * @route '/reports'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/reports',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:33
 * @route '/reports'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:33
 * @route '/reports'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:33
 * @route '/reports'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:33
 * @route '/reports'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:33
 * @route '/reports'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::index
 * @see app/Http/Controllers/ReportController.php:33
 * @route '/reports'
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
* @see \App\Http\Controllers\ReportController::hutang_piutang
 * @see app/Http/Controllers/ReportController.php:58
 * @route '/reports/hutang-piutang'
 */
export const hutang_piutang = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: hutang_piutang.url(options),
    method: 'get',
})

hutang_piutang.definition = {
    methods: ["get","head"],
    url: '/reports/hutang-piutang',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::hutang_piutang
 * @see app/Http/Controllers/ReportController.php:58
 * @route '/reports/hutang-piutang'
 */
hutang_piutang.url = (options?: RouteQueryOptions) => {
    return hutang_piutang.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::hutang_piutang
 * @see app/Http/Controllers/ReportController.php:58
 * @route '/reports/hutang-piutang'
 */
hutang_piutang.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: hutang_piutang.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ReportController::hutang_piutang
 * @see app/Http/Controllers/ReportController.php:58
 * @route '/reports/hutang-piutang'
 */
hutang_piutang.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: hutang_piutang.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ReportController::hutang_piutang
 * @see app/Http/Controllers/ReportController.php:58
 * @route '/reports/hutang-piutang'
 */
    const hutang_piutangForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: hutang_piutang.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ReportController::hutang_piutang
 * @see app/Http/Controllers/ReportController.php:58
 * @route '/reports/hutang-piutang'
 */
        hutang_piutangForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: hutang_piutang.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ReportController::hutang_piutang
 * @see app/Http/Controllers/ReportController.php:58
 * @route '/reports/hutang-piutang'
 */
        hutang_piutangForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: hutang_piutang.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    hutang_piutang.form = hutang_piutangForm
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
const reports = {
    index: Object.assign(index, index),
pembelian: Object.assign(pembelian, pembelianDe383d),
penjualan: Object.assign(penjualan, penjualan92f760),
hutang_piutang: Object.assign(hutang_piutang, hutang_piutang45c35c),
cashflow: Object.assign(cashflow, cashflowDce30b),
obat: Object.assign(obat, obatE6960e),
keuangan: Object.assign(keuangan, keuangan59e328),
suite: Object.assign(suite, suiteB2504e),
stock: Object.assign(stock, stock0387f8),
transactions: Object.assign(transactions, transactionsBbd80d),
expiry: Object.assign(expiry, expiry88de41),
operational: Object.assign(operational, operational),
}

export default reports
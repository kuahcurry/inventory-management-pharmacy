import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
import checkoutFb28ab from './checkout'
/**
* @see \App\Http\Controllers\TransaksiController::checkout
 * @see app/Http/Controllers/TransaksiController.php:68
 * @route '/kasir/checkout'
 */
export const checkout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkout.url(options),
    method: 'post',
})

checkout.definition = {
    methods: ["post"],
    url: '/kasir/checkout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TransaksiController::checkout
 * @see app/Http/Controllers/TransaksiController.php:68
 * @route '/kasir/checkout'
 */
checkout.url = (options?: RouteQueryOptions) => {
    return checkout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TransaksiController::checkout
 * @see app/Http/Controllers/TransaksiController.php:68
 * @route '/kasir/checkout'
 */
checkout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkout.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\TransaksiController::checkout
 * @see app/Http/Controllers/TransaksiController.php:68
 * @route '/kasir/checkout'
 */
    const checkoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: checkout.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TransaksiController::checkout
 * @see app/Http/Controllers/TransaksiController.php:68
 * @route '/kasir/checkout'
 */
        checkoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: checkout.url(options),
            method: 'post',
        })
    
    checkout.form = checkoutForm
const kasir = {
    checkout: Object.assign(checkout, checkoutFb28ab),
}

export default kasir
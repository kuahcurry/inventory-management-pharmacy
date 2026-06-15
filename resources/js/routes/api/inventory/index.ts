import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\InventoryController::createWithBatch
 * @see app/Http/Controllers/Api/InventoryController.php:15
 * @route '/api/inventory/create-with-batch'
 */
export const createWithBatch = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createWithBatch.url(options),
    method: 'post',
})

createWithBatch.definition = {
    methods: ["post"],
    url: '/api/inventory/create-with-batch',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\InventoryController::createWithBatch
 * @see app/Http/Controllers/Api/InventoryController.php:15
 * @route '/api/inventory/create-with-batch'
 */
createWithBatch.url = (options?: RouteQueryOptions) => {
    return createWithBatch.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\InventoryController::createWithBatch
 * @see app/Http/Controllers/Api/InventoryController.php:15
 * @route '/api/inventory/create-with-batch'
 */
createWithBatch.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createWithBatch.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\InventoryController::createWithBatch
 * @see app/Http/Controllers/Api/InventoryController.php:15
 * @route '/api/inventory/create-with-batch'
 */
    const createWithBatchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: createWithBatch.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\InventoryController::createWithBatch
 * @see app/Http/Controllers/Api/InventoryController.php:15
 * @route '/api/inventory/create-with-batch'
 */
        createWithBatchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: createWithBatch.url(options),
            method: 'post',
        })
    
    createWithBatch.form = createWithBatchForm
const inventory = {
    createWithBatch: Object.assign(createWithBatch, createWithBatch),
}

export default inventory
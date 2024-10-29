
// Types for dummyjson.com Products

export type Product = {
    id: number
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    tags: string[]
    brand: string
    sku: string
    weight: number
    dimensions: Dimensions
    warrantyInformation: string
    shippingInformation: string
    availabilityStatus: string
    reviews: ProductReview[]
    returnPolicy: string
    mininumOrderQuantity: number
    meta: {
        createdAt: string
        updatedAt: string
        barcode: string
        qrCode: string
    }
    images: string[]
    thumbnail: string
}

export type Dimensions = {
    width: number
    height: number
    depth: number
}


export type ProductReview = {
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
}

export type ProductsResponse = {
    products: Product[]
    total: number
    skip: number
    limit: number
}

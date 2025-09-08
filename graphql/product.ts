export const PRODUCT_FRAGMENT = `#graphql
    fragment ProductFields on Product {
        id
        handle
        title
        description
        featuredImage {
            ...ImageFields
        }
        priceRange {
            minVariantPrice {
                ...PriceFields
            }
            maxVariantPrice {
                ...PriceFields
            }
        }
    }
`

export const IMAGE_FRAGMENT = `#graphql
    fragment ImageFields on Image {
        height
        width
        altText
        url
    }
`

export const PRICE_FRAGMENT = `#graphql
    fragment PriceFields on MoneyV2 {
        amount
        currencyCode
    }
`

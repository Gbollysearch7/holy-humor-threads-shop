const SHOPIFY_DOMAIN = 'cs1jqj-ae.myshopify.com';
const STOREFRONT_ACCESS_TOKEN = '23e7fac5322f76b45f14d434eeca6f75';
const ADMIN_ACCESS_TOKEN = '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';

const STOREFRONT_API_URL = `https://${SHOPIFY_DOMAIN}/api/2025-07/graphql.json`;
const ADMIN_API_URL = `https://${SHOPIFY_DOMAIN}/admin/api/2025-07`;

export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  handle: string;
  images: {
    edges: Array<{
      node: {
        id: string;
        url: string;
        altText?: string;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        price: {
          amount: string;
          currencyCode: string;
        };
        compareAtPrice?: {
          amount: string;
          currencyCode: string;
        };
        availableForSale: boolean;
        quantityAvailable: number;
        selectedOptions: Array<{
          name: string;
          value: string;
        }>;
      };
    }>;
  };
  productType: string;
  tags: string[];
  vendor: string;
  createdAt: string;
  updatedAt: string;
  availableForSale: boolean;
}

export interface ShopifyCart {
  id: string;
  lines: {
    edges: Array<{
      node: {
        id: string;
        quantity: number;
        merchandise: {
          id: string;
          title: string;
          product: {
            id: string;
            title: string;
            handle: string;
            images: {
              edges: Array<{
                node: {
                  url: string;
                  altText?: string;
                };
              }>;
            };
          };
          price: {
            amount: string;
            currencyCode: string;
          };
          selectedOptions: Array<{
            name: string;
            value: string;
          }>;
        };
      };
    }>;
  };
  cost: {
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
    subtotalAmount: {
      amount: string;
      currencyCode: string;
    };
    totalTaxAmount?: {
      amount: string;
      currencyCode: string;
    };
  };
  checkoutUrl: string;
}

// GraphQL queries
const GET_PRODUCTS_QUERY = `
  query getProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          description
          handle
          images(first: 10) {
            edges {
              node {
                id
                url
                altText
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                compareAtPrice {
                  amount
                  currencyCode
                }
                availableForSale
                quantityAvailable
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          productType
          tags
          vendor
          createdAt
          updatedAt
          availableForSale
        }
      }
    }
  }
`;

const GET_PRODUCT_BY_HANDLE_QUERY = `
  query getProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      handle
      images(first: 10) {
        edges {
          node {
            id
            url
            altText
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
            availableForSale
            quantityAvailable
            selectedOptions {
              name
              value
            }
          }
        }
      }
      productType
      tags
      vendor
      createdAt
      updatedAt
      availableForSale
    }
  }
`;

const CREATE_CART_MUTATION = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  product {
                    id
                    title
                    handle
                    images(first: 1) {
                      edges {
                        node {
                          url
                          altText
                        }
                      }
                    }
                  }
                  price {
                    amount
                    currencyCode
                  }
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
        }
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const ADD_TO_CART_MUTATION = `
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  product {
                    id
                    title
                    handle
                    images(first: 1) {
                      edges {
                        node {
                          url
                          altText
                        }
                      }
                    }
                  }
                  price {
                    amount
                    currencyCode
                  }
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
        }
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const UPDATE_CART_LINES_MUTATION = `
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        id
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  product {
                    id
                    title
                    handle
                    images(first: 1) {
                      edges {
                        node {
                          url
                          altText
                        }
                      }
                    }
                  }
                  price {
                    amount
                    currencyCode
                  }
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
        }
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const REMOVE_FROM_CART_MUTATION = `
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  product {
                    id
                    title
                    handle
                    images(first: 1) {
                      edges {
                        node {
                          url
                          altText
                        }
                      }
                    }
                  }
                  price {
                    amount
                    currencyCode
                  }
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
        }
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

// API functions
async function shopifyFetch(query: string, variables: any = {}) {
  const response = await fetch(STOREFRONT_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  
  if (data.errors) {
    throw new Error(data.errors[0].message);
  }

  return data.data;
}

export async function getProducts(limit: number = 50): Promise<ShopifyProduct[]> {
  const data = await shopifyFetch(GET_PRODUCTS_QUERY, { first: limit });
  return data.products.edges.map((edge: any) => edge.node);
}

export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  const data = await shopifyFetch(GET_PRODUCT_BY_HANDLE_QUERY, { handle });
  return data.productByHandle;
}

export async function createCart(): Promise<ShopifyCart> {
  const data = await shopifyFetch(CREATE_CART_MUTATION, {
    input: {}
  });
  
  if (data.cartCreate.userErrors.length > 0) {
    throw new Error(data.cartCreate.userErrors[0].message);
  }
  
  return data.cartCreate.cart;
}

export async function addToCart(cartId: string, variantId: string, quantity: number = 1): Promise<ShopifyCart> {
  const data = await shopifyFetch(ADD_TO_CART_MUTATION, {
    cartId,
    lines: [{
      merchandiseId: variantId,
      quantity
    }]
  });
  
  if (data.cartLinesAdd.userErrors.length > 0) {
    throw new Error(data.cartLinesAdd.userErrors[0].message);
  }
  
  return data.cartLinesAdd.cart;
}

export async function updateCartLines(cartId: string, lineId: string, quantity: number): Promise<ShopifyCart> {
  const data = await shopifyFetch(UPDATE_CART_LINES_MUTATION, {
    cartId,
    lines: [{
      id: lineId,
      quantity
    }]
  });
  
  if (data.cartLinesUpdate.userErrors.length > 0) {
    throw new Error(data.cartLinesUpdate.userErrors[0].message);
  }
  
  return data.cartLinesUpdate.cart;
}

export async function removeFromCart(cartId: string, lineIds: string[]): Promise<ShopifyCart> {
  const data = await shopifyFetch(REMOVE_FROM_CART_MUTATION, {
    cartId,
    lineIds
  });
  
  if (data.cartLinesRemove.userErrors.length > 0) {
    throw new Error(data.cartLinesRemove.userErrors[0].message);
  }
  
  return data.cartLinesRemove.cart;
}

// Helper function to transform Shopify product to our format
export function transformShopifyProduct(shopifyProduct: ShopifyProduct): any {
  const mainImage = shopifyProduct.images.edges[0]?.node.url || '/placeholder.svg';
  const gallery = shopifyProduct.images.edges.length > 0 
    ? shopifyProduct.images.edges.map(edge => edge.node.url)
    : ['/placeholder.svg'];
  
  // Get the first variant for basic price info
  const firstVariant = shopifyProduct.variants.edges[0]?.node;
  const price = firstVariant ? parseFloat(firstVariant.price.amount) : 0;
  const originalPrice = firstVariant?.compareAtPrice ? parseFloat(firstVariant.compareAtPrice.amount) : undefined;
  
  // Extract sizes from variants
  const sizes = [...new Set(
    shopifyProduct.variants.edges
      .map(edge => edge.node.selectedOptions.find(option => option.name.toLowerCase() === 'size')?.value)
      .filter(Boolean)
  )];
  
  return {
    id: shopifyProduct.id,
    name: shopifyProduct.title,
    price,
    originalPrice,
    category: shopifyProduct.productType || 'Apparel',
    subcategory: shopifyProduct.productType || 'Apparel',
    image: mainImage,
    description: shopifyProduct.description,
    sizes: sizes.length > 0 ? sizes : ['One Size'],
    gallery,
    detailedDescription: shopifyProduct.description,
    careInstructions: 'Machine wash cold, tumble dry low',
    materials: 'Premium cotton blend',
    fit: 'True to size',
    reviews: [],
    relatedProducts: [],
    tags: shopifyProduct.tags,
    inStock: shopifyProduct.availableForSale,
    stockCount: shopifyProduct.variants.edges.reduce((total, edge) => total + edge.node.quantityAvailable, 0),
    rating: 4.5, // Default rating since Shopify doesn't provide this
    reviewCount: 0,
    isFeatured: shopifyProduct.tags.includes('featured'),
    isNewArrival: shopifyProduct.tags.includes('new-arrival'),
    isOnSale: !!originalPrice,
    handle: shopifyProduct.handle,
    variants: shopifyProduct.variants.edges.map(edge => edge.node)
  };
}
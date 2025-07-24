import { useState, useEffect } from 'react';
import { getProducts, getProductByHandle, transformShopifyProduct, ShopifyProduct } from '@/lib/shopify';
import { DetailedProduct } from '@/types/product';

export const useShopifyProducts = () => {
  const [products, setProducts] = useState<DetailedProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const shopifyProducts = await getProducts(50);
      const transformedProducts = shopifyProducts.map(transformShopifyProduct);
      setProducts(transformedProducts);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, refetch: fetchProducts };
};

export const useShopifyProduct = (handle: string) => {
  const [product, setProduct] = useState<DetailedProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!handle) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const shopifyProduct = await getProductByHandle(handle);
        if (shopifyProduct) {
          setProduct(transformShopifyProduct(shopifyProduct));
        } else {
          setProduct(null);
        }
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [handle]);

  return { product, loading, error };
};
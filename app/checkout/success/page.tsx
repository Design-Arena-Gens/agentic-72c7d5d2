'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useCart } from '@/lib/CartContext';

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="text-6xl mb-4">✓</div>
        <h1 className="text-3xl font-bold mb-4">Order Successful!</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Thank you for your purchase. Your order has been confirmed and will be shipped soon.
        </p>
        <div className="space-y-4">
          <Link
            href="/orders"
            className="block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700"
          >
            View Orders
          </Link>
          <Link
            href="/products"
            className="block border border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

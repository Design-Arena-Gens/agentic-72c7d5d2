import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    brand: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product._id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
        <div className="relative h-64 bg-gray-200 dark:bg-gray-700">
          <Image
            src={product.image || '/placeholder.png'}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">{product.brand}</p>
          <h3 className="font-semibold text-lg mb-2 truncate">{product.name}</h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary-600">${product.price}</span>
            <span className="text-sm text-gray-500 capitalize">{product.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Elite Electronics</h3>
            <p className="text-gray-400">Your trusted source for premium electronics and gadgets.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/products?category=phones">Phones</Link></li>
              <li><Link href="/products?category=laptops">Laptops</Link></li>
              <li><Link href="/products?category=accessories">Accessories</Link></li>
              <li><Link href="/products?category=gadgets">Gadgets</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/shipping">Shipping Info</Link></li>
              <li><Link href="/returns">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Account</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/auth/signin">Sign In</Link></li>
              <li><Link href="/auth/register">Register</Link></li>
              <li><Link href="/orders">Order History</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Elite Electronics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

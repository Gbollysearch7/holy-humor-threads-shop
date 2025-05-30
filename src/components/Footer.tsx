
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-bold text-lg">✝</span>
              </div>
              <span className="text-2xl font-bold">HOLYHUMOR</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Spreading joy and faith through premium Christian apparel that sparks conversations and builds community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-colors">
                <span>f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-colors">
                <span>📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-colors">
                <span>🐦</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Shop All</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Best Sellers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-bold mb-6">Customer Care</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Track Your Order</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Get in Touch</h3>
            <div className="space-y-3 text-gray-400">
              <p>📧 hello@holyhumor.com</p>
              <p>📞 1-800-HOLY-FUN</p>
              <p>📍 123 Faith Street<br />Joy City, JY 12345</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 HOLYHUMOR. All rights reserved. Made with ❤️ and faith.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

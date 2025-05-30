
export const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-holy-gold to-yellow-500 rounded-full flex items-center justify-center animate-glow">
                <span className="text-holy-blue font-bold text-lg">✝</span>
              </div>
              <span className="text-2xl font-bold">HOLYHUMOR</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Spreading joy and faith through premium Christian apparel that sparks conversations and builds community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-holy-gold hover:text-holy-blue transition-all duration-300 hover:scale-110">
                <span>f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-holy-gold hover:text-holy-blue transition-all duration-300 hover:scale-110">
                <span>📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-holy-gold hover:text-holy-blue transition-all duration-300 hover:scale-110">
                <span>🐦</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-holy-gold transition-colors duration-300 hover:translate-x-1 transform">Shop All</a></li>
              <li><a href="#" className="text-gray-400 hover:text-holy-gold transition-colors duration-300 hover:translate-x-1 transform">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-holy-gold transition-colors duration-300 hover:translate-x-1 transform">Best Sellers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-holy-gold transition-colors duration-300 hover:translate-x-1 transform">Size Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-holy-gold transition-colors duration-300 hover:translate-x-1 transform">Gift Cards</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-bold mb-6">Customer Care</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-holy-gold transition-colors duration-300 hover:translate-x-1 transform">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-holy-gold transition-colors duration-300 hover:translate-x-1 transform">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-holy-gold transition-colors duration-300 hover:translate-x-1 transform">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-400 hover:text-holy-gold transition-colors duration-300 hover:translate-x-1 transform">Track Your Order</a></li>
              <li><a href="#" className="text-gray-400 hover:text-holy-gold transition-colors duration-300 hover:translate-x-1 transform">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-lg font-bold mb-6">Get in Touch</h3>
            <div className="space-y-3 text-gray-400">
              <p className="hover:text-holy-gold transition-colors duration-300">📧 hello@holyhumor.com</p>
              <p className="hover:text-holy-gold transition-colors duration-300">📞 1-800-HOLY-FUN</p>
              <p className="hover:text-holy-gold transition-colors duration-300">📍 123 Faith Street<br />Joy City, JY 12345</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 HOLYHUMOR. All rights reserved. Made with ❤️ and faith.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-holy-gold text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-holy-gold text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-holy-gold text-sm transition-colors duration-300">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

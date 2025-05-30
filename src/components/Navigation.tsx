
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-blue-900 font-bold text-lg">✝</span>
            </div>
            <span className="text-2xl font-bold text-blue-900">HOLYHUMOR</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Shop</a>
            <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Contact</a>
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-blue-900 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">0</span>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Shop</a>
              <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

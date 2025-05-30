
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useCart } from "@/contexts/CartContext";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md sticky top-0 z-50 border-b border-border transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 animate-slide-in-left">
            <div className="w-10 h-10 bg-gradient-to-r from-holy-gold to-yellow-400 rounded-full flex items-center justify-center hover:animate-glow transition-all duration-300">
              <span className="text-holy-blue dark:text-gray-900 font-bold text-lg">✝</span>
            </div>
            <span className="text-2xl font-bold text-holy-blue dark:text-holy-gold transition-colors duration-300">
              HOLYHUMOR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 animate-fade-in">
            <Link to="/shop" className="text-foreground/80 hover:text-holy-blue dark:hover:text-holy-gold transition-all duration-300 font-medium hover:scale-105">
              Shop
            </Link>
            <Link to="/about" className="text-foreground/80 hover:text-holy-blue dark:hover:text-holy-gold transition-all duration-300 font-medium hover:scale-105">
              About
            </Link>
            <Link to="/contact" className="text-foreground/80 hover:text-holy-blue dark:hover:text-holy-gold transition-all duration-300 font-medium hover:scale-105">
              Contact
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4 animate-slide-in-right">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="relative hover:scale-110 transition-transform duration-300">
              <ShoppingCart className="h-6 w-6 text-foreground/80" />
              <span className="absolute -top-2 -right-2 bg-holy-gold text-holy-blue text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                {getTotalItems()}
              </span>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden hover:scale-110 transition-transform duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-48 opacity-100 py-4 border-t border-border' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="flex flex-col space-y-4">
            <Link to="/shop" className="text-foreground/80 hover:text-holy-blue dark:hover:text-holy-gold transition-all duration-300 font-medium transform hover:translateX-2" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
            <Link to="/about" className="text-foreground/80 hover:text-holy-blue dark:hover:text-holy-gold transition-all duration-300 font-medium transform hover:translateX-2" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="text-foreground/80 hover:text-holy-blue dark:hover:text-holy-gold transition-all duration-300 font-medium transform hover:translateX-2" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, ChevronDown, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, params?: { category?: string; postId?: string }) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const { cartCount, wishlist, setIsCartOpen, setIsWishlistOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string, params?: { category?: string; postId?: string }) => {
    onNavigate(page, params);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white shadow-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-2xl font-black tracking-wider text-[#2c3e50] font-['Montserrat'] uppercase focus:outline-none"
          >
            <span>LUXURY</span>
            <span className="text-[#e74c3c]">STORE</span>
          </button>

          <ul className="hidden md:flex items-center space-x-7 font-medium text-[15px]">
            <li>
              <button
                onClick={() => handleNavClick('home')}
                className={`transition-colors hover:text-[#e74c3c] cursor-pointer ${
                  currentPage === 'home' ? 'text-[#e74c3c] font-semibold' : 'text-[#2c3e50]'
                }`}
              >
                Accueil
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('about')}
                className={`transition-colors hover:text-[#e74c3c] cursor-pointer ${
                  currentPage === 'about' ? 'text-[#e74c3c] font-semibold' : 'text-[#2c3e50]'
                }`}
              >
                À propos
              </button>
            </li>

            <li
              className="relative group py-2"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('products')}
                className={`flex items-center gap-1 transition-colors hover:text-[#e74c3c] cursor-pointer ${
                  currentPage === 'products' ? 'text-[#e74c3c] font-semibold' : 'text-[#2c3e50]'
                }`}
              >
                Produits
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-md py-2 border border-slate-100 z-50">
                  <button
                    onClick={() => handleNavClick('products')}
                    className="w-full text-left px-4 py-2 text-sm text-[#2c3e50] hover:bg-slate-50 hover:text-[#e74c3c] transition-colors"
                  >
                    Tous les produits
                  </button>
                  <button
                    onClick={() => handleNavClick('products', { category: 'sneakers' })}
                    className="w-full text-left px-4 py-2 text-sm text-[#2c3e50] hover:bg-slate-50 hover:text-[#e74c3c] transition-colors"
                  >
                    Sneakers
                  </button>
                  <button
                    onClick={() => handleNavClick('products', { category: 'smartphones' })}
                    className="w-full text-left px-4 py-2 text-sm text-[#2c3e50] hover:bg-slate-50 hover:text-[#e74c3c] transition-colors"
                  >
                    Smartphones
                  </button>
                  <button
                    onClick={() => handleNavClick('products', { category: 'accessories' })}
                    className="w-full text-left px-4 py-2 text-sm text-[#2c3e50] hover:bg-slate-50 hover:text-[#e74c3c] transition-colors"
                  >
                    Accessoires
                  </button>
                </div>
              )}
            </li>

            <li>
              <button
                onClick={() => handleNavClick('blog')}
                className={`transition-colors hover:text-[#e74c3c] cursor-pointer ${
                  currentPage === 'blog' || currentPage === 'blog-detail'
                    ? 'text-[#e74c3c] font-semibold'
                    : 'text-[#2c3e50]'
                }`}
              >
                Blog
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('testimonials')}
                className={`transition-colors hover:text-[#e74c3c] cursor-pointer ${
                  currentPage === 'testimonials' ? 'text-[#e74c3c] font-semibold' : 'text-[#2c3e50]'
                }`}
              >
                Avis
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('contact')}
                className={`transition-colors hover:text-[#e74c3c] cursor-pointer ${
                  currentPage === 'contact' ? 'text-[#e74c3c] font-semibold' : 'text-[#2c3e50]'
                }`}
              >
                Contact
              </button>
            </li>
          </ul>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2.5 rounded-full hover:bg-slate-100 text-[#2c3e50] transition-colors"
              title="Favoris"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#2c3e50] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-slate-100 hover:bg-[#e74c3c] text-[#2c3e50] hover:text-white transition-all duration-200"
              title="Panier d'achats"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[#e74c3c] group-hover:bg-white text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#2c3e50] hover:text-[#e74c3c] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 pt-3 pb-6 space-y-3 shadow-lg">
          <button
            onClick={() => handleNavClick('home')}
            className="block w-full text-left py-2 font-medium text-slate-700 hover:text-[#e74c3c]"
          >
            Accueil
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="block w-full text-left py-2 font-medium text-slate-700 hover:text-[#e74c3c]"
          >
            À propos
          </button>
          <div className="space-y-1 pl-2 border-l-2 border-slate-200">
            <button
              onClick={() => handleNavClick('products')}
              className="block w-full text-left py-1 text-sm font-semibold text-slate-800"
            >
              Tous les produits
            </button>
            <button
              onClick={() => handleNavClick('products', { category: 'sneakers' })}
              className="block w-full text-left py-1 text-sm text-slate-600 hover:text-[#e74c3c]"
            >
              — Sneakers
            </button>
            <button
              onClick={() => handleNavClick('products', { category: 'smartphones' })}
              className="block w-full text-left py-1 text-sm text-slate-600 hover:text-[#e74c3c]"
            >
              — Smartphones
            </button>
            <button
              onClick={() => handleNavClick('products', { category: 'accessories' })}
              className="block w-full text-left py-1 text-sm text-slate-600 hover:text-[#e74c3c]"
            >
              — Accessoires
            </button>
          </div>
          <button
            onClick={() => handleNavClick('blog')}
            className="block w-full text-left py-2 font-medium text-slate-700 hover:text-[#e74c3c]"
          >
            Blog
          </button>
          <button
            onClick={() => handleNavClick('testimonials')}
            className="block w-full text-left py-2 font-medium text-slate-700 hover:text-[#e74c3c]"
          >
            Avis Clients
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="block w-full text-left py-2 font-medium text-slate-700 hover:text-[#e74c3c]"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { NotificationToast } from './components/NotificationToast';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [productCategory, setProductCategory] = useState<string | undefined>(undefined);
  const [activePostId, setActivePostId] = useState<string>('1');

  // Parse initial query params if present (e.g., ?category=sneakers)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('category');
      if (catParam) {
        setProductCategory(catParam);
        setCurrentPage('products');
      }
    } catch {
      // Ignore URL parsing errors
    }
  }, []);

  const handleNavigate = (page: string, params?: { category?: string; postId?: string }) => {
    setCurrentPage(page);
    if (params?.category) {
      setProductCategory(params.category);
    }
    if (params?.postId) {
      setActivePostId(params.postId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-[#2c3e50] selection:bg-[#e74c3c] selection:text-white">
        {/* Navigation Bar */}
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

        {/* Main Content Area */}
        <main className="flex-1 pt-20">
          {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
          {currentPage === 'products' && (
            <ProductsPage
              initialCategory={productCategory}
              onClearInitialCategory={() => setProductCategory(undefined)}
            />
          )}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'testimonials' && <TestimonialsPage />}
          {currentPage === 'contact' && <ContactPage />}
          {currentPage === 'blog' && (
            <BlogPage onNavigateToPost={(postId) => handleNavigate('blog-detail', { postId })} />
          )}
          {currentPage === 'blog-detail' && (
            <BlogDetailPage
              postId={activePostId}
              onBack={() => handleNavigate('blog')}
              onNavigateToPost={(postId) => handleNavigate('blog-detail', { postId })}
            />
          )}
        </main>

        {/* Modals & Drawers */}
        <QuickViewModal />
        <CartDrawer onNavigateToProducts={() => handleNavigate('products')} />
        <WishlistDrawer onNavigateToProducts={() => handleNavigate('products')} />
        <NotificationToast />

        {/* Global Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </CartProvider>
  );
};

export default App;

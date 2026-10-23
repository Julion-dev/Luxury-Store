import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from './ImageWithFallback';

interface WishlistDrawerProps {
  onNavigateToProducts: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({ onNavigateToProducts }) => {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, toggleWishlist, addToCart } = useCart();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-[#e74c3c] fill-[#e74c3c]" />
            <h2 className="text-xl font-bold text-[#2c3e50] font-['Montserrat']">
              Mes Favoris
            </h2>
            <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-bold">
              {wishlist.length}
            </span>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {wishlist.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center text-[#e74c3c] mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-base font-semibold text-[#2c3e50]">Aucun coup de cœur sauvegardé</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-xs">
                Cliquez sur l'icône de cœur sur n'importe quel produit pour le retrouver ici plus tard.
              </p>
              <button
                onClick={() => {
                  setIsWishlistOpen(false);
                  onNavigateToProducts();
                }}
                className="mt-6 px-6 py-2.5 rounded-full bg-[#2c3e50] text-white text-xs font-bold hover:bg-[#e74c3c] transition-colors"
              >
                Explorer le catalogue
              </button>
            </div>
          ) : (
            wishlist.map((product) => (
              <div
                key={product.id}
                className="flex gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100 relative items-center"
              >
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  category={product.category}
                  className="w-20 h-20 object-cover rounded-lg bg-white shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    {product.brand}
                  </span>
                  <h4 className="text-sm font-semibold text-[#2c3e50] truncate">
                    {product.title}
                  </h4>
                  <div className="text-sm font-bold text-[#2c3e50] font-['Montserrat'] mt-1">
                    €{product.price.toFixed(2)}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => {
                        addToCart(product, 1);
                        toggleWishlist(product);
                      }}
                      className="px-3 py-1 bg-[#e74c3c] hover:bg-[#c0392b] text-white text-xs font-semibold rounded-md flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Ajouter au panier</span>
                    </button>
                    <button
                      onClick={() => toggleWishlist(product)}
                      className="p-1 text-slate-400 hover:text-rose-500 transition-colors"
                      title="Supprimer des favoris"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

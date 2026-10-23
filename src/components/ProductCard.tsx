import React, { useState } from 'react';
import { Star, Eye, Heart, ShoppingBag, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from './ImageWithFallback';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const isFavorited = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1400);
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-slate-100 relative">
      {/* Badge */}
      {product.badge && (
        <span
          className={`absolute top-3 left-3 z-10 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider text-white shadow-sm ${
            product.badge === '-15%'
              ? 'bg-[#e74c3c]'
              : product.badge === 'Édition Limitée'
              ? 'bg-amber-600'
              : product.badge === 'Bientôt épuisé'
              ? 'bg-rose-700'
              : 'bg-[#2c3e50]'
          }`}
        >
          {product.badge}
        </span>
      )}

      {/* Image Container with Actions */}
      <div
        onClick={() => setQuickViewProduct(product)}
        className="relative h-64 overflow-hidden bg-slate-50 cursor-pointer"
      >
        <ImageWithFallback
          src={product.image}
          alt={product.title}
          category={product.category}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="w-10 h-10 rounded-full bg-white text-[#2c3e50] hover:bg-[#e74c3c] hover:text-white flex items-center justify-center shadow-lg transition-all duration-200"
            title="Aperçu rapide"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product);
            }}
            className={`w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg transition-all duration-200 ${
              isFavorited ? 'text-[#e74c3c] bg-rose-50' : 'text-[#2c3e50] hover:text-[#e74c3c]'
            }`}
            title={isFavorited ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          >
            <Heart className={`w-5 h-5 ${isFavorited ? 'fill-[#e74c3c]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
            {product.brand}
          </span>
          <h3
            onClick={() => setQuickViewProduct(product)}
            className="text-base font-semibold text-[#2c3e50] hover:text-[#e74c3c] transition-colors mt-1 cursor-pointer line-clamp-1"
          >
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-2 text-xs text-amber-500">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : i < product.rating
                      ? 'fill-amber-300 text-amber-400 opacity-60'
                      : 'text-slate-200 fill-slate-100'
                  }`}
                />
              ))}
            </div>
            <span className="font-semibold text-slate-600">({product.reviewCount})</span>
          </div>

          {/* Price */}
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-lg font-bold text-[#2c3e50] font-['Montserrat']">
              €{product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-slate-400 line-through">
                €{product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className={`mt-4 w-full py-2.5 px-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
            isAdded
              ? 'bg-emerald-600 text-white'
              : 'bg-[#e74c3c] hover:bg-[#c0392b] text-white shadow-sm hover:shadow-md'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-4 h-4" />
              <span>Ajouté !</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              <span>Ajouter au panier</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

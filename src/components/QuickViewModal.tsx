import React, { useState } from 'react';
import { X, Star, ShoppingBag, Heart, ShieldCheck, Check, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from './ImageWithFallback';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, isInWishlist } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [added, setAdded] = useState(false);

  if (!quickViewProduct) return null;

  const isFavorited = isInWishlist(quickViewProduct.id);

  const options =
    quickViewProduct.category === 'sneakers'
      ? ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45']
      : quickViewProduct.category === 'smartphones'
      ? ['128 GB', '256 GB', '512 GB', '1 TB']
      : ['Taille Unique'];

  const currentOption = selectedOption || options[0];

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity, currentOption);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setQuickViewProduct(null);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="h-80 md:h-full bg-slate-50 relative flex items-center justify-center">
            <ImageWithFallback
              src={quickViewProduct.image}
              alt={quickViewProduct.title}
              category={quickViewProduct.category}
              className="w-full h-full object-cover"
            />
            {quickViewProduct.badge && (
              <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 bg-[#e74c3c] text-white rounded-full uppercase tracking-wider">
                {quickViewProduct.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {quickViewProduct.brand}
              </span>
              <h2 className="text-2xl font-bold text-[#2c3e50] mt-1 font-['Montserrat']">
                {quickViewProduct.title}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2 text-amber-500 text-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(quickViewProduct.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-slate-100 text-slate-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-slate-600">
                  {quickViewProduct.rating} ({quickViewProduct.reviewCount} avis)
                </span>
              </div>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl font-black text-[#2c3e50] font-['Montserrat']">
                  €{quickViewProduct.price.toFixed(2)}
                </span>
                {quickViewProduct.oldPrice && (
                  <span className="text-base text-slate-400 line-through">
                    €{quickViewProduct.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {quickViewProduct.description}
              </p>

              {/* Options (Size / Storage) */}
              <div className="mt-5">
                <label className="text-xs font-bold uppercase text-slate-500 mb-2 block">
                  {quickViewProduct.category === 'sneakers'
                    ? 'Pointure'
                    : quickViewProduct.category === 'smartphones'
                    ? 'Capacité de stockage'
                    : 'Option'}
                </label>
                <div className="flex flex-wrap gap-2">
                  {options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedOption(opt)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                        currentOption === opt
                          ? 'border-[#2c3e50] bg-[#2c3e50] text-white shadow-xs'
                          : 'border-slate-200 text-slate-700 hover:border-slate-400 bg-slate-50'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-5 flex items-center gap-4">
                <span className="text-xs font-bold uppercase text-slate-500">Quantité</span>
                <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-slate-600 hover:bg-slate-200 font-bold transition-colors"
                  >
                    -
                  </button>
                  <span className="px-3 text-sm font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-slate-600 hover:bg-slate-200 font-bold transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex gap-3">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-3 px-6 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  added
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#e74c3c] hover:bg-[#c0392b] text-white shadow-md'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Ajouté au panier !</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    <span>Ajouter au panier</span>
                  </>
                )}
              </button>
              <button
                onClick={() => toggleWishlist(quickViewProduct)}
                className={`p-3 rounded-full border border-slate-200 hover:border-rose-300 transition-colors ${
                  isFavorited ? 'text-[#e74c3c] bg-rose-50 border-rose-200' : 'text-slate-600'
                }`}
                title="Favoris"
              >
                <Heart className={`w-5 h-5 ${isFavorited ? 'fill-[#e74c3c]' : ''}`} />
              </button>
            </div>

            {/* Trust badge */}
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Authenticité 100% certifiée
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-slate-400" /> Expédition 24h
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

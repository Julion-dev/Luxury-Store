import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from './ImageWithFallback';

interface CartDrawerProps {
  onNavigateToProducts: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onNavigateToProducts }) => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartSubtotal,
    showToast,
  } = useCart();

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  // Checkout form
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerCity, setCustomerCity] = useState('');

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    if (promoCode.trim().toUpperCase() === 'LUXURY10') {
      setDiscountPercent(10);
      showToast('Code promo LUXURY10 appliqué (-10%) !');
    } else if (promoCode.trim().toUpperCase() === 'VIP') {
      setDiscountPercent(15);
      showToast('Code promo VIP appliqué (-15%) !');
    } else {
      setPromoError('Code promo invalide (essayez LUXURY10 ou VIP)');
    }
  };

  const discountAmount = (cartSubtotal * discountPercent) / 100;
  const shippingCost = cartSubtotal > 200 ? 0 : cartSubtotal > 0 ? 15 : 0;
  const finalTotal = Math.max(0, cartSubtotal - discountAmount + shippingCost);

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerEmail || !customerAddress) return;
    setOrderComplete(true);
    setTimeout(() => {
      clearCart();
      setOrderComplete(false);
      setCheckoutModalOpen(false);
      setIsCartOpen(false);
      showToast('Votre commande a été confirmée avec succès !');
    }, 2200);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end">
        <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-[#e74c3c]" />
              <h2 className="text-xl font-bold text-[#2c3e50] font-['Montserrat']">
                Mon Panier
              </h2>
              <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-bold">
                {cart.length} articles
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-semibold text-[#2c3e50]">Votre panier est vide</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-xs">
                  Explorez nos sneakers exclusives et nos smartphones haut de gamme pour commencer vos achats.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    onNavigateToProducts();
                  }}
                  className="mt-6 px-6 py-2.5 rounded-full bg-[#2c3e50] text-white text-xs font-bold hover:bg-[#e74c3c] transition-colors"
                >
                  Découvrir nos produits
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}`}
                  className="flex gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100 relative group"
                >
                  <ImageWithFallback
                    src={item.product.image}
                    alt={item.product.title}
                    category={item.product.category}
                    className="w-20 h-20 object-cover rounded-lg bg-white shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-semibold text-[#2c3e50] truncate pr-4">
                          {item.product.title}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-slate-400 hover:text-rose-500 transition-colors p-1"
                          title="Supprimer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      {item.selectedSize && (
                        <span className="text-xs text-slate-500 font-medium">
                          Option : {item.selectedSize}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-slate-200 bg-white rounded-md">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-slate-500 hover:bg-slate-100 text-xs font-bold"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-slate-500 hover:bg-slate-100 text-xs font-bold"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-bold text-[#2c3e50] font-['Montserrat']">
                        €{(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-slate-100 bg-white space-y-4">
              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="space-y-1">
                <div className="flex">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Code promo (ex: LUXURY10)"
                    className="flex-1 px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-l-md uppercase font-semibold focus:outline-none focus:border-[#2c3e50]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-slate-800 text-white text-xs font-bold rounded-r-md hover:bg-[#e74c3c] transition-colors"
                  >
                    Appliquer
                  </button>
                </div>
                {promoError && <p className="text-[11px] text-rose-500">{promoError}</p>}
                {discountPercent > 0 && (
                  <p className="text-[11px] text-emerald-600 font-semibold">
                    Remise de {discountPercent}% appliquée (-€{discountAmount.toFixed(2)})
                  </p>
                )}
              </form>

              {/* Subtotals */}
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span className="font-semibold text-slate-800">€{cartSubtotal.toFixed(2)}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Remise ({discountPercent}%)</span>
                    <span>-€{discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Livraison express</span>
                  <span>{shippingCost === 0 ? 'Gratuite' : `€${shippingCost.toFixed(2)}`}</span>
                </div>
                <div className="pt-2 border-t border-slate-100 flex justify-between text-base font-black text-[#2c3e50] font-['Montserrat']">
                  <span>Total</span>
                  <span>€{finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Trigger Button */}
              <button
                onClick={() => setCheckoutModalOpen(true)}
                className="w-full py-3.5 px-6 rounded-full bg-[#e74c3c] hover:bg-[#c0392b] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <span>Passer la commande</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Paiement 100% sécurisé et garanti</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Checkout Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-60 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setCheckoutModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            {orderComplete ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#2c3e50] font-['Montserrat']">
                  Commande validée !
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  Merci pour votre confiance, {customerName}. Un email de confirmation avec le certificat et numéro de suivi vous a été adressé à {customerEmail}.
                </p>
                <div className="mt-4 text-xs font-semibold text-emerald-700 bg-emerald-50 py-2 px-4 rounded-lg inline-block">
                  Numéro de commande : #LX-{Math.floor(100000 + Math.random() * 900000)}
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-black text-[#2c3e50] font-['Montserrat'] mb-2">
                  Finaliser votre commande
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Expédition assurée sous 24h avec emballage premium renforcé.
                </p>

                <form onSubmit={handleCompleteOrder} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Alexandre Dubois"
                      className="w-full px-3.5 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-[#2c3e50]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                      Adresse Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="alexandre@example.com"
                      className="w-full px-3.5 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-[#2c3e50]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                        Adresse de livraison *
                      </label>
                      <input
                        type="text"
                        required
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        placeholder="15 Avenue Montaigne"
                        className="w-full px-3.5 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-[#2c3e50]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                        Ville & Code Postal *
                      </label>
                      <input
                        type="text"
                        required
                        value={customerCity}
                        onChange={(e) => setCustomerCity(e.target.value)}
                        placeholder="75008 Paris"
                        className="w-full px-3.5 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-[#2c3e50]"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg text-xs space-y-1 text-slate-600 mt-4">
                    <div className="flex justify-between font-medium">
                      <span>Total à régler :</span>
                      <span className="font-bold text-base text-[#2c3e50]">€{finalTotal.toFixed(2)}</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Option de paiement : Carte bancaire / Apple Pay / PayPal au choix
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#e74c3c] hover:bg-[#c0392b] text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
                  >
                    Confirmer et payer €{finalTotal.toFixed(2)}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

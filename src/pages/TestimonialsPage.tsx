import React, { useState } from 'react';
import { Star, CheckCircle2, MessageSquare, ThumbsUp, Send } from 'lucide-react';
import { INITIAL_REVIEWS } from '../data/mockData';
import { Review } from '../types';
import { useCart } from '../context/CartContext';

export const TestimonialsPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const { showToast } = useCart();

  // Review form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (rating === 0) {
      setErrorMsg('Veuillez sélectionner une note en cliquant sur les étoiles.');
      return;
    }

    const newReview: Review = {
      id: Date.now(),
      name,
      rating,
      date: "Aujourd'hui",
      clientSince: orderNumber ? `Commande ${orderNumber}` : 'Nouveau client',
      title,
      text: message,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      verified: true,
    };

    setReviews([newReview, ...reviews]);
    setFormSubmitted(true);
    showToast('Merci pour votre avis ! Il a été publié.');

    // Reset fields
    setName('');
    setEmail('');
    setOrderNumber('');
    setRating(0);
    setTitle('');
    setMessage('');

    setTimeout(() => {
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-72 md:h-80 bg-slate-900 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1600&q=80"
          alt="Avis Clients"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
        />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Montserrat'] tracking-tight">
            Avis Clients
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Découvrez ce que nos clients pensent de nos produits d'exception et de notre service
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Testimonials Grid */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-black text-[#2c3e50] font-['Montserrat']">
              Ils Nous Font Confiance
            </h2>
            <div className="w-16 h-1 bg-[#e74c3c] mx-auto mt-3"></div>
            <p className="text-slate-500 text-sm mt-3">
              Des témoignages authentiques de passionnés de streetwear et de technologie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-7 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(rev.rating)
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-200 fill-slate-100'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400">{rev.date}</span>
                  </div>

                  <h4 className="text-base font-bold text-[#2c3e50] mb-2">{rev.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-11 h-11 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h5 className="text-sm font-bold text-[#2c3e50] flex items-center gap-1.5">
                      {rev.name}
                      {rev.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline" />
                      )}
                    </h5>
                    <span className="text-xs text-slate-400">{rev.clientSince}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            <div className="pt-4 lg:pt-0">
              <div className="text-4xl sm:text-5xl font-black text-[#e74c3c] font-['Montserrat']">
                98%
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-2">
                Clients satisfaits
              </div>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="text-4xl sm:text-5xl font-black text-amber-400 font-['Montserrat']">
                4.9/5
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-2">
                Note moyenne certifiée
              </div>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="text-4xl sm:text-5xl font-black text-white font-['Montserrat']">
                5K+
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-2">
                Avis positifs enregistrés
              </div>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="text-4xl sm:text-5xl font-black text-emerald-400 font-['Montserrat']">
                24h
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-2">
                Délai moyen de réponse
              </div>
            </div>
          </div>
        </section>

        {/* Add Review Form */}
        <section className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#2c3e50] font-['Montserrat']">
              Donnez votre avis
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">
              Vous avez récemment commandé chez LuxuryStore ? Partagez votre expérience avec notre communauté.
            </p>
          </div>

          {formSubmitted && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Votre avis a été enregistré et publié avec succès. Merci !</span>
            </div>
          )}

          {errorMsg && (
            <div className="mb-6 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                  Nom *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex : Maxime B."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-[#2c3e50]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre.email@exemple.com"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-[#2c3e50]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                  Numéro de commande (optionnel)
                </label>
                <input
                  type="text"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="Ex : #LX-849201"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-[#2c3e50]"
                />
              </div>

              {/* Star Rating Picker */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                  Note attribuée *
                </label>
                <div className="flex items-center gap-1 py-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= (hoverRating || rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-300 fill-slate-100'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-xs font-bold text-slate-600">
                    {rating > 0 ? `${rating}/5` : 'Choisissez'}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                Titre de votre avis *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex : Produit impeccable et conforme"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-[#2c3e50]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                Votre avis détaillé *
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Partagez vos impressions sur la qualité, l'emballage, l'authenticité et la livraison..."
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-[#2c3e50]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-full bg-[#e74c3c] hover:bg-[#c0392b] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Envoyer mon avis</span>
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

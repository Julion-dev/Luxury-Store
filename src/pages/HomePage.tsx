import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Truck, Clock, RefreshCw, Star } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { INITIAL_PRODUCTS, INITIAL_REVIEWS, BLOG_POSTS } from '../data/mockData';

interface HomePageProps {
  onNavigate: (page: string, params?: { category?: string; postId?: string }) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: 'Collection Exclusive 2025',
      subtitle: 'Découvrez les dernières sneakers et smartphones de luxe certifiés authentiques.',
      ctaText: 'Explorer la collection',
      targetCategory: undefined,
      bgImage: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1600&q=80',
    },
    {
      title: 'Édition Limitée & Raretés',
      subtitle: 'Pièces rares, numérotées et modèles exclusifs disponibles en quantité restreinte.',
      ctaText: 'Voir les exclusivités',
      targetCategory: 'sneakers',
      bgImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=1600&q=80',
    },
    {
      title: 'Livraison Express en 24h',
      subtitle: 'Recevez vos commandes en toute sécurité avec assurance transport complète.',
      ctaText: 'En savoir plus',
      targetCategory: undefined,
      isAbout: true,
      bgImage: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1600&q=80',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const featuredProducts = INITIAL_PRODUCTS.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <div className="space-y-16 pb-16">
      <section className="relative h-[550px] md:h-[620px] overflow-hidden bg-slate-900 text-white">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.bgImage}
              alt={slide.title}
              className="w-full h-full object-cover object-center filter brightness-[0.45] scale-105 transition-transform duration-7000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/40 to-transparent flex items-center">
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
                <div className="max-w-2xl space-y-4">
                  <span className="inline-block py-1 px-3 bg-[#e74c3c] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    LuxuryStore 2025
                  </span>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Montserrat'] tracking-tight leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
                    {slide.subtitle}
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        if (slide.isAbout) {
                          onNavigate('about');
                        } else if (slide.targetCategory) {
                          onNavigate('products', { category: slide.targetCategory });
                        } else {
                          onNavigate('products');
                        }
                      }}
                      className="px-8 py-3.5 rounded-full bg-[#e74c3c] hover:bg-[#c0392b] text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2 cursor-pointer"
                    >
                      <span>{slide.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-xs transition-colors"
          title="Précédent"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-xs transition-colors"
          title="Suivant"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'w-8 bg-[#e74c3c]' : 'w-2.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#e74c3c] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#2c3e50]">100% Authentique</h4>
              <p className="text-xs text-slate-500 mt-0.5">Certifié par nos experts agréés</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#2c3e50]">Livraison Express</h4>
              <p className="text-xs text-slate-500 mt-0.5">Expédition garantie sous 24h</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#2c3e50]">Retours 14 Jours</h4>
              <p className="text-xs text-slate-500 mt-0.5">Échange ou remboursement simple</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#2c3e50]">Service Conciergerie</h4>
              <p className="text-xs text-slate-500 mt-0.5">Support dédié 7j/7</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-[#2c3e50] font-['Montserrat']">
            Nos Catégories
          </h2>
          <div className="w-16 h-1 bg-[#e74c3c] mx-auto mt-3"></div>
          <p className="text-slate-500 text-sm mt-3">
            Explorez nos sélections rigoureusement vérifiées
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            onClick={() => onNavigate('products', { category: 'sneakers' })}
            className="group relative h-96 rounded-2xl overflow-hidden shadow-md cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80"
              alt="Sneakers"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-black font-['Montserrat']">Sneakers Rares</h3>
              <p className="text-xs text-slate-200 mt-1 mb-4">
                Collection exclusive de baskets numérotées et rétro.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#e74c3c] group-hover:text-white transition-colors">
                <span>Voir la collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          <div
            onClick={() => onNavigate('products', { category: 'smartphones' })}
            className="group relative h-96 rounded-2xl overflow-hidden shadow-md cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80"
              alt="Smartphones"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-black font-['Montserrat']">Smartphones Haut de Gamme</h3>
              <p className="text-xs text-slate-200 mt-1 mb-4">
                Derniers fleurons Apple & Samsung scellés d’origine.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#e74c3c] group-hover:text-white transition-colors">
                <span>Découvrir</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          <div
            onClick={() => onNavigate('products', { category: 'accessories' })}
            className="group relative h-96 rounded-2xl overflow-hidden shadow-md cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80"
              alt="Accessoires"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-black font-['Montserrat']">Accessoires & Soin</h3>
              <p className="text-xs text-slate-200 mt-1 mb-4">
                Montres d'exception, audio et kits d'entretien.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#e74c3c] group-hover:text-white transition-colors">
                <span>Explorer</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-3xl font-black text-[#2c3e50] font-['Montserrat']">
              Produits Vedettes
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Les pièces les plus plébiscitées par notre communauté
            </p>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="mt-4 sm:mt-0 text-sm font-bold text-[#e74c3c] hover:text-[#c0392b] inline-flex items-center gap-1.5 transition-colors"
          >
            <span>Voir tout le catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#2c3e50] font-['Montserrat']">
              Ils Nous Font Confiance
            </h2>
            <div className="w-16 h-1 bg-[#e74c3c] mx-auto mt-3"></div>
            <p className="text-slate-500 text-sm mt-3">
              Découvrez les retours authentiques de nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INITIAL_REVIEWS.slice(0, 3).map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-7 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-amber-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(rev.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                  <h4 className="text-base font-bold text-[#2c3e50] mb-2">{rev.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed italic">"{rev.text}"</p>
                </div>

                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h5 className="text-xs font-bold text-[#2c3e50]">{rev.name}</h5>
                    <span className="text-[11px] text-slate-400">{rev.clientSince}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('testimonials')}
              className="px-6 py-2.5 rounded-full border border-[#2c3e50] text-[#2c3e50] hover:bg-[#2c3e50] hover:text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Consulter tous les avis et noter
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-3xl font-black text-[#2c3e50] font-['Montserrat']">
              Le Blog LuxuryStore
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Conseils d’experts, actualités streetwear et comparatifs high-tech
            </p>
          </div>
          <button
            onClick={() => onNavigate('blog')}
            className="mt-4 sm:mt-0 text-sm font-bold text-[#e74c3c] hover:text-[#c0392b] inline-flex items-center gap-1.5 transition-colors"
          >
            <span>Voir tous les articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => onNavigate('blog-detail', { postId: post.id })}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="h-48 overflow-hidden bg-slate-100 relative">
                <img
                  src={post.bannerImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#2c3e50] text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                  {post.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#2c3e50] group-hover:text-[#e74c3c] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-[#e74c3c]">
                  <span>Lire l'article</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

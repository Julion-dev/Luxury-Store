import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TwitterIcon } from './SocialIcons';
import { useCart } from '../context/CartContext';

interface FooterProps {
  onNavigate: (page: string, params?: { category?: string }) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useCart();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    showToast('Merci de votre inscription à notre newsletter exclusive !');
    setEmail('');
  };

  return (
    <footer className="bg-[#1e293b] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center text-2xl font-black tracking-wider text-white font-['Montserrat'] uppercase mb-4">
              <span>LUXURY</span>
              <span className="text-[#e74c3c]">STORE</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Votre référence incontournable de sneakers rares et smartphones haut de gamme. Authentification rigoureuse garantie et livraison express 24h/48h.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#e74c3c] text-white flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#e74c3c] text-white flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#e74c3c] text-white flex items-center justify-center transition-colors"
                title="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base uppercase tracking-wider mb-5 font-['Montserrat']">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#e74c3c] transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#e74c3c] transition-colors"
                >
                  À propos de nous
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#e74c3c] transition-colors"
                >
                  Notre Catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-[#e74c3c] transition-colors"
                >
                  Blog & Conseils
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('testimonials')}
                  className="hover:text-[#e74c3c] transition-colors"
                >
                  Avis & Témoignages
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#e74c3c] transition-colors"
                >
                  Contactez-nous
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold text-base uppercase tracking-wider mb-5 font-['Montserrat']">
              Catégories
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('products', { category: 'sneakers' })}
                  className="hover:text-[#e74c3c] transition-colors"
                >
                  Sneakers Rares & Rétro
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products', { category: 'smartphones' })}
                  className="hover:text-[#e74c3c] transition-colors"
                >
                  Smartphones Haut de Gamme
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products', { category: 'accessories' })}
                  className="hover:text-[#e74c3c] transition-colors"
                >
                  Accessoires Connectés & Soin
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#e74c3c] transition-colors flex items-center gap-1.5 text-emerald-400"
                >
                  <ShieldCheck className="w-4 h-4" />
                  Certificat d'Authenticité
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-white font-bold text-base uppercase tracking-wider mb-5 font-['Montserrat']">
              Newsletter
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              Recevez les exclusivités, drops privés et offres réservées aux membres.
            </p>
            {subscribed ? (
              <div className="bg-emerald-950/60 border border-emerald-600/40 text-emerald-300 text-xs px-3.5 py-3 rounded-lg flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Vous êtes bien abonné aux drops privés !</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse email"
                    required
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-800 text-white placeholder-slate-500 rounded-l-md border border-slate-700 focus:outline-none focus:border-[#e74c3c]"
                  />
                  <button
                    type="submit"
                    className="px-4 bg-[#e74c3c] text-white rounded-r-md hover:bg-[#c0392b] transition-colors flex items-center justify-center cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            <div className="mt-6 pt-5 border-t border-slate-800 text-xs space-y-2 text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#e74c3c] shrink-0" />
                <span>123 Rue du Luxe, 75001 Paris</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#e74c3c] shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#e74c3c] shrink-0" />
                <span>contact@luxurystore.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} LuxuryStore — Créé avec excellence par Julien Mastaki. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Authenticité 100% Vérifiée</span>
            <span>Paiements Sécurisés SSL</span>
            <span>Retours Gratuits 14 Jours</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

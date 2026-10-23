import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, Check, MessageCircle } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TwitterIcon } from '../components/SocialIcons';
import { FAQS } from '../data/mockData';
import { useCart } from '../context/CartContext';

export const ContactPage: React.FC = () => {
  const { showToast } = useCart();

  // Contact form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // FAQ Accordion state
  const [activeFaq, setActiveFaq] = useState<number | null>(1);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Veuillez entrer votre nom complet';
    if (!email.trim()) {
      newErrors.email = 'Veuillez entrer votre adresse email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Veuillez entrer une adresse email valide';
    }
    if (!subject) newErrors.subject = 'Veuillez sélectionner un sujet';
    if (!message.trim()) newErrors.message = 'Veuillez entrer votre message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSuccess(true);
    showToast('Votre message a bien été envoyé à notre équipe concierge !');

    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
      setIsSuccess(false);
    }, 3000);
  };

  const toggleFaq = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-72 md:h-80 bg-slate-900 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
          alt="Contact LuxuryStore"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
        />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Montserrat'] tracking-tight">
            Contactez-nous
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Notre conciergerie est à votre écoute pour toute demande d'authentification ou commande
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Contact Info & Form */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-3xl font-black text-[#2c3e50] font-['Montserrat']">
                Informations de contact
              </h2>
              <div className="w-16 h-1 bg-[#e74c3c] mt-3 mb-4"></div>
              <p className="text-slate-600 text-sm leading-relaxed">
                N'hésitez pas à nous joindre par téléphone, messagerie instantanée ou email. Nos spécialistes répondent sous 24h.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#e74c3c] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#2c3e50]">Adresse de notre showroom</h3>
                  <p className="text-xs text-slate-500 mt-1">123 Rue du Luxe, 75001 Paris, France</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#2c3e50]">Téléphone & Conciergerie</h3>
                  <p className="text-xs text-slate-500 mt-1">+33 1 23 45 67 89</p>
                  <p className="text-[11px] text-slate-400">Du Lundi au Vendredi : 9h00 - 19h00</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#2c3e50]">Email officiel</h3>
                  <p className="text-xs text-slate-500 mt-1">contact@luxurystore.com</p>
                  <p className="text-[11px] text-slate-400">Support client : support@luxurystore.com</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Suivez-nous sur les réseaux
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="#instagram"
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#e74c3c] hover:text-white text-slate-600 flex items-center justify-center transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="#facebook"
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#e74c3c] hover:text-white text-slate-600 flex items-center justify-center transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="#twitter"
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#e74c3c] hover:text-white text-slate-600 flex items-center justify-center transition-colors"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a
                  href="#whatsapp"
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-600 flex items-center justify-center transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-lg">
            <h3 className="text-2xl font-black text-[#2c3e50] font-['Montserrat'] mb-2">
              Envoyez-nous un message
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Remplissez le formulaire ci-dessous et recevez une réponse sous 24h ouvrées.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="Votre nom et prénom"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm border rounded-xl focus:outline-none ${
                      errors.name ? 'border-rose-500 bg-rose-50/30' : 'border-slate-200 focus:border-[#2c3e50]'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Adresse Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="nom@exemple.com"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm border rounded-xl focus:outline-none ${
                      errors.email ? 'border-rose-500 bg-rose-50/30' : 'border-slate-200 focus:border-[#2c3e50]'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+33 6 12 34 56 78"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-[#2c3e50]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Sujet *
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                      if (errors.subject) setErrors({ ...errors, subject: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm border rounded-xl focus:outline-none ${
                      errors.subject ? 'border-rose-500 bg-rose-50/30' : 'border-slate-200 focus:border-[#2c3e50]'
                    }`}
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="question">Question sur un produit ou rareté</option>
                    <option value="order">Suivi de commande</option>
                    <option value="return">Retour / Échange sous 14 jours</option>
                    <option value="partnership">Partenariat & Presse</option>
                    <option value="other">Autre demande</option>
                  </select>
                  {errors.subject && <p className="text-[11px] text-rose-500 mt-1">{errors.subject}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                  Message *
                </label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  placeholder="Détaillez votre question ou la référence recherchée..."
                  className={`w-full px-3.5 py-2.5 text-xs sm:text-sm border rounded-xl focus:outline-none ${
                    errors.message ? 'border-rose-500 bg-rose-50/30' : 'border-slate-200 focus:border-[#2c3e50]'
                  }`}
                ></textarea>
                {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className={`w-full py-3.5 px-6 rounded-full font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isSuccess
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#e74c3c] hover:bg-[#c0392b] text-white hover:shadow-lg'
                }`}
              >
                {isSuccess ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Message envoyé avec succès</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Envoyer le message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </section>

        {/* Map Section */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-black text-[#2c3e50] font-['Montserrat']">
              Nous Trouver
            </h2>
            <div className="w-16 h-1 bg-[#e74c3c] mx-auto mt-3"></div>
            <p className="text-slate-500 text-sm mt-3">
              Notre showroom privé au cœur du 1er arrondissement de Paris
            </p>
          </div>

          <div className="w-full h-96 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
            <iframe
              title="Localisation LuxuryStore Paris"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.5004554378175!2d2.3323!3d48.8656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688b9460!2s1er%20Arrondissement%2C%20Paris!5e0!3m2!1sfr!2sfr!4v1680000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-black text-[#2c3e50] font-['Montserrat']">
              Questions Fréquentes
            </h2>
            <div className="w-16 h-1 bg-[#e74c3c] mx-auto mt-3"></div>
            <p className="text-slate-500 text-sm mt-3">
              Tout ce que vous devez savoir sur nos livraisons, paiements et authentifications
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#2c3e50] hover:text-[#e74c3c] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#e74c3c]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

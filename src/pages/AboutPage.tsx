import React from 'react';
import { Gem, ShieldCheck, Heart, Award, Truck, Box, RefreshCcw } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, GithubIcon, TwitterIcon } from '../components/SocialIcons';
import { TEAM_MEMBERS } from '../data/mockData';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-72 md:h-80 bg-slate-900 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80"
          alt="About LuxuryStore"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
        />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Montserrat'] tracking-tight">
            Notre Histoire
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Découvrez la passion qui anime LuxuryStore depuis nos débuts
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase font-bold text-[#e74c3c] tracking-widest">
                Depuis 2018
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#2c3e50] font-['Montserrat'] mt-1">
                Qui sommes-nous ?
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Fondé en 2018 par Julien Mastaki, LuxuryStore est né de la passion pour les produits rares et exclusifs, ainsi que de la volonté d'offrir une expérience d'achat d'un raffinement sans précédent.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Initialement dédiée aux sneakers introuvables et éditions limitées pour collectionneurs, notre maison a naturellement élargi son offre aux smartphones ultra haut de gamme et accessoires d'exception.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Aujourd'hui, nous sommes fiers de compter des milliers de clients fidèles en Europe et sur le continent africain, avec une politique intransigeante d'authentification certifiée sur chaque article vendu.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100">
              <div>
                <div className="text-3xl font-black text-[#e74c3c] font-['Montserrat']">5+</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Années d'excellence</div>
              </div>
              <div>
                <div className="text-3xl font-black text-[#2c3e50] font-['Montserrat']">10K+</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Clients satisfaits</div>
              </div>
              <div>
                <div className="text-3xl font-black text-emerald-600 font-['Montserrat']">100%</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Produits authentiques</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-slate-100 aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1000&q=80"
                alt="Boutique LuxuryStore"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-4 max-w-xs">
              <Award className="w-10 h-10 text-amber-500 shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-[#2c3e50]">Label d'Authenticité</h4>
                <p className="text-[11px] text-slate-500">Chaque boîte scellée avec certificat infalsifiable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Pillars */}
        <section className="bg-slate-50 py-16 px-6 sm:px-12 rounded-3xl border border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-[#2c3e50] font-['Montserrat']">
              Notre Mission
            </h2>
            <div className="w-16 h-1 bg-[#e74c3c] mx-auto mt-3"></div>
            <p className="text-slate-500 text-sm mt-3">
              Les trois piliers fondateurs de notre maison de commerce d'exception
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-100 space-y-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto sm:mx-0">
                <Gem className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#2c3e50] font-['Montserrat']">
                Qualité Exceptionnelle
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Nous sélectionnons rigoureusement chaque paire et smartphone selon un cahier des charges strict garantissant l'état neuf impeccable.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-100 space-y-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 text-[#e74c3c] flex items-center justify-center mx-auto sm:mx-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#2c3e50] font-['Montserrat']">
                Authenticité Garantie
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tous nos articles passent par une batterie de 12 points de contrôle manuel et électronique avant mise en inventaire.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-100 space-y-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto sm:mx-0">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#2c3e50] font-['Montserrat']">
                Passion & Proximité
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Une équipe de passionnés à l'écoute de chaque passionné, de la commande jusqu'au déballage chez vous.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-black text-[#2c3e50] font-['Montserrat']">
              Notre Processus en 4 Étapes
            </h2>
            <div className="w-16 h-1 bg-[#e74c3c] mx-auto mt-3"></div>
            <p className="text-slate-500 text-sm mt-3">
              De l'approvisionnement au conditionnement sécurisé
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#2c3e50] text-white flex items-center justify-center font-bold font-['Montserrat'] text-sm">
                1
              </div>
              <h3 className="text-base font-bold text-[#2c3e50]">Sélection Rigoureuse</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Approvisionnement direct auprès de partenaires vérifiés et détenteurs de pièces rares d'origine.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#e74c3c] text-white flex items-center justify-center font-bold font-['Montserrat'] text-sm">
                2
              </div>
              <h3 className="text-base font-bold text-[#2c3e50]">Authentification</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Examen sous loupe, analyse des textures, contrôle de série et comparaison avec les bases fabricants.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#2c3e50] text-white flex items-center justify-center font-bold font-['Montserrat'] text-sm">
                3
              </div>
              <h3 className="text-base font-bold text-[#2c3e50]">Contrôle Qualité</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Vérification méticuleuse de la boîte, des accessoires, des lacets et de l'intégrité globale.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold font-['Montserrat'] text-sm">
                4
              </div>
              <h3 className="text-base font-bold text-[#2c3e50]">Expédition Sécurisée</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Double cartonnage renforcé antichoc, étiquette scellée et expédition express avec assurance intégrale.
              </p>
            </div>
          </div>
        </section>

        {/* Shipping Section */}
        <section id="shipping" className="bg-[#2c3e50] text-white rounded-3xl p-8 sm:p-14 overflow-hidden relative">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs uppercase font-bold text-[#e74c3c] tracking-widest">
              Logistique Internationale
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-['Montserrat']">
              Livraison Express & Retours
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Nous savons à quel point recevoir rapidement et en sécurité vos paires et téléphones est primordial.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="space-y-2">
                <Truck className="w-8 h-8 text-[#e74c3c]" />
                <h4 className="font-bold text-sm">Livraison 24h/48h</h4>
                <p className="text-xs text-slate-300">Expédié sous 24h avec suivi GPS DHL Express / Chronopost.</p>
              </div>
              <div className="space-y-2">
                <Box className="w-8 h-8 text-amber-400" />
                <h4 className="font-bold text-sm">Emballage Premium</h4>
                <p className="text-xs text-slate-300">Double boîte renforcée et papier de soie protecteur.</p>
              </div>
              <div className="space-y-2">
                <RefreshCcw className="w-8 h-8 text-emerald-400" />
                <h4 className="font-bold text-sm">Retours Simples</h4>
                <p className="text-xs text-slate-300">14 jours pour échanger ou demander le remboursement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-black text-[#2c3e50] font-['Montserrat']">
              Rencontrez Notre Équipe
            </h2>
            <div className="w-16 h-1 bg-[#e74c3c] mx-auto mt-3"></div>
            <p className="text-slate-500 text-sm mt-3">
              Les passionnés qui façonnent LuxuryStore au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col group"
              >
                <div className="h-72 overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#2c3e50] font-['Montserrat']">
                      {member.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#e74c3c] uppercase tracking-wider mt-0.5">
                      {member.role}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mt-3">
                      {member.bio}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100 text-slate-400">
                    <span className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#e74c3c] hover:text-white flex items-center justify-center transition-colors cursor-pointer">
                      <InstagramIcon className="w-4 h-4" />
                    </span>
                    <span className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#e74c3c] hover:text-white flex items-center justify-center transition-colors cursor-pointer">
                      <LinkedinIcon className="w-4 h-4" />
                    </span>
                    {member.socials.github && (
                      <span className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#e74c3c] hover:text-white flex items-center justify-center transition-colors cursor-pointer">
                        <GithubIcon className="w-4 h-4" />
                      </span>
                    )}
                    {member.socials.twitter && (
                      <span className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#e74c3c] hover:text-white flex items-center justify-center transition-colors cursor-pointer">
                        <TwitterIcon className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

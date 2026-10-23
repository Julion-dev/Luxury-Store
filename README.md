# Luxury Store — Application React & TypeScript

Boutique e-commerce haut de gamme réécrite en **React 19 + TypeScript + Vite + Tailwind CSS**, dédiée aux sneakers rares de collection et aux smartphones ultra haut de gamme.

## 🚀 Fonctionnalités Clés

- 👟 **Catalogue Complet & Filtrage Dynamique** :
  - Recherche en temps réel par mots-clés
  - Filtres multi-critères : Catégories (Sneakers, Smartphones, Accessoires), Marques (Nike, Jordan, Adidas, Apple, Samsung), Gammes de prix
  - Tri dynamique : Popularité, Nouveautés, Prix croissant/décroissant, Meilleures notes
  - Système de pagination
- 🔍 **Aperçu Rapide (Quick View Modal)** :
  - Sélection de pointure (EU 40-45) ou de capacité de stockage (128GB - 1TB)
  - Sélecteur de quantité et ajout direct au panier
  - Badges d'authenticité et d'expédition express
- 🛒 **Panier Interactif (Cart Drawer)** :
  - Tiroir coulissant avec gestion des quantités et suppression
  - Codes promo avec calcul instantané (ex : `LUXURY10`, `VIP`)
  - Calcul des frais de livraison express (offerte dès 200€)
  - Tunnel de commande (Checkout) avec confirmation immédiate
- ❤️ **Liste de Souhaits (Wishlist Drawer)** :
  - Sauvegarde locale des articles favoris
  - Transfert en un clic vers le panier
- ⭐️ **Espace Avis & Témoignages** :
  - Affichage des notes et témoignages certifiés
  - Compteurs statistiques clés (98% satisfaction, 4.9/5, 5K+ avis, 24h réponse)
  - Formulaire interactif "Donnez votre avis" avec sélecteur d'étoiles dynamique et publication immédiate
- 📖 **Blog & Guide Pratique avec Lecteur Audio** :
  - Articles détaillés (guide entretien sneakers, comparatif smartphones, tendances mode)
  - Lecteur audio interactif avec synthèse vocale intégrée et sélecteur de vitesse (0.5×, 0.8×, 1×, 1.2×, 1.5×)
- 🏢 **À Propos & Équipe** :
  - Histoire de LuxuryStore fondée par Julien Mastaki
  - Piliers de mission, protocole d'authentification en 4 étapes et profils de l'équipe
- 📍 **Contact & FAQ** :
  - Formulaire de message avec validation des champs
  - Coordonnées de la conciergerie à Paris
  - Accordéon FAQ interactif

## 🛠 Stack Technique

- **Framework** : React 19 + TypeScript
- **Bundler** : Vite 6
- **Styling** : Tailwind CSS v4 + Google Fonts (Montserrat & Plus Jakarta Sans)
- **Icônes** : Lucide React & Custom SVG
- **Persistance** : LocalStorage (panier et favoris)

## 💻 Développement

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement (port 3000)
npm run dev

# Construction de production
npm run build
```

## Licence

© 2025 Julien Mastaki – Tous droits réservés.
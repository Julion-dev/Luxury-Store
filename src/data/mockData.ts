import { Product, Review, BlogPost, FAQItem } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Air Jordan 1 Retro High OG',
    category: 'sneakers',
    brand: 'jordan',
    price: 299.99,
    rating: 4.8,
    reviewCount: 24,
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80',
    badge: 'Nouveau',
    description: "L'iconique Air Jordan 1 Retro High OG dans sa palette de couleurs légendaire. Cuir premium pleine fleur, amorti Air encapsulé sous le talon et finitions de collection.",
    features: ['Cuir pleine fleur d’exception', 'Semelle en caoutchouc avec point de pivot', 'Certificat d’authenticité inclus', 'Livré avec double jeu de lacets'],
    inStock: true,
    isFeatured: true,
  },
  {
    id: 2,
    title: 'iPhone 15 Pro Max 512GB',
    category: 'smartphones',
    brand: 'apple',
    price: 1274.99,
    oldPrice: 1499.00,
    rating: 4.9,
    reviewCount: 18,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
    badge: '-15%',
    description: "Conçu en titane de qualité aérospatiale, équipé de la puce A17 Pro révolutionnaire, du bouton Action personnalisable et du système photo le plus puissant jamais conçu par Apple.",
    features: ['Design en titane ultra-léger', 'Puce A17 Pro avec GPU 6 cœurs', 'Téléobjectif 5x inédit', 'Connecteur USB-C haute vitesse'],
    inStock: true,
    isFeatured: true,
  },
  {
    id: 3,
    title: 'Yeezy Boost 350 V2',
    category: 'sneakers',
    brand: 'adidas',
    price: 249.99,
    rating: 4.7,
    reviewCount: 32,
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80',
    description: "Une silhouette reconnaissable entre mille. Tige Primeknit respirante et semelle intermédiaire équipée de l'amorti Adidas Boost sur toute la longueur pour un confort sans compromis.",
    features: ['Tige Primeknit monobloc', 'Technologie d’amorti Boost intégrale', 'Bande latérale translucide signature', 'Numéro de série vérifié'],
    inStock: true,
    isFeatured: true,
  },
  {
    id: 4,
    title: 'Samsung Galaxy S23 Ultra',
    category: 'smartphones',
    brand: 'samsung',
    price: 1199.00,
    rating: 4.8,
    reviewCount: 21,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80',
    badge: 'Édition Limitée',
    description: "Le summum de l'innovation Galaxy. Capteur photo spectaculaire de 200 MP avec Nightography avancée, stylet S Pen intégré et écran Dynamic AMOLED 2X 120Hz.",
    features: ['Capteur photo principal 200 MP', 'S Pen intégré ultra-précis', 'Snapdragon 8 Gen 2 pour Galaxy', 'Batterie 5000 mAh longue autonomie'],
    inStock: true,
    isFeatured: true,
  },
  {
    id: 5,
    title: 'Nike Dunk Low Retro',
    category: 'sneakers',
    brand: 'nike',
    price: 129.99,
    rating: 4.6,
    reviewCount: 15,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
    description: "Conçue à l'origine pour les parquets universitaires, la Dunk Low est devenue un emblème streetwear universel avec son cuir souple et sa silhouette intemporelle.",
    features: ['Empiècements en cuir authentique', 'Col bas rembourré épuré', 'Semelle extérieure adhérente en caoutchouc', 'Coloris mythique'],
    inStock: true,
    isFeatured: true,
  },
  {
    id: 6,
    title: 'Apple Watch Ultra 2',
    category: 'accessories',
    brand: 'apple',
    price: 899.00,
    rating: 4.9,
    reviewCount: 27,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
    badge: 'Nouveau',
    description: "La montre connectée d'aventure et de luxe ultime. Boîtier en titane robuste de 49 mm, écran le plus lumineux d'Apple et autonomie de plusieurs jours.",
    features: ['Boîtier titane 49 mm étanche 100m', 'Écran 3000 nits haute visibilité', 'GPS double fréquence ultra-précis', 'Bouton Action personnalisable'],
    inStock: true,
    isFeatured: true,
  },
  {
    id: 7,
    title: 'Air Jordan 4 Retro Metallic',
    category: 'sneakers',
    brand: 'jordan',
    price: 349.99,
    rating: 5.0,
    reviewCount: 42,
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80',
    badge: 'Bientôt épuisé',
    description: "L'un des modèles les plus prisés de l'histoire du basketball. Ailettes latérales sculpturales, empiècements en mesh respirant et bulle d'air visible au talon.",
    features: ['Cuir pleine fleur blanc de qualité supérieure', 'Détails métalliques polis', 'Unité Air-Sole au talon et à l’avant-pied', 'Édition rare et certifiée'],
    inStock: true,
    isFeatured: true,
  },
  {
    id: 8,
    title: 'Samsung Galaxy Z Fold 5',
    category: 'smartphones',
    brand: 'samsung',
    price: 1799.00,
    rating: 4.8,
    reviewCount: 13,
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
    description: "Un écran géant qui tient dans la paume de votre main. La charnière Flex repensée offre une fermeture parfaite pour une expérience multitâche et multimédia sans égal.",
    features: ['Écran intérieur pliable Dynamic AMOLED 7.6"', 'Charnière Flex sans interstice', 'Mode Flex multitâche avancé', 'Compatibilité S Pen Fold Edition'],
    inStock: true,
    isFeatured: true,
  },
  {
    id: 9,
    title: 'AirPods Max Gris Sidéral',
    category: 'accessories',
    brand: 'apple',
    price: 579.00,
    rating: 4.8,
    reviewCount: 39,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    badge: 'Nouveau',
    description: "Casque circum-auriculaire haute fidélité. Réduction active du bruit de niveau professionnel, audio spatial personnalisé et conception acoustique de luxe en aluminium anodisé.",
    features: ['Transducteur dynamique conçu par Apple', 'Réduction active du bruit de pointe', 'Bandeau en mesh aéré et coussinets à mémoire', 'Audio spatial avec suivi des mouvements'],
    inStock: true,
    isFeatured: false,
  },
  {
    id: 10,
    title: 'Coffret Entretien Sneakers Premium',
    category: 'accessories',
    brand: 'other',
    price: 69.90,
    rating: 4.9,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80',
    description: "Le kit officiel LuxuryStore pour conserver vos paires rares à l'état neuf. Brosse en crin de cheval, solution nettoyante moussante écologique, lingettes et imperméabilisant nano-tech.",
    features: ['Solution nettoyante 98% d’origine naturelle', 'Brosse douce pour matières nobles & suède', 'Spray imperméabilisant longue durée', 'Chiffon microfibre haute densité'],
    inStock: true,
    isFeatured: false,
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Thomas L.',
    rating: 5,
    date: '12 mai 2025',
    clientSince: 'Client depuis 2021',
    title: 'Parfait état et livraison ultra rapide',
    text: "J'ai reçu ma paire de Jordan 1 en parfait état et bien avant la date prévue. Le certificat d'authenticité et le double emballage témoignent du sérieux. Le service client est réactif et professionnel. Je recommande sans hésiter !",
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    verified: true,
  },
  {
    id: 2,
    name: 'Sophie M.',
    rating: 5,
    date: '3 mai 2025',
    clientSince: 'Client depuis 2022',
    title: 'iPhone 15 Pro Max irréprochable',
    text: "Mon iPhone 15 Pro Max est arrivé dans un emballage ultra soigné avec tous les accessoires et le sceau d'inviolabilité. La vérification d'authenticité incluse est un vrai plus rassurant. Merci LuxuryStore !",
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    verified: true,
  },
  {
    id: 3,
    name: 'Alexandre D.',
    rating: 4.5,
    date: '28 avril 2025',
    clientSince: 'Client depuis 2020',
    title: 'Produit 100% conforme, emballage premium',
    text: "Expédition ultra rapide et produit conforme en tous points à la description. Petit bémol sur le suivi du transporteur qui a mis quelques heures à s'actualiser, mais colis reçu nickel. Dans l'ensemble très satisfait.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    verified: true,
  },
  {
    id: 4,
    name: 'Mehdi K.',
    rating: 5,
    date: '19 avril 2025',
    clientSince: 'Client depuis 2019',
    title: 'Le meilleur revendeur pour les sneakers rares',
    text: "Je collectionne les sneakers depuis 10 ans et LuxuryStore est de loin le revendeur le plus sérieux que j'ai rencontré en Europe et en Afrique. Authentification impeccable et stock de modèles introuvables ailleurs.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    verified: true,
  },
  {
    id: 5,
    name: 'Laura P.',
    rating: 4,
    date: '8 avril 2025',
    clientSince: 'Client depuis 2023',
    title: 'Superbe Galaxy S23 Ultra',
    text: "Très bon rapport qualité-prix pour le Galaxy S23 Ultra. Emballage soigné, conseils avant achat au top par chat, et téléphone neuf scellé. Je repasserai commande pour une montre connectée !",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    verified: true,
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'guide-entretien-sneakers',
    title: 'Guide complet pour entretenir vos sneakers de collection',
    excerpt: 'Découvrez nos techniques expertes pour nettoyer, protéger et préserver vos paires rares afin qu’elles conservent leur éclat d’origine.',
    bannerImage: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1000&q=80',
    date: '15 mai 2025',
    readTime: '5 min de lecture',
    category: 'Guide pratique',
    author: 'L’équipe LuxuryStore',
    content: [
      "1. Le Nettoyage de Base : Pour les sneakers en toile et cuir lisse comme les Nike Air Force 1 ou Jordan 1, utilisez impérativement une brosse à poils doux mélangée à de l’eau tiède et un savon au pH neutre.",
      "2. Le Traitement du Suède et du Nubuck : Ne mouillez jamais directement le cuir suédé. Utilisez une gomme à daim dédiée et brossez délicatement dans le sens des fibres.",
      "3. La Protection contre la Pluie : Appliquez deux fines couches d’imperméabilisant nano-protecteur à 20 cm de distance avant la première utilisation, puis renouvelez toutes les 3 semaines.",
      "4. Le Stockage Optimal : Conservez vos paires à l'abri de l'humidité et de la lumière directe du soleil. Utilisez des embauchoirs en cèdre naturel pour préserver le galbe de la pointe.",
      "5. Les Semelles Jaunies : Pour raviver une semelle extérieure oxydée (comme sur les Jordan rétro), appliquez une lotion de désoxydation sous cloche UV contrôlée."
    ]
  },
  {
    id: '2',
    slug: 'comparatif-smartphones-2023',
    title: 'Comparatif smartphones haut de gamme 2025 : iPhone 15 Pro Max vs Galaxy S23 Ultra',
    excerpt: 'Quel smartphone ultra-premium choisir pour votre quotidien, vos prises de vue professionnelles et votre autonomie ? Notre analyse comparative poussée.',
    bannerImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80',
    date: '10 mai 2025',
    readTime: '7 min de lecture',
    category: 'High-Tech',
    author: 'Thomas Leroy, Responsable Tech',
    content: [
      "Design & Matériaux : Apple fait un bond en avant avec son cadre en titane brossé qui allège significativement le téléphone tout en augmentant la résistance aux chocs. Samsung réplique avec des finitions en aluminium Armor et du verre Gorilla Glass Victus 2.",
      "Performances : La puce Apple A17 Pro gravée en 3nm offre des capacités de ray tracing inédites sur mobile pour le jeu vidéo. De son côté, le Snapdragon 8 Gen 2 for Galaxy assure un multitâche redoutable sans chauffe.",
      "Photographie & Vidéo : L’iPhone 15 Pro Max domine sans conteste sur la vidéo ProRes et la fidélité des teintes de peau grâce à son nouveau téléobjectif tétraprisme 5x. Samsung riposte avec sa polyvalence extrême grâce au zoom périscopique optique 10x et son capteur 200 MP.",
      "Autonomie & Recharge : Les deux appareils passent aisément le cap de la journée et demie d’utilisation intensive. Samsung garde un léger avantage sur la vitesse de charge filaire à 45W.",
      "Verdict : Si votre écosystème repose déjà sur Mac ou iPad, l'iPhone 15 Pro Max est le choix évident. Pour les adeptes de personnalisation poussée, de stylet et de zoom optique longue distance, le S23 Ultra reste le roi du polyvalent."
    ]
  },
  {
    id: '3',
    slug: 'tendances-sneakers-ete-2023',
    title: 'Tendances sneakers de l’année : les silhouettes incontournables',
    excerpt: 'Des collaborations streetwear aux modèles rétro-running des années 2000, zoom sur les paires qui redéfinissent le style contemporain.',
    bannerImage: 'https://images.unsplash.com/photo-1512374382149-233c42b6613c?auto=format&fit=crop&w=1000&q=80',
    date: '5 mai 2025',
    readTime: '4 min de lecture',
    category: 'Mode & Style',
    author: 'Julien Mastaki, Fondateur',
    content: [
      "Le Renouveau Rétro-Running : Les paires aux allures techniques des années 2000 continuent d’envahir les podiums et les trottoirs, mariant confort orthopédique et esthétique Y2K audacieuse.",
      "Les Tons Neutres & Terreux : Blanc cassé, crème, vert sauge et nuances mocha dominent les sorties les plus recherchées de la saison.",
      "Les Silhouettes Minimalistes Premium : Après des années de surdimensionnement (chunky sneakers), nous assistons au grand retour des coupes basses affûtées et élégantes.",
      "Comment les styliser cet été : Associez une Jordan 1 Low neutre avec un pantalon fluide en lin écru, ou contrastez une paire technique colorée avec un short tailleur minimaliste."
    ]
  }
];

export const TEAM_MEMBERS = [
  {
    name: 'Julien Mastaki',
    role: 'Fondateur & CEO',
    bio: "Passionné de sneakers et de haute technologie depuis l'adolescence, Julien a fondé LuxuryStore pour rendre accessibles les pièces les plus exclusives avec une exigence de transparence totale.",
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    socials: { instagram: '#', linkedin: '#', twitter: '#' }
  },
  {
    name: 'Sophie Martin',
    role: 'Responsable Authentification',
    bio: "Forte de plus de 10 ans d'expertise dans l'authentification de maroquinerie et souliers de collection, Sophie inspecte minutieusement chaque couture, matière et puce avant mise en ligne.",
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    socials: { instagram: '#', linkedin: '#' }
  },
  {
    name: 'Thomas Leroy',
    role: 'Responsable Tech & Produits',
    bio: "Ingénieur et aficionado des nouvelles technologies, Thomas pilote la sélection des smartphones haut de gamme, accessoires connectés et garanties de conformité.",
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    socials: { github: '#', linkedin: '#' }
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: 'Quels sont les modes de paiement acceptés ?',
    answer: 'Nous acceptons les cartes bancaires (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay ainsi que le paiement échelonné sécurisé. Toutes les transactions bénéficient d’un chiffrement SSL bancaire 256 bits.'
  },
  {
    id: 2,
    question: 'Quelle est votre politique de retour et d’échange ?',
    answer: 'Vous disposez d’un délai de 14 jours calendaires à compter de la réception de votre colis pour retourner un article non porté, dans son emballage d’origine scellé et muni de son étiquette d’inviolabilité.'
  },
  {
    id: 3,
    question: 'Comment garantissez-vous l’authenticité des produits ?',
    answer: 'Tous nos articles passent par un protocole de certification physique en 12 points réalisé par nos experts : analyse des matières, odeur, coutures, typographies, numéros de série et étiquettes RFID. Chaque commande est livrée avec notre certificat d’authenticité infalsifiable.'
  },
  {
    id: 4,
    question: 'Quels sont les délais et modalités de livraison ?',
    answer: 'Toute commande passée avant 14h est expédiée le jour même. La livraison express s’effectue en 24h à 48h partout en Europe et dans nos hubs partenaires en Afrique avec assurance transport incluse et suivi en temps réel.'
  },
  {
    id: 5,
    question: 'Puis-je suivre ma commande en direct ?',
    answer: 'Dès l’expédition de votre colis, vous recevez un numéro de suivi par e-mail et SMS avec le lien du transporteur premium sélectionné (DHL Express, Chronopost ou UPS).'
  }
];

import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { INITIAL_PRODUCTS } from '../data/mockData';

interface ProductsPageProps {
  initialCategory?: string;
  onClearInitialCategory?: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  initialCategory,
  onClearInitialCategory,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedPrice, setSelectedPrice] = useState<string>('all');
  const [selectedSort, setSelectedSort] = useState<string>('popular');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const filteredProducts = useMemo(() => {
    let result = [...INITIAL_PRODUCTS];

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(term) ||
          p.brand.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term)
      );
    }

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedBrand !== 'all') {
      result = result.filter((p) => p.brand.toLowerCase() === selectedBrand.toLowerCase());
    }

    if (selectedPrice !== 'all') {
      if (selectedPrice === '0-100') {
        result = result.filter((p) => p.price < 100);
      } else if (selectedPrice === '100-300') {
        result = result.filter((p) => p.price >= 100 && p.price <= 300);
      } else if (selectedPrice === '300-500') {
        result = result.filter((p) => p.price > 300 && p.price <= 500);
      } else if (selectedPrice === '500+') {
        result = result.filter((p) => p.price > 500);
      }
    }

    if (selectedSort === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (selectedSort === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (selectedSort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (selectedSort === 'newest') {
      result.sort((a, b) => (b.badge === 'Nouveau' ? 1 : 0) - (a.badge === 'Nouveau' ? 1 : 0));
    }

    return result;
  }, [searchTerm, selectedCategory, selectedBrand, selectedPrice, selectedSort]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedBrand('all');
    setSelectedPrice('all');
    setSelectedSort('popular');
    setCurrentPage(1);
    if (onClearInitialCategory) onClearInitialCategory();
  };

  const hasActiveFilters =
    searchTerm || selectedCategory !== 'all' || selectedBrand !== 'all' || selectedPrice !== 'all';

  return (
    <div className="space-y-10 pb-20">
      <section className="relative h-64 md:h-72 bg-slate-900 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury Products Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
        />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Montserrat'] tracking-tight">
            Nos Produits
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Découvrez notre sélection exclusive de sneakers et smartphones haut de gamme certifiés
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative lg:col-span-1">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Rechercher un modèle..."
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-[#2c3e50] focus:outline-none focus:border-[#e74c3c]"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1">
                Catégorie
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-[#2c3e50] focus:outline-none focus:border-[#e74c3c]"
              >
                <option value="all">Toutes catégories</option>
                <option value="sneakers">Sneakers</option>
                <option value="smartphones">Smartphones</option>
                <option value="accessories">Accessoires</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1">
                Marque
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => {
                  setSelectedBrand(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-[#2c3e50] focus:outline-none focus:border-[#e74c3c]"
              >
                <option value="all">Toutes les marques</option>
                <option value="nike">Nike</option>
                <option value="jordan">Jordan</option>
                <option value="adidas">Adidas</option>
                <option value="apple">Apple</option>
                <option value="samsung">Samsung</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1">
                Prix
              </label>
              <select
                value={selectedPrice}
                onChange={(e) => {
                  setSelectedPrice(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-[#2c3e50] focus:outline-none focus:border-[#e74c3c]"
              >
                <option value="all">Tous les prix</option>
                <option value="0-100">Moins de 100€</option>
                <option value="100-300">100€ - 300€</option>
                <option value="300-500">300€ - 500€</option>
                <option value="500+">Plus de 500€</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1">
                Trier par
              </label>
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-[#2c3e50] focus:outline-none focus:border-[#e74c3c]"
              >
                <option value="popular">Populaire</option>
                <option value="newest">Nouveautés</option>
                <option value="price-low">Prix (croissant)</option>
                <option value="price-high">Prix (décroissant)</option>
                <option value="rating">Meilleures notes</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
            <span className="font-bold text-slate-600">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé
              {filteredProducts.length > 1 ? 's' : ''}
            </span>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1.5 text-[#e74c3c] hover:underline font-semibold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Réinitialiser les filtres</span>
              </button>
            )}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-16 text-center border border-slate-100">
            <Filter className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-[#2c3e50]">Aucun article ne correspond à votre sélection</h3>
            <p className="text-xs text-slate-500 mt-1">
              Modifiez vos critères de recherche ou réinitialisez les filtres.
            </p>
            <button
              onClick={resetFilters}
              className="mt-6 px-6 py-2.5 rounded-full bg-[#2c3e50] text-white text-xs font-bold hover:bg-[#e74c3c] transition-colors"
            >
              Voir tous les produits
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-6">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="px-3 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-9 h-9 rounded-lg text-xs font-bold transition-colors ${
                  currentPage === i + 1
                    ? 'bg-[#e74c3c] text-white'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="px-3 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

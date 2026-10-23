import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Play, Pause, Volume2, Calendar, Clock, User, Share2, Check } from 'lucide-react';
import { BLOG_POSTS } from '../data/mockData';
import { useCart } from '../context/CartContext';

interface BlogDetailPageProps {
  postId: string;
  onBack: () => void;
  onNavigateToPost: (postId: string) => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
  postId,
  onBack,
  onNavigateToPost,
}) => {
  const post = BLOG_POSTS.find((p) => p.id === postId) || BLOG_POSTS[0];
  const { showToast } = useCart();

  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState<number>(1);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const progressTimerRef = useRef<any>(null);

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
      }
    };
  }, []);

  const fullTextToRead = `${post.title}. ${post.excerpt}. ${post.content.join(' ')}`;

  const toggleAudio = () => {
    if (!('speechSynthesis' in window)) {
      showToast('Synthèse vocale non supportée sur ce navigateur.');
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(fullTextToRead);
      utterance.lang = 'fr-FR';
      utterance.rate = speed;

      utterance.onend = () => {
        setIsPlaying(false);
        setProgress(100);
        if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
        if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      };

      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
      setProgress(0);

      const estimatedDuration = (fullTextToRead.split(' ').length / (130 * speed)) * 60;
      const startTime = Date.now();

      progressTimerRef.current = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const currentProgress = Math.min(99, (elapsed / estimatedDuration) * 100);
        setProgress(currentProgress);
      }, 500);
    }
  };

  const handleSpeedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSpeed = parseFloat(e.target.value);
    setSpeed(newSpeed);
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    showToast('Lien de l’article copié dans le presse-papier !');
    setTimeout(() => setCopied(false), 2500);
  };

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="space-y-12 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#e74c3c] transition-colors py-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour aux articles du blog</span>
        </button>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="rounded-3xl overflow-hidden shadow-lg h-72 sm:h-96 w-full bg-slate-900 relative">
          <img
            src={post.bannerImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 bg-[#e74c3c] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {post.category}
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2c3e50] font-['Montserrat'] leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-100 text-xs text-slate-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <User className="w-4 h-4 text-[#e74c3c]" />
                {post.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                {post.readTime}
              </span>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 text-xs font-bold text-[#2c3e50] hover:text-[#e74c3c] transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              <span>{copied ? 'Copié !' : 'Partager'}</span>
            </button>
          </div>
        </div>

        <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 flex items-center gap-4 shadow-xs">
          <button
            onClick={toggleAudio}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all shadow-md shrink-0 cursor-pointer ${
              isPlaying ? 'bg-[#2c3e50]' : 'bg-[#e74c3c] hover:bg-[#c0392b]'
            }`}
            title={isPlaying ? 'Pause' : 'Écouter l’article audio'}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </button>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between text-xs font-bold text-[#2c3e50] mb-1.5">
              <span className="flex items-center gap-1.5 truncate">
                <Volume2 className="w-4 h-4 text-[#e74c3c] shrink-0" />
                <span>Lecteur audio de l'article</span>
              </span>
              <span className="text-[11px] text-slate-400">{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#e74c3c] transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <select
            value={speed}
            onChange={handleSpeedChange}
            className="text-xs font-semibold px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 focus:outline-none shrink-0"
          >
            <option value="0.5">0.5×</option>
            <option value="0.8">0.8×</option>
            <option value="1">1×</option>
            <option value="1.2">1.2×</option>
            <option value="1.5">1.5×</option>
          </select>
        </div>

        <p className="text-lg text-slate-700 font-medium leading-relaxed bg-rose-50/50 p-6 rounded-2xl border-l-4 border-[#e74c3c]">
          {post.excerpt}
        </p>

        <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
          {post.content.map((paragraph, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-xs space-y-2">
              <p className="font-normal text-slate-800 leading-relaxed">
                {paragraph}
              </p>
            </div>
          ))}
        </div>

        <div className="p-8 bg-[#2c3e50] text-white rounded-3xl mt-12 text-center space-y-4">
          <h3 className="text-xl font-bold font-['Montserrat']">
            Besoin de conseils personnalisés sur vos sneakers ou smartphones ?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Nos spécialistes répondent à vos questions du lundi au vendredi de 9h à 19h.
          </p>
          <button
            onClick={onBack}
            className="px-6 py-2.5 rounded-full bg-[#e74c3c] text-white text-xs font-bold hover:bg-[#c0392b] transition-colors"
          >
            Consulter d'autres articles
          </button>
        </div>

        <div className="pt-12 border-t border-slate-200">
          <h3 className="text-xl font-black text-[#2c3e50] font-['Montserrat'] mb-6">
            Articles Recommandés
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onNavigateToPost(rel.id)}
                className="group p-5 bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md cursor-pointer flex gap-4 items-center transition-all"
              >
                <img
                  src={rel.bannerImage}
                  alt={rel.title}
                  className="w-20 h-20 rounded-xl object-cover shrink-0"
                />
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#e74c3c]">
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-bold text-[#2c3e50] group-hover:text-[#e74c3c] transition-colors line-clamp-2 mt-0.5">
                    {rel.title}
                  </h4>
                  <span className="text-[11px] text-slate-400 mt-1 block">{rel.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

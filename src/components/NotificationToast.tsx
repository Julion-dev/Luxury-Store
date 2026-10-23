import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const NotificationToast: React.FC = () => {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-70 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#2c3e50] text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 border border-slate-700 text-sm font-medium">
        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
        <span>{toast}</span>
      </div>
    </div>
  );
};

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={(e) => toggleTheme(e)}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center justify-between p-1 w-16 h-8 rounded-full border border-white/10 dark:border-white/10 light:border-black/15 bg-black/40 dark:bg-black/40 light:bg-black/5 backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C8A96B] ${className}`}
      data-cursor="TOGGLE"
    >
      {/* Sliding pill */}
      <span
        className={`absolute top-1 w-6 h-6 rounded-full bg-[#C8A96B] dark:bg-[#C8A96B] light:bg-[#8A6A32] shadow-sm transform transition-transform duration-500 ease-out flex items-center justify-center ${
          theme === 'dark' ? 'translate-x-0' : 'translate-x-8'
        }`}
      >
        {theme === 'dark' ? (
          <Moon size={13} className="text-black" />
        ) : (
          <Sun size={13} className="text-white" />
        )}
      </span>

      {/* Background Icons */}
      <div className="w-full flex justify-between px-1.5 text-xs select-none pointer-events-none">
        <Moon
          size={12}
          className={`transition-opacity duration-300 ${
            theme === 'dark' ? 'opacity-0' : 'opacity-40 text-neutral-600'
          }`}
        />
        <Sun
          size={12}
          className={`transition-opacity duration-300 ${
            theme === 'dark' ? 'opacity-40 text-neutral-400' : 'opacity-0'
          }`}
        />
      </div>
    </button>
  );
};

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
      className={`relative inline-flex items-center justify-between p-1 w-14 h-7 rounded-full border border-atelier-border bg-atelier-surface/80 backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4B78FF] ${className}`}
      data-cursor="THEME"
    >
      {/* Sliding pill */}
      <span
        className={`absolute top-0.5 w-6 h-6 rounded-full bg-[#4B78FF] dark:bg-[#4B78FF] light:bg-[#2962FF] shadow-sm transform transition-transform duration-300 ease-out flex items-center justify-center ${
          theme === 'dark' ? 'translate-x-0' : 'translate-x-7'
        }`}
      >
        {theme === 'dark' ? (
          <Moon size={12} className="text-white" />
        ) : (
          <Sun size={12} className="text-white" />
        )}
      </span>

      {/* Background Icons */}
      <div className="w-full flex justify-between px-1.5 text-xs select-none pointer-events-none">
        <Moon
          size={11}
          className={`transition-opacity duration-300 ${
            theme === 'dark' ? 'opacity-0' : 'opacity-40 text-neutral-600'
          }`}
        />
        <Sun
          size={11}
          className={`transition-opacity duration-300 ${
            theme === 'dark' ? 'opacity-40 text-neutral-400' : 'opacity-0'
          }`}
        />
      </div>
    </button>
  );
};

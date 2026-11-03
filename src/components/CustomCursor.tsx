import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering an interactive or flagged element
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest('[data-cursor]') as HTMLElement | null;
      const isClickable = target?.closest('a, button, [role="button"]');

      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute('data-cursor') || null);
        setIsHovered(true);
      } else if (isClickable) {
        setCursorText(null);
        setIsHovered(true);
      } else {
        setCursorText(null);
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div
      ref={dotRef}
      className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out will-change-transform"
      style={{
        left: `${cursorPos.x}px`,
        top: `${cursorPos.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full font-mono font-bold tracking-widest text-[10px] uppercase transition-all duration-300 ${
          cursorText
            ? 'w-16 h-16 bg-[#C8A96B] text-black shadow-xl scale-100 ring-2 ring-white/20'
            : isHovered
            ? 'w-8 h-8 bg-white/20 border border-white/40 backdrop-blur-sm scale-110'
            : 'w-3 h-3 bg-[#C8A96B] shadow-md shadow-[#C8A96B]/50'
        }`}
      >
        {cursorText && (
          <span className="animate-fade-in font-extrabold text-[9px] tracking-wider">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};

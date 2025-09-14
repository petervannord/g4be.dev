// components/HoverPopup.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';

interface HoverPopupProps {
  content: React.ReactNode;
  content2?: React.ReactNode;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  className?: string;
  popupClassName?: string;
}

const HoverPopup: React.FC<HoverPopupProps> = ({
  content,
  content2,
  children,
  position = 'top',
  delay = 300,
  className = '',
  popupClassName = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsVisible(false);
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current && 
        !popupRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };

  return (
    <div
      ref={triggerRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      {isVisible && (
        <div
          ref={popupRef}
          className={`
            absolute z-50
            ${positionClasses[position]}
            bg-gray-900 text-white text-sm
            px-3 py-2 rounded-lg shadow-lg
            min-w-[120px] max-w-[280px]
            animate-in fade-in-50 zoom-in-95
            ${popupClassName}
          `}
          style={{
            animationDuration: '150ms'
          }}
        >
          {content}
          {/* Arrow */}
          <div
            className={`
              absolute w-2 h-2 bg-gray-900 rotate-45
              ${position === 'top' && 'top-full left-1/2 -translate-x-1/2 -mt-1'}
              ${position === 'bottom' && 'bottom-full left-1/2 -translate-x-1/2 -mb-1'}
              ${position === 'left' && 'left-full top-1/2 -translate-y-1/2 -ml-1'}
              ${position === 'right' && 'right-full top-1/2 -translate-y-1/2 -mr-1'}
            `}
          />
        </div>
      )}
    </div>
  );
};

export default HoverPopup;
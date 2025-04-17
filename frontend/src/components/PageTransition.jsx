import React, { useState, useEffect } from 'react';

const PageTransition = ({ children, animation = 'fadeUp' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fadeUp':
        return 'animate-fade-up';
      case 'fadeIn':
        return 'animate-fade-in';
      case 'slideInRight':
        return 'animate-slide-in-right';
      case 'slideInLeft':
        return 'animate-slide-in-left';
      case 'zoomIn':
        return 'animate-zoom-in';
      default:
        return 'animate-fade-up';
    }
  };

  return (
    <div className={`page-transition ${isVisible ? getAnimationClass() : ''}`}>
      {children}
      <style jsx>{`
        .page-transition {
          opacity: 0;
        }
        
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes zoomIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-zoom-in {
          animation: zoomIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PageTransition; 
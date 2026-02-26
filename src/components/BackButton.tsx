// components/BackButton.tsx
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './BackButton.css';

interface BackButtonProps {
  position?: 'bottom-left' | 'bottom-right';
  color?: string;
  hoverColor?: string;
  size?: 'small' | 'medium' | 'large';
  excludePaths?: string[];
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ 
  position = 'bottom-left',
  color = '#18817d',
  hoverColor = '#18817d',
  size = 'medium',
  excludePaths = ['/'],
  className = ''
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    // Mostrar el botón solo si la ruta actual no está en excludePaths
    setShowButton(!excludePaths.includes(location.pathname));
  }, [location, excludePaths]);

  const goBack = (): void => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      // Si no hay historial, navegar a una ruta por defecto
      navigate('/');
    }
  };

  const getSizeStyles = (): React.CSSProperties => {
    const sizes = {
      small: { width: '40px', height: '40px', iconSize: '20px' },
      medium: { width: '50px', height: '50px', iconSize: '24px' },
      large: { width: '60px', height: '60px', iconSize: '28px' }
    };
    
    return {
      '--button-size': sizes[size].width,
      '--icon-size': sizes[size].iconSize
    } as React.CSSProperties;
  };

  if (!showButton) return null;

  return (
    <button 
      className={`back-button ${position} ${className}`}
      onClick={goBack}
      aria-label="Volver atrás"
      style={{
        backgroundColor: color,
        ...getSizeStyles()
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = color;
      }}
    >
      <svg 
        className="back-icon" 
        viewBox="0 0 24 24"
      >
        <path 
          d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" 
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export default BackButton;
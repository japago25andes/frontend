import { useId } from 'react';
import { rich } from '../lib/utils.jsx';

// Moka: la taza programadora de Café Pixel. Lleva gafas y el símbolo </> en la taza.
export function Mascot({ mood = 'normal', size = 110 }) {
  const uid = useId().replace(/:/g, '');
  const eyes = {
    normal: (
      <>
        <ellipse cx="47" cy="62" rx="4.5" ry="6" className="m-eye" />
        <ellipse cx="73" cy="62" rx="4.5" ry="6" className="m-eye" />
      </>
    ),
    happy: (
      <>
        <path d="M41 64 Q47 56 53 64" className="m-eye-line" />
        <path d="M67 64 Q73 56 79 64" className="m-eye-line" />
      </>
    ),
    sad: (
      <>
        <ellipse cx="47" cy="64" rx="4" ry="5" className="m-eye" />
        <ellipse cx="73" cy="64" rx="4" ry="5" className="m-eye" />
        <path d="M40 54 L53 57" className="m-eye-line thin" />
        <path d="M80 54 L67 57" className="m-eye-line thin" />
      </>
    ),
    wow: (
      <>
        <circle cx="47" cy="62" r="6.5" className="m-eye" />
        <circle cx="73" cy="62" r="6.5" className="m-eye" />
        <circle cx="49" cy="60" r="2" fill="#fff" />
        <circle cx="75" cy="60" r="2" fill="#fff" />
      </>
    ),
  };
  const mouth = {
    normal: <path d="M53 76 Q60 81 67 76" className="m-mouth" />,
    happy: <path d="M51 74 Q60 86 69 74 Z" className="m-mouth filled" />,
    sad: <path d="M53 80 Q60 74 67 80" className="m-mouth" />,
    wow: <ellipse cx="60" cy="78" rx="4" ry="5" className="m-mouth filled" />,
  };

  return (
    <svg className={`mascot mood-${mood}`} width={size} height={size * 1.08} viewBox="0 0 120 130" aria-hidden="true">
      <defs>
        <linearGradient id={`mug-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ecfdf5" />
          <stop offset="100%" stopColor="#a7f3d0" />
        </linearGradient>
        <linearGradient id={`coffee-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a16207" />
          <stop offset="100%" stopColor="#713f12" />
        </linearGradient>
      </defs>
      {/* vapor */}
      <path d="M44 22 Q38 14 44 6" className="m-steam s1" />
      <path d="M60 20 Q54 11 60 2" className="m-steam s2" />
      <path d="M76 22 Q70 14 76 6" className="m-steam s3" />
      {/* asa */}
      <path d="M96 52 Q116 52 114 72 Q112 92 94 90" fill="none" stroke="#6ee7b7" strokeWidth="9" strokeLinecap="round" />
      {/* taza */}
      <path d="M18 34 H102 V96 Q102 120 78 120 H42 Q18 120 18 96 Z" fill={`url(#mug-${uid})`} stroke="#34d399" strokeWidth="2" />
      <ellipse cx="60" cy="34" rx="42" ry="9" fill={`url(#coffee-${uid})`} stroke="#34d399" strokeWidth="2" />
      <ellipse cx="52" cy="32" rx="12" ry="2.5" fill="#fde68a" opacity="0.35" />
      {/* gafas */}
      <circle cx="47" cy="62" r="11" className="m-glass" />
      <circle cx="73" cy="62" r="11" className="m-glass" />
      <path d="M58 61 Q60 58 62 61" className="m-glass-bridge" />
      {eyes[mood] || eyes.normal}
      {mouth[mood] || mouth.normal}
      <circle cx="33" cy="76" r="4" fill="#f472b6" opacity="0.5" />
      <circle cx="87" cy="76" r="4" fill="#f472b6" opacity="0.5" />
      {/* logo */}
      <text x="60" y="108" textAnchor="middle" className="m-logo">&lt;/&gt;</text>
    </svg>
  );
}

export function Speech({ mood, children, size = 96, title }) {
  return (
    <div className="speech">
      <Mascot mood={mood} size={size} />
      <div className="bubble">
        {title && <div className="bubble-name">{title}</div>}
        {typeof children === 'string' ? rich(children) : children}
      </div>
    </div>
  );
}

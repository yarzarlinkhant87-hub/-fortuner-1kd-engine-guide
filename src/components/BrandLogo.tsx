import React from 'react';

interface BrandLogoProps {
  brand?: string;
  engine?: any;
  className?: string;
  size?: number;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ brand = '', engine, className = '', size = 20 }) => {
  let key = (brand || '').toUpperCase().trim();

  // If engine is provided, intelligently detect actual manufacturer brand from engine data
  if (engine) {
    const text = `${engine.code || ''} ${engine.name || ''} ${engine.seriesTitle || ''} ${engine.id || ''} ${engine.brand || ''}`.toUpperCase();

    if (text.includes('MERCEDES') || text.includes('OM651') || text.includes('OM642') || text.includes('OM471') || text.includes('OM662') || text.includes('SPRINTER') || text.includes('BENZ')) {
      key = 'MERCEDES';
    } else if (text.includes('MAN ') || text.includes('MAN_') || text.includes('D038') || text.includes('D2676') || text.includes('D3876') || text.includes('TGE') || text.includes('TGX')) {
      key = 'MAN';
    } else if (text.includes('SCANIA') || text.includes('DC13') || text.includes('DC16') || text.includes('DC09')) {
      key = 'SCANIA';
    } else if (text.includes('VOLVO') || text.includes('D13') || text.includes('D16') || text.includes('D17') || text.includes('D4204T')) {
      key = 'VOLVO';
    } else if (text.includes('CUMMINS') || text.includes('ISF') || text.includes('ISX') || text.includes('R2.8') || text.includes('6BT') || text.includes('ISB') || text.includes('X15')) {
      key = 'CUMMINS';
    } else if (text.includes('CAT') || text.includes('CATERPILLAR') || text.includes('C15') || text.includes('C13') || text.includes('3406')) {
      key = 'CAT';
    } else if (text.includes('DETROIT') || text.includes('DD15') || text.includes('DD13') || text.includes('DD16') || text.includes('SERIES 60')) {
      key = 'DETROIT';
    } else if (text.includes('DURAMAX') || text.includes('CHEVROLET') || text.includes('SILVERADO') || text.includes('L5P') || text.includes('LBZ')) {
      key = 'DURAMAX';
    } else if (text.includes('POWER STROKE') || text.includes('POWERSTROKE') || text.includes('FORD') || text.includes('RANGER') || text.includes('RAPTOR') || text.includes('PANTHER')) {
      key = 'FORD';
    } else if (text.includes('BMW') || text.includes('B57') || text.includes('N57') || text.includes('N47')) {
      key = 'BMW';
    } else if (text.includes('AUDI') || text.includes('VOLKSWAGEN') || text.includes('VW') || text.includes('TDI')) {
      key = 'VOLKSWAGEN';
    } else if (text.includes('HYUNDAI') || text.includes('STAREX') || text.includes('PORTER') || text.includes('SANTA FE') || text.includes('MIGHTY') || text.includes('D4CB') || text.includes('D4BH') || text.includes('D4DD') || text.includes('D4FB') || text.includes('D6AC')) {
      key = 'HYUNDAI';
    } else if (text.includes('KIA') || text.includes('BONGO') || text.includes('J3') || text.includes('CARNIVAL') || text.includes('SORENTO') || text.includes('K2900')) {
      key = 'KIA';
    } else if (text.includes('HOWO') || text.includes('SINOTRUK') || text.includes('WD615') || text.includes('D10')) {
      key = 'HOWO';
    } else if (text.includes('WEICHAI') || text.includes('WP10') || text.includes('WP12')) {
      key = 'WEICHAI';
    } else if (text.includes('YUCHAI') || text.includes('YC4') || text.includes('YC6')) {
      key = 'YUCHAI';
    } else if (text.includes('GREAT WALL') || text.includes('WINGLE') || text.includes('GW4D') || text.includes('HAVAL')) {
      key = 'GREATWALL';
    } else if (text.includes('JMC') || text.includes('JX493') || text.includes('BAODIAN') || text.includes('VIGUS')) {
      key = 'JMC';
    } else if (text.includes('TOYOTA') || text.includes('1KD') || text.includes('2KD') || text.includes('1GD') || text.includes('2GD') || text.includes('1KZ') || text.includes('1HZ') || text.includes('1HD') || text.includes('1VD') || text.includes('5L') || text.includes('2L') || text.includes('3L') || text.includes('F33A')) {
      key = 'TOYOTA';
    } else if (text.includes('MITSUBISHI') || text.includes('4D56') || text.includes('4N15') || text.includes('4M40') || text.includes('4M41') || text.includes('4D33') || text.includes('4D34') || text.includes('6D16') || text.includes('8DC') || text.includes('10DC') || text.includes('FUSO') || text.includes('CANTER') || text.includes('TRITON') || text.includes('PAJERO')) {
      key = 'MITSUBISHI';
    } else if (text.includes('ISUZU') || text.includes('4JJ1') || text.includes('4JK1') || text.includes('4JB1') || text.includes('4HK1') || text.includes('4HF1') || text.includes('4HG1') || text.includes('RZ4E') || text.includes('10PE1') || text.includes('8PE1') || text.includes('6WF1') || text.includes('6WG1') || text.includes('D-MAX') || text.includes('BIGHORN') || text.includes('ELF') || text.includes('GIGA')) {
      key = 'ISUZU';
    } else if (text.includes('NISSAN') || text.includes('ZD30') || text.includes('YD25') || text.includes('TD27') || text.includes('QD32') || text.includes('RD28') || text.includes('TB48') || text.includes('FD46') || text.includes('FE6') || text.includes('GE13') || text.includes('NAVARA') || text.includes('PATROL')) {
      key = 'NISSAN';
    } else if (text.includes('HINO') || text.includes('N04C') || text.includes('J08') || text.includes('J05') || text.includes('E13C') || text.includes('P11C') || text.includes('DUTRO') || text.includes('PROFIA')) {
      key = 'HINO';
    }
  }

  // Handle region & country alias names if passed directly as brand prop
  if (key.includes('GERMANY')) key = 'MERCEDES';
  if (key.includes('SWEDEN')) key = 'SCANIA';
  if (key.includes('UK')) key = 'FORD';
  if (key.includes('AMERICA')) key = 'CUMMINS';
  if (key.includes('KOREA')) key = 'HYUNDAI';
  if (key.includes('CHINA')) key = 'CUMMINS';

  // 1. TOYOTA - "ကျွဲခေါင်းအဝိုင်း" (Toyota Triple Ovals)
  if (key.includes('TOYOTA')) {
    return (
      <svg
        width={size}
        height={size * 0.72}
        viewBox="0 0 100 70"
        fill="currentColor"
        className={`inline-block ${className}`}
        aria-label="Toyota Logo"
      >
        {/* Outer ellipse */}
        <ellipse cx="50" cy="35" rx="46" ry="31" fill="none" stroke="currentColor" strokeWidth="7" />
        {/* Top inner perpendicular ellipse (T-bar) */}
        <ellipse cx="50" cy="22" rx="27" ry="11" fill="none" stroke="currentColor" strokeWidth="6.5" />
        {/* Vertical center inner ellipse (T-stem) */}
        <ellipse cx="50" cy="35" rx="14" ry="29" fill="none" stroke="currentColor" strokeWidth="6.5" />
      </svg>
    );
  }

  // 2. MERCEDES-BENZ - Three-pointed Star in circle
  if (key.includes('MERCEDES') || key.includes('BENZ')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="currentColor"
        className={`inline-block ${className}`}
        aria-label="Mercedes-Benz Logo"
      >
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" />
        {/* Center 3-point star */}
        <polygon points="50,10 54,47 50,50 46,47" fill="currentColor" />
        <polygon points="15,70 48,53 50,50 46,47" fill="currentColor" />
        <polygon points="85,70 52,53 50,50 54,47" fill="currentColor" />
        <circle cx="50" cy="50" r="5" fill="currentColor" />
      </svg>
    );
  }

  // 3. MITSUBISHI - Three Red Diamonds (မစ်ဆူဘီရှီ စိန် ၃ ပွင့်)
  if (key.includes('MITSUBISHI') || key.includes('FUSO')) {
    return (
      <svg
        width={size}
        height={size * 0.9}
        viewBox="0 0 100 90"
        className={`inline-block ${className}`}
        aria-label="Mitsubishi Logo"
      >
        <polygon points="50,5 65,31 50,57 35,31" fill="#ef4444" />
        <polygon points="20,57 50,57 35,83 5,83" fill="#ef4444" />
        <polygon points="50,57 80,57 95,83 65,83" fill="#ef4444" />
      </svg>
    );
  }

  // 4. ISUZU - Red Bold Twin Pillars / ISUZU typography (ONLY when truly Isuzu!)
  if (key.includes('ISUZU')) {
    return (
      <svg
        width={size * 1.5}
        height={size * 0.55}
        viewBox="0 0 120 40"
        className={`inline-block ${className}`}
        aria-label="Isuzu Logo"
      >
        <rect width="120" height="40" rx="6" fill="#ef4444" />
        <text
          x="60"
          y="27"
          fill="#ffffff"
          fontSize="22"
          fontWeight="900"
          fontFamily="Impact, Arial Black, sans-serif"
          textAnchor="middle"
          letterSpacing="2"
        >
          ISUZU
        </text>
      </svg>
    );
  }

  // 5. NISSAN - Circle with horizontal brand bar
  if (key.includes('NISSAN') || key.includes('UD')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={`inline-block ${className}`}
        aria-label="Nissan Logo"
      >
        <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="8" />
        <rect x="5" y="37" width="90" height="26" rx="4" fill="#0f172a" stroke="currentColor" strokeWidth="6" />
        <text
          x="50"
          y="56"
          fill="currentColor"
          fontSize="16"
          fontWeight="900"
          fontFamily="Arial, sans-serif"
          textAnchor="middle"
          letterSpacing="2"
        >
          NISSAN
        </text>
      </svg>
    );
  }

  // 6. FORD - Blue Oval
  if (key.includes('FORD')) {
    return (
      <svg
        width={size * 1.5}
        height={size * 0.75}
        viewBox="0 0 120 60"
        className={`inline-block ${className}`}
        aria-label="Ford Logo"
      >
        <ellipse cx="60" cy="30" rx="56" ry="26" fill="#1d4ed8" stroke="#ffffff" strokeWidth="4" />
        <ellipse cx="60" cy="30" rx="51" ry="22" fill="none" stroke="#60a5fa" strokeWidth="1.5" />
        <text
          x="60"
          y="38"
          fill="#ffffff"
          fontSize="24"
          fontWeight="bold"
          fontStyle="italic"
          fontFamily="Georgia, serif"
          textAnchor="middle"
        >
          Ford
        </text>
      </svg>
    );
  }

  // 7. CUMMINS - Big Block Red 'C'
  if (key.includes('CUMMINS')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={`inline-block ${className}`}
        aria-label="Cummins Logo"
      >
        <rect width="100" height="100" rx="14" fill="#dc2626" />
        <text
          x="50"
          y="74"
          fill="#ffffff"
          fontSize="72"
          fontWeight="900"
          fontFamily="Arial Black, Impact, sans-serif"
          textAnchor="middle"
        >
          C
        </text>
      </svg>
    );
  }

  // 8. CATERPILLAR - CAT with yellow triangle
  if (key.includes('CAT') || key.includes('CATERPILLAR')) {
    return (
      <svg
        width={size * 1.4}
        height={size * 0.8}
        viewBox="0 0 100 60"
        className={`inline-block ${className}`}
        aria-label="Caterpillar Logo"
      >
        <rect width="100" height="60" rx="8" fill="#0f172a" stroke="#eab308" strokeWidth="3" />
        <polygon points="32,48 50,18 68,48" fill="#eab308" />
        <text
          x="50"
          y="42"
          fill="#ffffff"
          fontSize="24"
          fontWeight="900"
          fontFamily="Arial Black, sans-serif"
          textAnchor="middle"
          letterSpacing="2"
        >
          CAT
        </text>
      </svg>
    );
  }

  // 9. SCANIA - Griffin Crown Emblem
  if (key.includes('SCANIA')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={`inline-block ${className}`}
        aria-label="Scania Logo"
      >
        <circle cx="50" cy="50" r="46" fill="#1e3a8a" stroke="#d97706" strokeWidth="5" />
        <path d="M30,35 L40,45 L50,30 L60,45 L70,35 L68,55 L32,55 Z" fill="#fbbf24" />
        <text
          x="50"
          y="78"
          fill="#ffffff"
          fontSize="13"
          fontWeight="900"
          fontFamily="Arial, sans-serif"
          textAnchor="middle"
          letterSpacing="1"
        >
          SCANIA
        </text>
      </svg>
    );
  }

  // 10. VOLVO - Iron Mark (Circle with top-right arrow & bar)
  if (key.includes('VOLVO')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={`inline-block ${className}`}
        aria-label="Volvo Logo"
      >
        <circle cx="48" cy="52" r="38" fill="none" stroke="currentColor" strokeWidth="8" />
        <polygon points="76,14 94,14 94,32 86,24 68,42 62,36 80,18" fill="currentColor" />
        <rect x="18" y="44" width="60" height="16" fill="#1e3a8a" stroke="currentColor" strokeWidth="3" />
        <text
          x="48"
          y="56"
          fill="#ffffff"
          fontSize="11"
          fontWeight="900"
          fontFamily="Arial, sans-serif"
          textAnchor="middle"
          letterSpacing="1"
        >
          VOLVO
        </text>
      </svg>
    );
  }

  // 11. MAN TRUCKS
  if (key.includes('MAN')) {
    return (
      <svg
        width={size * 1.3}
        height={size * 0.65}
        viewBox="0 0 100 50"
        className={`inline-block ${className}`}
        aria-label="MAN Logo"
      >
        <rect width="100" height="50" rx="8" fill="#334155" stroke="#94a3b8" strokeWidth="2" />
        <text
          x="50"
          y="35"
          fill="#ffffff"
          fontSize="22"
          fontWeight="900"
          fontFamily="Arial Black, sans-serif"
          textAnchor="middle"
          letterSpacing="3"
        >
          MAN
        </text>
      </svg>
    );
  }

  // 12. HINO - Winged Circle Emblem
  if (key.includes('HINO')) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={`inline-block ${className}`}
        aria-label="Hino Logo"
      >
        <circle cx="50" cy="50" r="44" fill="#ef4444" />
        <path d="M20,50 Q50,22 80,50 Q50,38 20,50 Z" fill="#ffffff" />
        <circle cx="50" cy="50" r="14" fill="#ef4444" stroke="#ffffff" strokeWidth="5" />
      </svg>
    );
  }

  // 13. HYUNDAI - Slanted Oval 'H'
  if (key.includes('HYUNDAI')) {
    return (
      <svg
        width={size * 1.3}
        height={size * 0.9}
        viewBox="0 0 100 70"
        className={`inline-block ${className}`}
        aria-label="Hyundai Logo"
      >
        <ellipse cx="50" cy="35" rx="46" ry="30" fill="none" stroke="currentColor" strokeWidth="7" />
        <path
          d="M32,20 L38,50 M62,20 L68,50 M35,35 C45,30 55,40 65,35"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    );
  }

  // 14. KIA - Red Oval Badge
  if (key.includes('KIA')) {
    return (
      <svg
        width={size * 1.4}
        height={size * 0.7}
        viewBox="0 0 100 50"
        className={`inline-block ${className}`}
        aria-label="Kia Logo"
      >
        <rect width="100" height="50" rx="8" fill="#dc2626" />
        <text
          x="50"
          y="35"
          fill="#ffffff"
          fontSize="24"
          fontWeight="900"
          fontFamily="Arial Black, sans-serif"
          textAnchor="middle"
          letterSpacing="3"
        >
          KIA
        </text>
      </svg>
    );
  }

  // 15. DETROIT DIESEL
  if (key.includes('DETROIT')) {
    return (
      <svg
        width={size * 1.4}
        height={size * 0.8}
        viewBox="0 0 120 70"
        className={`inline-block ${className}`}
        aria-label="Detroit Diesel Logo"
      >
        <rect width="120" height="70" rx="10" fill="#0f172a" stroke="#ef4444" strokeWidth="3" />
        <text
          x="60"
          y="44"
          fill="#ef4444"
          fontSize="28"
          fontWeight="900"
          fontFamily="Arial Black, sans-serif"
          textAnchor="middle"
          letterSpacing="3"
        >
          DD
        </text>
      </svg>
    );
  }

  // 16. DURAMAX / CHEVROLET
  if (key.includes('DURAMAX') || key.includes('CHEVROLET')) {
    return (
      <svg
        width={size * 1.5}
        height={size * 0.6}
        viewBox="0 0 120 50"
        className={`inline-block ${className}`}
        aria-label="Duramax Logo"
      >
        <polygon points="40,10 80,10 80,20 110,20 110,30 80,30 80,40 40,40 40,30 10,30 10,20 40,20" fill="#eab308" stroke="#ffffff" strokeWidth="2" />
      </svg>
    );
  }

  // 17. SINOTRUK HOWO
  if (key.includes('HOWO') || key.includes('SINOTRUK')) {
    return (
      <svg
        width={size * 1.3}
        height={size * 0.7}
        viewBox="0 0 100 50"
        className={`inline-block ${className}`}
        aria-label="Howo Logo"
      >
        <rect width="100" height="50" rx="6" fill="#dc2626" />
        <text
          x="50"
          y="34"
          fill="#ffffff"
          fontSize="18"
          fontWeight="900"
          fontFamily="Impact, sans-serif"
          textAnchor="middle"
          letterSpacing="2"
        >
          HOWO
        </text>
      </svg>
    );
  }

  // Default: Generic Engine Icon
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block ${className}`}
    >
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
};

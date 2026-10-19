import React from 'react';

interface BrandWordmarkProps {
  variant?: 'panel' | 'horizontal' | 'stacked' | 'seal';
  className?: string;
  brokerWidth?: number;
}

export const BrandWordmark: React.FC<BrandWordmarkProps> = ({
  variant = 'panel',
  className = '',
  brokerWidth = 56
}) => {
  const brokerImg = '/src/assets/images/abode_mode_broker_1792084803928.jpg';

  if (variant === 'seal') {
    return (
      <div className={`relative inline-flex items-center justify-center rounded-full bg-white border-2 border-[#0A4251] p-1.5 shadow-sm ${className}`} style={{ width: 72, height: 72 }}>
        <img
          src={brokerImg}
          alt="Abode Mode Official Seal"
          className="w-full h-full object-cover rounded-full"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 rounded-full border border-[#F2C864]/50 pointer-events-none" />
      </div>
    );
  }

  // The Wordmark Panel conforming to page 1, 6, 9, 12 of brand guidelines
  const WordmarkBox = () => (
    <div className="relative border border-[#F2C864] bg-[#0A4251] px-5 py-3 text-center min-w-[210px] select-none shadow-sm">
      {/* Micro Top Line */}
      <div className="text-[9px] tracking-[0.28em] text-[#88BBD8] font-medium uppercase leading-tight mb-1">
        ABODE · A · LA · MODE
      </div>
      {/* Primary Brand Name */}
      <div className="text-xl md:text-2xl font-serif tracking-[0.24em] text-[#F2C864] font-semibold uppercase leading-snug">
        ABODE — MODE
      </div>
      {/* Tagline */}
      <div className="text-[8.5px] md:text-[9.5px] tracking-[0.26em] text-[#88BBD8] font-medium uppercase mt-1">
        FASHIONABLY EASY HOME SALES
      </div>
    </div>
  );

  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-4 bg-[#0A4251] p-2.5 rounded-sm border border-[#F2C864]/30 ${className}`}>
        <div 
          className="relative overflow-hidden rounded-sm border border-[#F2C864]/40 bg-[#00171C] shrink-0"
          style={{ width: brokerWidth, height: brokerWidth }}
        >
          <img
            src={brokerImg}
            alt="The Broker - Abode Mode"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <WordmarkBox />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center gap-3 bg-[#0A4251] p-4 rounded-sm border border-[#F2C864]/30 ${className}`}>
        <div 
          className="relative overflow-hidden rounded-sm border border-[#F2C864]/40 bg-[#00171C] shrink-0"
          style={{ width: brokerWidth * 1.4, height: brokerWidth * 1.4 }}
        >
          <img
            src={brokerImg}
            alt="The Broker - Abode Mode"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <WordmarkBox />
      </div>
    );
  }

  // Default clean panel
  return (
    <div className={`inline-block ${className}`}>
      <WordmarkBox />
    </div>
  );
};

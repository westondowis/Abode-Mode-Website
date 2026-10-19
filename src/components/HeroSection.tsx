import React from 'react';
import { ENTITY_DETAILS } from '../data/policyData';
import { BrandWordmark } from './BrandWordmark';
import { Shield, PhoneCall, Mail, CheckCircle2, FileCheck, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenAudit: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAudit }) => {
  return (
    <section className="relative bg-[#00171C] text-white pt-10 pb-16 md:pt-14 md:pb-20 border-b border-[#0A4251] overflow-hidden">
      {/* Subtle Background Architectural Ambient */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-luminosity">
        <img 
          src="/src/assets/images/abode_mode_architecture_1792084704775.jpg" 
          alt="" 
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00171C] via-[#00171C]/80 to-[#00171C]/90" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Institutional Kicker & CTIA Status Row (Zero-Pill Discipline) */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-mono tracking-wider text-[#88BBD8] mb-6">
          <span className="text-[#F2C864] font-bold">A2P 10DLC REGULATORY COMPLIANCE SPECIFICATION</span>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span>CTIA SHORT CODE & 10DLC MESSAGING STANDARD</span>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span>EFFECTIVE DATE: {ENTITY_DETAILS.effectiveDate.toUpperCase()}</span>
        </div>

        {/* Hero Grid: Brand Lockup & Executive Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Official Heading & Purpose */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-white text-balance leading-tight">
              Privacy Policy &amp; Consumer SMS Regulatory Disclosure
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
              Official legal notice and telecommunications disclosure statement governing consumer data protection, property acquisition correspondence, and non-negotiable mobile originator privacy standards for <strong className="font-semibold text-white">ABODE-MODE LLC</strong> (d/b/a <strong className="font-semibold text-[#F2C864]">Abode Mode</strong>).
            </p>

            {/* Entity Verification Metadata Strip (Clean Unboxed Prose) */}
            <div className="pt-2 border-t border-[#0A4251] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <span className="text-[#88BBD8] uppercase tracking-wider block font-mono text-[11px]">Commercial Entity</span>
                <span className="text-white font-semibold text-sm">{ENTITY_DETAILS.legalName}</span>
                <span className="text-slate-400 block">D/B/A: {ENTITY_DETAILS.dbaName}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[#88BBD8] uppercase tracking-wider block font-mono text-[11px]">Core Acquisition Footprint</span>
                <span className="text-white font-medium text-sm">Colorado &amp; Texas Desks</span>
                <span className="text-slate-400 block">Selective Nationwide Real Estate</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#mobile-sms-privacy"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#F2C864] hover:bg-[#fad379] text-[#00171C] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
              >
                <span>Jump to Section 2: Mobile SMS Clause</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenAudit}
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#0A4251] hover:bg-[#0d5366] text-[#88BBD8] hover:text-white border border-[#F2C864]/30 font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
              >
                <FileCheck className="w-4 h-4 text-[#F2C864]" />
                <span>Carrier Audit Verification</span>
              </button>
            </div>
          </div>

          {/* Right Column: Official Brand Guidelines Lockup Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#0A4251] p-6 rounded border border-[#F2C864]/40 shadow-xl space-y-5">
              
              {/* Stacked Official Brand Mark as mandated in Brand Guidelines (Page 9, 12) */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded overflow-hidden border-2 border-[#F2C864] bg-[#00171C] mb-4 shadow-md">
                  <img
                    src="/src/assets/images/abode_mode_broker_1792084803928.jpg"
                    alt="The Broker - Abode Mode Brand Mark"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="w-full border border-[#F2C864] bg-[#0A4251] py-2 px-3">
                  <div className="text-[9px] tracking-[0.25em] text-[#88BBD8] font-semibold uppercase">
                    ABODE · A · LA · MODE
                  </div>
                  <div className="text-xl font-serif tracking-[0.2em] text-[#F2C864] font-bold uppercase my-0.5">
                    ABODE — MODE
                  </div>
                  <div className="text-[9px] tracking-[0.22em] text-[#88BBD8] font-medium uppercase">
                    FASHIONABLY EASY HOME SALES
                  </div>
                </div>
              </div>

              {/* Direct Acquisition Coordinates */}
              <div className="space-y-2 pt-2 border-t border-[#F2C864]/20 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-2">
                    <PhoneCall className="w-3.5 h-3.5 text-[#F2C864]" />
                    <span>Colorado Direct Desk:</span>
                  </span>
                  <a href={`tel:${ENTITY_DETAILS.primaryPhone.replace(/\D/g, '')}`} className="font-mono text-white hover:text-[#F2C864] font-medium">
                    {ENTITY_DETAILS.primaryPhone}
                  </a>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-2">
                    <PhoneCall className="w-3.5 h-3.5 text-[#F2C864]" />
                    <span>Texas Direct Desk:</span>
                  </span>
                  <a href={`tel:${ENTITY_DETAILS.secondaryPhone.replace(/\D/g, '')}`} className="font-mono text-white hover:text-[#F2C864] font-medium">
                    {ENTITY_DETAILS.secondaryPhone}
                  </a>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#F2C864]" />
                    <span>Acquisition Inquiries:</span>
                  </span>
                  <a href={`mailto:${ENTITY_DETAILS.contactEmail}`} className="font-mono text-[#88BBD8] hover:text-white truncate max-w-[190px]">
                    {ENTITY_DETAILS.contactEmail}
                  </a>
                </div>
              </div>

              {/* Strict Notice */}
              <div className="bg-[#00171C]/60 p-3 rounded border border-white/10 text-[11px] text-slate-300 leading-snug">
                <span className="text-[#F2C864] font-semibold block mb-0.5">Direct Residential Acquisitions</span>
                Direct cash purchases of residential homes and vacant land across the United States. No automated marketing blasts.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

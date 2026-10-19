import React from 'react';
import { ENTITY_DETAILS } from '../data/policyData';
import { BrandWordmark } from './BrandWordmark';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenAudit: () => void;
  onPrint: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAudit, onPrint }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#00171C] text-white border-t border-[#0A4251] pt-14 pb-12 print-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Tier: Brand Lockup & Direct Office Coordinates */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Wordmark & Scope */}
          <div className="md:col-span-5 space-y-4">
            <BrandWordmark variant="horizontal" brokerWidth={48} />
            <p className="text-xs text-slate-300 leading-relaxed font-light max-w-sm pt-2">
              Direct residential home and vacant land acquisitions nationwide, with primary operational corridors across Colorado and Texas. Direct cash transactions, clear titles, and disciplined closing timelines.
            </p>
            <div className="text-[11px] font-mono text-[#88BBD8]">
              <span>Official Channels: @abodemodeinvest</span>
              <span className="mx-2">·</span>
              <span>#AbodeMode</span>
            </div>
          </div>

          {/* Column 2: Direct Regional Acquisition Desks */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#F2C864]">
              Direct Acquisition Desks
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#F2C864] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Colorado Primary Desk:</span>
                  <a href={`tel:${ENTITY_DETAILS.primaryPhone.replace(/\D/g, '')}`} className="font-mono text-white hover:text-[#F2C864] font-semibold">
                    {ENTITY_DETAILS.primaryPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#F2C864] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Texas Regional Desk:</span>
                  <a href={`tel:${ENTITY_DETAILS.secondaryPhone.replace(/\D/g, '')}`} className="font-mono text-white hover:text-[#F2C864] font-semibold">
                    {ENTITY_DETAILS.secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#F2C864] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Acquisition Director:</span>
                  <a href={`mailto:${ENTITY_DETAILS.contactEmail}`} className="font-mono text-[#88BBD8] hover:text-white">
                    {ENTITY_DETAILS.contactEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Compliance & Utility Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#F2C864]">
              Regulatory Resources
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button
                  onClick={onOpenAudit}
                  className="hover:text-[#F2C864] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#88BBD8]" />
                  <span>A2P 10DLC Vetting Sheet</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onPrint}
                  className="hover:text-[#F2C864] transition-colors cursor-pointer"
                >
                  Print / Save PDF Policy
                </button>
              </li>
              <li>
                <a href="#mobile-sms-privacy" className="hover:text-[#F2C864] transition-colors">
                  Mobile &amp; SMS Privacy Clause
                </a>
              </li>
              <li>
                <a href="#consumer-rights-opt-out" className="hover:text-[#F2C864] transition-colors">
                  CTIA STOP / HELP Protocol
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Mandatory Brand Guidelines Legal Attribution (Page 16 of Brand Guide) */}
        <div className="pt-8 border-t border-[#0A4251] space-y-4 text-xs text-slate-400">
          <div className="bg-[#0A4251]/40 p-4 rounded border border-[#0A4251] text-[11px] leading-relaxed text-slate-300">
            <p>
              <strong className="text-white">Legal Notice &amp; Trademark Attribution: </strong>
              Abode Mode and the Broker are marks of <strong className="text-white">ABODE-MODE LLC</strong>. All rights reserved. Direct residential and vacant land acquisitions conducted pursuant to applicable state commercial and real estate regulations. In prose, references use Abode Mode. The hyphen lives in the legal name and in the wordmark, not in a sentence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
            <div>
              &copy; {new Date().getFullYear()} ABODE-MODE LLC. Effective Date: {ENTITY_DETAILS.effectiveDate}.
            </div>
            
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Return to top of policy"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

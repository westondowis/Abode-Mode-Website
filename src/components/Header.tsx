import React from 'react';
import { ShieldCheck, Printer, Menu, X, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  onOpenAudit: () => void;
  onPrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAudit, onPrint }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#00171C]/95 backdrop-blur-md border-b border-[#0A4251] no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (Single text element wordmark in brand styling) */}
          <a 
            href="#top" 
            className="flex items-center gap-3 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C864] shrink-0"
            title="Abode Mode - Direct Residential & Land Acquisitions"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#F2C864]/60 bg-[#0A4251] shrink-0 shadow-sm">
              <img 
                src="/src/assets/images/abode_mode_broker_1792084803928.jpg" 
                alt="Abode Mode" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-serif font-bold tracking-wider text-white whitespace-nowrap">
                Abode Mode
              </span>
              <span className="text-[10px] tracking-widest text-[#88BBD8] uppercase font-mono">
                ABODE-MODE LLC
              </span>
            </div>
          </a>

          {/* Zone 2: 4–5 concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-semibold text-slate-300">
            <a 
              href="#scope-information-collected" 
              className="hover:text-[#F2C864] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              1. Scope & Data
            </a>
            <a 
              href="#mobile-sms-privacy" 
              className="text-[#F2C864] hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2C864]" />
              2. SMS Privacy
            </a>
            <a 
              href="#purpose-of-use" 
              className="hover:text-[#F2C864] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              3. Purpose of Use
            </a>
            <a 
              href="#consumer-rights-opt-out" 
              className="hover:text-[#F2C864] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              4. STOP / HELP
            </a>
            <a 
              href="#direct-contact" 
              className="hover:text-[#F2C864] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              5. Acquisitions Desk
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onPrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-[#0A4251]/60 hover:bg-[#0A4251] rounded border border-[#0A4251] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              title="Print formatted carrier-ready compliance policy"
            >
              <Printer className="w-3.5 h-3.5 text-[#88BBD8]" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onOpenAudit}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-wide uppercase text-[#00171C] bg-[#F2C864] hover:bg-[#fbd67d] rounded transition-colors whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
              title="Review A2P 10DLC Carrier Vetting Checklist"
            >
              <ShieldCheck className="w-4 h-4 text-[#00171C]" />
              <span>A2P 10DLC Audit</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenAudit}
              type="button"
              className="p-2 text-xs font-bold text-[#00171C] bg-[#F2C864] rounded cursor-pointer"
              title="A2P 10DLC Audit"
            >
              <ShieldCheck className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-slate-300 hover:text-white cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-[#0A4251] py-4 space-y-3">
            <a 
              href="#scope-information-collected" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-200 hover:text-[#F2C864] hover:bg-[#0A4251]/40 rounded"
            >
              1. Scope & Data Collected
            </a>
            <a 
              href="#mobile-sms-privacy" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-[#F2C864] font-semibold hover:bg-[#0A4251]/40 rounded"
            >
              2. Mobile Information & SMS Privacy
            </a>
            <a 
              href="#purpose-of-use" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-200 hover:text-[#F2C864] hover:bg-[#0A4251]/40 rounded"
            >
              3. Purpose of Use & Boundaries
            </a>
            <a 
              href="#consumer-rights-opt-out" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-200 hover:text-[#F2C864] hover:bg-[#0A4251]/40 rounded"
            >
              4. Consumer Rights, STOP & HELP
            </a>
            <a 
              href="#data-security-storage" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-200 hover:text-[#F2C864] hover:bg-[#0A4251]/40 rounded"
            >
              5. Data Security & Storage
            </a>
            <a 
              href="#direct-contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-200 hover:text-[#F2C864] hover:bg-[#0A4251]/40 rounded"
            >
              6. Direct Acquisitions Contact Desk
            </a>
            <div className="pt-2 flex items-center gap-2 px-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onPrint();
                }}
                type="button"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-slate-200 bg-[#0A4251] rounded"
              >
                <Printer className="w-3.5 h-3.5 text-[#88BBD8]" />
                Print / Save PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

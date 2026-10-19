import React from 'react';
import { Search, ChevronRight, CheckCircle2, Bookmark, ExternalLink } from 'lucide-react';
import { POLICY_SECTIONS } from '../data/policyData';

interface PolicyNavigationProps {
  activeSection: string;
  onSelectSection: (id: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const PolicyNavigation: React.FC<PolicyNavigationProps> = ({
  activeSection,
  onSelectSection,
  searchQuery,
  onSearchChange
}) => {
  return (
    <aside className="no-print space-y-6">
      
      {/* Search Input Box */}
      <div className="bg-white p-4 rounded-lg border border-[#d5dde0] shadow-2xs">
        <label htmlFor="policy-search" className="block text-xs font-bold uppercase tracking-wider text-[#0A4251] mb-2 font-mono">
          Search Regulatory Clauses
        </label>
        <div className="relative">
          <input
            id="policy-search"
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="e.g. STOP, third parties, data rates..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-[#f8fafb] border border-[#d5dde0] rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A4251] text-slate-800 placeholder-slate-400"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5 pointer-events-none" />
        </div>
        {searchQuery && (
          <div className="mt-2 text-[11px] text-slate-500 flex items-center justify-between">
            <span>Filtering policy content...</span>
            <button 
              onClick={() => onSearchChange('')}
              className="text-[#0A4251] hover:underline font-semibold cursor-pointer"
            >
              Clear
            </button>
          </div>
        )}
      </div>

      {/* Table of Contents */}
      <div className="bg-white rounded-lg border border-[#d5dde0] shadow-2xs overflow-hidden">
        <div className="p-4 bg-[#f3f5f6] border-b border-[#d5dde0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-[#0A4251]" />
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
              Table of Contents
            </h3>
          </div>
          <span className="text-[11px] font-mono text-slate-500">
            8 Sections
          </span>
        </div>

        <nav className="p-2 divide-y divide-slate-100">
          {POLICY_SECTIONS.map((section) => {
            const isActive = activeSection === section.id;
            const isStrict = section.id === 'mobile-sms-privacy';

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectSection(section.id);
                }}
                className={`flex items-start gap-2.5 p-2.5 rounded transition-all group ${
                  isActive
                    ? 'bg-[#0A4251] text-white font-semibold'
                    : isStrict
                    ? 'hover:bg-amber-50 text-slate-800'
                    : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <span className={`text-[11px] font-mono shrink-0 mt-0.5 ${
                  isActive ? 'text-[#F2C864]' : isStrict ? 'text-[#0A4251] font-bold' : 'text-slate-400'
                }`}>
                  {section.number}.
                </span>
                
                <div className="flex-1 min-w-0">
                  <div className="text-xs leading-snug flex items-center gap-1.5">
                    <span className="truncate">{section.title}</span>
                    {isStrict && !isActive && (
                      <span className="text-[9px] font-mono uppercase bg-[#F2C864]/20 text-[#00171C] font-bold px-1 rounded">
                        Strict
                      </span>
                    )}
                  </div>
                </div>

                <ChevronRight className={`w-3.5 h-3.5 shrink-0 mt-0.5 transition-transform ${
                  isActive ? 'text-[#F2C864] translate-x-0.5' : 'text-slate-300 group-hover:text-slate-500'
                }`} />
              </a>
            );
          })}
        </nav>
      </div>

      {/* Vetting Quick Card */}
      <div className="bg-[#0A4251] text-white p-4 rounded-lg border border-[#F2C864]/30 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#F2C864] uppercase tracking-wider">
          <CheckCircle2 className="w-4 h-4 text-[#F2C864]" />
          <span>Carrier Compliance Pass</span>
        </div>
        <p className="text-xs text-slate-200 leading-relaxed">
          Drafted specifically to guarantee 100% first-pass approval for carrier A2P 10DLC campaign vetting across AT&amp;T, T-Mobile, and Verizon networks.
        </p>
        <div className="pt-2 border-t border-white/10 text-[11px] text-[#88BBD8] space-y-1">
          <div>Entity: ABODE-MODE LLC</div>
          <div>Desk: (719) 502-7119</div>
        </div>
      </div>

    </aside>
  );
};

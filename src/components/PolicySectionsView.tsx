import React from 'react';
import { POLICY_SECTIONS, ENTITY_DETAILS } from '../data/policyData';
import { StrictSmsCallout } from './StrictSmsCallout';
import { 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Building2, 
  Clock, 
  FileText, 
  AlertCircle,
  HelpCircle,
  Hash,
  Copy,
  Check
} from 'lucide-react';

interface PolicySectionsViewProps {
  searchQuery: string;
}

export const PolicySectionsView: React.FC<PolicySectionsViewProps> = ({ searchQuery }) => {
  const [copiedSection, setCopiedSection] = React.useState<string | null>(null);

  const handleCopySectionLink = (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const highlightMatches = (text: string) => {
    if (!searchQuery.trim()) return text;
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <mark key={i} className="bg-[#f9c54b] text-[#00171C] font-semibold px-0.5 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  return (
    <div className="space-y-12">
      
      {POLICY_SECTIONS.map((section) => {
        const isStrictSection = section.id === 'mobile-sms-privacy';

        return (
          <section 
            key={section.id} 
            id={section.id} 
            className="scroll-mt-28 bg-white rounded-lg border border-[#d5dde0] p-6 sm:p-10 shadow-2xs print-surface"
          >
            {/* Section Header */}
            <div className="flex flex-wrap items-baseline justify-between gap-4 pb-5 mb-6 border-b border-[#d5dde0]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#0A4251] tracking-wider uppercase">
                    Section {section.number}
                  </span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="text-xs font-mono text-slate-500 uppercase">
                    ABODE-MODE LLC Regulatory Document
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#00171C] tracking-tight">
                  {highlightMatches(section.title)}
                </h2>
              </div>

              {/* Action: Copy Anchor Link */}
              <button
                onClick={() => handleCopySectionLink(section.id)}
                type="button"
                className="no-print inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-slate-500 hover:text-[#0A4251] bg-[#f8fafb] hover:bg-slate-100 rounded border border-[#d5dde0] transition-colors cursor-pointer"
                title="Copy direct anchor link to this clause"
              >
                {copiedSection === section.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Link Copied</span>
                  </>
                ) : (
                  <>
                    <Hash className="w-3.5 h-3.5 text-slate-400" />
                    <span>#{section.id}</span>
                  </>
                )}
              </button>
            </div>

            {/* Highlight Summary Kicker */}
            {section.highlightSummary && (
              <p className="text-sm font-medium text-[#0A4251] bg-[#f3f5f6] p-3.5 rounded border border-[#d5dde0]/60 mb-6 leading-relaxed">
                <strong className="font-semibold text-[#00171C]">Executive Summary: </strong>
                {highlightMatches(section.highlightSummary)}
              </p>
            )}

            {/* Special Callout for Section 2: Non-Negotiable Strict Carrier Mobile & SMS Privacy Clause */}
            {isStrictSection && (
              <StrictSmsCallout />
            )}

            {/* Subsection Contents */}
            <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
              {section.subsections.map((sub, sIdx) => (
                <div key={sIdx} className="space-y-4">
                  {sub.subtitle && (
                    <h3 className="text-base sm:text-lg font-bold text-[#00171C] font-serif pt-2 border-t border-slate-100">
                      {highlightMatches(sub.subtitle)}
                    </h3>
                  )}

                  {sub.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {highlightMatches(p)}
                    </p>
                  ))}

                  {/* Bullet Points */}
                  {sub.bulletPoints && sub.bulletPoints.length > 0 && (
                    <ul className="space-y-3 pl-2 sm:pl-4">
                      {sub.bulletPoints.map((bp, bIdx) => {
                        const colonIndex = bp.indexOf(':');
                        const hasPrefix = colonIndex > -1;
                        const prefix = hasPrefix ? bp.substring(0, colonIndex + 1) : '';
                        const rest = hasPrefix ? bp.substring(colonIndex + 1) : bp;

                        return (
                          <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-[15px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0A4251] shrink-0 mt-2.5" />
                            <div>
                              {hasPrefix ? (
                                <>
                                  <strong className="font-bold text-[#00171C]">
                                    {highlightMatches(prefix)}
                                  </strong>
                                  <span>{highlightMatches(rest)}</span>
                                </>
                              ) : (
                                <span>{highlightMatches(bp)}</span>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Dedicated Structured Data Table for Section 1 (Scope & Information Collected) */}
            {section.id === 'scope-information-collected' && (
              <div className="mt-8 pt-6 border-t border-[#d5dde0] space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A4251]">
                  Factual Breakdown of Consumer Data Fields Collected
                </h4>
                <div className="overflow-x-auto rounded border border-[#d5dde0]">
                  <table className="w-full text-left text-xs text-slate-700">
                    <thead className="bg-[#f3f5f6] text-slate-900 font-mono font-semibold uppercase tracking-wider border-b border-[#d5dde0]">
                      <tr>
                        <th className="py-2.5 px-3">Data Category</th>
                        <th className="py-2.5 px-3">Specific Data Fields Collected</th>
                        <th className="py-2.5 px-3">Collection Method</th>
                        <th className="py-2.5 px-3">Shared With 3rd Parties?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="py-2.5 px-3 font-semibold text-[#00171C]">Mobile Telephony</td>
                        <td className="py-2.5 px-3 font-mono">Mobile telephone number, SMS opt-in consent record</td>
                        <td className="py-2.5 px-3">Direct web inquiry, inbound call, or signed contact request</td>
                        <td className="py-2.5 px-3 font-bold text-emerald-800 bg-emerald-50/60">NEVER (Strictly Excluded)</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-semibold text-[#00171C]">Consumer Identity</td>
                        <td className="py-2.5 px-3 font-mono">Full name, email address, owner relationship</td>
                        <td className="py-2.5 px-3">Direct communication with acquisition desk</td>
                        <td className="py-2.5 px-3 text-slate-600">Escrow/Title only during contracted closing</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-semibold text-[#00171C]">Real Property Details</td>
                        <td className="py-2.5 px-3 font-mono">Property address, parcel ID (APN), county, square footage</td>
                        <td className="py-2.5 px-3">Public county land records &amp; seller submission</td>
                        <td className="py-2.5 px-3 text-slate-600">Escrow closing &amp; title insurance partners</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-semibold text-[#00171C]">Transaction Milestones</td>
                        <td className="py-2.5 px-3 font-mono">Desired closing horizon, mortgage standing, probate notes</td>
                        <td className="py-2.5 px-3">Seller consultation discussions</td>
                        <td className="py-2.5 px-3 font-bold text-emerald-800 bg-emerald-50/60">NEVER Shared for Marketing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* CTIA Interactive Cards for Section 4 (STOP & HELP) */}
            {section.id === 'consumer-rights-opt-out' && (
              <div className="mt-8 pt-6 border-t border-[#d5dde0] grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* STOP Box */}
                <div className="bg-[#f8fafc] p-5 rounded-lg border border-[#d5dde0] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#0A4251] uppercase tracking-wider">
                      Opt-Out Keyword
                    </span>
                    <span className="px-2 py-0.5 font-mono text-xs font-bold bg-[#00171C] text-white rounded">
                      STOP
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-serif">Immediate Message Revocation</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Reply <strong>STOP</strong> to any SMS message received from Abode Mode to immediately terminate future messaging. Our telecommunications gateway halts all outbound SMS instantly.
                  </p>
                </div>

                {/* HELP Box */}
                <div className="bg-[#f8fafc] p-5 rounded-lg border border-[#d5dde0] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#0A4251] uppercase tracking-wider">
                      Assistance Keyword
                    </span>
                    <span className="px-2 py-0.5 font-mono text-xs font-bold bg-[#0A4251] text-white rounded">
                      HELP
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-serif">Customer Care Information</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Reply <strong>HELP</strong> to any SMS for customer care information, or contact our acquisition desk directly at <strong>(719) 502-7119</strong> or <strong>WDowis@Abode-Mode.com</strong>.
                  </p>
                </div>
              </div>
            )}

            {/* Verified Contact Desk Panel for Section 6 */}
            {section.id === 'direct-contact' && (
              <div className="mt-8 pt-6 border-t border-[#d5dde0]">
                <div className="bg-[#00171C] text-white p-6 sm:p-8 rounded-lg border border-[#0A4251] space-y-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#0A4251]">
                    <div>
                      <h4 className="text-xl font-serif font-bold text-white tracking-wide">
                        ABODE-MODE LLC Direct Acquisitions Desk
                      </h4>
                      <p className="text-xs text-[#88BBD8] font-mono mt-0.5">
                        Direct Lines for Homeowners, Land Sellers &amp; Regulatory Inquiries
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400 block font-mono">Response Turnaround</span>
                      <span className="text-xs font-bold text-[#F2C864]">Within 24 Business Hours</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-[#88BBD8]">
                        <Phone className="w-4 h-4 text-[#F2C864]" />
                        <span className="font-mono font-semibold uppercase">Colorado Desk</span>
                      </div>
                      <a href={`tel:${ENTITY_DETAILS.primaryPhone.replace(/\D/g, '')}`} className="text-base font-bold text-white hover:text-[#F2C864] block font-mono">
                        {ENTITY_DETAILS.primaryPhone}
                      </a>
                      <span className="text-slate-400 block">Primary Acquisition Desk &amp; SMS Inquiries</span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-[#88BBD8]">
                        <Phone className="w-4 h-4 text-[#F2C864]" />
                        <span className="font-mono font-semibold uppercase">Texas Desk</span>
                      </div>
                      <a href={`tel:${ENTITY_DETAILS.secondaryPhone.replace(/\D/g, '')}`} className="text-base font-bold text-white hover:text-[#F2C864] block font-mono">
                        {ENTITY_DETAILS.secondaryPhone}
                      </a>
                      <span className="text-slate-400 block">DFW &amp; Central Texas Direct Acquisitions</span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-[#88BBD8]">
                        <Mail className="w-4 h-4 text-[#F2C864]" />
                        <span className="font-mono font-semibold uppercase">Electronic Inquiries</span>
                      </div>
                      <a href={`mailto:${ENTITY_DETAILS.contactEmail}`} className="text-sm font-bold text-white hover:text-[#F2C864] block font-mono truncate">
                        {ENTITY_DETAILS.contactEmail}
                      </a>
                      <span className="text-slate-400 block">Director: W. Dowis · ABODE-MODE LLC</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#0A4251] flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400">
                    <div>Entity Registration: ABODE-MODE LLC (United States)</div>
                    <div className="font-mono text-[#88BBD8]">#AbodeMode · @abodemodeinvest</div>
                  </div>
                </div>
              </div>
            )}

          </section>
        );
      })}

    </div>
  );
};

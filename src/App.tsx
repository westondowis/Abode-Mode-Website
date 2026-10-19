/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PolicyNavigation } from './components/PolicyNavigation';
import { PolicySectionsView } from './components/PolicySectionsView';
import { ComplianceInspectorModal } from './components/ComplianceInspectorModal';
import { Footer } from './components/Footer';
import { ShieldCheck, ArrowRight, Printer, AlertCircle } from 'lucide-react';
import { ENTITY_DETAILS } from './data/policyData';

export default function App() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('scope-information-collected');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle section jumping
  const handleSelectSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Trigger browser print
  const handlePrint = () => {
    window.print();
  };

  // Scrollspy to automatically update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 200;

      sectionElements.forEach((section) => {
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height && id) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="top" className="min-h-screen bg-[#00171C] flex flex-col font-sans">
      
      {/* Carrier Compliance Quick Notification Ribbon */}
      <aside aria-label="Regulatory Notice" className="bg-[#0A4251] text-white border-b border-[#F2C864]/30 py-2.5 px-4 text-xs no-print">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F2C864] shrink-0" />
            <span className="font-bold text-[#F2C864]">CARRIER VETTING RECORD:</span>
            <span className="text-slate-200">
              Approved A2P 10DLC CTIA Architecture · ABODE-MODE LLC
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a 
              href="#mobile-sms-privacy" 
              className="text-[#88BBD8] hover:text-white underline font-sans flex items-center gap-1"
            >
              <span>View Strict Mobile Clause</span>
              <ArrowRight className="w-3 h-3" />
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <button
              onClick={() => setAuditModalOpen(true)}
              className="text-[#F2C864] hover:text-white underline font-sans cursor-pointer font-semibold"
            >
              Open Carrier Audit Matrix
            </button>
          </div>
        </div>
      </aside>

      {/* Main Header */}
      <Header 
        onOpenAudit={() => setAuditModalOpen(true)} 
        onPrint={handlePrint} 
      />

      {/* Hero Section */}
      <HeroSection onOpenAudit={() => setAuditModalOpen(true)} />

      {/* Main Content Area: High-Contrast Light Reading Canvas on Dark Ground */}
      <main className="flex-1 bg-[#00171C] py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Sidebar Column (Desktop 4 Cols, Sticky) */}
            <div className="lg:col-span-4 sticky top-28 self-start space-y-6">
              <PolicyNavigation
                activeSection={activeSection}
                onSelectSection={handleSelectSection}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
            </div>

            {/* Main Policy Document Column (8 Cols) */}
            <div className="lg:col-span-8">
              
              {/* Official Header Card inside Document Area */}
              <div className="bg-white rounded-lg border border-[#d5dde0] p-6 mb-8 shadow-2xs print-surface">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#d5dde0]">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A4251] block">
                      Official Regulatory Publication
                    </span>
                    <h2 className="text-lg font-serif font-bold text-[#00171C]">
                      ABODE-MODE LLC · Comprehensive Privacy Policy
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded border border-slate-200">
                      Rev: {ENTITY_DETAILS.effectiveDate}
                    </span>
                    <button
                      onClick={handlePrint}
                      type="button"
                      className="no-print inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-[#0A4251] hover:text-white hover:bg-[#0A4251] bg-[#f3f5f6] border border-[#d5dde0] rounded transition-colors cursor-pointer"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print Document</span>
                    </button>
                  </div>
                </div>

                <div className="pt-4 text-xs text-slate-600 leading-relaxed space-y-2">
                  <p>
                    This document sets forth the comprehensive privacy framework, data retention schedules, and mandatory CTIA telecommunications disclosures for <strong className="text-slate-900">{ENTITY_DETAILS.legalName}</strong> (publicly trading and operating as <strong className="text-slate-900">{ENTITY_DETAILS.dbaName}</strong>).
                  </p>
                  <p>
                    All prospective sellers, property owners, and representatives communicating regarding direct real estate acquisitions are afforded the complete statutory and carrier protections delineated in the following clauses.
                  </p>
                </div>
              </div>

              {/* Comprehensive Policy Clauses */}
              <PolicySectionsView searchQuery={searchQuery} />

            </div>

          </div>

        </div>
      </main>

      {/* Compliance Inspector Modal */}
      <ComplianceInspectorModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
        onNavigateSection={handleSelectSection}
      />

      {/* Footer */}
      <Footer
        onOpenAudit={() => setAuditModalOpen(true)}
        onPrint={handlePrint}
      />

    </div>
  );
}

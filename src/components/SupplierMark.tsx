import type { ReactNode } from 'react';

/** Simple marks drawn to echo each supplier's logo, rather than copies of their trademark files. */
const marks: Record<string, ReactNode> = {
  verosol: (
    <span className="mark-verosol"><span>Verosol</span></span>
  ),
  'james-dunlop': (
    <span className="mark-james-dunlop"><span>James Dunlop</span><span>Textiles</span></span>
  ),
  zepel: (
    <span className="mark-zepel">
      <svg viewBox="0 0 24 24" width="28" height="28"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="5" strokeDasharray="44 9.4" transform="rotate(-60 12 12)" /></svg>
      zepel
    </span>
  ),
  nettex: (
    <span className="mark-nettex">
      <svg viewBox="0 0 24 24" width="26" height="26"><path d="M2 2h12C9 6 7 9 6 14L2 22Z M22 2v20H10c4-3 6-7 7-12Z" fill="currentColor" /></svg>
      Nettex
    </span>
  ),
  warwick: (
    <span className="mark-warwick">
      <svg viewBox="0 0 34 22" width="34" height="22"><path d="M1 2l7 18 6-11 6 11 7-18M8 2l4 9M26 2l-4 9" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="miter" /></svg>
      Warwick
    </span>
  ),
  'ricky-richards': (
    <span className="mark-ricky-richards">
      <svg viewBox="0 0 24 26" width="26" height="28"><path d="M12 1l10.4 6v12L12 25 1.6 19V7Z" fill="currentColor" /><text x="12" y="18" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" fontFamily="Inter, Arial, sans-serif">R</text></svg>
      ricky
    </span>
  ),
};

export default function SupplierMark({ slug }: { slug: string }) {
  const mark = marks[slug];
  if (!mark) return null;
  return <span className="supplier-mark" aria-hidden="true">{mark}</span>;
}

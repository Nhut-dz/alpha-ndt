import { Link } from "react-router-dom";

const ChevronIcon = () => (
  <svg className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

/**
 * Breadcrumb component
 * @param {Array} items - Array of { label, to } objects. Last item is current page (no link).
 */
export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 py-4">
      <Link to="/" className="hover:text-orange-500 transition-colors flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" />
        </svg>
        Home
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <ChevronIcon />
          {i < items.length - 1 ? (
            <Link to={item.to} className="hover:text-orange-500 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-orange-500 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

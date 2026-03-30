// ============================================================
// ServiceDetailPage - Full article page for each service
// ============================================================
import { useParams, Link } from "react-router-dom";
import { services } from "../data";
import { serviceDetails } from "../data/serviceDetails";
import Breadcrumb from "../components/Breadcrumb";

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = services.find((s) => s.id === Number(id));
  const detail = serviceDetails[id];

  if (!service || !detail) {
    return (
      <div className="pt-28 pb-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Service Not Found</h1>
          <p className="text-slate-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[340px] md:h-[420px] overflow-hidden">
        <img
          src={detail.heroImage}
          alt={detail.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-5xl mx-auto">
          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium mb-4 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
            {detail.title}
          </h1>
          <p className="text-orange-400 text-lg md:text-xl font-semibold">
            {detail.subtitle}
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { label: "Services", to: "/services" },
          { label: detail.title }
        ]} />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview */}
        <div className="mb-12">
          <h2 className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-4">
            Overview
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-line">
            {detail.content.trim()}
          </p>
        </div>

        {/* Standards & Industries */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {detail.standards && (
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-slate-800 font-bold text-base mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Applied Standards
              </h3>
              <div className="flex flex-wrap gap-2">
                {detail.standards.map((std, i) => (
                  <span
                    key={i}
                    className="bg-orange-50 text-orange-600 text-xs px-3 py-1.5 rounded-lg font-medium border border-orange-200"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </div>
          )}
          {detail.industries && (
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-slate-800 font-bold text-base mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Industries Served
              </h3>
              <div className="flex flex-wrap gap-2">
                {detail.industries.map((ind, i) => (
                  <span
                    key={i}
                    className="bg-blue-50 text-blue-600 text-xs px-3 py-1.5 rounded-lg font-medium border border-blue-200"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sub-Services */}
        {detail.subServices && (
          <div className="mb-12">
            <h2 className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-6">
              Our Capabilities
            </h2>
            <div className="space-y-6">
              {detail.subServices.map((sub, i) => (
                <div
                  key={i}
                  className={`bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-orange-300 transition-colors ${
                    sub.image ? "md:flex" : ""
                  }`}
                >
                  {sub.image && (
                    <div className="md:w-2/5 h-56 md:h-auto flex-shrink-0">
                      <img
                        src={sub.image}
                        alt={sub.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center text-sm font-bold border border-orange-200">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-slate-800 font-bold text-lg">{sub.title}</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{sub.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Services */}
        <div className="mt-12">
          <h2 className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-6">
            Other Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services
              .filter((s) => s.id !== service.id)
              .map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="bg-slate-50 rounded-xl p-4 border border-slate-200 hover:border-orange-300 transition-all hover:-translate-y-1 group"
                >
                  <div className="h-28 rounded-lg overflow-hidden mb-3">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-slate-800 font-semibold text-sm group-hover:text-orange-500 transition-colors line-clamp-2">
                    {s.title}
                  </h4>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

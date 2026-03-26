// ============================================================
// Contact Section - Form + Info
// ============================================================
import { useEffect, useRef, useState } from "react";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";

function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Địa chỉ",
    value: "37/7 Đ.C18, Phường 12\nBảy Hiền, Hồ Chí Minh, Vietnam",
    href: "https://www.google.com/maps?q=37/7+C18,+Phường+12,+Bảy+Hiền,+Hồ+Chí+Minh",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Điện thoại",
    value: "Tel: +84 28 6687 7778\nFax: +84 28 6687 7788",
    href: "tel:+842866877778",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "info@alpha-ndt.com",
    href: "mailto:info@alpha-ndt.com",
  },
];

export default function Contact() {
  const { ref, visible } = useFadeIn();
  const { lang } = useLang();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = t(lang, "contact.nameRequired");
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) e.email = t(lang, "contact.emailRequired");
    if (!formData.message.trim()) e.message = t(lang, "contact.messageRequired");
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    // UI-only: show success
    setSubmitted(true);
    setErrors({});
  };

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <section id="contact" className="py-12 bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-block text-orange-400 font-bold text-2xl md:text-3xl tracking-widest uppercase mb-3">
            {t(lang, "contact.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            {t(lang, "contact.heading1")}{" "}
            <span className="text-orange-400">
              {t(lang, "contact.headingHighlight")}
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t(lang, "contact.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact info */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="space-y-5 mb-8">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 flex-none group-hover:bg-orange-500/20 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-slate-300 text-sm hover:text-blue-400 transition-colors whitespace-pre-line"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-300 text-sm whitespace-pre-line">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="mt-6">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">
                Bản đồ
              </p>
              <div className="rounded-xl overflow-hidden border border-slate-700">
                <iframe
                  title="Alpha NDT Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d106.6340!3d10.7870!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z37LDoCBDMTgsIFBow7puZyAxMiwgQsOjeSBIaeG7h24sIEhDTQ!5e0!3m2!1svi!2s!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="bg-slate-700 border border-slate-700 rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-black text-2xl mb-2">Gửi thành công!</h3>
                  <p className="text-slate-400 mb-6">Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ làm việc.</p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", service: "", message: "" }); }}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    Gửi yêu cầu khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h3 className="text-white font-bold text-xl mb-6">{t(lang, "contact.send")}</h3>

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-400 text-sm font-medium mb-2">
                        {t(lang, "contact.name")} <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={handleChange("name")}
                        placeholder="Nguyễn Văn A"
                        className={`w-full bg-slate-800 border rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors ${errors.name ? "border-red-500/50" : "border-slate-700 focus:border-blue-500"}`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-slate-400 text-sm font-medium mb-2">
                        {t(lang, "contact.email")} <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={handleChange("email")}
                        placeholder="email@company.com"
                        className={`w-full bg-slate-800 border rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors ${errors.email ? "border-red-500/50" : "border-slate-700 focus:border-blue-500"}`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone + Service */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-400 text-sm font-medium mb-2">{t(lang, "contact.phone")}</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange("phone")}
                        placeholder="+84 9xx xxx xxx"
                        className="w-full bg-slate-800 border border-slate-700 focus:border-blue-500 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-sm font-medium mb-2">{t(lang, "contact.service")}</label>
                      <select
                        value={formData.service}
                        onChange={handleChange("service")}
                        className="w-full bg-slate-800 border border-slate-700 focus:border-blue-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors appearance-none"
                      >
                        <option value="">{t(lang, "contact.selectService")}</option>
                        <option value="UT">Ultrasonic Testing (UT)</option>
                        <option value="RT">Radiographic Testing (RT)</option>
                        <option value="MT">Magnetic Particle Testing (MT)</option>
                        <option value="PT">Penetrant Testing (PT)</option>
                        <option value="PAUT">Phased Array UT (PAUT)</option>
                        <option value="ECT">Eddy Current Testing (ECT)</option>
                        <option value="WES">Wind Energy Service (WES)</option>
                        <option value="other">Khác</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-slate-400 text-sm font-medium mb-2">
                      {t(lang, "contact.message")} <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={handleChange("message")}
                      placeholder="Mô tả dự án, thiết bị cần kiểm định, tiêu chuẩn yêu cầu..."
                      className={`w-full bg-slate-800 border rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors resize-none ${errors.message ? "border-red-500/50" : "border-slate-700 focus:border-blue-500"}`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    {t(lang, "contact.send")}
                  </button>

                  <p className="text-slate-600 text-xs text-center">
                    Thông tin của bạn được bảo mật hoàn toàn. Chúng tôi không chia sẻ dữ liệu với bên thứ ba.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Contact from "../components/Contact";
import Breadcrumb from "../components/Breadcrumb";

export default function ContactPage() {
  return (
    <div className="pt-28 bg-white dark:bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Contact" }]} />
      </div>
      <Contact />
    </div>
  );
}

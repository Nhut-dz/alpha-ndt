import News from "../components/News";
import Breadcrumb from "../components/Breadcrumb";

export default function NewsPage() {
  return (
    <div className="pt-28 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Tin tức" }]} />
      </div>
      <News />
    </div>
  );
}

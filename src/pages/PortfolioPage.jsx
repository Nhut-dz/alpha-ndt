import Portfolio from "../components/Portfolio";
import Breadcrumb from "../components/Breadcrumb";

export default function PortfolioPage() {
  return (
    <div className="pt-28 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Dự án" }]} />
      </div>
      <Portfolio />
    </div>
  );
}

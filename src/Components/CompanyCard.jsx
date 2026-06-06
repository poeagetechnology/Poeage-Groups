import { useNavigate } from "react-router-dom";

export default function CompanyCard({ company }) {
  const navigate = useNavigate();

  return (
    <div className="p-6 rounded-2xl border hover:shadow-xl transition">
      <img src={company.logo} className="h-10 mb-4" />
      <h3 className="text-lg font-semibold">{company.name}</h3>
      <p className="text-sm text-gray-500">{company.desc}</p>

      <button
        onClick={() => navigate(`/company/${company.name}`)}
        className="mt-4 text-blue-600"
      >
        Explore →
      </button>
    </div>
  );
}
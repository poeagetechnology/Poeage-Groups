import { useParams } from "react-router-dom";
import companies from "../Pages/Companies";
import LeadForm from "./LeadForm";

export default function CompanyDetails() {
  const { name } = useParams();

  const company = companies.find(
    (c) => c.name === decodeURIComponent(name)
  );

  if (!company) return <div>Company not found</div>;

  return (
    <div className="min-h-screen p-10 bg-gray-50">

      <img src={company.logo} className="h-14 mb-6" />

      <h1 className="text-3xl font-bold">{company.name}</h1>
      <p className="text-gray-600 mt-2 mb-6">{company.desc}</p>

      {/* SERVICES */}
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {company.points.map((p, i) => (
          <div key={i} className="p-4 bg-white rounded-xl shadow">
            ✅ {p}
          </div>
        ))}
      </div>

      {/* LEAD FORM */}
      <LeadForm company={company.name} />

    </div>
  );
}
import { useState } from "react";

export default function LeadForm({ company }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...form, company }),
    });

    alert("Lead Submitted 🚀");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-bold mb-4">
        Get Started with {company}
      </h2>

      <input
        placeholder="Name"
        className="w-full mb-3 p-2 border rounded"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        className="w-full mb-3 p-2 border rounded"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        placeholder="Phone"
        className="w-full mb-3 p-2 border rounded"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
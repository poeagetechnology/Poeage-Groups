import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Nexsus from "../Assets/Nexsus.jpg";
import Technology from "../Assets/Technology.png";
import Builders from "../Assets/Builders.png";
import IT from "../Assets/IT.png";
import Marketting from "../Assets/Digital.png";
import Web from "../Assets/Web.png";
import Hub from "../Assets/Hub.png";

const categories = [
  "All",
  "Technology",
  "Construction",
  "Consulting",
  "Cloud",
  "IT Services",
  "Marketing",
  "Shopping",
  "CRM",
];

const companies = [
  {
    name: "Poeage Technologies",
    category: "Technology",
    desc: "Advanced software and digital solutions.",
    logo: Technology,
    points: [
      "Custom software development",
      "AI automation tools",
      "SaaS platforms",
      "Enterprise apps",
      "UI/UX systems",
      "API integrations",
      "Data dashboards",
      "Cybersecurity",
      "DevOps pipelines",
      "Digital transformation",
    ],
  },
  {
    name: "Poeage CRM",
    category: "CRM",
    desc: "Customer relationship management solutions.",
    logo: Technology,
    points: [
      "Lead management",
      "Sales tracking",
      "Customer database",
      "Auto follow-ups",
      "WhatsApp integration",
      "AI chatbot",
      "Analytics dashboard",
      "Task management",
      "Marketing automation",
      "Custom workflows",
    ],
  },
  {
    name: "Poeage Builders",
    category: "Construction",
    desc: "Infrastructure and engineering excellence.",
    logo: Builders,
    points: [
      "Residential projects",
      "Commercial buildings",
      "Turnkey execution",
      "Architecture design",
      "Structural engineering",
      "Project management",
      "Smart buildings",
      "Renovation",
      "Green construction",
      "Site planning",
    ],
  },
  {
    name: "Poeage Nexus",
    category: "Consulting",
    desc: "Career growth and consulting services.",
    logo: Nexsus,
    points: [
      "Career consulting",
      "Business strategy",
      "Startup mentorship",
      "Skill training",
      "HR consulting",
      "Market entry",
      "Personal branding",
      "Growth consulting",
      "Leadership programs",
      "Industry advisory",
    ],
  },
  {
    name: "Poeage Web Services",
    category: "Cloud",
    desc: "Cloud infrastructure & hosting solutions.",
    logo: Web,
    points: [
      "Cloud hosting",
      "Server deployment",
      "AWS/Azure/GCP",
      "Website hosting",
      "CDN optimization",
      "Cloud security",
      "Backup systems",
      "Scalable infra",
      "DNS management",
      "DevOps pipelines",
    ],
  },
  {
    name: "Poeage IT Solutions",
    category: "IT Services",
    desc: "Enterprise IT support and services.",
    logo: IT,
    points: [
      "IT infrastructure",
      "Network security",
      "Hardware support",
      "IT consulting",
      "Managed services",
      "System integration",
      "Remote support",
      "Data storage",
      "Compliance",
      "Helpdesk systems",
    ],
  },
  {
    name: "Poeage Digital Marketing",
    category: "Marketing",
    desc: "SEO, Ads, and digital growth strategies.",
    logo: Marketting,
    points: [
      "SEO",
      "Google Ads",
      "Social media",
      "Content marketing",
      "Lead generation",
      "Branding",
      "Email campaigns",
      "Influencer marketing",
      "CRO",
      "Analytics",
    ],
  },
  {
    name: "Poeage Hub",
    category: "Shopping",
    desc: "Next-gen eCommerce platform.",
    logo: Hub,
    points: [
      "Ecommerce platform",
      "Product catalog",
      "Payment integration",
      "Order management",
      "Multi-vendor",
      "Mobile apps",
      "AI recommendations",
      "Logistics integration",
      "Customer support",
      "Sales analytics",
    ],
  },
];

export default function UltraCompanies() {
  const [active, setActive] = useState("All");
  const [selectedCompany, setSelectedCompany] = useState(null);

  const filtered =
    active === "All"
      ? companies
      : companies.filter((c) => c.category === active);

  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-blue-300/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-300/20 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold">
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Ecosystem</span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm sm:text-base">
            Explore our companies and services
          </p>
        </div>

        {/* CATEGORY */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                active === cat
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                  : "border text-gray-700 hover:shadow"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="group p-6 rounded-3xl border bg-white/70 backdrop-blur-xl hover:shadow-2xl transition"
            >
              <img src={c.logo} className="h-12 mb-4" />

              <h3 className="text-lg font-semibold">{c.name}</h3>
              <p className="text-gray-500 text-sm mt-2">{c.desc}</p>

              <button
                onClick={() => setSelectedCompany(c)}
                className="mt-4 text-blue-600 group-hover:text-cyan-500 transition"
              >
                Explore →
              </button>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedCompany && (
            <motion.div
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCompany(null)}
            >
              <motion.div
                className="bg-white rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl relative"
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
                onClick={(e) => e.stopPropagation()}
              >

                <button
                  onClick={() => setSelectedCompany(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-black"
                >
                  ✕
                </button>

                <div className="p-6">

                  <div className="flex items-center gap-4 mb-6">
                    <img src={selectedCompany.logo} className="h-12" />
                    <div>
                      <h2 className="text-xl font-bold">{selectedCompany.name}</h2>
                      <p className="text-gray-500 text-sm">{selectedCompany.desc}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-20">
                    {selectedCompany.points.map((p, i) => (
                      <div key={i} className="bg-gray-50 rounded-xl px-4 py-3 text-sm">
                        ✅ {p}
                      </div>
                    ))}
                  </div>

                </div>

                {/* CTA */}
                <div className="sticky bottom-0 bg-white border-t p-4 flex gap-3">

                  <a
                    href={`https://wa.me/917358039616?text=Hi, I am interested in ${selectedCompany.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-green-500 text-white py-3 rounded-xl font-medium"
                  >
                    WhatsApp
                  </a>

                  <a
                    href={`mailto:your@email.com?subject=Inquiry for ${selectedCompany.name}`}
                    className="flex-1 text-center bg-blue-600 text-white py-3 rounded-xl font-medium"
                  >
                    Contact
                  </a>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
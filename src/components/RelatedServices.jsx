
import { Link } from "react-router-dom";

const services = [
  { name: "Emergency Plumbing", url: "/plumbing/emergency-services" },
  { name: "Drain Cleaning", url: "/plumbing/drain-cleaning" },
  { name: "Leak Detection", url: "/plumbing/leak-detection" },
  { name: "Water Heater Services", url: "/plumbing/water-heaters" },
  { name: "Sewer Repair", url: "/plumbing/sewer-repair-and-replacement" },
  { name: "HVAC Services", url: "/hvac" },
];

export default function RelatedServices() {
  return (
    <nav aria-label="Related services" className="mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Explore Our Services
      </h2>

      <div className="flex flex-wrap gap-3">
        {services.map((service) => (
          <Link
            key={service.url}
            to={service.url}
            className="text-blue-700 hover:underline"
          >
            {service.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

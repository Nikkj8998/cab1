import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  price: string;
  priceNote?: string;
  includes: string[];
  terms?: string[];
  idealFor?: string;
  cta: string;
  minEngagement?: string;
}

const ServiceCard = ({
  title,
  price,
  priceNote,
  includes,
  terms,
  idealFor,
  cta,
  minEngagement,
}: ServiceCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="service-card">
      <div className="flex-1">
        <h3>{title}</h3>

        <div className="price-display">
          {price}
          {priceNote && (
            <p className="text-subtle text-xs mt-1 font-normal uppercase tracking-wide opacity-60">{priceNote}</p>
          )}
        </div>

        <div className="divider" />

        <div className="mb-6">
          <span className="section-label">Includes:</span>
          <ul>
            {includes.map((item, index) => (
              <li key={index}>
                <span className="bullet-circle" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {idealFor && (
          <div className="ideal-pill">
            <span>Ideal for:</span> {idealFor}
          </div>
        )}

        {terms && terms.length > 0 && (
          <div className="mb-6">
            <span className="terms-header">Terms:</span>
            <div className="flex flex-col gap-1">
              {terms.map((term, index) => (
                <div key={index} className="term-link">
                  • {term}
                </div>
              ))}
            </div>
          </div>
        )}

        {minEngagement && (
          <p className="text-subtle text-[10px] mb-6 italic opacity-60">
            Minimum engagement: {minEngagement}
          </p>
        )}
      </div>

      <button className="btn-cta w-full" onClick={() => navigate("/contact")}>
        {cta}
      </button>
    </div>
  );
};

export default ServiceCard;

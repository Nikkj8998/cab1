const IndustriesSection = () => {
  const industries = [
    "Professional services",
    "E-commerce",
    "Manufacturing",
    "SaaS & Technology",
    "Healthcare & Education",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 font-heading text-heading text-center">
            Industries We Support
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="industry-tag"
              >
                {industry}
              </span>
            ))}
          </div>

          <div className="pricing-note-wrapper">
            <h3 className="pricing-note-title">
              Pricing Note
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pricing is based on standard scope and usage. Custom requirements
              or higher workloads may require a tailored quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

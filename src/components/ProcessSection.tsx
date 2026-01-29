const ProcessSection = () => {
  const steps = [
    "Requirement discussion and scope confirmation",
    "Fixed pricing and service agreement",
    "Dedicated offshore team assignment",
    "SLA-based delivery and reporting",
    "Ongoing support and optimization",
  ];

  return (
    <section id="process" className="py-20 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-heading text-heading text-center">
          How We Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="process-step-box"
            >
              <span className="process-step-number">
                {index + 1}
              </span>
              <p className="process-step-text">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

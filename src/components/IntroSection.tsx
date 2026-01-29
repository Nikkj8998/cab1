const IntroSection = () => {
  const benefits = [
    { number: "01", title: "Clear SLAs", desc: "Offshore delivery with defined service levels" },
    { number: "02", title: "30–50% Savings", desc: "Cost reduction vs local hiring" },
    { number: "03", title: "Fixed Pricing", desc: "Defined scope, no surprises" },
    { number: "04", title: "Fast Onboarding", desc: "Quick response and setup time" },
    { number: "05", title: "No Lock-in", desc: "Flexible contract terms" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-16 max-w-3xl">
          We help small and mid-sized companies reduce IT costs, improve reliability,
          and scale faster using a dedicated offshore delivery team based in India,
          aligned to global standards.
        </p>

        <div className="section-heading-wrapper">
          <h2 className="section-heading">
            Why Global Clients Work With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card"
            >
              <span className="benefit-number">
                {benefit.number}
              </span>
              <div className="relative z-10">
                <h3 className="benefit-title">
                  {benefit.title}
                </h3>
                <p className="benefit-desc">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

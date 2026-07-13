import {
    ShieldCheck,
    Wallet,
    Clock3,
    CarFront,
  } from "lucide-react";
  import SectionHeading from "./SectionHeading";
  
  const features = [
    {
      icon: ShieldCheck,
      title: "Safe & Reliable",
      description:
        "Every vehicle is regularly inspected and maintained to ensure a safe and comfortable journey.",
    },
    {
      icon: Wallet,
      title: "Affordable Pricing",
      description:
        "Transparent pricing with no hidden charges. Get the best value for your rental.",
    },
    {
      icon: Clock3,
      title: "24/7 Support",
      description:
        "Our team is always available to assist you before, during, and after your trip.",
    },
    {
      icon: CarFront,
      title: "Wide Vehicle Selection",
      description:
        "From economical sedans to spacious SUVs and luxury vehicles, we have the right car for every need.",
    },
  ];
  
  export default function WhyChooseUs() {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Why Choose Us"
            title="A Better Car Rental Experience"
            description="We focus on reliability, convenience, and customer satisfaction so you can travel with confidence."
          />
  
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <feature.icon
                    className="text-primary"
                    size={30}
                  />
                </div>
  
                <h3 className="mb-3 text-xl font-semibold">
                  {feature.title}
                </h3>
  
                <p className="leading-7 text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
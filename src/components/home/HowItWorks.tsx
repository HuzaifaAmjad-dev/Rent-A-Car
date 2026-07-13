import {
    Search,
    CalendarCheck2,
    CarFront,
  } from "lucide-react";
  import SectionHeading from "./SectionHeading";
  
  const steps = [
    {
      icon: Search,
      title: "Browse Cars",
      description:
        "Explore our fleet and choose the vehicle that fits your travel needs and budget.",
    },
    {
      icon: CalendarCheck2,
      title: "Book Instantly",
      description:
        "Select your rental dates, fill in your details, and confirm your booking in minutes.",
    },
    {
      icon: CarFront,
      title: "Drive Away",
      description:
        "Pick up your vehicle and enjoy a smooth, safe, and comfortable journey.",
    },
  ];
  
  export default function HowItWorks() {
    return (
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="How It Works"
            title="Rent a Car in 3 Easy Steps"
            description="A quick and simple booking process designed to get you on the road without hassle."
          />
  
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-border bg-white p-8 shadow-sm"
              >
                <div className="absolute right-6 top-6 text-5xl font-bold text-primary/10">
                  0{index + 1}
                </div>
  
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <step.icon className="text-primary" size={30} />
                </div>
  
                <h3 className="mb-3 text-xl font-semibold">
                  {step.title}
                </h3>
  
                <p className="leading-7 text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
import {
    ShieldCheck,
    BadgeDollarSign,
    Clock3,
    CarFront,
    Headphones,
    MapPinned,
  } from "lucide-react";
  
  const features = [
    {
      icon: ShieldCheck,
      title: "Safe & Inspected Vehicles",
      description:
        "Every vehicle is routinely serviced and inspected to ensure a safe and comfortable driving experience.",
    },
    {
      icon: BadgeDollarSign,
      title: "Affordable Pricing",
      description:
        "Transparent pricing with no hidden charges so you always know what you're paying for.",
    },
    {
      icon: Clock3,
      title: "Quick Booking",
      description:
        "Reserve your preferred vehicle within minutes through our simple online booking process.",
    },
    {
      icon: CarFront,
      title: "Wide Vehicle Selection",
      description:
        "Choose from economy cars, sedans, SUVs and family vehicles for every type of journey.",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description:
        "Our friendly team is available to help you before, during and after your rental.",
    },
    {
      icon: MapPinned,
      title: "Flexible Pickup",
      description:
        "Convenient pickup and drop-off options designed around your travel requirements.",
    },
  ];
  
  export default function WhyChooseUs() {
    return (
      <section className="bg-background py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-accent">
              WHY CHOOSE US
            </span>
  
            <h2 className="mt-6 text-4xl font-bold text-primary">
              Why Customers Prefer
              <br />
              Hasnain Rent a Car
            </h2>
  
            <p className="mt-6 text-lg leading-8 text-muted">
              We focus on reliability, transparency and excellent
              customer service so every rental experience is smooth
              from booking to return.
            </p>
          </div>
  
          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
  
              return (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white transition group-hover:bg-accent">
                    <Icon size={30} />
                  </div>
  
                  <h3 className="mt-6 text-2xl font-semibold text-primary">
                    {feature.title}
                  </h3>
  
                  <p className="mt-4 leading-8 text-muted">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
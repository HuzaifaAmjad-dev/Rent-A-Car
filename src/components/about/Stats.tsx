import {
    Users,
    CarFront,
    CalendarCheck,
    Star,
  } from "lucide-react";
  
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Customers",
    },
    {
      icon: CarFront,
      number: "30+",
      label: "Vehicles Available",
    },
    {
      icon: CalendarCheck,
      number: "5+",
      label: "Years Experience",
    },
    {
      icon: Star,
      number: "4.9",
      label: "Customer Rating",
    },
  ];
  
  export default function Stats() {
    return (
      <section className="bg-primary py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-orange-300">
              OUR ACHIEVEMENTS
            </span>
  
            <h2 className="mt-6 text-4xl font-bold text-white">
              Trusted by Hundreds of Customers
            </h2>
  
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Our commitment to quality service, transparent pricing,
              and reliable vehicles has made us a trusted choice for
              customers across Islamabad and Rawalpindi.
            </p>
          </div>
  
          <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
  
              return (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/15"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-white">
                    <Icon size={30} />
                  </div>
  
                  <h3 className="mt-6 text-5xl font-bold text-white">
                    {stat.number}
                  </h3>
  
                  <p className="mt-3 text-lg text-blue-100">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
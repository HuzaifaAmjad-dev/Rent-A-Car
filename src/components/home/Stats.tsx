import {
    CarFront,
    Users,
    BadgeCheck,
    MapPinned,
  } from "lucide-react";
  
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Happy Customers",
    },
    {
      icon: CarFront,
      value: "30+",
      label: "Vehicles",
    },
    {
      icon: BadgeCheck,
      value: "100%",
      label: "Well Maintained",
    },
    {
      icon: MapPinned,
      value: "24/7",
      label: "Customer Support",
    },
  ];
  
  export default function Stats() {
    return (
      <section className="bg-white border-y border-border">
        <div className="container-custom py-12">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon
                    className="text-primary"
                    size={28}
                  />
                </div>
  
                <h3 className="text-3xl font-bold text-primary">
                  {item.value}
                </h3>
  
                <p className="mt-2 text-sm text-muted">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
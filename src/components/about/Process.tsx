import {
    Search,
    CalendarCheck,
    KeyRound,
    CircleCheck,
  } from "lucide-react";
  
  const steps = [
    {
      icon: Search,
      title: "Choose Your Car",
      description:
        "Browse our available vehicles and select the one that best suits your trip.",
    },
    {
      icon: CalendarCheck,
      title: "Book Online",
      description:
        "Fill out the booking form with your travel details and submit your request.",
    },
    {
      icon: KeyRound,
      title: "Pick Up Vehicle",
      description:
        "Our team confirms your booking and prepares your vehicle for pickup.",
    },
    {
      icon: CircleCheck,
      title: "Enjoy Your Journey",
      description:
        "Drive with confidence knowing you're backed by reliable service and support.",
    },
  ];
  
  export default function Process() {
    return (
      <section className="bg-white py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-accent">
              HOW IT WORKS
            </span>
  
            <h2 className="mt-6 text-4xl font-bold text-primary">
              Renting a Car Has Never
              Been This Easy
            </h2>
  
            <p className="mt-6 text-lg leading-8 text-muted">
              Our booking process is simple, transparent and designed
              to get you on the road as quickly as possible.
            </p>
          </div>
  
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
  
              return (
                <div
                  key={step.title}
                  className="relative rounded-3xl border border-border bg-background p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {index + 1}
                  </div>
  
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white">
                    <Icon size={34} />
                  </div>
  
                  <h3 className="mt-8 text-2xl font-semibold text-primary">
                    {step.title}
                  </h3>
  
                  <p className="mt-4 leading-8 text-muted">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
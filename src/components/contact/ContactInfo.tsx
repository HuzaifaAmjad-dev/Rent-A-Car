import {
    MapPin,
    Phone,
    Mail,
    Clock3,
  } from "lucide-react";
  
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      value: "Islamabad / Rawalpindi, Pakistan",
      description: "Conveniently located to serve customers across the twin cities.",
    },
    {
      icon: Phone,
      title: "Phone Number",
      value: "+92 300 1234567",
      description: "Call us anytime for bookings and inquiries.",
    },
    {
      icon: Mail,
      title: "Email Address",
      value: "info@hasnainrentacar.com",
      description: "We'll reply to your email as soon as possible.",
    },
    {
      icon: Clock3,
      title: "Working Hours",
      value: "Mon - Sun | 9:00 AM - 10:00 PM",
      description: "We're available every day for your convenience.",
    },
  ];
  
  export default function ContactInfo() {
    return (
      <section className="bg-white py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-accent">
              GET IN TOUCH
            </span>
  
            <h2 className="mt-6 text-4xl font-bold text-primary">
              We'd Love to Hear From You
            </h2>
  
            <p className="mt-6 text-lg leading-8 text-muted">
              Whether you have questions about our services, need help
              with a booking, or want to learn more about our fleet,
              our team is ready to assist you.
            </p>
          </div>
  
          <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-border bg-background p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white">
                    <Icon size={30} />
                  </div>
  
                  <h3 className="mt-6 text-2xl font-semibold text-primary">
                    {item.title}
                  </h3>
  
                  <p className="mt-4 font-semibold text-accent">
                    {item.value}
                  </p>
  
                  <p className="mt-4 leading-7 text-muted">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
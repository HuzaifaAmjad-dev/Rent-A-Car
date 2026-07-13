import { Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Ali Khan",
    location: "Lahore",
    review:
      "Excellent service! The booking process was smooth, the car was spotless, and the staff was very professional.",
  },
  {
    name: "Ahmed Raza",
    location: "Islamabad",
    review:
      "Affordable prices and reliable vehicles. I'll definitely use Hasnain Rent a Car again.",
  },
  {
    name: "Fatima Noor",
    location: "Rawalpindi",
    review:
      "Highly recommended. Everything from booking to returning the vehicle was quick and hassle-free.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          badge="Testimonials"
          title="What Our Customers Say"
          description="Trusted by families, professionals, and travelers across Pakistan."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mb-6 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="leading-7 text-muted">
                "{testimonial.review}"
              </p>

              <div className="mt-8">
                <h4 className="font-semibold">
                  {testimonial.name}
                </h4>

                <p className="text-sm text-muted">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
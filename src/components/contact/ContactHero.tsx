import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="bg-background">
      <div className="container-custom grid items-center gap-12 py-24 lg:grid-cols-2">
        <div>
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-accent">
            CONTACT US
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-primary">
            We're Here
            <br />
            To Help You
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            Have questions about our vehicles, pricing or booking
            process? Our team is always ready to assist you. Reach
            out today and we'll respond as quickly as possible.
          </p>
        </div>

        <div className="relative h-[500px] overflow-hidden rounded-3xl">
          <Image
            src="/images/contact-hero.jpg"
            alt="Contact Hasnain Rent a Car"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
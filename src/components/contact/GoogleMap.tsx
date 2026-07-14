export default function GoogleMap() {
  return (
    <section className="bg-white py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-accent">
            OUR LOCATION
          </span>

          <h2 className="mt-6 text-4xl font-bold text-primary">
            Visit Our Office
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            We're conveniently located to serve customers across
            Islamabad and Rawalpindi. Feel free to visit us or
            contact us before your trip.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-border shadow-sm">
          <iframe
            title="Hasnain Rent a Car Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.8!2d73.0020262!3d33.6009387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df959b7e82afd7:0x293a82e28f3a3baa!2sHassan+motors!5e0!3m2!1sen!2s!4v0"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </div>
      </div>
    </section>
  );
}
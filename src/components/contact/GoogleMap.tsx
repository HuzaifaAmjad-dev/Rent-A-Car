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
              src="https://www.google.com/maps?q=Islamabad,Pakistan&output=embed"
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
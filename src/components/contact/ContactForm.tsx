"use client";

import { useState } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    alert("Your message has been sent successfully.");

    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  }

  return (
    <section className="bg-background py-24">
      <div className="container-custom grid gap-16 lg:grid-cols-2">
        <div>
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-accent">
            SEND A MESSAGE
          </span>

          <h2 className="mt-6 text-4xl font-bold text-primary">
            Let's Start a Conversation
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Fill out the form and our team will get back to
            you as soon as possible.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-primary">
                Fast Response
              </h3>

              <p className="mt-2 text-muted leading-7">
                We typically respond to all inquiries
                within a few hours during business hours.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary">
                Friendly Support
              </h3>

              <p className="mt-2 text-muted leading-7">
                Whether it's a booking question or pricing
                inquiry, we're always happy to help.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary">
                Trusted Service
              </h3>

              <p className="mt-2 text-muted leading-7">
                Our priority is making your rental
                experience simple, reliable and enjoyable.
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-border bg-white p-8 shadow-sm"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative">
              <User
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />

              <input
                required
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-border py-4 pl-12 pr-4 outline-none transition focus:border-primary"
              />
            </div>

            <div className="relative">
              <Mail
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />

              <input
                required
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-border py-4 pl-12 pr-4 outline-none transition focus:border-primary"
              />
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="relative">
              <Phone
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />

              <input
                required
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-border py-4 pl-12 pr-4 outline-none transition focus:border-primary"
              />
            </div>

            <div className="relative">
              <MessageSquare
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />

              <input
                required
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full rounded-xl border border-border py-4 pl-12 pr-4 outline-none transition focus:border-primary"
              />
            </div>
          </div>

          <textarea
            required
            rows={6}
            name="message"
            placeholder="Write your message..."
            value={form.message}
            onChange={handleChange}
            className="mt-6 w-full rounded-xl border border-border p-4 outline-none transition focus:border-primary"
          />

          <button
            type="submit"
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-4 font-semibold text-white transition hover:bg-accent-hover"
          >
            <Send size={20} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
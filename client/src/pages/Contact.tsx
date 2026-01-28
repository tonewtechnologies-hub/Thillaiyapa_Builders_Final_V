import { ContactForm } from "@/components/ui/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-muted/30 py-16 mb-16">
        <div className="container px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From custom creations to bulk orders—or even just a friendly hello —
            we’re always excited to connect with you.
          </p>
        </div>
      </section>

      <div className="container px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* ================= CONTACT INFO ================= */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Visit Us
                    </h3>
                    <p className="text-muted-foreground mt-1 leading-relaxed">
                      34, Near Balaji Padmavathi Kalyana Mandapam,<br />
                      Anna Nagar, Bhavani,<br />
                      Erode District, Tamil Nadu – 638301
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Call Us
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      +91 83444 90964 / +91 96888 39904
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Mon – Sun, 9:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Email Us
                    </h3>
                    <a
                      href="mailto:thillaiyappatextiles@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors mt-1 block"
                    >
                      thillaiyappatextiles@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= GOOGLE MAP ================= */}
            <div className="h-64 rounded-2xl overflow-hidden border border-border/50 shadow-sm">
              <iframe
                title="Thillaiyappa Textiles Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.374749138757!2d77.68321767570883!3d11.45285384635151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba94270f9d3a70b%3A0xbaf1f83ea4b9277d!2s34%2C%20near%20balaji%20patmavathi%20kalyana%20mandapam%2C%20Anna%20Nagar%2C%20Bhavani%2C%20Tamil%20Nadu%20638301!5e0!3m2!1sen!2sin!4v1767594623487!5m2!1sen!2sin"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />
            </div>

            {/* Optional: Open in Maps */}
            <a
              href="https://maps.app.goo.gl/FUp4XuBKvJ6XxHuFA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline inline-block"
            >
              Open in Google Maps →
            </a>
          </div>

          {/* ================= CONTACT FORM ================= */}
          <div className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-lg">
            <h2 className="text-2xl font-bold mb-6">
              Send a Message
            </h2>
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}
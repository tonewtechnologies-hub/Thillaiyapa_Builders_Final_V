import { Link } from "wouter";
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/40 border-t border-border/50">
      <div className="max-w-[1600px] mx-auto px-4 pt-20 pb-10">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-white border border-black/10 shadow-sm flex items-center justify-center">
                <img
                  src="/assets/logo/logo-dark.png"
                  alt="Thillaiyappa Jamakkalams Logo"
                  className="h-full w-full p-2 object-contain"
                />
              </div>

              <div className="flex flex-col leading-tight">
                <span className="font-semibold text-lg text-foreground">
                  Thillaiyappa
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  House of Jamakkalams
                </span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Weaving tradition into every thread since 1981. Authentic handcrafted
              Silk, Woolen, and Cotton Jamakkalams rooted in Bhavani’s heritage.
            </p>

            <div className="flex gap-4 pt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/products">Our Products</Link></li>
              <li><Link href="/process">Manufacturing</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-6">Collections</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/products">Silk Jamakkalams</Link></li>
              <li><Link href="/products">Woolen Rugs</Link></li>
              <li><Link href="/products">Cotton Carpets</Link></li>
              <li><Link href="/products">Custom Orders</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-1 text-primary shrink-0" />
                <span>
                  34, Anna Nagar,<br />
                  Bhavani, Erode District,<br />
                  Tamil Nadu – 638301
                </span>
              </li>

              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-1 text-primary shrink-0" />
                <span>
                  +91 83444 90964<br />
                  +91 96888 39904
                </span>
              </li>

              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-1 text-primary shrink-0" />
                <a
                  href="mailto:thillaiyappatextiles@gmail.com"
                  className="hover:text-primary transition"
                >
                  thillaiyappatextiles@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Thillaiyappa Jamakkalams. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

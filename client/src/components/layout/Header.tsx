import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Gallery", path: "/gallery" },
    { label: "Process", path: "/process" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg shadow-md py-2"
          : "bg-background/80 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <Link href="/" className="flex items-center gap-4 group select-none">
          <div className="relative">
            {/* Outer ring for presence */}
            <div className="absolute inset-0 rounded-full ring-1 ring-primary/30" />

            <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-white flex items-center justify-center shadow-md border border-black/10">
              <img
                src="/assets/logo/logo-dark.png"
                alt="Thillaiyappa Jamakkalams"
                className="h-full w-full p-2 object-contain"
              />
            </div>
          </div>

          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-base md:text-lg font-semibold tracking-wide text-foreground">
              Thillaiyappa Textiles
            </span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              House of jamakkalams
            </span>
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <a
                className={`relative text-sm font-medium transition-colors ${
                  location === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
                {location === item.path && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary rounded-full" />
                )}
              </a>
            </Link>
          ))}

          <Button size="sm" className="ml-6 rounded-full px-6" asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </nav>

        {/* ================= MOBILE NAV ================= */}
        <div className="lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[320px] bg-background/95 backdrop-blur-xl"
            >
              <div className="flex flex-col gap-8 mt-12">
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <a
                      onClick={() => setMobileOpen(false)}
                      className={`text-xl font-medium transition-colors ${
                        location === item.path
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}

                <Button className="mt-6 w-full rounded-full" asChild>
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

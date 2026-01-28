import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { products, processSteps } from "@/lib/data";

/* ================= HERO-SPECIFIC ANIMATIONS ================= */

const heroContainer = {
  animate: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.3,
    },
  },
};

const heroItem = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: easeOut,
    },
  },
};

const heroHeading = {
  initial: { opacity: 0, y: 18, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: easeOut,
    },
  },
};

/* ================= SHARED ANIMATIONS ================= */

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  /* ================= FEATURED PRODUCTS (ONE PER CATEGORY) ================= */
  const featuredProducts = ["Silk", "Woolen", "Cotton"]
    .map((category) =>
      products.find((product) => product.category === category)
    )
    .filter(
      (product): product is (typeof products)[number] =>
        product !== undefined
    );

  return (
    <motion.main
      initial="initial"
      animate="animate"
      className="flex flex-col gap-24 pb-20"
    >
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50 z-10" />
          <img
            src="/assets/home/home_hero.jpg"
            alt="Handloom Weaving"
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div
          variants={heroContainer}
          initial="initial"
          animate="animate"
          className="relative z-20 px-4 sm:px-6 max-w-5xl mx-auto text-center text-white"
        >
          <motion.span
            variants={heroItem}
            className="inline-block px-3 py-1 text-xs sm:text-sm rounded-full border border-white/30 bg-white/10"
          >
            Est. 1981
          </motion.span>

          <motion.h1
            variants={heroHeading}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mt-6"
          >
            Weaving Heritage
            <br className="hidden sm:block" />
            Into Every Thread
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto mt-6"
          >
            Discover the finest handcrafted Silk, Woolen, and Cotton
            Jamakkalams from the master weavers of Thillaiyappa.
          </motion.p>

          <motion.div
            variants={heroItem}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/products">View Collection</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <Link href="/about">Our Story</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= SIGNATURE COLLECTIONS ================= */}
      <motion.section
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="w-full px-4 sm:px-6 lg:px-12 xl:px-20"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-primary">
                Signature Collections
              </h2>
              <p className="text-muted-foreground">
                Handpicked favorites from our master weavers.
              </p>
            </div>
            <Button variant="ghost" className="text-primary" asChild>
              <Link href="/products">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={fadeUp}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ================= PROCESS SECTION ================= */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="w-full bg-muted/30 py-20 px-4 sm:px-6 lg:px-12 xl:px-20"
      >
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              The Art of Jamakkalam
            </h2>
            <p className="text-muted-foreground">
              A timeless weaving journey, where skill, patience, and tradition
              come together in every thread.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 justify-items-center"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={fadeUp}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center text-center space-y-4 max-w-xs"
              >
                <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center text-primary text-2xl font-bold border-4 border-primary/10">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="text-center mt-14">
            <Button variant="outline" className="rounded-full" asChild>
              <Link href="/process">Learn More About Our Craft</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= CTA SECTION ================= */}
      <motion.section
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="w-full px-4 sm:px-6 lg:px-12 xl:px-20"
      >
        <div className="relative max-w-[1600px] mx-auto rounded-[2.5rem] overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/assets/ready-to-order.jpg')] scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/25" />
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />

          <motion.div
            variants={fadeUp}
            className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 md:px-20 text-center text-white max-w-3xl mx-auto"
          >
            <span className="inline-block mb-4 text-xs tracking-widest uppercase text-white/80">
              Custom • Bulk • Export
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-5">
              Ready to Place Your Order?
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed mb-8">
              We accept bulk orders, custom designs, and export requirements.
              Get in touch with us today for a personalized quote.
            </p>

            <Button
              size="lg"
              className="rounded-full px-10 h-12 text-base bg-white text-primary hover:bg-white/90 shadow-lg"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </motion.main>
  );
}

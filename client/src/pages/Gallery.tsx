import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const gridStagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardFade = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
};

const ITEMS_PER_LOAD = 6;

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  const galleryImages = [
  "g1.jpg",
  "g2.jpg",
  "g3.jpg",
  "g4.jpg",
  "g5.JPG",
  "g6.jpg",
  "g7.jpg",
  "g8.jpg",
  "g9.jpg",
  "g10.jpg",
  "g11.JPG",
  "g12.jpg",
  "g13.jpg",
  "g14.jpg",
  "g15.jpg",
  "g16.JPG",
  "g17.jpg",
  "g18.jpg",
  "g19.JPG",
  "g20.JPG",
  "g21.jpg",
  "g22.jpg",
  "g23.jpg",
].map((file, i) => ({
  src: `/assets/gallery/${file}`,
  alt: `Gallery Image ${i + 1}`,
  category: "Gallery",
}));

  const visibleImages = galleryImages.slice(0, visibleCount);
  const hasMore = visibleCount < galleryImages.length;

  return (
    <div className="pb-32">

      {/* ================= HEADER ================= */}
      <section className="w-full bg-muted/30 py-20 px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Our Gallery
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            A visual journey through our creations and the craftsmanship behind them.
          </p>
        </motion.div>
      </section>

      {/* ================= GALLERY GRID ================= */}
      <section className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 mt-20">
        <div className="max-w-[1600px] mx-auto">

          <motion.div
            variants={gridStagger}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visibleImages.map((img, idx) => (
              <motion.div
                key={idx}
                variants={cardFade}
                transition={{ duration: 0.45 }}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Aspect Ratio Container */}
                <div className="aspect-[4/3] w-full bg-muted overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Caption */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0">
                  <span className="block text-xs uppercase tracking-wider text-white/80">
                    {img.category}
                  </span>
                  <p className="text-white font-medium text-sm sm:text-base">
                    {img.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ================= LOAD MORE ================= */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex justify-center mt-16"
            >
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10"
                onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_LOAD)}
              >
                Load More
              </Button>
            </motion.div>
          )}

        </div>
      </section>
    </div>
  );
}

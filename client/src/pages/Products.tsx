import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";

/* ================= CONFIG ================= */
const INITIAL_VISIBLE = 6;
const LOAD_MORE_COUNT = 3;

/* ================= ANIMATIONS ================= */
const page = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
};

const header = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const grid = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const card = {
  initial: { opacity: 0, y: 20, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const categories = ["All", "Silk", "Woolen", "Cotton"];

  /* ================= FILTER PRODUCTS ================= */
  const filteredProducts = useMemo(() => {
    return activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  /* ================= RESET ON CATEGORY CHANGE ================= */
  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [activeCategory]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const canLoadMore = visibleCount < filteredProducts.length;

  return (
    <motion.div
      variants={page}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.6 }}
      className="pb-24"
    >
      {/* ================= HEADER ================= */}
      <motion.section
        variants={header}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.1, duration: 0.6 }}
        className="w-full bg-muted/30 py-20 px-4 sm:px-6 lg:px-12"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Our Collection
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            Explore a wide range of traditional and contemporary weaves, from
            the luxury of silk to the everyday comfort of cotton.
          </p>
        </div>
      </motion.section>

      {/* ================= FILTERS + GRID ================= */}
      <section className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 mt-20">
        <div className="max-w-[1600px] mx-auto">

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-14">
            {categories.map((category) => (
              <motion.div
                key={category}
                whileTap={{ scale: 0.96 }}
              >
                <Button
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className="rounded-full min-w-[110px] h-11"
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Products Grid */}
          {visibleProducts.length > 0 ? (
            <>
             <AnimatePresence mode="wait">
  <motion.div
    key={activeCategory}   // 👈 THIS IS THE FIX
    variants={grid}
    initial="initial"
    animate="animate"
    exit={{ opacity: 0 }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
  >
    {visibleProducts.map((product) => (
      <motion.div
        key={product.id}
        variants={card}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <ProductCard product={product} />
      </motion.div>
    ))}
  </motion.div>
</AnimatePresence>


              {/* Load More */}
              <AnimatePresence>
                {canLoadMore && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex justify-center mt-16"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full px-10"
                      onClick={() =>
                        setVisibleCount((prev) => prev + LOAD_MORE_COUNT)
                      }
                    >
                      Load More
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <div className="text-center py-24 text-muted-foreground">
              No products found in this category.
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}

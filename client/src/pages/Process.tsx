import { processSteps } from "@/lib/data";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */

const page = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
};

const header = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const textLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
};

const textRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
};

const imageLeft = {
  initial: { opacity: 0, x: -60, scale: 0.95 },
  animate: { opacity: 1, x: 0, scale: 1 },
};

const imageRight = {
  initial: { opacity: 0, x: 60, scale: 0.95 },
  animate: { opacity: 1, x: 0, scale: 1 },
};

export default function Process() {
  return (
    <motion.div
      variants={page}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.6 }}
      className="pb-32"
    >
      {/* ================= HEADER ================= */}
      <motion.section
        variants={header}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.1, duration: 0.6 }}
        className="w-full bg-muted/30 py-24 px-4 sm:px-6 lg:px-12"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Manufacturing Process
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            See how raw fibers are transformed into timeless Jamakkalams through
            generations of skill, patience, and craftsmanship.
          </p>
        </div>
      </motion.section>

      {/* ================= PROCESS FLOW ================= */}
      <section className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 mt-24">
        <div className="max-w-[1600px] mx-auto space-y-32">

          {processSteps.map((step, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={step.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                {/* ================= TEXT ================= */}
                <motion.div
                  variants={reverse ? textRight : textLeft}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`space-y-6 ${
                    reverse ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shadow-lg">
                      {step.id}
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">
                      {step.title}
                    </h2>
                  </div>

                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl">
                    {step.description}
                  </p>

                  <p className="text-sm text-muted-foreground/80 max-w-xl">
                    Our artisans follow time-tested practices at this stage,
                    ensuring strength, precision, and longevity in every weave.
                  </p>
                </motion.div>

                {/* ================= IMAGE ================= */}
                <motion.div
                  variants={reverse ? imageLeft : imageRight}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`${reverse ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                </motion.div>
              </div>
            );
          })}

        </div>
      </section>
    </motion.div>
  );
}

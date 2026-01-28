import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  initial: { opacity: 0, y: 30 },
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

export default function About() {
  return (
    <div className="pb-24">

      {/* ================= HEADER ================= */}
      <section className="w-full bg-muted/30 py-24 px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Our Legacy
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Rooted in Bhavani, our story is woven through generations of handloom
            craftsmanship—shaped by place, people, and tradition.
          </p>
        </motion.div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 mt-24">
        <div className="max-w-[1600px] mx-auto space-y-28">

          {/* ================= ABOUT BHAVANI ================= */}
          <motion.section
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
          >
            {/* Image */}
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src="/assets/about/bhavani.jpg"
                alt="Bhavani town and handloom heritage"
                className="w-full h-full object-cover scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>

            {/* Text */}
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                About Bhavani
              </h2>

              <div className="text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  Bhavani is a historic town in the Erode district of Tamil Nadu,
                  known for its spiritual significance and rich weaving tradition.
                  Situated at the confluence of the Bhavani, Cauvery, and Amridha 
                  Nadhi rivers, the town is home to the renowned Sangameswarar Temple
                  at Bhavani Kooduthurai, an important pilgrimage site.
                </p>

                <p>
                  Bhavani is also widely recognized for its handloom industry, particularly
                  the famed Bhavani Jamakkalam, which reflects generations of skilled craftsmanship. Blending faith, culture, and traditional
                  livelihoods, Bhavani holds a distinctive place in Tamil Nadu’s heritage. Bhavani is also widely recognized for its handloom industry,
                  particularly the famed Bhavani Jamakkalam, reflecting generations of skilled craftsmanship.
                </p>
              </div>
            </motion.div>
          </motion.section>

          {/* ================= COMPANY STORY ================= */}
          <motion.section
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Thillaiyappa Textiles — Since 1981
              </h2>

              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  Rooted in the historic town of Bhavani, Thillaiyappa Textiles has
                  been preserving the region’s handloom heritage since 1981. Our
                  journey is shaped by generations of skilled artisans who 
                  continue to practice traditional weaving techniques passed downthrough families.
                </p>
                <p>
                  Each Jamakkalam is meticulously handcrafted to balance strength,
                  comfort, and timeless design. Known for their durability and
                  vibrant patterns, our products bring warmth and character to
                  homes across India and beyond.
                </p>
                <p>
                  Guided by sustainability, community values, and respect for
                  craftsmanship, we consider every weave a reflection of patience,
                  precision, and cultural identity.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src="/assets/about/handloom_weaving.jpg"
                alt="Traditional Handloom Weaving"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          </motion.section>

          {/* ================= VALUES ================= */}
          <motion.section
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-primary text-center mb-12"
            >
              What Defines Us
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Handcrafted",
                  desc: "Every Jamakkalam is hand-woven by experienced artisans.",
                },
                {
                  title: "Durable",
                  desc: "Designed to withstand years of daily use.",
                },
                {
                  title: "Customizable",
                  desc: "Tailored sizes and color combinations available.",
                },
              ].map((value, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card p-10 rounded-2xl border border-border/50 shadow-sm text-center"
                >
                  <h3 className="text-xl font-semibold mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ================= ARTISANS ================= */}
          <motion.section
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] overflow-hidden"
          >
            <img
              src="/assets/about/artisans_at_work.jpg"
              alt="Artisans at work"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 md:px-20 text-center text-white max-w-4xl mx-auto">
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-bold mb-6"
              >
                Our Artisans
              </motion.h2>
              <motion.p
                variants={fadeUp}
                transition={{ delay: 0.1 }}
                className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed"
              >
                The heart of Thillaiyappa beats in the hands of our master weavers.
                Rooted in generations of tradition, their skill, patience, and
                artistry transform simple threads into timeless Jamakkalams—each
                one woven with care, pride, and heritage.
              </motion.p>
            </div>
          </motion.section>

        </div>
      </section>
    </div>
  );
}

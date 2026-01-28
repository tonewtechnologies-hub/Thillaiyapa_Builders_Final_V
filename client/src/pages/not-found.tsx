import { motion, cubicBezier } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

/* ================= ANIMATION VARIANTS ================= */

const container = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const iconFloat = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: cubicBezier(0.42, 0, 0.58, 1),
    },
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-muted/40 px-4">
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="rounded-3xl shadow-xl border border-border">
          <CardContent className="pt-10 pb-8 px-8 text-center">

            {/* Icon */}
            <motion.div
              variants={iconFloat}
              animate="animate"
              className="flex justify-center mb-6"
            >
              <AlertCircle className="h-12 w-12 text-primary" />
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.1 }}
              className="text-3xl font-bold text-foreground mb-3"
            >
              Page Not Found
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8"
            >
              The page you’re looking for doesn’t exist or may have been moved.
              Let’s get you back to familiar ground.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3 }}
            >
              <Button className="rounded-full px-8" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </motion.div>

          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

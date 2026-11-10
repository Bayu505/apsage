
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-white text-black transition-colors duration-300 dark:bg-[#111111] dark:text-white">

      <Navbar />

      {/* ABOUT CONTENT */}
      <section className="flex flex-1 items-center justify-center px-6 py-32">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto max-w-[850px] text-center"
        >
          <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.35em] text-gray-400">
            About APSAGE · Est. 2025
          </p>

          <p className="text-lg font-medium leading-[1.8] tracking-[-0.02em] text-gray-700 dark:text-gray-300 md:text-2xl">
            Born in Southeast Sulawesi in 2025,{" "}
            <span className="font-bold text-black dark:text-white">
              APSAGE
            </span>{" "}
            is an independent clothing brand built on creativity,
            individuality, and self-expression. Rooted in local identity
            with a contemporary perspective, we believe clothing is more
            than just what you wear — it is a reflection of who you are.
            Through thoughtful designs and creative expression, we aim
            to bring local perspectives beyond boundaries.
          </p>

          <div className="mx-auto mt-10 h-px w-12 bg-black/30 dark:bg-white/30" />

          <p className="mt-5 text-[9px] font-medium uppercase tracking-[0.3em] text-gray-400">
            Rooted Locally. Worn Everywhere.
          </p>
        </motion.div>

      </section>

      {/* COPYRIGHT */}
      <footer className="px-6 pb-6 md:px-10">
        <p className="text-[9px] tracking-[0.18em] text-gray-400">
          © 2026 APSAGE
        </p>
      </footer>

    </main>
  );
}

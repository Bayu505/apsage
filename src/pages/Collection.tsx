
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Collection() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-white text-black transition-colors duration-300 dark:bg-[#111111] dark:text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* COMING SOON */}
      <section className="flex flex-1 flex-col items-center justify-center px-5 text-center">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.4em] text-gray-400 md:text-xs">
            APSAGE® — EST. 2025
          </p>

          <h1 className="text-[15vw] font-black leading-none tracking-[-0.09em] md:text-[130px] lg:text-[170px]">
            COMING
            <br />
            SOON<span className="text-gray-400">.</span>
          </h1>

          <p className="mt-8 text-[10px] font-medium uppercase tracking-[0.3em] text-gray-400 md:text-xs">
            Something new is on its way.
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

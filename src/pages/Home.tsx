
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";

const frames = [
  {
    id: 1,
    images: [
      "/images/home/frame1-1.jpg",
      "/images/home/frame1-2.jpg",
      "/images/home/frame1-3.jpg",
    ],
    alt: "APSAGE clothing detail",
    fit: "cover",
    position: "center",
  },
  {
    id: 2,
    images: [
      "/images/home/frame2-1.jpg",
      "/images/home/frame2-2.jpg",
      "/images/home/frame2-3.jpg",
    ],
    alt: "APSAGE t-shirt product",
    fit: "contain",
    position: "center",
  },
  {
    id: 3,
    images: [
      "/images/home/frame3-1.jpg",
      "/images/home/frame3-2.jpg",
      "/images/home/frame3-3.jpg",
    ],
    alt: "APSAGE lifestyle collection",
    fit: "cover",
    position: "center",
  },
  {
    id: 4,
    images: [
      "/images/home/frame4-1.jpg",
      "/images/home/frame4-2.jpg",
      "/images/home/frame4-3.jpg",
    ],
    alt: "APSAGE fashion campaign",
    fit: "cover",
    position: "center",
  },
];

export default function Home() {
  const [step, setStep] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  // IMAGE SLIDER: CHANGE EVERY 3 SECONDS
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // WITA CLOCK: UPDATE EVERY SECOND
  useEffect(() => {
    const clock = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(clock);
  }, []);

  const getImageIndex = (frameIndex: number) => {
    if (step <= frameIndex) return 0;

    const changes =
      Math.floor((step - 1 - frameIndex) / frames.length) + 1;

    return changes % frames[frameIndex].images.length;
  };

  return (
    <main className="relative h-[100svh] w-full overflow-hidden bg-white text-black transition-colors duration-300 dark:bg-[#111111] dark:text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* IMAGE COLLAGE */}
      <section
        className="
          absolute
          left-1/2
          top-[clamp(105px,14vh,150px)]
          w-[min(92vw,850px,96vh)]
          -translate-x-1/2
          md:w-[min(61vw,850px,96vh)]
          aspect-[640/470]
        "
      >
        <div
          className="
            grid
            h-full
            w-full
            grid-cols-[1fr_1fr_1.4fr]
            grid-rows-2
            gap-0
            overflow-hidden
          "
        >
          {frames.map((frame, index) => {
            const imageIndex = getImageIndex(index);

            const gridPosition = [
              "col-start-1 row-start-1",
              "col-start-2 row-start-1",
              "col-start-1 col-span-2 row-start-2",
              "col-start-3 row-start-1 row-span-2",
            ][index];

            return (
              <div
                key={frame.id}
                className={`relative h-full w-full overflow-hidden ${gridPosition}`}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${frame.id}-${imageIndex}`}
                    src={frame.images[imageIndex]}
                    alt={frame.alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 h-full w-full"
                    style={{
                      objectFit: frame.fit as "cover" | "contain",
                      objectPosition: frame.position,
                    }}
                  />
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* BRAND TAGLINE - LEFT BOTTOM */}
      <div
        className="
          absolute
          bottom-[11.5%]
          left-[1.4%]
          z-10
          max-w-[min(320px,45vw)]
        "
      >
        <h1
          className="
            text-[clamp(10px,1.1vw,17px)]
            font-semibold
            leading-[1.3]
            tracking-[0.2em]
          "
        >
          APSAGE.
          <br />
          FROM SOUTHEAST,
          <br />
          WITH IDENTITY.
          <br />
          BORN LOCAL.
          <br />
          MADE TO STAND OUT.
        </h1>
      </div>

      {/* COPYRIGHT - LEFT BOTTOM */}
      <div className="absolute bottom-[4%] left-[1.4%] z-10">
        <p className="text-[clamp(7px,0.65vw,9px)] font-medium tracking-[0.18em] text-gray-400">
          © 2026 APSAGE
        </p>
      </div>

      {/* DATE & TIME - RIGHT BOTTOM */}
      <div className="absolute bottom-[4%] right-[1.4%] z-10 text-right">
        <p className="text-[clamp(7px,0.65vw,9px)] font-medium tracking-[0.15em] text-gray-400">
          {currentTime
            .toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              timeZone: "Asia/Makassar",
            })
            .toUpperCase()}
        </p>

        <p className="mt-1 text-[clamp(8px,0.8vw,11px)] font-medium tracking-[0.12em] text-black dark:text-white">
          {currentTime.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
            timeZone: "Asia/Makassar",
          })} WITA
        </p>
      </div>

    </main>
  );
}

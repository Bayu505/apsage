
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [socialOpen, setSocialOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("apsage-theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("apsage-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const navLinkClass = `
    font-sans 
    text-[13px] font-medium tracking-[0.08em]
    text-black dark:text-white
    transition-colors duration-300
    hover:text-gray-400 dark:hover:text-gray-400
  `;

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-5 pt-6 md:px-10 md:pt-8">
      <nav className="relative mx-auto flex max-w-[1600px] items-center justify-between">

        {/* LOGO - LEFT */}
        <Link
          to="/"
          className="relative z-10 flex items-center gap-2"
          onClick={() => {
            setMobileOpen(false);
            setSocialOpen(false);
          }}
        >
          <img
            src="/images/logo/LOGO APSAGE 2.jpg"
            alt="APSAGE"
            className="h-9 w-9 rounded-md object-contain md:h-10 md:w-10"
          />

          <span className="text-xl font-black tracking-[-0.06em] text-black dark:text-white">
            APSAGE<span className="ml-0.5 text-[9px] align-top">®</span>
          </span>
        </Link>

        {/* DESKTOP MENU - CENTER */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">

          <Link to="/collection" className={navLinkClass}>
            Collection
          </Link>

          <Link to="/about" className={navLinkClass}>
            About
          </Link>

          {/* SOCIALS */}
          <div className="relative">
            <button
              onClick={() => setSocialOpen(!socialOpen)}
              className={`${navLinkClass} flex items-center gap-2`}
            >
              Socials
              <span
                className={`text-[9px] transition-transform duration-300 ${
                  socialOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {socialOpen && (
              <div className="
                absolute left-1/2 top-full mt-4
                w-40 -translate-x-1/2
                rounded-lg border border-black/10
                bg-white/95 p-2 shadow-lg backdrop-blur-xl
                dark:border-white/10 dark:bg-[#171717]/95
              ">
                <a
                  href="https://www.instagram.com/apsage.studio/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    block rounded-md px-3 py-3 text-center text-sm
                    text-black transition hover:bg-gray-100
                    dark:text-white dark:hover:bg-white/10
                  "
                >
                  Instagram ↗
                </a>

                <a
                  href="https://www.tiktok.com/@apsage.studio"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    block rounded-md px-3 py-3 text-center text-sm
                    text-black transition hover:bg-gray-100
                    dark:text-white dark:hover:bg-white/10
                  "
                >
                  TikTok ↗
                </a>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="relative z-10 flex items-center gap-3">

          {/* DARK / LIGHT MODE */}
          <button
            onClick={toggleTheme}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Light Mode" : "Dark Mode"}
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full border border-black/10
              text-black transition-all duration-300
              hover:bg-black hover:text-white
              dark:border-white/15 dark:text-white
              dark:hover:bg-white dark:hover:text-black
            "
          >
            {darkMode ? (
              <Sun size={17} strokeWidth={1.7} />
            ) : (
              <Moon size={17} strokeWidth={1.7} />
            )}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            className="text-black dark:text-white md:hidden"
          >
            {mobileOpen ? (
              <X size={23} strokeWidth={1.7} />
            ) : (
              <Menu size={23} strokeWidth={1.7} />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="
            absolute left-0 right-0 top-full mt-5
            rounded-xl border border-black/10
            bg-white/95 p-6 shadow-lg backdrop-blur-xl
            dark:border-white/10 dark:bg-[#171717]/95
            md:hidden
          ">
            <div className="flex flex-col items-center text-center">

              <Link
                to="/collection"
                onClick={() => setMobileOpen(false)}
                className={`${navLinkClass} w-full border-b border-black/10 py-4 dark:border-white/10`}
              >
                Collection
              </Link>

              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className={`${navLinkClass} w-full border-b border-black/10 py-4 dark:border-white/10`}
              >
                About
              </Link>

              <p className={`${navLinkClass} py-4`}>
                Socials
              </p>

              <div className="flex justify-center gap-7 pb-4">
                <a
                  href="https://www.instagram.com/apsage.studio/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-500 hover:text-black dark:hover:text-white"
                >
                  Instagram ↗
                </a>

                <a
                  href="https://www.tiktok.com/@apsage.studio"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-500 hover:text-black dark:hover:text-white"
                >
                  TikTok ↗
                </a>
              </div>

              <div className="mt-2 text-xs tracking-wider text-gray-400">
                {darkMode ? "DARK MODE" : "LIGHT MODE"}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

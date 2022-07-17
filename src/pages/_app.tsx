import { StrictMode, useEffect, useRef, useState } from "react";

import Head from "next/head";
import { Router } from "next/router";

import { SWRConfig } from "swr";
import NProgress from "nprogress";
import { Toaster } from "react-hot-toast";
import { Squash } from "hamburger-react";

import {
  CURRENT_YEAR,
  DISCORD_ID,
  FULL_NAME,
  loadCursor,
  POSITION,
  USERNAME,
} from "../util/";
import { NavLink, navLinkClassName } from "../container";

import { AnimatePresence, motion } from "framer-motion";

import "../styles/global.css";
import "nprogress/nprogress.css";

import type { AppProps } from "next/app";

Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeComplete", NProgress.done);
Router.events.on("routeChangeError", NProgress.done);

export default function App({ Component, pageProps, router }: AppProps) {
  const [mobileMenuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const ballCanvas = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen((old) => !old);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "unset";
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (typeof window === "undefined" || !ballCanvas.current) {
      return;
    }

    return loadCursor(ballCanvas.current);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    setMenuOpen(false);

    const pop = new Audio("/pop.mp3");

    void pop.play().catch(() => undefined);
  }, [router.pathname]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const listener = () => {
      setHasScrolled(window.scrollY > 20);
    };

    document.addEventListener("scroll", listener);

    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = (
    <>
      <NavLink href="/" closeMenu={closeMenu}>
        Home
      </NavLink>

      <NavLink href="/contact" closeMenu={closeMenu}>
        Contact
      </NavLink>

      <li>
        <a
          target="_blank"
          href="https://blog.ultirequiem.com"
          rel="noreferrer"
          className={navLinkClassName}
        >
          Blog 📝
        </a>
      </li>
    </>
  );

  return (
    <StrictMode>
      <SWRConfig
        value={{
          fallback: {
            [`lanyard:${DISCORD_ID}`]: pageProps?.lanyard,
            [`https://gh-pinned-repos.egoist.sh/?username=${USERNAME}`]:
              pageProps?.pinnedRepos,
          },
        }}
      >
        <Toaster toastOptions={{ position: "top-left" }} />

        <Head>
          <title>{FULL_NAME}</title>
        </Head>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-10 py-24 px-8 space-y-2 bg-white dark:bg-gray-900 sm:hidden"
            >
              <h1 className="text-4xl font-bold">Sections</h1>

              <ul className="grid grid-cols-1 gap-2">{navLinks}</ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="overflow-hidden sticky top-0 z-20 h-32 transition-all sm:hidden">
          <div
            className={`${
              hasScrolled || mobileMenuOpen ? "mt-0" : "mt-10 mx-5"
            } bg-gray-100 dark:bg-gray-900 relative transition-all ${
              hasScrolled || mobileMenuOpen ? "rounded-none" : "rounded-lg"
            }`}
          >
            <div
              className={`pr-5 flex justify-between transition-colors space-x-2 ${
                mobileMenuOpen
                  ? "bg-gray-100 dark:bg-gray-800"
                  : "bg-transparent"
              }`}
            >
              <button
                type="button"
                className="block relative z-50 px-2 text-gray-500 focus:ring transition-all"
                onClick={toggleMenu}
              >
                <Squash
                  toggled={mobileMenuOpen}
                  size={20}
                  color="currentColor"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="py-10 px-5 mx-auto max-w-4xl">
          <div className="hidden items-center space-x-2 sm:flex">
            <nav className="flex-1">
              <ul className="flex space-x-4">{navLinks}</ul>
            </nav>
          </div>

          <main className="mx-auto space-y-12 max-w-3xl md:py-24 text-black dark:text-white">
            <Component {...pageProps} />
          </main>

          <footer className="p-4 py-5 mx-auto md:mt-0 mt-5 max-w-3xl border-t-2 border-gray-900/10 dark:border-white/10 opacity-50">
            <h1 className="text-3xl font-bold">{FULL_NAME}</h1>
            <p>
              {POSITION} • {CURRENT_YEAR}
            </p>
          </footer>
        </div>

        <div
          ref={ballCanvas}
          className="fixed z-30 w-6 h-6 bg-transparent rounded-full border border-black dark:border-white shadow-md opacity-0 duration-200 pointer-events-none ball-transitions"
        />
      </SWRConfig>
    </StrictMode>
  );
}

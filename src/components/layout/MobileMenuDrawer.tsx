"use client";

import React, { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Search, X, FaGithub } from "@/lib/icons";
import MobileMenuPortal from "./MobileMenuPortal";
import Accordion from "./Accordion";
import MobileLink from "./MobileLink";
import ThemeToggle from "./ThemeToggle";
import { PlatformMenu, ArchitectureMenu, ResourceMenu } from "./MegaMenu";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface MobileMenuDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

const DRAWER_WIDTH = "w-[85vw] max-w-[360px]";
const TRANSITION_DURATION = 300; // ms — must match CSS transition duration

// ─────────────────────────────────────────────────────────────────────────────
// useSyncExternalStore subscription helpers (stable references)
// ─────────────────────────────────────────────────────────────────────────────

const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Returns all focusable elements inside a container.
 */
function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function MobileMenuDrawer({
  open,
  setOpen,
  className = "",
}: MobileMenuDrawerProps): React.ReactElement | null {
  // ── Hydration safety via useSyncExternalStore (no setState in effect) ───
  const mounted = useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  // ── Visibility & enter/exit animation orchestration ───────────────────────
  const [isVisible, setIsVisible] = useState(false);

  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // ── Accordion state ───────────────────────────────────────────────────────
  const [accordions, setAccordions] = useState({
    platform: false,
    architecture: false,
    resources: false,
  });

  const toggleAccordion = useCallback(
    (key: keyof typeof accordions) => {
      setAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
    },
    []
  );

  // ── Visibility effect (async setState via setTimeout, not sync) ───────────
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(
        () => setIsVisible(false),
        TRANSITION_DURATION
      );
      return () => clearTimeout(timer);
    }
  }, [open]);

  // ── Focus management (capture previous focus, move to close button) ───────
  useEffect(() => {
    if (open) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        previousFocusRef.current?.focus();
        previousFocusRef.current = null;
      }, TRANSITION_DURATION);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // ── Escape key closes drawer ─────────────────────────────────────────────
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, setOpen]);

  // ── Focus trap (Tab / Shift+Tab cycling) ─────────────────────────────────
  useEffect(() => {
    if (!open || !drawerRef.current) return;

    const focusableElements = getFocusableElements(drawerRef.current);
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    function handleTabKey(event: KeyboardEvent) {
      if (event.key !== "Tab") return;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }

    document.addEventListener("keydown", handleTabKey);
    return () => document.removeEventListener("keydown", handleTabKey);
  }, [open]);

  // ── Backdrop click closes drawer ─────────────────────────────────────────
  const handleBackdropClick = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  // ── Render nothing during SSR / hydration ────────────────────────────────
  if (!mounted) return null;
  if (!open && !isVisible) return null;

  // ── Drawer content ───────────────────────────────────────────────────────
  return (
    <MobileMenuPortal>
      <div className={`fixed inset-0 z-[60] ${className}`}>
        {/* Backdrop */}
        <div
          role="presentation"
          aria-hidden={!open}
          onClick={handleBackdropClick}
          className={`
            absolute inset-0
            bg-black/60 backdrop-blur-sm
            transition-opacity duration-300 ease-in-out
            ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
        />

        {/* Drawer panel */}
        <div
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className={`
            fixed top-0 right-0 h-full
            ${DRAWER_WIDTH}
            bg-white dark:bg-slate-900
            shadow-2xl
            flex flex-col
            transform transition-transform duration-300 ease-in-out
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* ── Header ─────────────────────────────────────────────────────── */}
          <header className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-700 shrink-0">
            <span className="text-lg font-semibold text-slate-900 dark:text-white">
              Menu
            </span>

            <div className="flex items-center gap-3">
              <ThemeToggle />

              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="
                  p-2 rounded-lg
                  hover:bg-slate-100 dark:hover:bg-slate-800
                  transition-colors
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  focus:ring-offset-2 dark:focus:ring-offset-slate-900
                "
              >
                <X
                  size={20}
                  className="text-slate-600 dark:text-slate-300"
                  aria-hidden="true"
                />
              </button>
            </div>
          </header>

          {/* ── Scrollable navigation ──────────────────────────────────────── */}
          <nav
            className="flex-1 overflow-y-auto overscroll-contain px-5 py-4 space-y-3"
            aria-label="Mobile menu navigation"
          >
            {/* Search button */}
            <button
              type="button"
              className="
                flex items-center gap-3 w-full
                px-4 py-3 rounded-xl
                bg-slate-100 dark:bg-slate-800
                text-slate-600 dark:text-slate-300
                hover:bg-slate-200 dark:hover:bg-slate-700
                transition-colors
                focus:outline-none focus:ring-2 focus:ring-blue-500
                focus:ring-offset-2 dark:focus:ring-offset-slate-900
              "
            >
              <Search size={20} aria-hidden="true" />
              <span className="text-sm font-medium">Search</span>
            </button>

            {/* Platform accordion */}
            <Accordion
              title="Platform"
              open={accordions.platform}
              onToggle={() => toggleAccordion("platform")}
            >
              <div className="space-y-1">
                {PlatformMenu.map((item) => (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    title={item.title}
                    description={item.description}
                    onClick={() => setOpen(false)}
                  />
                ))}
              </div>
            </Accordion>

            {/* Architecture accordion */}
            <Accordion
              title="Architecture"
              open={accordions.architecture}
              onToggle={() => toggleAccordion("architecture")}
            >
              <div className="space-y-1">
                {ArchitectureMenu.map((item) => (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    title={item.title}
                    description={item.description}
                    onClick={() => setOpen(false)}
                  />
                ))}
              </div>
            </Accordion>

            {/* Resources accordion */}
            <Accordion
              title="Resources"
              open={accordions.resources}
              onToggle={() => toggleAccordion("resources")}
            >
              <div className="space-y-1">
                {ResourceMenu.map((item) => (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    title={item.title}
                    description={item.description}
                    onClick={() => setOpen(false)}
                  />
                ))}
              </div>
            </Accordion>

            {/* Direct links */}
            <div className="pt-2 space-y-1">
              <MobileLink
                href="/about"
                title="About"
                onClick={() => setOpen(false)}
              />
              <MobileLink
                href="/contact"
                title="Contact"
                onClick={() => setOpen(false)}
              />
            </div>
          </nav>

          {/* ── Footer ───────────────────────────────────────────────────── */}
          <footer className="shrink-0 px-5 py-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <Link
                href="https://github.com/rakeshjillella/openmartech-ai"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="
                  inline-flex items-center gap-2
                  px-4 py-2.5 rounded-xl
                  bg-slate-900 dark:bg-white
                  text-white dark:text-slate-900
                  text-sm font-medium
                  hover:bg-slate-800 dark:hover:bg-slate-100
                  transition-colors
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  focus:ring-offset-2 dark:focus:ring-offset-slate-900
                "
              >
                <FaGithub size={18} aria-hidden="true" />
                GitHub
              </Link>

              <span className="text-xs text-slate-400 dark:text-slate-500">
                v1.0.0
              </span>
            </div>
          </footer>
        </div>
      </div>
    </MobileMenuPortal>
  );
}
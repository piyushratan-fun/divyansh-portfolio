"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DIVYANSH_PROFILE } from "@/content/divyanshContent";

type BrandLoaderProps = {
  visible: boolean;
};

// Cinematic split-opening bezier curve
const splitEase = [0.77, 0, 0.175, 1] as const;

export function BrandLoader({ visible }: BrandLoaderProps) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="brand-loader-root"
          className="brand-loader-overlay fixed inset-0 z-[200] pointer-events-auto select-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 1,
            pointerEvents: "none",
            transition: { duration: 0.9, delay: 0.05 },
          }}
        >
          {/* Top Half Split Shutter (Slides UP on Exit, carrying the TOP HALF of DK) */}
          <motion.div
            key="shutter-top"
            className="absolute top-0 inset-x-0 h-1/2 overflow-hidden bg-[#090909] border-b border-primary/40 z-20"
            initial={{ y: 0 }}
            exit={{
              y: "-100%",
              transition: { duration: 0.85, ease: splitEase },
            }}
          >
            {/* Top inner container: 200% height anchored to top: 0, DK is centered at bottom edge (50% of screen) */}
            <div className="absolute top-0 inset-x-0 h-[200%] w-full flex items-center justify-center pointer-events-none select-none">
              <span
                className="font-display font-bold uppercase leading-none text-white tracking-[-0.04em]"
                style={{
                  fontSize: "clamp(100px, 26vw, 220px)",
                  display: "inline-block",
                }}
              >
                {DIVYANSH_PROFILE.monogram}
              </span>
            </div>
          </motion.div>

          {/* Bottom Half Split Shutter (Slides DOWN on Exit, carrying the BOTTOM HALF of DK) */}
          <motion.div
            key="shutter-bottom"
            className="absolute bottom-0 inset-x-0 h-1/2 overflow-hidden bg-[#090909] border-t border-primary/40 z-20"
            initial={{ y: 0 }}
            exit={{
              y: "100%",
              transition: { duration: 0.85, ease: splitEase },
            }}
          >
            {/* Bottom inner container: 200% height anchored to bottom: 0, DK is centered at top edge (50% of screen) */}
            <div className="absolute bottom-0 inset-x-0 h-[200%] w-full flex items-center justify-center pointer-events-none select-none">
              <span
                className="font-display font-bold uppercase leading-none text-white tracking-[-0.04em]"
                style={{
                  fontSize: "clamp(100px, 26vw, 220px)",
                  display: "inline-block",
                }}
              >
                {DIVYANSH_PROFILE.monogram}
              </span>
            </div>
          </motion.div>

          {/* Center Strikethrough Dividing Laser Line Accent across the horizontal equator */}
          <motion.div
            key="shutter-center-line"
            className="absolute top-1/2 inset-x-0 h-[2px] bg-primary z-30 pointer-events-none -translate-y-1/2"
            initial={{ opacity: 1, scaleX: 1 }}
            exit={{
              opacity: 0,
              scaleX: 0,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

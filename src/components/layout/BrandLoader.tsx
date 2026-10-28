"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DIVYANSH_PROFILE } from "@/content/divyanshContent";

type BrandLoaderProps = {
  visible: boolean;
};

// Precise cubic-bezier curve for cinematic split opening
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
            opacity: 0,
            pointerEvents: "none",
            transition: { duration: 0.8, ease: splitEase },
          }}
        >
          {/* Top Half Split Shutter (Slides UP on Exit) */}
          <motion.div
            key="shutter-top"
            className="absolute top-0 inset-x-0 h-1/2 bg-[#090909] border-b border-white/10 z-10"
            initial={{ y: 0 }}
            exit={{
              y: "-100%",
              transition: { duration: 0.75, ease: splitEase },
            }}
          />

          {/* Bottom Half Split Shutter (Slides DOWN on Exit) */}
          <motion.div
            key="shutter-bottom"
            className="absolute bottom-0 inset-x-0 h-1/2 bg-[#090909] border-t border-white/10 z-10"
            initial={{ y: 0 }}
            exit={{
              y: "100%",
              transition: { duration: 0.75, ease: splitEase },
            }}
          />

          {/* Center Dividing Split Line Accent */}
          <motion.div
            key="shutter-center-line"
            className="absolute top-1/2 inset-x-0 h-px bg-primary/40 -translate-y-1/2 z-20 pointer-events-none"
            initial={{ opacity: 1, scaleX: 1 }}
            exit={{
              opacity: 0,
              scaleX: 0,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
          />

          {/* Foreground Content Container (Fades out cleanly right before shutters split) */}
          <motion.div
            key="loader-content"
            className="relative z-30 flex h-full w-full items-center justify-center text-white"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 0.96,
              transition: { duration: 0.35, ease: "easeIn" },
            }}
          >
            {/* Only DK in the middle */}
            <motion.div
              className="select-none text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-[clamp(100px,24vw,220px)] font-bold uppercase leading-none tracking-[-0.04em] text-white">
                {DIVYANSH_PROFILE.monogram}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Activity,
  Atom,
  Cpu,
  Dna,
  FlaskConical,
  Lightbulb,
  Microscope,
  Sparkles,
  Wrench,
  Plus,
} from "lucide-react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { RevealText } from "@/components/motion/RevealText";
import { Button } from "@/components/ui/button";
import { useMobileMotionSafety } from "@/hooks/useMobileMotionSafety";

const heroSilhouette = "/hero-silhouette.png";

export function Hero() {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const shouldUseStaticMotion = useMobileMotionSafety();
  const useStaticMotion = shouldReduceMotion || shouldUseStaticMotion;
  const y1 = useTransform(scrollY, [0, 600], [0, 120]);
  const y2 = useTransform(scrollY, [0, 600], [0, -60]);

  const pointerXValue = useMotionValue(0);
  const pointerYValue = useMotionValue(0);
  const pointerX = useSpring(pointerXValue, { stiffness: 80, damping: 18, mass: 0.7 });
  const pointerY = useSpring(pointerYValue, { stiffness: 80, damping: 18, mass: 0.7 });
  const letterX = useTransform(pointerX, [-1, 1], [-18, 18]);
  const letterReverseX = useTransform(pointerX, [-1, 1], [14, -14]);
  const figureX = useTransform(pointerX, [-1, 1], [14, -14]);
  const figureY = useTransform(pointerY, [-1, 1], [8, -8]);
  const iconsX = useTransform(pointerX, [-1, 1], [-24, 24]);
  const iconsY = useTransform(pointerY, [-1, 1], [-16, 16]);

  const resetHeroPointer = React.useCallback(() => {
    pointerXValue.set(0);
    pointerYValue.set(0);
  }, [pointerXValue, pointerYValue]);

  const handleHeroPointerMove = React.useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      if (useStaticMotion || event.pointerType !== "mouse") {
        return;
      }

      const rect = event.currentTarget.getBoundingClientRect();
      pointerXValue.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
      pointerYValue.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
    },
    [pointerXValue, pointerYValue, useStaticMotion],
  );

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-background pt-20"
      onPointerLeave={useStaticMotion ? undefined : resetHeroPointer}
      onPointerMove={useStaticMotion ? undefined : handleHeroPointerMove}
    >
      {/* Background Big Monogram Letter D */}
      <motion.div
        aria-hidden="true"
        className="absolute top-[8%] right-[18%] sm:right-[20%] z-0 select-none font-display font-bold leading-none text-foreground/[0.16] pointer-events-none"
        style={{
          fontSize: "clamp(160px, 30vw, 460px)",
          x: useStaticMotion ? 0 : letterX,
          y: useStaticMotion ? 0 : y1,
        }}
      >
        D
      </motion.div>

      {/* Background Big Monogram Letter K */}
      <motion.div
        aria-hidden="true"
        className="absolute top-[8%] right-[2%] sm:right-[4%] z-0 select-none font-display font-bold leading-none text-foreground/[0.10] pointer-events-none"
        style={{
          fontSize: "clamp(160px, 30vw, 460px)",
          x: useStaticMotion ? 0 : letterReverseX,
          y: useStaticMotion ? 0 : y1,
        }}
      >
        K
      </motion.div>

      {/* Innovation / Lightbulb Background Motif with "Student Inventor" Label */}
      <motion.div
        aria-hidden="true"
        className="absolute left-[16%] sm:left-[22%] md:left-[24%] top-[40%] md:top-[44%] -translate-y-1/2 z-0 select-none pointer-events-none flex flex-col items-center justify-center transform-gpu"
        style={{
          x: useStaticMotion ? 0 : iconsX,
          y: useStaticMotion ? 0 : y1,
          rotate: -8,
        }}
      >
        <div
          style={{
            width: "clamp(130px, 18vw, 280px)",
            height: "clamp(130px, 18vw, 280px)",
          }}
          className="relative flex items-center justify-center text-foreground/[0.14] md:text-foreground/[0.18]"
        >
          <Lightbulb
            className="w-full h-full text-foreground/85"
            strokeWidth={1.0}
          />

          {/* Sharp "Student Inventor" Badge directly on motif */}
          <div className="absolute top-[54%] -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center">
            <div className="border border-foreground/20 bg-background/95 px-2.5 sm:px-3 py-0.5 sm:py-1 shadow-xs backdrop-blur-xs">
              <p className="font-display text-[9px] sm:text-xs font-bold uppercase tracking-[0.16em] sm:tracking-[0.24em] text-foreground whitespace-nowrap">
                Student Inventor • Applied PCB
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating PCB & Innovation Stream Icons */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        style={{ x: useStaticMotion ? 0 : iconsX, y: useStaticMotion ? 0 : iconsY }}
      >
        <Dna className="floating-icon top-[14%] left-[30%] text-emerald-500/25" />
        <Lightbulb className="floating-icon top-[32%] right-[32%] text-amber-500/25" />
        <Atom className="floating-icon top-[54%] left-[16%] text-purple-500/25" />
        <Cpu className="floating-icon top-[22%] right-[38%] text-primary/35" strokeWidth={1.5} />
        <FlaskConical className="floating-icon top-[64%] left-[38%] text-blue-500/25" strokeWidth={1.5} />
        <Wrench className="floating-icon top-[40%] left-[5%] text-slate-500/25" />
        <Sparkles className="floating-icon top-[50%] right-[5%] text-amber-400/25" />
      </motion.div>

      <div className="relative z-10 mx-auto min-h-[100svh] w-full max-w-[1600px] px-6 md:h-screen md:px-12">
        {/* DIVYANSH Text Header */}
        <motion.div
          data-mobile-static-motion="true"
          className="absolute left-4 top-[8%] z-20 sm:left-8 md:left-12"
          initial={useStaticMotion ? false : { opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className="font-display font-bold uppercase leading-none tracking-normal text-display-tone"
            style={{ fontSize: "clamp(36px, 10.5vw, 220px)" }}
          >
            <RevealText text="DIVYANSH" split="chars" stagger={0.035} />
          </h1>
        </motion.div>

        {/* Center-Right Divyansh Silhouette Cutout */}
        <div
          className="absolute left-[54%] top-[48%] z-10 -translate-x-[30%] -translate-y-[52%] pointer-events-none"
          style={{ height: "clamp(300px, 78vh, 1200px)", width: "clamp(300px, 78vh, 1200px)" }}
        >
          <motion.div
            data-mobile-static-motion="true"
            className="h-full w-full flex items-center justify-center"
            initial={useStaticMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: useStaticMotion ? 0 : figureX, y: useStaticMotion ? 0 : figureY }}
          >
            <img
              src={heroSilhouette}
              alt="Divyansh Katiyar silhouette cutout"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              style={{
                height: "100%",
                width: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.12))",
              }}
            />
          </motion.div>
        </div>

        {/* KATIYAR Text Header */}
        <motion.div
          data-mobile-static-motion="true"
          className="absolute bottom-[24%] right-4 z-20 text-right sm:bottom-[25%] sm:right-10 md:bottom-[26%] md:right-24"
          initial={useStaticMotion ? false : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: useStaticMotion ? 0 : y2 }}
        >
          <h1
            className="font-display font-bold uppercase tracking-normal text-display-tone"
            style={{ fontSize: "clamp(40px, 8.5vw, 190px)" }}
          >
            <RevealText text="KATIYAR" split="chars" delay={0.2} stagger={0.04} />
          </h1>
        </motion.div>

        {/* Hero Bottom Controls & Details */}
        <motion.div
          data-mobile-static-motion="true"
          className="absolute bottom-3 left-4 right-4 z-30 sm:bottom-5 sm:left-8 sm:right-8 md:bottom-6 md:left-12 md:right-12"
          initial={useStaticMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex w-full flex-row items-center justify-center gap-2.5 sm:gap-4 md:gap-8 mb-3 sm:mb-4">
            <MagneticButton className="min-w-0 flex-1 sm:flex-none">
              <Button
                asChild
                size="hero"
                className="premium-soft-hover w-full rounded-none font-bold uppercase tracking-wider sm:min-w-[12rem] sm:max-w-[15rem] sm:tracking-[0.2em]"
              >
                <a href="#about">About Divyansh</a>
              </Button>
            </MagneticButton>

            <MagneticButton className="min-w-0 flex-1 sm:flex-none" strength={0.16}>
              <Button
                asChild
                variant="outline"
                size="hero"
                className="premium-soft-hover w-full rounded-none border-foreground font-bold uppercase tracking-wider hover:text-background sm:min-w-[13rem] sm:max-w-[16rem] sm:tracking-[0.16em]"
              >
                <a href="#pcb-curriculum">Applied Disciplines</a>
              </Button>
            </MagneticButton>
          </div>

          <div className="flex items-end justify-between gap-4 border-t border-foreground/10 pt-2.5 sm:pt-3 md:pt-4">
            <div>
              <p className="mb-0.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Academic &amp; Practical Focus
              </p>
              <p className="text-[11px] sm:text-xs md:text-sm font-medium uppercase tracking-wide text-foreground">
                Biology • Innovation • Applied Tech
              </p>
            </div>
            <div className="text-right">
              <p className="mb-0.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Academic Year
              </p>
              <p className="text-[11px] sm:text-xs md:text-sm font-medium uppercase tracking-wide text-foreground">
                Class 12 • 2026
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

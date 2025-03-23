"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Github,
  InstagramIcon,
  Linkedin,
  Twitter,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateTranslate = (axis: "x" | "y", factor = 30) => {
    const center =
      axis === "x" ? window.innerWidth / 2 : window.innerHeight / 2;
    const position = axis === "x" ? mousePosition.x : mousePosition.y;
    const offset = (position - center) / factor;
    return offset;
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 dark:from-background dark:to-background/50 z-0" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
          animate={{
            x: calculateTranslate("x", 20),
            y: calculateTranslate("y", 20),
          }}
          transition={{ type: "spring", damping: 50, stiffness: 100 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
          animate={{
            x: calculateTranslate("x", -20),
            y: calculateTranslate("y", -20),
          }}
          transition={{ type: "spring", damping: 50, stiffness: 100 }}
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Gabe D.</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-6">
              <TypeAnimation
                sequence={[
                  "University Student",
                  1000,
                  "UI/UX Designer",
                  1000,
                  "C/C++ Developer",
                  1000,
                  "and Lifelong Learner!",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
              I build exceptional digital experiences that are fast, accessible,
              visually appealing, and responsive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#projects"
              className="rounded-full flex items-center justify-center"
            >
              <Button size="lg">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a
              href="#contact"
              className="rounded-full flex items-center justify-center"
            >
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-6"
          >
            <a
              href="https://github.com/petervannord"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/80 dark:bg-muted/30 backdrop-blur-sm p-3 rounded-full hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/gabedejan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/80 dark:bg-muted/30 backdrop-blur-sm p-3 rounded-full hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            {/* <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/80 dark:bg-muted/30 backdrop-blur-sm p-3 rounded-full hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a> */}
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/80 dark:bg-muted/30 backdrop-blur-sm p-3 rounded-full hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a> */}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-2 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}

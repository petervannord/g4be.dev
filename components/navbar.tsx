"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pointer-events-none fixed inset-x-0 top-0 z-30 mx-auto mt-4 flex h-full max-h-14 origin-top"
    >
      {/* Background gradient overlay for a soft fade */}
      <div className="fixed inset-x-0 top-0 h-16 w-full bg-background from-transparent to-background backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-background"></div>

      <div className="pointer-events-auto relative z-50 mx-auto flex h-full min-h-full transform-gpu items-center bg-background px-4 py-2 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_20px_80px_-20px_#ffffff1f_inset] rounded-full">
        <div className="flex flex-1 space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button className="rounded-full">Download CV</Button>
        </div>
      </div>
    </motion.div>
  );
}

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  Home,
  Info,
  Code,
  Folder,
  MessageSquare,
  Mail,
  Download,
} from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: Info },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Folder },
  { name: "Testimonials", href: "#testimonials", icon: MessageSquare },
  { name: "Contact", href: "#contact", icon: Mail },
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
        {/* Desktop navigation: reactive text links */}
        <div className="hidden md:flex flex-1 space-x-6">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <Link
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile navigation: evenly spaced icons */}
        <div className="flex md:hidden flex-1 justify-between px-4">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer"
              >
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="h-6 w-6" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="flex items-center space-x-0">
          <div className="w-3 h-8"></div>
          <ModeToggle />
          {/* Desktop: text button, Mobile: icon button */}
          {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="rounded-full hidden ml-4 md:inline">
              Download CV
            </Button>
          </motion.div> */}
          {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="rounded-full md:hidden">
              <Download className="h-6 w-6" />
            </Button>
          </motion.div> */}
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import CountUp from "react-countup";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { value: 4, label: "Years Experience" },
    { value: 14, label: "Projects Completed" },
    { value: 8, label: "Happy Clients" },
    { value: 30, label: "Contributions" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here you'll find more information about me, what I do, and my
            current skills in terms of programming and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden border-none shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://cis9db4fll.ufs.sh/f/dfhCbRMwVEKti77lWu5ce67x2p4EonMJIhf9wtCH0RZB3YXD"
                    alt="Gabe D."
                    width={660}
                    height={600}
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold mb-2">Gabriel Dejan</h3>
                    <p className="text-muted-foreground">
                      Full-Stack Developer based in Cleveland
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">
              I'm a passionate Full-Stack Developer / Student
            </h3>
            <p className="text-muted-foreground">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores. My passion is to design digital user
              experiences through meaningful interactions. Check out my
              portfolio.
            </p>
            <p className="text-muted-foreground">
              I've been developing websites and applications for over 5 years,
              working with clients from various industries including technology,
              education, and e-commerce. My approach combines technical
              expertise with creative problem-solving to deliver exceptional
              digital solutions.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-1">
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    +
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <Button className="rounded-full" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

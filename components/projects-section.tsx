"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "HWID Management System",
      description:
        "A comprehensive HWID management platform for e-commerce businesses & dedicated users, featuring user authentication, payment processing, and an intuitive admin dashboard.",
      image:
        "https://cis9db4fll.ufs.sh/f/dfhCbRMwVEKt7ShxqmFXqBCdb8Mw9RsJV4onpyKWtm7rO21S",
      tags: ["C++", "Keyauth", "ImGui", "Desktop", "React", "NextJS"],
      demoLink: "https://hwidchanger.com",
      githubLink: "https://github.com/petervannord/hwidchanger.com",
    },
    {
      id: 2,
      title: "Developer Portfolio",
      description:
        "A showcase of my projects and skills, built with React, NextJS, Tailwind CSS, and Typescript.",
      image:
        "https://cis9db4fll.ufs.sh/f/dfhCbRMwVEKt9uQCEBOq7KqhBIyVD0gsQAm4x1wOPZ2G8LRT",
      tags: ["React", "NextJS", "Tailwind CSS", "Typescript", "web"],
      demoLink: "https://g4be.dev",
      githubLink: "https://github.com/petervannord/g4be.dev",
    },
    {
      id: 3,
      title: "Auto Detailing Online Booking & Design",
      description:
        "A comprehensive platform for auto detailing services, offering booking, scheduling, and customer management features.",
      image:
        "https://cis9db4fll.ufs.sh/f/dfhCbRMwVEKt7wRecaFXqBCdb8Mw9RsJV4onpyKWtm7rO21S",
      tags: ["React", "Typescript", "SCSS", "JavScript", "web"],
      demoLink: "https://nexgenautodetailing.com",
      githubLink: "https://github.com/petervannord/nexgenautodetail",
    },
    // {
    //   id: 4,
    //   title: "Social Media Dashboard",
    //   description: "A comprehensive dashboard for managing and analyzing social media accounts and performance.",
    //   image: "/placeholder.svg?height=600&width=800",
    //   tags: ["Vue.js", "Express", "PostgreSQL", "web"],
    //   demoLink: "https://example.com",
    //   githubLink: "https://github.com",
    // },
    // {
    //   id: 5,
    //   title: "Real Estate Platform",
    //   description: "A real estate listing platform with property search, virtual tours, and agent contact features.",
    //   image: "/placeholder.svg?height=600&width=800",
    //   tags: ["Next.js", "Prisma", "PostgreSQL", "web"],
    //   demoLink: "https://example.com",
    //   githubLink: "https://github.com",
    // },
    // {
    //   id: 6,
    //   title: "Weather App",
    //   description: "A weather forecasting application with location-based services and interactive maps.",
    //   image: "/placeholder.svg?height=600&width=800",
    //   tags: ["React", "OpenWeatherAPI", "Mapbox", "web", "mobile"],
    //   demoLink: "https://example.com",
    //   githubLink: "https://github.com",
    // },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    // { id: "mobile", label: "Mobile" },
    { id: "Desktop", label: "Desktop" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is unique and
            solves specific problems.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 p-1 bg-muted/50 backdrop-blur-sm rounded-full">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "ghost"}
                className={cn(
                  "rounded-full",
                  activeFilter === filter.id
                    ? ""
                    : "hover:bg-background/50 hover:text-foreground"
                )}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all group">
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <div className="flex space-x-3">
                      <Button size="sm" className="rounded-full" asChild>
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full bg-background/50 backdrop-blur-sm"
                        asChild
                      >
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags
                      .filter((tag) => tag !== "web" && tag !== "mobile")
                      .map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="bg-primary/10"
                        >
                          {tag}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button className="rounded-full" size="lg">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

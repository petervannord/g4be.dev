"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code,
  Database,
  Layout,
  Server,
  Settings,
  Smartphone,
  Lightbulb,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      id: "frontend",
      label: "Frontend",
      icon: <Layout className="h-5 w-5" />,
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "TypeScript", level: 75 },
      ],
    },
    {
      id: "backend",
      label: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 70 },
        { name: "Django", level: 65 },
        { name: "GraphQL", level: 75 },
        { name: "RESTful APIs", level: 90 },
      ],
    },
    {
      id: "database",
      label: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "Supabase", level: 85 },
        { name: "Neon Postgres", level: 70 },
        { name: "Prisma", level: 80 },
      ],
    },
    {
      id: "tools",
      label: "Tools",
      icon: <Settings className="h-5 w-5" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Vercel", level: 75 },
        { name: "Bravo", level: 70 },
        { name: "AWS", level: 60 },
        { name: "Azure", level: 65 },
        { name: "Google Cloud", level: 80 },
      ],
    },
    {
      id: "mobile",
      label: "Mobile",
      icon: <Smartphone className="h-5 w-5" />,
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 65 },
        { name: "iOS", level: 60 },
        { name: "Android", level: 60 },
        { name: "Expo", level: 75 },
        { name: "Mobile UI/UX", level: 85 },
      ],
    },
    {
      id: "soft",
      label: "Soft Skills",
      icon: <Users className="h-5 w-5" />,
      skills: [
        { name: "Communication", level: 95 },
        { name: "Teamwork", level: 90 },
        { name: "Problem Solving", level: 95 },
        { name: "Time Management", level: 85 },
        { name: "Adaptability", level: 90 },
        { name: "Leadership", level: 80 },
      ],
    },
  ];

  const otherSkills = [
    {
      icon: <Code />,
      title: "Clean Code",
      description:
        "Writing clean, maintainable, and efficient code is my priority.",
    },
    {
      icon: <Lightbulb />,
      title: "Problem Solving",
      description:
        "I enjoy tackling complex problems and finding elegant solutions.",
    },
    {
      icon: <Users />,
      title: "Collaboration",
      description:
        "Working effectively with teams to deliver outstanding results.",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are my technical skills and competencies that I've developed
            over the years
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 bg-muted/50 backdrop-blur-sm">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 data-[state=active]:bg-primary/10"
                >
                  {category.icon}
                  <span className="hidden md:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{skill.name}</h4>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">
            Other Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                      {skill.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-2">{skill.title}</h4>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

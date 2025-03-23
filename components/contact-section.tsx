"use client";

import type React from "react";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  InstagramIcon,
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Your message has been sent.",
        });

        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "gabepoki@gmail.com",
      link: "mailto:gabepoki@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+1 (330) 979-3187",
      link: "tel:+13309793187",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Cleveland, OH",
      link: "https://maps.google.com/?q=Cleveland+Ohio",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <Toaster />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out if you have any questions or want to work
            together on a project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-none shadow-lg h-full">
              <CardContent className="p-6 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
                  <p className="text-muted-foreground mb-6">
                    Here are the ways you can reach me directly
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-center gap-4 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">
                          {item.title}
                        </h4>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/petervannord"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href="https://instagram.com/gabedejan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="h-5 w-5" />
                    </a>
                    {/* <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-none shadow-lg h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Gabriel D."
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="mail@example.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello, I'd like to talk about..."
                      rows={5}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full rounded-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

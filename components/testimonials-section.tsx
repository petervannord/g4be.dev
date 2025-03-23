"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Isaiah A.",
      position: "Owner of NexGen Auto Detailing",
      image:
        "https://cis9db4fll.ufs.sh/f/dfhCbRMwVEKtcq4J5XPOIXNuE87jUpdMTAR9heaWD5QlV3om",
      text: "Gabe did an amazing job on my website. The design is sleek and modern, and the functionality is top-notch. We've seen a significant increase in bookings since the site went live. Highly recommended!",
    },
    {
      id: 2,
      name: "Juliana D.",
      position: "Owner of Dejanovic Insurance",
      image:
        "https://cis9db4fll.ufs.sh/f/dfhCbRMwVEKtcq4J5XPOIXNuE87jUpdMTAR9heaWD5QlV3om",
      text: "Working with Gabe was a pleasure. He understood my requirements perfectly and implemented features that exceeded the expectations. His technical expertise and communication skills made the project run smoothly.",
    },
    // {
    //   id: 3,
    //   name: "Emily ",
    //   position: "Founder, DesignHub",
    //   image: "/placeholder.svg?height=200&width=200",
    //   text: "John transformed our concept into a beautiful, functional website. His design sensibility combined with technical knowledge created an exceptional user experience. Highly recommended!",
    // },
    // {
    //   id: 4,
    //   name: "David Kim",
    //   position: "CTO, FinTech Solutions",
    //   image: "/placeholder.svg?height=200&width=200",
    //   text: "We hired John to rebuild our outdated platform, and the results were outstanding. He modernized our tech stack while ensuring a seamless transition. His work significantly improved our system's performance and user satisfaction.",
    // },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's what my clients have to say about working with me
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-none shadow-lg">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="relative">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20">
                        <Image
                          src={
                            testimonials[currentIndex].image ||
                            "/placeholder.svg"
                          }
                          alt={testimonials[currentIndex].name}
                          width={200}
                          height={200}
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground p-2 rounded-full">
                        <Quote className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-lg mb-6 italic">
                        "{testimonials[currentIndex].text}"
                      </p>
                      <h4 className="text-xl font-bold">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonials[currentIndex].position}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index
                      ? "bg-primary"
                      : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

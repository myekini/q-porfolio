"use client";

import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const socialLinks = [
  {
    name: "Behance",
    url: "https://www.behance.net/ayomide21",
    icon: "images/social/behance_(1).png",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: "images/social/linkedin.png",
  },
  {
    name: "Twitter",
    url: "https://x.com/big_khoe",
    icon: "images/social/twitter.png",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tighter">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Separator className="w-24 mx-auto bg-gradient-to-r from-primary to-primary/50 mt-8" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-card border-border/50 shadow-lg h-full">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold text-foreground mb-6 tracking-tight">Send Me a Message</h3>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 flex flex-col items-center justify-center h-full"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground">I'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Your Name</label>
                        <input id="name" name="name" type="text" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} required className="w-full p-3 bg-background border border-border/50 rounded-lg focus:ring-2 focus:ring-primary transition-shadow" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Your Email</label>
                        <input id="email" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} required className="w-full p-3 bg-background border border-border/50 rounded-lg focus:ring-2 focus:ring-primary transition-shadow" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</label>
                      <input id="subject" name="subject" type="text" placeholder="What can I help you with?" value={formData.subject} onChange={handleInputChange} required className="w-full p-3 bg-background border border-border/50 rounded-lg focus:ring-2 focus:ring-primary transition-shadow" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                      <textarea id="message" name="message" placeholder="Tell me more about your project..." value={formData.message} onChange={handleInputChange} required rows={5} className="w-full p-3 bg-background border border-border/50 rounded-lg focus:ring-2 focus:ring-primary transition-shadow resize-none"></textarea>
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="w-full text-lg py-6">
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </div>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="p-8 bg-card border-border/50 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold text-foreground mb-6 tracking-tight">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">Reach out to me via email.</p>
                      <a href="mailto:hello@ayomide.design" className="text-primary hover:underline">
                        Alakaayomide3@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">Give me a call or send a message.</p>
                      <a href="tel:+2348144939073" className="text-primary hover:underline">
                    +234 814 493 9073
                  </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">Location</h4>
                      <p className="text-muted-foreground">I'm based in the beautiful city of Lagos, Nigeria.</p>
                      <p className="text-primary">Available for remote work worldwide.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-8 bg-card border-border/50 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold text-foreground mb-6 tracking-tight">Follow Me</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="block p-4 bg-background rounded-xl hover:bg-secondary transition-colors duration-200 group border border-border/50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shadow-sm">
                          <Image
                            src={`/${social.icon}`}
                            alt={social.name}
                            width={24}
                            height={24}
                            className="rounded"
                          />
                        </div>
                        <div>
                          <h4 className="text-foreground font-semibold group-hover:text-primary transition-colors">
                            {social.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">Follow</p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import Image from "next/image";

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

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Ayomide. All Rights Reserved.</p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-2 bg-secondary rounded-full hover:bg-primary/10 transition-colors"
              >
                <Image
                  src={`/${social.icon}`}
                  alt={social.name}
                  width={20}
                  height={20}
                  className="rounded"
                />
              </motion.a>
            ))}
          </div>

          <div>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full"
            >
              <ArrowUp className="h-5 w-5" />
              <span className="sr-only">Go to top</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
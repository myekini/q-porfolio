"use client";

import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useRef } from "react";
import { Code, Palette, Users, Award, Heart } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      category: "Design",
      icon: <Palette className="w-5 h-5" />,
      items: ["Product Design", "User Research", "Prototyping", "Design Systems"],
    },
    {
      category: "Tools",
      icon: <Code className="w-5 h-5" />,
      items: ["Figma", "Adobe Creative Suite", "Sketch", "Principle"],
    },
  ];

  const achievements = [
    { icon: <Award className="w-6 h-6" />, title: "50+ Projects", description: "Successfully delivered" },
    { icon: <Users className="w-6 h-6" />, title: "100+ Clients", description: "Happy customers" },
    { icon: <Heart className="w-6 h-6" />, title: "3+ Years", description: "Of experience" },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            About Me
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Passionate about creating digital experiences that matter
          </p>
          <Separator className="w-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-16 items-center mb-20"
          >
            {/* Story Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                My Design Journey
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                As a Product Designer, I believe that great design starts with understanding people. 
                Every project I work on begins with empathy and ends with solutions that not only 
                look beautiful but solve real problems.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I specialize in creating intuitive products that users love to interact with. 
                My approach combines user research, creative design, and technical understanding 
                to build products that make a difference.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      {achievement.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Skills & Expertise
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + skillIndex * 0.2 }}
                >
                  <Card className="p-8 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                          {skill.icon}
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                          {skill.category}
                        </h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        {skill.items.map((item) => (
                          <Badge 
                            key={item} 
                            variant="secondary" 
                            className="px-4 py-2 text-sm bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600"
                          >
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <Card className="p-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  My Design Philosophy
                </h3>
                
                <blockquote className="text-xl text-slate-600 dark:text-slate-300 italic leading-relaxed max-w-4xl mx-auto">
                  "Design is not just what it looks like and feels like. Design is how it works. 
                  I believe in creating experiences that are not only visually stunning but also 
                  functionally perfect, accessible to everyone, and meaningful to users."
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

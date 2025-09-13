"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { projects } from "@/lib/projects";
import type { Project } from "@/lib/types";
import Image from "next/image";

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
        <div className="relative overflow-hidden">
          <Image
            src={`/${project.featuredImage}`}
            alt={project.title}
            width={400}
            height={250}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-primary/90 flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  View Project
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    {project.title}
                  </DialogTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="default">{project.category}</Badge>
                    <Badge variant="outline">{project.date}</Badge>
                    <Badge 
                      variant={project.status === "Done" ? "default" : "secondary"}
                      className={project.status === "Done" ? "bg-green-100 text-green-800 hover:bg-green-200" : ""}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </DialogHeader>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Project Overview
                    </h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  {project.problem && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Problem Statement
                      </h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {project.problem}
                      </p>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Design Process
                    </h3>
                    <p className="text-muted-foreground">{project.process}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Project Images
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {project.images.map((image: string, index: number) => (
                        <div
                          key={index}
                          className="relative overflow-hidden rounded-lg"
                        >
                          <Image
                            src={`/${image}`}
                            alt={`${project.title} - ${index + 1}`}
                            width={200}
                            height={150}
                            className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Takeaways</h3>
                    <p className="text-muted-foreground">
                      ✅ {project.takeaways}
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <Button asChild>
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Live Site
                      </a>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-3">
            <Badge variant="default">{project.category}</Badge>
            <span className="text-sm text-muted-foreground">
              {project.date}
            </span>
          </div>

          <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="outline" size="sm" asChild>
                <a href={project.website} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-3 w-3" />
                  Live Site
                </a>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{project.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    Click to visit the live website
                  </p>
                  <div className="flex items-center pt-2">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    <span className="text-xs text-muted-foreground">
                      {project.website}
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ProjectsSection() {
  // Get unique categories from projects
  const categories = Array.from(new Set(projects.map(project => project.category)));
  const allProjects = "All";

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I'm proud to have worked on
          </p>
        </motion.div>

        <Tabs defaultValue={allProjects} className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
            <TabsTrigger value={allProjects}>All Projects</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={allProjects}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.category === category)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

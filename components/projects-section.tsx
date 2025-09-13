"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious, 
} from "@/components/ui/carousel";

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col border-border/50 shadow-sm">
        <Carousel className="w-full">
          <CarouselContent>
            {project.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="aspect-video relative">
                  <Image
                    src={`/${image}`}
                    alt={`${project.title} - ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/80 text-foreground" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/80 text-foreground" />
        </Carousel>

        <CardContent className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-auto">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full">
                  <Eye className="mr-2 h-4 w-4" />
                  View Details
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold tracking-tight">{project.title}</DialogTitle>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="default">{project.category}</Badge>
                    <Badge variant="outline">{project.date}</Badge>
                    <Badge 
                      variant={project.status === "Done" ? "default" : "secondary"}
                      className={project.status === "Done" ? "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/50 dark:text-green-300" : ""}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </DialogHeader>

                <div className="space-y-8 py-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {project.problem && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Problem Statement</h3>
                      <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Design Process</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.process}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Project Images</h3>
                    <Carousel className="w-full">
                      <CarouselContent>
                        {project.images.map((image: string, index: number) => (
                          <CarouselItem key={index}>
                            <div className="aspect-video relative">
                              <Image
                                src={`/${image}`}
                                alt={`${project.title} - ${index + 1}`}
                                fill
                                className="object-cover rounded-lg border border-border/50 shadow-sm"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/80 text-foreground" />
                      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/80 text-foreground" />
                    </Carousel>
                  </div>

                  <div className="bg-secondary/50 p-6 rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">Takeaways</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.takeaways}
                    </p>
                  </div>

                  <div className="flex justify-center pt-4">
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
            <Button asChild className="w-full">
              <a href={project.website} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Site
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tighter">Featured Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of projects I'm proud to have worked on
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project) => (
              <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          
        </Carousel>
      </div>
    </section>
  );
}

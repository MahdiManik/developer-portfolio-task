"use client";

import { useState, useEffect, useRef, KeyboardEvent } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/skeleton";
import { Code, ExternalLink, Github, Layers } from "lucide-react";
import {
  Project,
  fetchAllProjects,
  fetchFeaturedProjects,
} from "@/services/projectService";
import { VirtualizedList } from "@/components/ui/VirtualizedList";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "featured">("featured");
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalProjectsCount, setTotalProjectsCount] = useState(0);
  const [focusedProjectIndex, setFocusedProjectIndex] = useState<number | null>(
    null
  );

  // Reference to project grid for keyboard navigation
  const projectsRef = useRef<HTMLDivElement>(null);

  // Load projects when filter changes
  useEffect(() => {
    const loadProjects = async () => {
      setIsLoading(true);
      try {
        if (filter === "all") {
          // If switching to "all", fetch all projects
          const allProjects = await fetchAllProjects();
          setProjects(allProjects);
          setTotalProjectsCount(allProjects.length);
        } else {
          // If switching to "featured", fetch only featured projects
          const featuredProjects = await fetchFeaturedProjects();
          setProjects(featuredProjects);

          // If we don't know the total count yet, fetch it silently
          if (totalProjectsCount === 0) {
            fetchAllProjects({ delay: 0 }).then((all) => {
              setTotalProjectsCount(all.length);
            });
          }
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
        // In a real app, we'd show an error state
        setProjects([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, [filter, totalProjectsCount]);

  // Reset focused index when filter changes
  useEffect(() => {
    setFocusedProjectIndex(null);
  }, [filter]);

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, index: number) => {
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        if (index < projects.length - 1) {
          setFocusedProjectIndex(index + 1);
          document.getElementById(`project-${index + 1}`)?.focus();
        }
        break;
      case "ArrowLeft":
        e.preventDefault();
        if (index > 0) {
          setFocusedProjectIndex(index - 1);
          document.getElementById(`project-${index - 1}`)?.focus();
        }
        break;
      case "ArrowDown":
        e.preventDefault();
        // Assuming 3 columns for desktop
        const columnsCount =
          window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
        if (index + columnsCount < projects.length) {
          setFocusedProjectIndex(index + columnsCount);
          document.getElementById(`project-${index + columnsCount}`)?.focus();
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        const colCount =
          window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
        if (index - colCount >= 0) {
          setFocusedProjectIndex(index - colCount);
          document.getElementById(`project-${index - colCount}`)?.focus();
        }
        break;
    }
  };

  return (
    <section id="projects" className="py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <Badge className="mb-6 px-4 py-2 rounded-full inline-flex items-center space-x-2">
            <Layers className="w-4 h-4" />
            <span>Portfolio</span>
          </Badge>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured Projects
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out some of my latest work. These projects showcase my skills
            in design, development, and problem solving.
          </p>

          {/* Filter Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant={filter === "featured" ? "default" : "outline"}
              onClick={() => setFilter("featured")}
              className="rounded-full"
            >
              Featured
            </Button>
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="rounded-full"
            >
              All Projects
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="region"
          aria-label="Projects gallery"
          aria-busy={isLoading}
        >
          {isLoading ? (
            // Skeleton loading UI
            Array.from({ length: filter === "featured" ? 3 : 6 }).map(
              (_, index) => (
                <Card
                  key={`skeleton-${index}`}
                  className="overflow-hidden border border-border"
                  aria-hidden="true"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Skeleton className="absolute inset-0" />
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <Skeleton key={i} className="h-5 w-16 rounded-full" />
                      ))}
                    </div>
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-2/3 mb-4" />
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex justify-between">
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-8 w-24" />
                  </CardFooter>
                </Card>
              )
            )
          ) : filter === "all" && projects.length > 12 ? (
            // Use virtualized list for large datasets
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <VirtualizedList
                data={projects}
                itemHeight={380} // Approximate height of each card
                windowHeight={600} // Height of the visible window
                containerClassName="w-full"
                className="w-full"
                renderItem={(project, index) => (
                  <Card
                    id={`project-${index}`}
                    key={project.id}
                    className={cn(
                      "overflow-hidden transition-all duration-300 hover:shadow-lg border border-border group h-full mx-2",
                      focusedProjectIndex === index &&
                        "ring-2 ring-primary ring-offset-2"
                    )}
                    tabIndex={0}
                    role="article"
                    aria-label={`Project: ${project.title}`}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onFocus={() => setFocusedProjectIndex(index)}
                  >
                    <ProjectCard project={project} />
                  </Card>
                )}
              />
            </div>
          ) : (
            // Standard grid for smaller datasets
            projects.map((project, index) => (
              <Card
                id={`project-${index}`}
                key={project.id}
                className={cn(
                  "overflow-hidden transition-all duration-300 hover:shadow-lg border border-border group",
                  focusedProjectIndex === index &&
                    "ring-2 ring-primary ring-offset-2"
                )}
                tabIndex={0}
                role="article"
                aria-label={`Project: ${project.title}`}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onFocus={() => setFocusedProjectIndex(index)}
              >
                {/* Project Image with Overlay */}
                <div className="relative h-48 overflow-hidden">
                  {/* Use placeholder color until actual images are available */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center text-2xl text-muted-foreground"
                    aria-hidden="true"
                  >
                    {project.title.charAt(0)}
                  </div>
                </div>

                <CardContent className="pt-6">
                  {/* Tags */}
                  <div
                    className="flex flex-wrap gap-2 mb-3"
                    aria-label="Project technologies"
                  >
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="rounded-full text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="rounded-full text-xs">
                        +{project.tags.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </CardContent>

                {/* Footer with Links */}
                <CardFooter className="border-t pt-4 flex justify-between">
                  <Button variant="ghost" size="sm" className="text-xs" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink
                        className="w-4 h-4 mr-2"
                        aria-hidden="true"
                      />
                      <span>Live Demo</span>
                    </a>
                  </Button>

                  <Button variant="ghost" size="sm" className="text-xs" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View source code of ${project.title}`}
                    >
                      <Github className="w-4 h-4 mr-2" aria-hidden="true" />
                      <span>Source Code</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>

        {/* View All Projects Button - Only show when in featured mode */}
        {filter === "featured" && totalProjectsCount > projects.length && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full"
              onClick={() => setFilter("all")}
            >
              <Code className="w-4 h-4 mr-2" />
              View All Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

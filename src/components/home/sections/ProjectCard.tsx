import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { CardContent, CardFooter } from "@/components/ui/Card";
import { Project } from "@/services/projectService";
import { ExternalLink, Github } from "lucide-react";

type ProjectCardProps = {
  project: Project;
}

/**
 * ProjectCard - Reusable project card component
 * Used as a render item in both standard grid and virtualized list
 */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <>
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
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
      </CardContent>

      {/* Footer with Links */}
      <CardFooter className="border-t pt-4 flex justify-between">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-xs" 
          asChild
        >
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noreferrer"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Live Demo</span>
          </a>
        </Button>

        <Button 
          variant="ghost" 
          size="sm" 
          className="text-xs" 
          asChild
        >
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
    </>
  );
}

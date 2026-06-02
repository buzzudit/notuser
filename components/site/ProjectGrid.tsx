import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/site/ProjectCard";

type ProjectGridProps = {
  projects: Project[];
  fullCardLinks?: boolean;
};

export function ProjectGrid({ projects, fullCardLinks = false }: ProjectGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          fullCardLink={fullCardLinks}
        />
      ))}
    </div>
  );
}

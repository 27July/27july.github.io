import ProjectCard from "@/components/ui/projectCard";
import type { Project } from "@/types/projectType";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </div>
  );
}

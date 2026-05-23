import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import ProjectCard from "./ProjectCard";
import type { Project } from "./projectTypes";

type Props = {
  projects: Project[];
};

function getInitialVisibleCount(list: Project[]) {
  const featuredCount = list.filter((project) => Boolean(project.featured)).length;
  return Math.min(list.length, Math.max(4, featuredCount));
}

export default function ProjectGrid({ projects }: Props) {
  const [query, setQuery] = useState("");
  const [expandedTechnologies, setExpandedTechnologies] = useState<Set<string>>(
    new Set(),
  );

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      const featuredDelta = Number(Boolean(b.featured)) - Number(Boolean(a.featured));
      if (featuredDelta !== 0) return featuredDelta;

      const yearA = Number.parseInt(a.year, 10);
      const yearB = Number.parseInt(b.year, 10);
      if (Number.isFinite(yearA) && Number.isFinite(yearB) && yearB !== yearA) {
        return yearB - yearA;
      }

      return a.title.localeCompare(b.title);
    });
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sortedProjects.filter((project) => {
      const searchable = [
        project.title,
        project.summary,
        ...project.tags,
        ...project.technologies,
      ]
        .join(" ")
        .toLowerCase();

      return !q || searchable.includes(q);
    });
  }, [query, sortedProjects]);

  const [visibleCount, setVisibleCount] = useState(getInitialVisibleCount(filteredProjects));

  useEffect(() => {
    setVisibleCount(getInitialVisibleCount(filteredProjects));
  }, [query, filteredProjects]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;
  const moreCount = Math.min(4, filteredProjects.length - visibleCount);

  return (
    <section id="projects" className="border-t border-[#3B4252] pt-8">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#88C0D0]">
          Projects
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#ECEFF4]">
          Featured Work
        </h2>
      </div>

      <div className="mt-5 mb-6">
        <label
          htmlFor="project-search"
          className="flex w-full items-center gap-2 rounded-full border border-[#3B4252] bg-[#202838]/60 px-4 py-2.5 text-sm"
        >
          <span className="sr-only">Search projects, tags, or technologies</span>
          <Search size={16} className="text-[#D8DEE9]/45" />
          <input
            id="project-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects, tags, or technologies..."
            className="w-full bg-transparent text-sm text-[#ECEFF4] outline-none placeholder:text-[#D8DEE9]/35 focus-visible:outline-none"
          />
        </label>
      </div>

      {visibleProjects.length === 0 ? (
        <div className="rounded-xl border border-[#3B4252] bg-[#202838]/45 p-4 text-sm text-[#D8DEE9]/75">
          <p>No projects match this search.</p>
          {query.trim().length > 0 && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="mt-3 inline-flex rounded-full border border-[#4C566A]/60 px-3 py-1.5 text-xs text-[#D8DEE9]/75 transition hover:border-[#88C0D0]/50 hover:text-[#88C0D0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88C0D0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151B26]"
            >
              Clear search
            </button>
          )}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              isTechnologiesExpanded={expandedTechnologies.has(project.slug)}
              onExpandTechnologies={(slug) =>
                setExpandedTechnologies((prev) => new Set(prev).add(slug))
              }
            />
          ))}
        </div>
      )}

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setVisibleCount((count) => count + 4)}
            className="rounded-full border border-[#4C566A]/60 px-5 py-2.5 text-sm text-[#D8DEE9]/75 transition hover:border-[#88C0D0]/50 hover:text-[#88C0D0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88C0D0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151B26]"
          >
            View more projects - {moreCount} more
          </button>
        </div>
      )}
    </section>
  );
}

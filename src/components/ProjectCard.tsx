import ProjectImage from "./ProjectImage";
import type { Project } from "./projectTypes";

type Props = {
  project: Project;
  isTechnologiesExpanded: boolean;
  onExpandTechnologies: (slug: string) => void;
};

export default function ProjectCard({
  project,
  isTechnologiesExpanded,
  onExpandTechnologies,
}: Props) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#3B4252] bg-[#202838]/72 p-4 transition hover:border-[#5E81AC]/70">
      <ProjectImage image={project.image} title={project.title} />

      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="text-xs text-[#88C0D0]">{project.status}</span>
        <span className="text-xs text-[#D8DEE9]/45">{project.year}</span>
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-[#ECEFF4]">{project.title}</h3>
      <p className="mt-3 min-h-[5.25rem] text-sm leading-6 text-[#D8DEE9]/70">
        {project.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#88C0D0]/40 bg-[#88C0D0]/10 px-2.5 py-1 text-xs text-[#88C0D0]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {(isTechnologiesExpanded ? project.technologies : project.technologies.slice(0, 4)).map(
          (technology) => (
            <span
              key={technology}
              className="rounded-full border border-[#4C566A]/60 px-2.5 py-1 text-xs text-[#D8DEE9]/75"
            >
              {technology}
            </span>
          ),
        )}
        {project.technologies.length > 4 && !isTechnologiesExpanded && (
          <button
            type="button"
            onClick={() => onExpandTechnologies(project.slug)}
            className="rounded-full border border-[#4C566A]/60 px-2.5 py-1 text-xs text-[#D8DEE9]/75 transition hover:border-[#88C0D0]/40 hover:text-[#88C0D0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88C0D0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151B26]"
          >
            +{project.technologies.length - 4}
          </button>
        )}
      </div>

      {(project.github || project.demo) && (
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#5E81AC] px-3 py-2 text-xs font-medium text-white transition hover:bg-[#81A1C1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88C0D0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151B26]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.1.82-.26.82-.58v-2.03c-3.34.73-4.04-1.41-4.04-1.41a3.2 3.2 0 0 0-1.34-1.76c-1.1-.75.08-.74.08-.74a2.53 2.53 0 0 1 1.85 1.24 2.58 2.58 0 0 0 3.52 1 2.58 2.58 0 0 1 .77-1.62c-2.67-.3-5.47-1.34-5.47-5.94a4.65 4.65 0 0 1 1.24-3.22 4.32 4.32 0 0 1 .12-3.18s1-.33 3.3 1.23a11.44 11.44 0 0 1 6 0c2.28-1.56 3.29-1.23 3.29-1.23a4.32 4.32 0 0 1 .12 3.18 4.64 4.64 0 0 1 1.24 3.22c0 4.62-2.8 5.64-5.48 5.93a2.89 2.89 0 0 1 .82 2.24v3.32c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z"></path>
              </svg>
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#8FBCBB] px-3 py-2 text-xs font-medium text-[#111827] transition hover:bg-[#9dc8c7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88C0D0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151B26]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
              Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}

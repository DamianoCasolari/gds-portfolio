import { projects } from "@/src/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProjectImageCarousel from "@/src/components/sections/project/ProjectImageCarousel";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

type Props = { params: Promise<{ id: string }> };

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.id === id);
  const prev = projects[currentIndex - 1] ?? null;
  const next = projects[currentIndex + 1] ?? null;

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10 md:px-10 lg:h-[calc(100dvh-5rem)] lg:overflow-hidden lg:flex lg:flex-col lg:py-6 lg:pb-16">
      <Link
        href={`/#project-${project.id}`}
        className="mb-6 lg:mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-black/45 transition hover:text-black"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Indietro
      </Link>

      <div className="lg:flex-1 lg:min-h-0">
        <ProjectImageCarousel
          images={project.images}
          title={project.title}
          description={project.description}
          sections={project.sections}
          url={project.url}
          projectIndex={currentIndex}
          projectTotal={projects.length}
        />
      </div>

<div className="mt-8 lg:mt-4 flex justify-between items-center border-t border-black/10 pt-5 lg:pt-4">
        {prev ? (
          <Link href={`/projects/${prev.id}`} className="flex items-center gap-3 group">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-black/40 group-hover:text-black transition">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-sans text-sm text-black/55 group-hover:text-black transition">{prev.title}</span>
          </Link>
        ) : <div />}

        {next ? (
          <Link href={`/projects/${next.id}`} className="flex items-center gap-3 group">
            <span className="font-sans text-sm text-black/55 group-hover:text-black transition">{next.title}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-black/40 group-hover:text-black transition">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        ) : <div />}
      </div>
    </main>
  );
}

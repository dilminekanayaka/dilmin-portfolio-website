import { useEffect, useRef, useState } from "react";
import Banner from "../components/Banner";
import SectionCard from "../components/SectionCard";
import { assets, projects } from "../data/siteData";

const PAGE_SIZE = 4;

function TechTag({ tag }) {
  return (
    <span className="inline-flex h-[32px] items-center gap-[8px] bg-[#e7eaef] px-[12px] text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1f2937] sm:h-[34px] sm:px-[14px]">
      <i className={tag.icon} aria-hidden="true" style={{ color: tag.color, fontSize: 15 }} />
      {tag.label}
    </span>
  );
}

function ProjectsPage() {
  const [page, setPage] = useState(1);
  const [previewProject, setPreviewProject] = useState(null);
  const listRef = useRef(null);
  const totalPages = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const paginatedProjects = projects.slice(start, start + PAGE_SIZE);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  useEffect(() => {
    if (page === 1 || !listRef.current) {
      return;
    }

    listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [page]);

  return (
    <main className="space-y-0">
      <Banner title="Things I've Built" image={assets.bannerImage} compact />

      <SectionCard className="border-t-0 px-4 py-[11px] text-[13px] text-[#717886] sm:px-5 sm:text-[14px]">
        Check my projects in GitHub:
        <a href="https://github.com/dilminekanayaka?tab=repositories" target="_blank" rel="noreferrer" className="ml-1 text-[#72a5ff]">
          Click Here
        </a>
      </SectionCard>

      <SectionCard ref={listRef} className="mt-3 px-4 py-4 sm:px-6 sm:py-6">
        <div className="divide-y divide-[#e7ebf0]">
          {paginatedProjects.map((project) => (
            <article key={project.title} className="grid gap-5 py-5 first:pt-0 md:grid-cols-[1fr_420px] md:items-start lg:grid-cols-[1fr_470px] lg:gap-6 lg:py-6">
              <div>
                <h2 className="text-[19px] font-semibold leading-tight tracking-[-0.02em] text-[#121925] sm:text-[22px] sm:leading-none">
                  {project.title}
                  {project.year ? <span className="font-normal text-[#31394a]"> | {project.year}</span> : null}
                </h2>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-[8px] inline-flex break-all items-center gap-[8px] text-[13px] text-[#788595] transition-colors duration-200 hover:text-[#111827] sm:text-[14px]"
                >
                  <i className="bi bi-box-arrow-up-right text-[13px]" aria-hidden="true" />
                  {project.url}
                </a>

                <div className="mt-4 flex flex-wrap gap-[8px] sm:mt-5">
                  {project.tags.map((tag) => (
                    <TechTag key={`${project.title}-${tag.label}`} tag={tag} />
                  ))}
                </div>

                <p className="mt-5 max-w-[560px] text-[14px] leading-[1.75] text-[#5f6876] sm:mt-7 sm:text-[15px] sm:leading-[1.8]">
                  {project.description}
                </p>

                {project.button ? (
                  <button
                    type="button"
                    className="mt-5 inline-flex h-[34px] items-center justify-center rounded-[3px] border border-[#d7dce4] bg-black px-[17px] text-[12px] font-semibold text-white transition hover:bg-black/85"
                  >
                    {project.button} <i className="bi bi-arrow-right ml-2 text-[12px]" aria-hidden="true" />
                  </button>
                ) : null}
              </div>

              <button
                type="button"
                onClick={() => setPreviewProject((current) => (current?.title === project.title ? null : project))}
                className="group relative overflow-hidden rounded-[4px] text-left"
                aria-label={`Preview ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[220px] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03] md:w-[420px] lg:h-[245px] lg:w-[470px]"
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent px-4 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Click to preview
                </span>
              </button>
            </article>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-center gap-3 text-[13px] text-[#7f8896] sm:mt-8 sm:gap-4">
          <button
            type="button"
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            disabled={page === 1}
            className="inline-flex h-6 w-6 items-center justify-center text-[#94a3b8] transition hover:text-[#111827] disabled:cursor-default disabled:opacity-40"
          >
            <i className="bi bi-chevron-left text-[13px]" aria-hidden="true" />
          </button>
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            const active = pageNumber === page;

            return (
              <button
                key={pageNumber}
                type="button"
                onClick={() => {
                  setPage(pageNumber);
                  setPreviewProject(null);
                }}
                className={`inline-flex h-[27px] w-[27px] items-center justify-center rounded-[2px] ${active ? "bg-black text-white" : "text-[#7f8896]"}`}
              >
                {pageNumber}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
            disabled={page === totalPages}
            className="inline-flex h-6 w-6 items-center justify-center text-[#94a3b8] transition hover:text-[#111827] disabled:cursor-default disabled:opacity-40"
          >
            <i className="bi bi-chevron-right text-[13px]" aria-hidden="true" />
          </button>
        </div>
      </SectionCard>

      {previewProject ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/72 px-4 py-6"
          onClick={() => setPreviewProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-[820px] overflow-hidden rounded-[10px] border border-[#dfe3ea] bg-white shadow-[0_22px_60px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-[#e7ebf0] px-4 py-3 sm:px-5">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#64748b]">Project Preview</p>
                <h3 className="mt-1 text-[15px] font-semibold text-[#111827] sm:text-[17px]">{previewProject.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setPreviewProject(null)}
                className="inline-flex h-9 items-center justify-center rounded-[4px] bg-black px-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-black/85"
              >
                Close
              </button>
            </div>
            <div className="bg-[#f8fafc] p-3 sm:p-4">
              <img
                src={previewProject.image}
                alt={previewProject.title}
                className="max-h-[72vh] w-full rounded-[6px] object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}

export default ProjectsPage;

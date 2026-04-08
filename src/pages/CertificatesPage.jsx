import { useEffect, useRef, useState } from "react";
import Banner from "../components/Banner";
import SectionCard from "../components/SectionCard";
import { assets, certificates } from "../data/siteData";

const PAGE_SIZE = 4;

function CertificatesPage() {
  const [page, setPage] = useState(1);
  const listRef = useRef(null);
  const totalPages = Math.max(1, Math.ceil(certificates.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const paginatedCertificates = certificates.slice(start, start + PAGE_SIZE);

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
      <Banner title="Certificates & Achievements" image={assets.bannerImage} compact />

      <SectionCard ref={listRef} className="mt-3 px-4 py-4 sm:px-6 sm:py-6">
        <div className="divide-y divide-[#e7ebf0]">
          {paginatedCertificates.map((item) => (
            <article
              key={item.title}
              className="grid gap-5 py-5 first:pt-0 md:grid-cols-[1fr_420px] md:items-start lg:grid-cols-[1fr_460px] lg:gap-6 lg:py-6"
            >
              <div>
                <h2 className="text-[19px] font-semibold leading-tight tracking-[-0.02em] text-[#121925] sm:text-[22px] sm:leading-none">
                  {item.title} <span className="font-normal text-[#31394a]">| {item.year}</span>
                </h2>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-md bg-black px-3 py-1.5 text-[13px] text-white transition hover:bg-[#1f2937]"
                >
                  <i className="bi bi-box-arrow-up-right" />
                  View Certificate
                </a>

                <div className="mt-4 flex flex-wrap gap-[8px] sm:mt-5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex h-[30px] items-center bg-[#e7eaef] px-[12px] text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1f2937] sm:h-[32px] sm:px-[14px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-5 max-w-[560px] text-[14px] leading-[1.75] text-[#5f6876] sm:mt-7 sm:leading-[1.8]">{item.description}</p>
              </div>

              <img src={item.image} alt={item.title} className="h-[220px] w-full rounded-md object-cover md:w-[420px] lg:h-[250px] lg:w-[460px]" />
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
            <i className="bi bi-chevron-left text-[13px]" />
          </button>

          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            const active = pageNumber === page;

            return (
              <button
                key={pageNumber}
                type="button"
                onClick={() => setPage(pageNumber)}
                className={`inline-flex h-[27px] w-[27px] items-center justify-center rounded-[4px] ${
                  active ? "bg-black text-white" : "text-[#7f8896] hover:bg-[#e5e7eb]"
                }`}
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
            <i className="bi bi-chevron-right text-[13px]" />
          </button>
        </div>
      </SectionCard>
    </main>
  );
}

export default CertificatesPage;

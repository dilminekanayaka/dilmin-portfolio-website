import Banner from "../components/Banner";
import SectionCard from "../components/SectionCard";
import { assets, blogPosts } from "../data/siteData";

function BlogsPage() {
  return (
    <main className="space-y-3">
      <Banner title="Latest Blog Posts" image={assets.bannerImage} />

      <SectionCard className="px-5 py-[11px] text-[13px] text-[#717886] sm:text-[14px]">
        Read all blogs in medium.com:
        <a href="https://medium.com/" target="_blank" rel="noreferrer" className="ml-1 text-[#72a5ff]">
          Click Here
        </a>
      </SectionCard>

      <SectionCard className="px-4 py-4 sm:px-5 sm:py-5">
        <div className="divide-y divide-[#e7ebf0]">
          {blogPosts.map((post) => (
            <article key={post.title} className="grid gap-6 py-6 first:pt-0 md:grid-cols-[1fr_340px] md:items-start">
              <div className="pr-0 md:pr-3">
                <h2 className="max-w-[590px] text-[22px] font-semibold leading-[1.24] tracking-[-0.02em] text-[#161d29]">
                  {post.title}
                </h2>
                <p className="mt-4 max-w-[580px] text-[13px] leading-[1.8] text-[#6d7583] sm:text-[14px]">
                  {post.description}
                </p>
                <a
                  href="/contact"
                  className="mt-5 inline-flex h-[31px] items-center justify-center rounded-[3px] border border-[#d7dce4] bg-black px-[16px] text-[11px] font-semibold text-white transition hover:bg-black/85"
                >
                  Read Now <i className="bi bi-arrow-right ml-2 text-[11px]" aria-hidden="true" />
                </a>
              </div>

              <img src={post.image} alt={post.title} className="h-[190px] w-full object-cover md:w-[340px]" />
            </article>
          ))}
        </div>
      </SectionCard>
    </main>
  );
}

export default BlogsPage;

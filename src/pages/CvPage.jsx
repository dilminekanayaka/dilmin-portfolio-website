import Banner from "../components/Banner";
import SectionCard from "../components/SectionCard";
import cvPdf from "../assets/Dilmin Ekanayake CV.pdf";
import { assets, experiences, skillGroups } from "../data/siteData";

function SkillBadge({ item }) {
  return (
    <span className="inline-flex h-[26px] items-center gap-[6px] bg-[#252c36] px-[10px] text-[10px] font-semibold uppercase tracking-[0.11em] text-white">
      <i className={item.icon} aria-hidden="true" style={{ color: item.color, fontSize: 12 }} />
      {item.label}
    </span>
  );
}

function CvPage() {
  const scrollToSection = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState({}, "", `/curriculum-vitae#${id}`);
  };

  return (
    <main className="space-y-0">
      <Banner title="Curriculum Vitae" image={assets.bannerImage} compact />

      <SectionCard className="border-t-0 px-4 py-[11px] text-[12px] text-[#99a3b2] sm:px-5 sm:text-[13px]">
        <div className="flex flex-wrap gap-x-1 gap-y-1">
          <span className="mr-2 text-[#8892a0]">Fast links:</span>
          <a href="#education" onClick={(event) => scrollToSection(event, "education")} className="text-[#3d86ff] hover:text-[#2563eb]">
            Education
          </a>
          <span className="mx-1">|</span>
          <a href="#skills" onClick={(event) => scrollToSection(event, "skills")} className="text-[#3d86ff] hover:text-[#2563eb]">
            Technical Skills
          </a>
          <span className="mx-1">|</span>
          <a href="#experience" onClick={(event) => scrollToSection(event, "experience")} className="text-[#3d86ff] hover:text-[#2563eb]">
            Experience
          </a>
          <span className="mx-1">|</span>
          <a href="#resume" onClick={(event) => scrollToSection(event, "resume")} className="text-[#3d86ff] hover:text-[#2563eb]">
            Download Resume
          </a>
        </div>
      </SectionCard>

      <div className="mt-3 space-y-3">
        <SectionCard id="education" className="scroll-mt-20 px-4 py-4 sm:px-6 sm:py-5">
          <h3 className="text-[20px] font-medium text-[#181f2b] sm:text-[23px]">Education</h3>
          <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <h4 className="text-[15px] font-semibold text-[#1c2432] sm:text-[16px]">BSc (Hons) in Software Engineering</h4>
              <p className="mt-1 text-[13px] text-[#737b87] sm:text-[14px]">Colombo International Nautical and Engineering College (CINEC)</p>
              <p className="mt-[2px] text-[13px] text-[#737b87] sm:text-[14px]">Major: Full-Stack Development</p>
              <p className="mt-[2px] text-[13px] text-[#737b87] sm:text-[14px]">CGPA: 3.71</p>
            </div>
            <p className="text-[13px] text-[#9aa2ae] sm:text-[14px]">Oct 2023 - Present</p>
          </div>
          <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <h4 className="text-[15px] font-semibold text-[#1c2432] sm:text-[16px]">Diploma in Software Engineering</h4>
              <p className="mt-1 text-[13px] text-[#737b87] sm:text-[14px]">CODL , Sabaragamuwa University of Sri Lanka</p>
            </div>
            <p className="text-[13px] text-[#9aa2ae] sm:text-[14px]">May 2020 - Jan 2022 </p>
          </div>
          <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <h4 className="text-[15px] font-semibold text-[#1c2432] sm:text-[16px]">Diploma in Graphic Design</h4>
              <p className="mt-1 text-[13px] text-[#737b87] sm:text-[14px]">Wijaya Graphics, Sri Lanka</p>
            </div>
            <p className="text-[13px] text-[#9aa2ae] sm:text-[14px]">March 2020 - Nov 2021 </p>
          </div>
        </SectionCard>

        <SectionCard id="skills" className="scroll-mt-20 px-4 py-4 sm:px-6 sm:py-5">
          <h3 className="text-[20px] font-medium text-[#181f2b] sm:text-[23px]">Technical Skills</h3>
          <div className="mt-4 space-y-5 border-t border-[#e7ebf0] pt-4 sm:mt-5 sm:space-y-6 sm:pt-5">
            {Object.entries(skillGroups).map(([group, items]) => (
              <div key={group}>
                <h4 className="mb-3 text-[14px] font-semibold text-[#1e2633] sm:text-[15px]">{group}:</h4>
                <div className="flex flex-wrap gap-[6px]">
                  {items.map((item) => (
                    <SkillBadge key={item.label} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard id="experience" className="scroll-mt-20 px-4 py-4 sm:px-6 sm:py-5">
          <h3 className="text-[20px] font-medium text-[#181f2b] sm:text-[23px]">Experience</h3>
          <div className="mt-4 space-y-6 sm:mt-5 sm:space-y-7">
            {experiences.map((item) => (
              <article key={item.title}>
                <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h4 className="text-[15px] font-semibold text-[#1d2430] sm:text-[16px]">{item.title}</h4>
                    <p className="text-[13px] text-[#737b87] sm:text-[14px]">{item.company}</p>
                  </div>
                  <p className="text-[13px] text-[#9aa2ae] sm:text-[14px]">{item.period}</p>
                </div>
                <ul className="mt-3 space-y-[5px] text-[13px] leading-[1.72] text-[#707886] sm:text-[14px] sm:leading-[1.76]">
                  {item.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard id="resume" className="scroll-mt-20 px-4 py-4 sm:px-6 sm:py-5">
          <h3 className="text-[20px] font-medium text-[#181f2b] sm:text-[23px]">Download Resume</h3>
          <p className="mt-4 text-[13px] text-[#737b87] sm:text-[14px]">
            Click{" "}
            <a href={cvPdf} target="_blank" rel="noreferrer" download className="text-[#3d86ff] hover:text-[#2563eb]">
              here
            </a>{" "}
            to download my resume
          </p>
        </SectionCard>
      </div>
    </main>
  );
}

export default CvPage;

import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import SectionCard from "../components/SectionCard";
import { assets, socialLinks } from "../data/siteData";

const heroSlides = [
  {
    text: "Sharing milestones and certifications from my learning journey.",
    cta: "My Certificates",
    href: "/certificates",
  },
  {
    text: "Bringing ideas to life, here's what I've crafted.",
    cta: "View Projects",
    href: "/projects",
  },
  {
    text: "Let's connect, whether it's for collaboration, work, or a friendly chat.",
    cta: "Contact Me",
    href: "/contact",
  },
];

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="space-y-0">
      <Banner
        title="Dilmin Ekanayake"
        subtitle="Full-Stack Developer | Software Engineering Student"
        image={assets.bannerImage}
        hideContentOnMobile
        className="h-[80px] sm:h-[150px]"
      />

      <SectionCard className="relative z-10 border-t-0 px-4 pb-4 pt-0 sm:px-7 sm:py-7">
        <div className="relative z-10 ml-1 -mt-[52px] flex h-[138px] w-[138px] items-center justify-center rounded-full border-[5px] border-white bg-[#111] shadow-[0_10px_24px_rgba(20,28,40,0.16)] sm:hidden">
          <img
            src={assets.profileImage}
            alt="Dilmin Ekanayake"
            className="h-[126px] w-[126px] rounded-full object-cover"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-[392px_minmax(0,1fr)] lg:items-start">
          <img
            src={assets.profileImage}
            alt="Dilmin Ekanayake"
            className="hidden h-[392px] w-full rounded-[4px] border border-[#dfe3ea] object-cover lg:block lg:w-[392px]"
          />

          <div className="pt-4 text-left lg:pt-1 lg:pl-3">
            <div className="sm:hidden">
              <h1 className="text-[26px] font-medium leading-[1.12] tracking-[-0.03em] text-[#151b26]">
                Dilmin Ekanayake
              </h1>
              <p className="mt-1 text-[13px] leading-[1.4] text-[#7b8390]">
                Full-Stack Developer | Software Engineering Student <span className="text-[#f7c65d]">??</span>
              </p>
            </div>

            <div className="hidden sm:block">
              <h2 className="max-w-[620px] text-[31px] font-semibold leading-[1.16] tracking-[-0.03em] text-[#151b26]">
                Welcome! Where Creativity Meets Code <span className="text-[#f7b32b]"></span>
              </h2>
            </div>

            <p className="mt-5 max-w-[660px] text-[15px] leading-[1.7] text-[#606876] sm:text-[16px] lg:max-w-[620px]">
              A passionate Software Engineering undergraduate specializing in full stack development, UI/UX design, and modern web technologies. Experienced in building real-world web and mobile applications using React, Node.js, and scalable backend systems. If you're interested in my work, feel free to reach out.
            </p>

            <ul className="mt-6 space-y-[5px] text-left text-[14px] font-medium leading-[1.62] text-[#334054] sm:text-[16px] lg:text-[15px]">
              <li>- pasindusupun461@gmail.com</li>
              <li>- (+94) 771338918</li>
              <li>- Malabe,</li>
              <li>- Sri Lanaka</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      <SectionCard className="border-t-0 px-4 py-[12px] sm:px-5 sm:py-[14px]">
        <div className="flex flex-wrap items-center gap-y-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#253049] sm:text-[13px]">
          <span className="mr-3 sm:mr-6">Follow Me :</span>
          {socialLinks.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-[7px] px-[10px] sm:px-[15px] ${index > 0 ? "border-l border-[#ccd2dc]" : ""}`}
            >
              <i className={`${item.icon} text-[14px] text-black sm:text-[17px]`} aria-hidden="true" />
              <span className="hidden sm:inline">{item.label}</span>
            </a>
          ))}
        </div>
      </SectionCard>

      <SectionCard className="mt-4 px-4 py-5 sm:px-7 sm:py-7">
        <h3 className="text-[27px] font-medium tracking-[-0.02em] text-[#151b26] sm:text-[27px]">About Me</h3>
        <div className="mt-5 space-y-4 text-[14px] leading-[1.82] text-[#6a7180] sm:mt-6 sm:text-[15px]">
          <p>
            I’m a Software Engineering undergraduate passionate about building real-world digital solutions that combine functionality with great user experience. I specialize in full stack development and UI/UX design, with hands-on experience developing web and mobile applications using React, React Native, Node.js, and modern databases.
          </p>
          <p>
            I’ve worked on real-world projects including e-commerce platforms, AI-powered applications, and service-based systems, gaining experience in backend architecture, API integration, and scalable system design.
          </p>
          <p>
            I enjoy turning complex problems into simple, user-friendly solutions. Currently, I’m seeking a Full Stack Software Engineering Internship to grow my skills and contribute to impactful projects.
          </p>
        </div>
        <a href="/curriculum-vitae" className="mt-5 inline-block text-[14px] text-[#72a5ff]">
          More Info
        </a>
      </SectionCard>

      <SectionCard className="relative mt-4 h-[222px] overflow-hidden bg-black px-4 py-0 sm:h-[250px]">
        <img
          src={assets.bannerImage}
          alt=""
          className="absolute bottom-0 left-1/2 h-[500px] w-[150%] -translate-x-1/2 object-cover object-[center_bottom] opacity-88 sm:h-[250px] sm:w-full"
        />
        <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
          <p className="max-w-[880px] text-[18px] font-normal leading-[1.34] tracking-[-0.02em] text-white transition-all duration-300 sm:text-[27px]">
            {heroSlides[activeSlide].text}
          </p>
          <a
            href={heroSlides[activeSlide].href}
            className="mt-6 inline-flex h-[38px] items-center justify-center rounded-[3px] border border-[#d7dce4] bg-white px-6 text-[11px] font-semibold uppercase tracking-[0.03em] text-black transition hover:bg-white/90 sm:mt-8 sm:h-[40px] sm:px-8 sm:text-[13px]"
          >
            {heroSlides[activeSlide].cta}
          </a>
        </div>
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-[8px] sm:bottom-4 sm:gap-2">
          {heroSlides.map((_, index) => {
            const active = index === activeSlide;

            return (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`h-[9px] w-[9px] rounded-full transition sm:h-[10px] sm:w-[10px] ${active ? "bg-white" : "bg-white/55 hover:bg-white/80"}`}
              />
            );
          })}
        </div>
      </SectionCard>
    </main>
  );
}

export default HomePage;

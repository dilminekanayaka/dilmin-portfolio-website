import { assets, contactInfo } from "../data/siteData";

function Footer() {
  return (
    <footer className="mt-6 border-t border-[#d9dde4] px-1 pt-4">
      <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="md:flex-1">
          <div className="flex items-center justify-center gap-2.5 text-[#151d28] md:justify-start">
            <img src={assets.faviconImage} alt="Dilmin logo" className="h-[20px] w-[20px] object-cover" />
            <span className="text-[16px] font-semibold tracking-[-0.01em]">Dilmin E.</span>
          </div>
          <p className="mt-1 text-[13px] font-normal text-[#9299a6] sm:text-[14px]">
            {contactInfo.email} | {contactInfo.phone}
          </p>
        </div>

        <div className="w-full max-w-[410px] md:flex-1 md:max-w-[500px]">
          <p className="mb-2 text-[15px] font-medium text-[#3f4653]">Subscribe to the news letters</p>
          <div className="flex overflow-hidden rounded-[6px] border border-[#d7dce4] bg-white">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-[44px] min-w-0 flex-1 border-0 bg-transparent px-4 text-[14px] text-[#727985] outline-none placeholder:text-[#b2b8c2] sm:text-[15px]"
            />
            <button
              type="button"
              className="h-[44px] shrink-0 border-l border-[#d7dce4] bg-black px-5 text-[12px] font-semibold uppercase tracking-[0.02em] text-white transition hover:bg-black/85 sm:px-6 sm:text-[13px]"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <p className="mt-5 border-t border-[#d9dde4] pt-4 text-center text-[13px] text-[#adb4c0]">{contactInfo.updatedAt}</p>
    </footer>
  );
}

export default Footer;

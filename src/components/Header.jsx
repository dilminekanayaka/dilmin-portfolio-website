import { useEffect, useState } from "react";
import { assets, navItems } from "../data/siteData";

function Header({ currentPath }) {
  const [floating, setFloating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setFloating(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  return (
    <div className="sticky top-0 z-40 w-full">
      <header
        className={`mx-auto flex w-full max-w-[1180px] flex-col px-5 py-3 transition-all duration-300 ease-out sm:px-7 lg:px-12 ${
          floating
            ? "mt-2 rounded-[14px] border border-[#dde2ea] bg-[#eef0f4] shadow-[0_10px_24px_rgba(20,28,40,0.08)]"
            : "mt-0 border border-transparent bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3 text-[#161d29]">
            <img src={assets.faviconImage} alt="Dilmin logo" className="h-[21px] w-[21px] object-cover" />
            <span className="text-[17px] font-semibold tracking-[-0.01em]">Dilmin E.</span>
          </a>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-9 w-9 items-center justify-center text-[#6b7280] lg:hidden"
          >
            <i className={`${menuOpen ? "bi bi-x-lg text-[20px]" : "bi bi-list text-[24px]"}`} aria-hidden="true" />
          </button>

          <nav className="hidden flex-wrap items-center gap-x-6 gap-y-2 text-[15px] lg:flex">
            {navItems.map((item) => {
              const active = currentPath === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-150 ${
                    active ? "font-medium text-[#111827]" : "font-normal text-[#697180] hover:text-[#111827]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>

        {menuOpen ? (
          <nav className="mt-3 flex flex-col border-t border-[#dfe3ea] pt-3 text-[14px] lg:hidden">
            {navItems.map((item) => {
              const active = currentPath === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`py-2 transition-colors duration-150 ${
                    active ? "font-medium text-[#111827]" : "font-normal text-[#697180]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        ) : null}
      </header>
    </div>
  );
}

export default Header;

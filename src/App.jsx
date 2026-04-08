import { useCallback, useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CvPage from "./pages/CvPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import CertificatesPage from "./pages/CertificatesPage";

const routes = {
  "/": HomePage,
  "/certificates": CertificatesPage,
  "/curriculum-vitae": CvPage,
  "/projects": ProjectsPage,
  "/contact": ContactPage,
};

function normalizePath(pathname) {
  if (!pathname || pathname === "/index.html") {
    return "/";
  }

  return pathname.endsWith("/") && pathname.length > 1
    ? pathname.slice(0, -1)
    : pathname;
}

function App() {
  const [path, setPath] = useState(normalizePath(window.location.pathname));
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef(null);

  const navigateTo = useCallback((nextPath, options = {}) => {
    const normalized = normalizePath(nextPath);
    const { replace = false, fromPopState = false } = options;

    if (!routes[normalized]) {
      return;
    }

    if (normalized === path && !fromPopState) {
      return;
    }

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    setVisible(false);

    timeoutRef.current = window.setTimeout(() => {
      if (!fromPopState) {
        const method = replace ? "replaceState" : "pushState";
        window.history[method]({}, "", normalized);
      }

      setPath(normalized);
      window.scrollTo({ top: 0, behavior: "auto" });
      requestAnimationFrame(() => setVisible(true));
    }, 170);
  }, [path]);

  useEffect(() => {
    const handlePopState = () => {
      navigateTo(window.location.pathname, { replace: true, fromPopState: true });
    };

    const handleDocumentClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = event.target.closest("a[href]");
      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || anchor.target === "_blank" || anchor.hasAttribute("download")) {
        return;
      }

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.hash) {
        return;
      }

      const nextPath = normalizePath(url.pathname);
      if (!routes[nextPath]) {
        return;
      }

      event.preventDefault();
      navigateTo(nextPath);
    };

    window.addEventListener("popstate", handlePopState);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", handleDocumentClick);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [navigateTo]);

  const ActivePage = routes[path] ?? HomePage;

  return (
    <div className="min-h-screen bg-[#eef0f4] text-[#1f2430]">
      <Header currentPath={path} />
      <div
        className={`mx-auto w-full max-w-[1180px] px-5 pb-6 pt-2 transition-all duration-200 ease-out sm:px-7 lg:px-12 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-[8px] opacity-0"
        }`}
      >
        <ActivePage />
        <Footer />
      </div>
    </div>
  );
}

export default App;

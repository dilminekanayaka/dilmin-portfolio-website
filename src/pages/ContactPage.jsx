import { useEffect, useRef, useState } from "react";
import Banner from "../components/Banner";
import SectionCard from "../components/SectionCard";
import { assets, connectLinks, contactInfo } from "../data/siteData";

const hoverStyles = {
  Facebook: "hover:border-[#1877f2] hover:bg-[#1877f2]",
  Instagram: "hover:border-[#e1306c] hover:bg-[#e1306c]",
  GitHub: "hover:border-[#24292f] hover:bg-[#24292f]",
  LinkedIn: "hover:border-[#0a66c2] hover:bg-[#0a66c2]",
  Medium: "hover:border-[#00ab6c] hover:bg-[#00ab6c]",
};

function ContactPage() {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimerRef = useRef(null);
  const formRef = useRef(null);

  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const showToast = (type, message) => {
    setToast({ type, message });
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(() => {
      setToast(null);
    }, 4200);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.from_name || !formData.email || !formData.message) {
      const message = "Please fill in all fields before sending.";
      setStatus({ type: "error", message });
      showToast("error", message);
      return;
    }

    if (!window.emailjs || !publicKey || !serviceId || !templateId) {
      const message = "EmailJS is not configured yet. Add your keys to the .env file first.";
      setStatus({ type: "error", message });
      showToast("error", message);
      return;
    }

    try {
      setSending(true);
      setStatus({ type: "idle", message: "" });

      await window.emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      setFormData({ from_name: "", email: "", message: "" });
      if (formRef.current) {
        formRef.current.reset();
      }
      setStatus({ type: "success", message: "Your message has been sent successfully." });
      showToast("success", "Message sent successfully.");
    } catch (error) {
      const detail = error?.text || error?.message || "Failed to send your message. Please try again.";
      console.error("EmailJS send failed:", error);
      setStatus({ type: "error", message: detail });
      showToast("error", detail);
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="space-y-0">
      <Banner title="Contact Me" image={assets.bannerImage} compact />

      <SectionCard className="border-t-0 px-4 py-[12px] text-[13px] font-normal text-[#515969] sm:px-5 sm:text-[14px]">
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
          <p>
            <span className="font-semibold uppercase text-black">Email:</span> {contactInfo.email}
          </p>
          <span className="hidden text-[#b4bbc6] sm:inline">|</span>
          <p>
            <span className="font-semibold uppercase text-black">Mobile:</span> {contactInfo.phone}
          </p>
          <span className="hidden text-[#b4bbc6] sm:inline">|</span>
          <p>
            <span className="font-semibold uppercase text-black">Address:</span> {contactInfo.location}
          </p>
        </div>
      </SectionCard>

      <div className="mt-3 space-y-3">
        <SectionCard className="px-4 py-4 sm:px-7 sm:py-6">
          <h2 className="text-[22px] font-semibold text-[#171e29] sm:text-[24px]">Connect Now</h2>
          <p className="mt-3 max-w-[900px] text-[15px] leading-[1.8] text-[#6d7583] sm:text-[16px]">
            Connect with me on social media! Follow my journey, explore my projects, and stay updated. Click the links below to connect!
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {connectLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex h-[38px] items-center justify-center gap-[8px] rounded-[3px] border border-[#d7dce4] bg-black px-4 text-[11px] font-semibold uppercase tracking-[0.03em] text-white transition-colors duration-200 ${hoverStyles[item.label] ?? "hover:bg-black/85"}`}
              >
                <i className={`${item.icon} text-[12px]`} aria-hidden="true" />
                {item.label}
              </a>
            ))}
          </div>
        </SectionCard>

        <SectionCard className="px-4 py-4 sm:px-7 sm:py-7">
          <div className="grid gap-7 md:grid-cols-[1fr_390px] md:gap-8">
            <div className="pr-0 md:border-r md:border-[#e7ebf0] md:pr-8">
              <h2 className="text-[22px] font-semibold text-[#171e29] sm:text-[24px]">Let's Connect and Collaborate</h2>
              <p className="mt-4 max-w-[520px] text-[15px] leading-[1.8] text-[#6d7583] sm:text-[16px]">
                Thank you for visiting my portfolio! Whether you have an idea for a project, a freelance opportunity, or just want to say hi - feel free to reach out.
              </p>
              <h3 className="mt-6 text-[22px] font-semibold text-[#171e29] sm:text-[24px]">How Can I Help You?</h3>
              <p className="mt-4 max-w-[520px] text-[15px] leading-[1.8] text-[#6d7583] sm:text-[16px]">
                Are you looking for a front-end developer, a full-stack collaborator, or someone to bring your website idea to life? Let's discuss how I can help turn your vision into reality.
              </p>
            </div>

            <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
              <h2 className="text-[22px] font-semibold text-[#171e29] sm:text-[24px]">Send me a message</h2>
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Full Name"
                className="h-[42px] w-full rounded-[2px] border border-[#e2e6ec] px-3 text-[15px] text-[#616b79] outline-none placeholder:text-[#c1c6cf]"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="h-[42px] w-full rounded-[2px] border border-[#e2e6ec] px-3 text-[15px] text-[#616b79] outline-none placeholder:text-[#c1c6cf]"
              />
              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full rounded-[2px] border border-[#e2e6ec] px-3 py-3 text-[15px] text-[#616b79] outline-none placeholder:text-[#c1c6cf]"
              />
              <input type="hidden" name="to_email" value="dilmin.dev@gmail.com" />
              {status.message ? (
                <p className={`text-[13px] ${status.type === "success" ? "text-[#1f9d55]" : "text-[#dc2626]"}`}>
                  {status.message}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={sending}
                className="inline-flex h-[36px] items-center justify-center rounded-[3px] border border-[#d7dce4] bg-black px-[18px] text-[12px] font-semibold text-white transition hover:bg-black/85 disabled:cursor-wait disabled:opacity-75"
              >
                <i className="bi bi-send mr-2 text-[11px]" aria-hidden="true" />
                {sending ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </SectionCard>
      </div>

      {toast ? (
        <div className="fixed bottom-4 right-4 z-50 max-w-[320px] rounded-[10px] border border-[#dfe3ea] bg-white px-4 py-3 shadow-[0_18px_45px_rgba(15,23,42,0.18)]">
          <div className="flex items-start gap-3">
            <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${toast.type === "success" ? "bg-[#e8f8ef] text-[#1f9d55]" : "bg-[#fdecec] text-[#dc2626]"}`}>
              <i className={`bi ${toast.type === "success" ? "bi-check2" : "bi-exclamation-triangle"} text-[16px]`} aria-hidden="true" />
            </div>
            <div>
              <p className="text-[13px] font-semibold text-[#111827]">{toast.type === "success" ? "Message sent" : "Something went wrong"}</p>
              <p className="mt-1 text-[12px] leading-[1.6] text-[#657084]">{toast.message}</p>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}

export default ContactPage;

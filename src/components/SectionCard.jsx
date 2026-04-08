import { forwardRef } from "react";

const SectionCard = forwardRef(function SectionCard({ children, className = "", ...props }, ref) {
  return (
    <section ref={ref} {...props} className={`border border-[#dfe3ea] bg-white ${className}`.trim()}>
      {children}
    </section>
  );
});

export default SectionCard;

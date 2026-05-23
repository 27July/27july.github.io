import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsVisible(window.scrollY > 320);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-5 right-5 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#4C566A]/70 bg-[#202838]/95 text-[#D8DEE9] shadow-lg shadow-black/30 transition hover:border-[#88C0D0]/60 hover:text-[#88C0D0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88C0D0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151B26]"
    >
      <ArrowUp size={16} />
    </button>
  );
}

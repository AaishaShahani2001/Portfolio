import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-4 rounded-full
      bg-linear-to-r from-purple-500 to-purple-700
      text-white shadow-lg shadow-purple-500/40
      transition-all duration-300
      hover:scale-110 hover:shadow-purple-500/70
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
      aria-label="Scroll to top"
    >
      <FiArrowUp className="text-xl" />
    </button>
  );
}

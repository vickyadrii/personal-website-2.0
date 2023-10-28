import { useEffect, useState } from "react";
import arrowTop from "../../assets/icons/arrow-top.svg";

const ArrowTop: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    showButton && (
      <button onClick={goTop} className="fixed md:flex hidden bottom-8 right-8 z-40">
        <div className="p-2 bg-white/70 hover:bg-white border backdrop-blur-sm drop-shadow-sm hover:drop-shadow-md transition-all duration-200 rounded-xl">
          <img src={arrowTop} alt="" decoding="async" loading="lazy" />
        </div>
      </button>
    )
  );
};

export default ArrowTop;

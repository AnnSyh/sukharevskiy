import { useEffect, useState } from "react";

const TopArrow = () => {
  const [header, setHeader] = useState("hide-arrow");

  const listenScrollEvent = (event) => {
    const visibleArrow = 100;

    if (window.scrollY >= visibleArrow) {
      return setHeader("visible-arrow");
    } else if (window.scrollY < visibleArrow) {
      return setHeader("hide-arrow");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <a
      className={header + " back-to-top"}
      href="#top-page"
      role="button"
      aria-label="Back to top"
    >
      <svg
        className="fill-current"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.58l5.995 5.988-1.416 1.414-4.579-4.574-4.59 4.574-1.416-1.414 6.006-5.988z" />
      </svg>
    </a>
  );
};

export { TopArrow };

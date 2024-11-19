import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 0.1) {
      setScrolled(true); // If scrolled more than 20%, change state to true
    } else {
      setScrolled(false); // If scroll position is less than 20%, set state to false
    }
  };

  // Use useEffect to add and clean up the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-[10000] top-0 px-20 transition-all duration-400 ease-in-out ${
        scrolled
          ? "glass text-white border-2 py-6 border-gray-300"
          : "bg-transparent py-9 text-zinc-50"
      }`}
    >
      <div className="flex justify-between items-center">
        <a href="/" className="text-2xl">
          Rendev
        </a>
        <ul className="space-x-6 text-base sm:hidden md:flex">
          <li>
            <a href="/portofolio">Portofolio</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

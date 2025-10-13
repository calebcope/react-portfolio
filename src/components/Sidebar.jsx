import { useState, useEffect } from "react";
import { SiGithub, SiLinkedin, SiInstagram,  } from "react-icons/si";
import { BiSolidCoffeeBean } from "react-icons/bi";

export default function Sidebar() {
  const titles = ["Web", "Game", "Mobile", "Software"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === titles.length) return;

    // Typing speed (faster when deleting)
    const speed = deleting ? 75 : 150;

    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        deleting ? prev - 1 : prev + 1
      );

      // If finished typing word, wait then start deleting
      if (!deleting && subIndex === titles[index].length) {
        setTimeout(() => setDeleting(true), 1000);
      }

      // If finished deleting, move to next word
      if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

    return (
    <div className="flex flex-col justify-between h-dvh py-24">

      <div className="w-fit">
        <h1 className="text-5xl font-heading text-near-black">Caleb Cope</h1>

        <h2 className="text-xl font-bodybold text-stone-700 mt-5 flex">
          <span
            className="text-brown-dark px-1 animate-pulse inline-block"
          >
            {titles[index].substring(0, subIndex)}
          </span>
          &nbsp;Developer
        </h2>
      </div>

      <div className="w-fit flex space-x-8 mt-8">
        <a href="https://github.com/calebcope" target="_blank" rel="noreferrer">
          <SiGithub size={28} className="transition-colors hover:text-[#E2BA86]" />
        </a>
        <a href="https://linkedin.com/in/calebcope" target="_blank" rel="noreferrer">
          <SiLinkedin size={28} className="transition-colors hover:text-[#E2BA86]" />
        </a>
        <a href="https://instagram.com/calebtcope" target="_blank" rel="noreferrer">
          <SiInstagram size={28} className="transition-colors hover:text-[#E2BA86]" />
        </a>
        <a href="https://nutritionsource.hsph.harvard.edu/food-features/coffee/" target="_blank" rel="noreferrer">
          <BiSolidCoffeeBean size={28} className="transition-colors hover:text-[#E2BA86]" />
        </a>
      </div>
    </div>
  );
}
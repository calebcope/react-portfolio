import { useState, useEffect } from "react";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

export default function Sidebar() {
  const titles = ["Web", "Game", "App", "Software"];
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
    <div className="flex flex-col justify-center">
      {/* Name */}
      <h1 className="text-3xl font-bold">Caleb Cope</h1>

      {/* Typewriter effect */}
      <h2 className="text-lg text-gray-700 mt-2">
        Your new{" "}
        <span className="text-blue-600 font-semibold border-r-2 border-blue-600 pr-1 animate-pulse">
          {titles[index].substring(0, subIndex)}
        </span>{" "}
        Developer
      </h2>

      {/* Short tagline */}
      <p className="mt-4 text-sm text-gray-500">
        Building games, apps, and web experiences.
      </p>

      {/* Social links */}
      <div className="flex space-x-4 mt-6">
        <a href="https://github.com/calebcope" target="_blank" rel="noreferrer">
          <SiGithub size={24} className="hover:text-blue-600 transition-colors" />
        </a>
        <a href="https://linkedin.com/in/calebcope" target="_blank" rel="noreferrer">
          <SiLinkedin size={24} className="hover:text-blue-600 transition-colors" />
        </a>
        <a href="https://instagram.com/calebtcope" target="_blank" rel="noreferrer">
          <SiInstagram size={24} className="hover:text-blue-600 transition-colors" />
        </a>
      </div>
    </div>
  );
}
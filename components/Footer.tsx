import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 flex items-center justify-between w-full h-16 px-48">
      <p className="text-sm">© {new Date().getFullYear()} Alexis Osuna.</p>
      <div className="space-x-8 text-sm underline-offset-4">
        <a
          className="hover:underline"
          href="https://www.github.com/alexis-osuna"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="hover:underline"
          href="https://www.alexisosuna.dev"
          target="_blank"
          rel="noreferrer"
        >
          Alexis
        </a>
      </div>
    </footer>
  );
};

export default Footer;

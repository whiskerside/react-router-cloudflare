import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [{ href: "/", label: "Home" }];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-gray-800 text-white">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold">
              <a href="/" title="Raect Router 7">
                Raect Router 7
              </a>
            </div>
            <button className="md:hidden" onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>

            <nav
              id="mobile-menu"
              className={`${
                isMenuOpen ? "" : "hidden"
              } md:block absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent`}
            >
              <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
                {navLinks.map((link: { href: string; label: string }) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-gray-300"
                      title={`${link.label}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

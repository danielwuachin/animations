'use client'
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Lógica para realizar la búsqueda con la query 'searchQuery'
    console.log(`Search query: ${searchQuery}`);
    setSearchQuery('');
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      {/* Logo y botón Home */}
      <div>
        <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-8" />
        </Link>
      </div>

      {/* Barra de búsqueda */}
      <div className="relative">
        {/* Botón de búsqueda (solo visible en pantallas pequeñas) */}
        {!searchOpen && (
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 focus:outline-none"
            onClick={handleSearchToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 20l-6-6m0 0l-6-6m6 6l-6 6m6-6l6 6"
              />
            </svg>
          </button>
        )}

        {/* Barra de búsqueda (visible en pantallas pequeñas o cuando se activa) */}
        <form
          className={`flex items-center ${searchOpen ? 'max-w-xs' : 'hidden sm:flex'} ml-4`}
          onSubmit={handleSearchSubmit}
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 bg-gray-700 text-white placeholder-white focus:outline-none"
          />
          {searchOpen && (
            <button type="submit" className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 17l5-5m0 0l-5-5m5 5H4"
                />
              </svg>
            </button>
          )}
        </form>
      </div>

      {/* Botón "Contact Me!" */}
      <div>
        <button className="px-4 py-2 bg-gray-700 text-white rounded focus:outline-none">
          Contact Me!
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';



function Header() {
    const navLinks = [
      { name: "Home", href: "/" },
      { name: "Characters", href: "/characters" },
      { name: "Episodes", href: "/episodes" },
      { name: "Location", href: "/location" },
    ];
  
    return (
      <header className="bg-gray-800 text-gray-100 py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="/" className="font-bold text-xl">
           RickWIki
          </a>
          <div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 hover:bg-gray-700 rounded transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    );
  }
 
 export default Header;
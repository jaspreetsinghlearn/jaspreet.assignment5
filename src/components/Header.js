import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header({ search, setSearch }) {
  const path = useLocation().pathname;

  return (
    <header>
      <div className="header-inner">
        <Link to="/" className="logo-link">
          <h1>Shoe Store</h1>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          {/* Removed Cart Link as per request */}
        </nav>
        {path === '/' && (
          <input
            type="text"
            placeholder="Search shoes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        )}
      </div>
    </header>
  );
}

export default Header;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header({ search, setSearch }) {
  const path = useLocation().pathname;

  return (
    <header>
      <div className="header-inner">
        <h1>Shoe Store</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </nav>
        {path === '/' && (
          <input
            type="text"
            placeholder="Search shoes..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        )}
      </div>
    </header>
  );
}

export default Header;

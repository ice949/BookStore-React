import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1> BookStore </h1>
    <div className="links">
      <Link to="/">Books</Link>
      <Link to="/Category">Categories</Link>
    </div>
  </nav>
);

export default Navbar;

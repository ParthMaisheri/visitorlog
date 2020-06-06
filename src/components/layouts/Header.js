import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fa fa-home"></i> HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">
                <i className="fa fa-plus"></i> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className="nav-link">
                <i className="fa fa-rss"></i>Latest News
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;

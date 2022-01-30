import React from "react";

const Header = () => {
  return (
    <div>
      <header id="#top">
        <nav className="main-navigation navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img src="images/white-logo.png" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href="index.html">
                    Homepage
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="explore.html">
                    Explore Work
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="trending.html">
                    Trending
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

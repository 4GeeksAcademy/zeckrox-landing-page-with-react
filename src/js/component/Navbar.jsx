import React from "react";


//create your first component
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container">
    <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link text-white" href="#">Home</a>
        <a className="nav-link text-white" href="#">About</a>
        <a className="nav-link text-white" href="#">Services</a>
		<a className="nav-link text-white" href="#">Contact</a>
      </div>
    </div>
  </div>
</nav>
	);
};

export default Navbar;

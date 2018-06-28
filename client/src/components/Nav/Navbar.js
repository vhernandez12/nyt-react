import React from "react";

const Nav = () => (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <a className="navbar-brand" href="/">NYT-React</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/search">Search</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/savedArticles">Saved Articles</a>
            </li>
        </ul>
    </div>
</nav>
);

export default Nav;
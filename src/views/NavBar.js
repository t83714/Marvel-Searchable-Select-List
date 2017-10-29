import React from "react";
import MediaQuery from "react-responsive";
import SearchBox from "./SearchBox";

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-danger">
                <MediaQuery query="(min-width: 576px)" className="d-flex justify-content-between container-fluid">
                <a className="navbar-brand" href="#" onClick={(e) => { e.preventDefault(); }}>MARVEL</a>
                    <SearchBox />
              </MediaQuery>
                <MediaQuery query="(max-width: 576px)" className="container-fluid p-0">
                    <button
                        className="navbar-toggler position-absolute" type="button" aria-label="Toggle navigation"
                    style={{ color: "white", border: "none" }}
                  >
                        <span className="fa fa-bars" />
                  </button>
                    <a className="navbar-brand mx-auto" href="#" onClick={(e) => { e.preventDefault(); }}>MARVEL</a>
              </MediaQuery>
          </nav>
        );
    }
}

export default NavBar;

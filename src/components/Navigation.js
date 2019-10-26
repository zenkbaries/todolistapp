import React from 'react';
import { useAuth0 } from "../react-auth0-spa";

class Navigation extends React.Component {

  render() {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();


    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">The List</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">All items <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/create">Create Item</a>
            </li>
            <li>
            {/* <div>
              {!isAuthenticated && (
                <button
                  onClick={() =>
                    loginWithRedirect({})
                  }
                >
                  Log in
                </button>
              )}

              {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
            </div> */}
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Tags</a>
            </li> */}
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
      </nav>
    )
  }
}

export default Navigation;
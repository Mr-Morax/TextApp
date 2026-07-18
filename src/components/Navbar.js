import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import HighlightedParagraph from './HighlightedParagraph';


export default function Navbar(props) {
  let [key, setKeyword] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    props.setSearchQuery(key);
  }
  return (
    <div className="App">
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">{props.home}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
              </li>

            </ul>
            <form className="d-flex"
              role="search"
              onSubmit={handleSearch}
            >
              <input className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={key}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button className="btn btn-outline-success"
                // onClick={() =>handleSearch()}  In HTML forms, clicking a <button type="submit"> triggers the form's onSubmit event automatically. It is much better practice in React to put the submit handler on the <form> tag itself using onSubmit. This ensures the search fires whether the user clicks the button or presses the Enter key while typing.
                type="submit">
                Search</button>

              <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
                  <label className="form-check-label" htmlFor="switchCheckDefault">DARK MODE</label>
              </div>
            </form>
          </div>
        </div>
      </nav>

    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  home: PropTypes.string,
  about: PropTypes.string.isRequired
}

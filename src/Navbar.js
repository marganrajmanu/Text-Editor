import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${props.mode ? "dark" : "body-tertiary"} navbar-${props.mode ? "dark" : "body-tertiary"}`}>
                <div className="container-fluid">
                    <h4 className="navbar-brand" style={{ paddingTop: "0.5em", paddingLeft: "1em" }}>
                        Text Editor
                    </h4>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`mx-2 form-check form-switch text-${props.mode ? "light" : "dark"}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode ? "Enable light mode" : "Enable dark mode"}</label>
                    </div>
                </div>
            </nav >
        </>
    )
}

Navbar.propTypes = {
    name: PropTypes.string
}

Navbar.defaultProps = {
    name: 'n/a'
}

export default Navbar   
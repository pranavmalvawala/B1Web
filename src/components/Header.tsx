import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => (
  <>
    <div id="navbar" className="fixed-top">
      <div className="container">
        <div className="row">
          <div className="col-6 col-lg-2-5">
            <a className="navbar-brand" href="/"><img src="/images/logo-nav.png" alt="logo" /></a>
          </div>
          <div className="col-6 col-lg-2-5 text-right" id="navRight">
            <a href="#register" className="btn btn-success btn-sm">Register</a> &nbsp;
            <Link to="/login" className="btn btn-primary btn-sm">Login</Link>
          </div>
        </div>
      </div>
    </div>
    <div id="navSpacer"></div>
  </>
)

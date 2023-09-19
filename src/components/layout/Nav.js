import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
const Nav = () => {
  const [show, SetShow] = useState(false);
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to={"/"} className="brand-logo">
          MarioPlan
        </Link>
        <SignedOut />
        {show && <SignedIn />}
      </div>
    </nav>
  );
};

export default Nav;

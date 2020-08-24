import React, { useState, useEffect } from "react";
import "../nav.css";

function Nav() {
  const [shownav, handleShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShowNav(true);
      } else handleShowNav(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${shownav && "nav-black"}`}>
      <img
        className="nav-logo"
        src="https://assets.brand.microsites.netflix.io/assets/884000e8-b375-11e7-9274-06c476b5c346_cm_1024w.png?v=35"
        alt="Netflix-logo"
      />
      <a
        href="https://www.facebook.com/meRimas64"
        title="connect with me Sam"
        target="_blank"
      >
        <img
          className="fb-logo"
          src="https://cdn4.iconfinder.com/data/icons/social-icon-4/842/facebook-512.png"
          alt="facebook-logo"
        />
      </a>
    </div>
  );
}

export default Nav;

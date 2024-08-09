import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Hamburger from "hamburger-react";

function Nav() {
  const data = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
    { name: "Portfolio", to: "/portfolio" },
  ];
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="Nav">
      <h1>ProGamer</h1>
      <nav>
        {data.map((elem, index) => (
          <Link key={index} to={elem.to}>
            {elem.name}
          </Link>
        ))}
      </nav>
      <div className="hamburger">
      <Hamburger toggled={isOpen} size={30} toggle={setOpen} />
      {isOpen && (
        <div className="mobnav" >
          {data.map((elem, index) => (
            <Link onClick={() => setOpen((prev) => !prev)} key={index} className="" to={elem.to}>
              {elem.name}
            </Link>
          ))}
        </div>
      )}
      </div>
      
    </div>
  );
}

export default Nav;

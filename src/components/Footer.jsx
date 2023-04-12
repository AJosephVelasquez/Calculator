import React from "react";

function Footer(){

    const yearNow = new Date().getFullYear();

    return (
      <div className="footer">
        <p>© {yearNow}</p>
        <p>Alain Velasquez</p>
      </div>
    )
}

export default Footer;
import React from "react";
import CalculateIcon from '@mui/icons-material/Calculate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'

function Header(){
    return (
        <div className="header">
            <h1>Calculator</h1>
            <span className="icon"><CalculateIcon /></span>
            <span className="calc-icon"><FontAwesomeIcon icon={faCalculator} size ="2xl" style={{color: "#ffffff"}} /></span>
        </div>
    )
}

export default Header;

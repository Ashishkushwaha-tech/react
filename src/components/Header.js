import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header= () => {
    let s=1;
    const[btnName,setBtnName]=useState("Login");
 return <div className="header">
        <div className="logo-container">
            <img alt="logo" className="logo"
            src={LOGO_URL}>
            </img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart {s}</li>
                <button className="log-btn"
                onClick={()=>{
                    s=5;
                    btnName==="Login"?setBtnName("LogOut"):setBtnName("Login");
                }}
                >{btnName}</button>
            </ul>
        </div>
    </div>
};

export default Header;
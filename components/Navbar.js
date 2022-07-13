import React from "react";
import navstyles from '../styles/Navbar.module.css'

const Navbar=()=>{
    return(
        <div>
            <ul className={navstyles.ul}>
                <li className={navstyles.li}>
                    <a href="/">HOME</a>
                </li>
                <li className={navstyles.li}>
                    <a href="/contact">CONTACT</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
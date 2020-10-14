import React from "react";
import FooterStyle from "./FooterStyle";


function Footer() {

    return <FooterStyle>
        <img src="http://placegoat.com/50/50" alt="footer-image"/>
            <p>
                I made this in {new Date().getFullYear()}
            </p>
    </FooterStyle>
}

export default Footer;
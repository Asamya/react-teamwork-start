import React from "react";
import HeaderStyle from "./HeaderStyle";

function Header() {

    return <HeaderStyle className="header">
        <a href="https://www.google.com/search?q=goat&rlz=1C5GCEA_enDE920DE921&sxsrf=ALeKk02vGihj0JoSFcIVWFebXX5OWXQO-Q:1602574140566&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjtgv_yhbHsAhVO-aQKHbooCs4Q_AUoAXoECBwQAw&biw=1440&bih=821">
            <img src="http://placegoat.com/goatse/150/200" alt="logo"/>
        </a>
        <h1>
            I'am a goat and proud of it
        </h1>
    </HeaderStyle>
}

export default Header;
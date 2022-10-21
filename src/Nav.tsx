import {Icon} from "./Icon";
let Menu = require('./image/menu.png');

export const Nav = () => {
    return ( 
        <nav>
            <Icon/>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
                <li><img src={Menu} alt="menu" className="menu"/></li>
            </ul>
        </nav>
);
}
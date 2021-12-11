import React from "react";
import { Link } from "gatsby"
import { stack as Menu } from "react-burger-menu";

export default props => {
    return (
        <Menu {...props}>
        
            <Link to="/" className="menu-item menu-title" >
                ナゴヤ・シン・オーケストラ
            </Link>
            <Link to="/" className="menu-item" >
                トップページ
            </Link>

            <Link to="/soloist" className="menu-item" >
                ソリスト
            </Link>

            <Link to="/about" className="menu-item" >
                シンオケとは
            </Link>

            <Link to="/concert" className="menu-item" >
                演奏会情報
            </Link>
            <Link to="/blogs" className="menu-item" >
                お知らせ/コラム
            </Link>
        </Menu>
    );
};
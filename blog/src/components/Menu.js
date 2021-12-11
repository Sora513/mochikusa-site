import React from "react";
import { Link } from "gatsby"
import { stack as Menu } from "react-burger-menu";

export default props => {
    return (
        <Menu {...props}>
        
            <Link to="/" className="menu-item menu-title" >
                よもぎ誌
            </Link>
            <Link to="/" className="menu-item" >
                トップページ
            </Link>

            <Link to="/about" className="menu-item" >
                このサイトについて
            </Link>

            <Link to="/profile" className="menu-item" >
                自己紹介
            </Link>

            <Link to="/portfolio" className="menu-item" >
                ポートフォリオ
            </Link>
            <Link to="/blogs" className="menu-item" >
                記事
            </Link>
        </Menu>
    );
};
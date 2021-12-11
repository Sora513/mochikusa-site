
import React from 'react'
import Footer from './Footer'
import Seo from './Seo'
import "../css/layout.css"
import Import from './Import'
import Header from "./Header"
import Menu from "./Menu";
require("../css/prism.css")
const Layout = (  props ) => {
    return (
        <div>
            
            <Seo
            title={props.title}
            description={props.description}
            image={props.image}
            location={props.location}
            />
            <Import/>
            <Menu width={250}/>
            <Header/>

                { props.children }
            <Footer/>
        </div>
    )
}

export default Layout
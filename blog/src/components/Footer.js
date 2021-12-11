import React from 'react'
import gatsbylogo from "../images/Gatsby_Logo.png"
const Footer = () => {
    return (
        <footer>
            <table align="center">
                <tbody>
                    <tr>
                        <td>Powered by </td>
                        <td><a target="_blank" href="https://www.gatsbyjs.com/"><img src={gatsbylogo} /></a></td>
                    </tr>
                </tbody>
            </table>
        </footer>
    )
}

export default Footer
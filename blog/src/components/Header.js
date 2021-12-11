import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <header>
      <nav>

        <h2><Link to="/">{data.site.siteMetadata.title}</Link></h2>
        <div className="header-flex-container">
          <ul className="link-list">
            <li>
              <Link to="/" activeClassName="active">トップページ</Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active">このサイトについて</Link>
            </li>
            <li>
              <Link to="/profile" activeClassName="active">自己紹介</Link>
            </li>
            <li>
              <Link to="/portfolio" activeClassName="active">ポートフォリオ</Link>
            </li>
            <li>
              <Link to="/blogs" activeClassName="active">記事</Link>
            </li>
          </ul>
        </div>


      </nav>
    </header>
  )
}

export default Header
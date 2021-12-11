import React from "react"
import Layout from "../components/Layout.js"
import { graphql, Link } from "gatsby"
import Page from "../components/Page.js"
const Profile = ({ data }) => {

  return (
    < div>
      <Layout
        title={"自己紹介 - " + data.site.siteMetadata.title}
        description={data.site.siteMetadata.description + " - 自己紹介"}
        location="https://mochikusa.com/profile"
      >        
      <section className="maincontents">
          <Page>
            <h1>自己紹介</h1>
            <div className="maincontents-section">
              <h2>はじめまして</h2>
              <p>餅草 よもぎです。Sora513とも名乗っています。</p>
            </div>
            
            <div className="maincontents-section">
              <h2>所属</h2>
              <ul>
                <li><a href="https://www.nitech.ac.jp/edu/new/kodo/em.html">名古屋工業大学 機械工学科2年</a></li>
                <li><a href="https://next-micon.github.io/">Next-MICON</a></li>
                <li><a href="https://nitech-create.com/">nitech Create(niC)</a></li>
                <li><a href="http://nitmic.club.nitech.ac.jp/">NITMic</a></li>
              </ul>
              <p>それぞれリンクになっているので、気になる組織があれば、是非ご覧ください。</p>
            </div>
            <div className="maincontents-section">
              <h2>保有技術/資格/成果物</h2>
              <p>動的に変化するものですので、<Link to="/portfolio">ポートフォリオ</Link>にまとめます。まだ完成していないので、公開していません。少々お待ちください。</p>
            </div>
          </Page>
        </section>
      </Layout>
    </div>
  )
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default Profile
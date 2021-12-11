import React from "react"
import Layout from "../components/Layout.js"
import { graphql } from 'gatsby'
import Page from "../components/Page.js"
const Portfolio = ({ data }) => {

  return (
    <div>
      <Layout
        title={"ポートフォリオ - "+data.site.siteMetadata.title}
        description={data.site.siteMetadata.description + " - ポートフォリオ"}
        location="https://mochikusa.com/portfolio"
      >
        <section className="maincontents">
          <Page>
          <h1>Portfolio</h1>
          <p>未完成のため公開していません。申し訳ございませんが、少々お待ちください。</p>
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

export default Portfolio
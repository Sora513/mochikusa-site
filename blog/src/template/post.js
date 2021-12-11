import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout.js"
import Page from "../components/Page.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
export default function Post({ data }) {
  
  return (

    <Layout
    title={data.markdownRemark.frontmatter.title+" - "+data.site.siteMetadata.title}
    description={data.site.siteMetadata.description+" - "+data.markdownRemark.frontmatter.title}
    location={"https://mochikusa.com"+data.markdownRemark.fields.slug}
    >
      <script  dangerouslySetInnerHTML={{
    __html: `
    $(function(){
      $(".article-main .gatsby-resp-image-wrapper").parent().addClass("article-image-parent")
     
  });
  `
  }}/>
      <section className="maincontents">
        <Page>
        <Link to="/blogs" className="link-back"><span className="back-arrow"><FontAwesomeIcon icon={faArrowLeft} /></span>投稿記事一覧に戻る</Link>
          <h1 className="article-main-title">{data.markdownRemark.frontmatter.title}</h1>
          <div className="article-main" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          <div className="back-arrow-end">
          <Link to="/blogs" className="link-back"><span className="back-arrow"><FontAwesomeIcon icon={faArrowLeft} /></span>投稿記事一覧に戻る</Link>
          </div>
          
        </Page>
      </section>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    },
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields{
        slug
      }
      html
      frontmatter {
        title
        date
        tag
      }
    }
  }
`
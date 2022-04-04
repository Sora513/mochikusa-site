import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout.js"
import Page from "../../components/Page.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const BlogPage = ({ data }) => (

  <Layout
  title={data.microcmsBlog.title+" - "+data.site.siteMetadata.title}
  description={data.site.siteMetadata.description+" - "+data.microcmsBlog.title}
  location={"https://mochikusa.com"+data.blogId}
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
        <h1 className="article-main-title">{data.microcmsBlogtitle}</h1>
        <div className="article-main" dangerouslySetInnerHTML={{ __html: data.microcmsBlog.content }} />
        <div className="back-arrow-end">
        <Link to="/blogs" className="link-back"><span className="back-arrow"><FontAwesomeIcon icon={faArrowLeft} /></span>投稿記事一覧に戻る</Link>
        </div>
        
      </Page>
    </section>
  </Layout>
)

export default BlogPage

export const query = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        description
      }
    },
    microcmsBlog(id: { eq: $id }) {
      blogId
      title
      content
      tag
    }
  }
  `
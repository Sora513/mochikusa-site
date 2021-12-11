
import React from "react"
import Layout from "../components/Layout.js"
import Page from "../components/Page.js"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
export default function Home({ data }) {
  return (
    <div>

<Layout
      title={"記事 - "+data.site.siteMetadata.title}
      description={data.site.siteMetadata.description+" - 記事"}
      location="https://mochikusa.com/blogs/"
      >

        <section className="maincontents">
          <Page>
            <h1>投稿記事一覧</h1>
            {data.allMarkdownRemark.nodes.map(node => (
              <div key={node.id} className="article-node">
                <Link to={node.fields.slug}>
                <div className="article-node-child">
                  {/* この辺変更 */}
                {node.frontmatter.tag=="コラム" && <p> <span className="article-node-child-date">{node.frontmatter.date}</span><span className="article-node-child-tag tag-column">{node.frontmatter.tag}</span><br/> {node.frontmatter.title}</p>}
                {node.frontmatter.tag!="コラム" && <p> <span className="article-node-child-date">{node.frontmatter.date}</span><span className="article-node-child-tag tag-others">{node.frontmatter.tag}</span><br/> {node.frontmatter.title}</p>}
                
                </div>
                </Link>
              </div>
            ))}
          </Page>
        </section>
      </Layout>
    </div>
  )
}

export const query = graphql`
  {
    site{
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        html
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY/MM/DD")
          title
          tag
        }
      }
    }
  }
`
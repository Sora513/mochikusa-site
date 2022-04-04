
import React from "react"
import Layout from "../components/Layout.js"
import Page from "../components/Page.js"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
export default function Home({ data }) {
  return (
    <div>

      <Layout
        title={"記事 - " + data.site.siteMetadata.title}
        description={data.site.siteMetadata.description + " - 記事"}
        location="https://mochikusa.com/blogs/"
      >

        <section className="maincontents">
          <Page>
            <h1>投稿記事一覧</h1>
            {data.allMicrocmsBlog.edges.map(({ node }) => (
              <div key={node.blogId} className="article-node">
                <Link to={`/blog/${node.blogId}`}>
                  <div className="article-node-child">
                    {/* この辺変更 */}
                    {node.tag == "お知らせ" && <p> <span className="article-node-child-date">{node.createdAt}</span><span className="article-node-child-tag tag-column">{node.tag}</span><br /> {node.title}</p>}
                    {node.tag != "お知らせ" && <p> <span className="article-node-child-date">{node.createdAt}</span><span className="article-node-child-tag tag-others">{node.tag}</span><br /> {node.title}</p>}

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
    allMicrocmsBlog {
      edges {
        node {
          blogId
          createdAt(formatString: "YYYY年MM月DD日")
          tag
          title
        }
      }
    }
  }
`
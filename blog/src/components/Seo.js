import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import thumbnail from "../images/ogp.png"
const Seo = ({ title, description, location, image }) => {
  const { site } = useStaticQuery(query)

  return (
    <Helmet>
      <html lang="ja" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@kusa_yomogi" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={location} />
      <meta property="og:image" content={(() => {

        if (image != undefined) {
          return "https://mochikusa.com" + thumbnail
        } else {
          return "https://mochikusa.com" + thumbnail
        }

      })()} />


    </Helmet>
  )
}

export default Seo

const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
      }
    }
  }
`
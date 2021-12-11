import React from "react"
import Layout from "../components/Layout.js"
import { graphql } from 'gatsby'
import Page from "../components/Page.js"
const AboutPage = ({ data }) => {

  return (
    <div>
      <Layout
        title={"このサイトについて - " + data.site.siteMetadata.title}
        description={data.site.siteMetadata.description + " - このサイトについて"}
        location="https://mochikusa.com/about"
      >        <section className="maincontents">
          <Page>
            <h1>このサイトについて</h1>
            <div className="maincontents-section">
              <h2>名刺のようなものとして</h2>
              <p>「あなたは何をしている人ですか？」と聞かれたときに、説明に困ることがあります。<br />
                そんなときに、見せるものがあればと思って作りました。</p>
              <p>また「自分は何をやっているんだろう」と自分自身が自分を見失ったときに、今までを振り返って進む先を決定する材料としても有効だと感じています。</p>
            </div>
            <div className="maincontents-section">
              <h2>同じことで困っている人に</h2>
              <p>何かを作ったり学んでいるときに、躓くことは往々にしてあります。<br />
                「自力でなんとかしろ！」というのも一つの意見ですが、せっかくWebというプラットフォームがあるのですから、同じ悩みを抱えている人に共有できればと思い、記事を書いています。</p>
              <p>また、将来自分が同じことで悩んだときに参照できるものでもあります。</p>
            </div>
            <div className="maincontents-section">
              <h2>ただ作りたかった</h2>
              <p>これが一番思うところです。</p>
              <p>何も考えずにWebサイトをたてられる、いい時代に生きてるなぁと感じます。</p>
              <p>Gatsbyとその仲間たち(たくさんのプラグインたち)と、GitHub、Netlify CMS、Cloudflareを使って作られ、届けられています。</p>
              <p>ないとは思いますが、帯域が大変であれば自分のサーバーにお引っ越しします。<br/>
              そのときは、firebaseを使ってCMSを作ったりしたいですね。<br/>
              帯域が大変でなくとも、CMSなどを作りたくなったら自分のサーバーに移転するつもりです。</p>
              <p>本当はISRで作りたかったですが、一晩で作るとなるとGatsbyで作った方が(慣れているから)いいかなぁと思い、SSGであるGatsbyとNetlify CMSを使って、サーバレスで運用してみます。<br/>
              いつかSSGもCMSも自作したいなぁとか考えています。やりたくなったらやると思います。</p>
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

export default AboutPage
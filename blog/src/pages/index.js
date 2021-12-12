import React from "react"
import Layout from "../components/Layout.js"
import { graphql, Link } from 'gatsby'
import Page from "../components/Page.js"
import sitelogo from "../images/sitelogo.png"
const Index = ({ data }) => {
  return (
    < div>
      <Layout
        title={"トップページ - " + data.site.siteMetadata.title}
        description={data.site.siteMetadata.description + "- トップページ"}
        location="https://mochikusa.com/"
      >
        <section className="maincontents">
          <Page>
            <h1 className="hidden">トップページ</h1>
            <img className="toppage-logo" src={sitelogo}></img>
            <div className="maincontents-section">
              <h2>よもぎ誌</h2>
              <p>作ったもの/悩んだこと/学んだことを書いていきます。<br />
                よもぎについて語る訳ではありません。ご了承ください。</p>
            </div>
            <div className="maincontents-section">
              <h2>私は誰ですか</h2>
              <p>電子工作 → Web → サーバー (ｲﾏｺｺ) → コンパイラ → OS → CPU<br />
                情報に関してはこんな学習の進め方をしています。今より先は変更があるかもしれません。</p>
                <p>自然科学と数学は好物です。<br/>
                物理を理解したくて、今は数学に入門しています。</p>
                <p>各種"デザイン"も好きです。アートから実用的なデザインまで、いろいろ漁っています。</p>
                <p>もし興味があれば、<Link to="/profile">自己紹介</Link>や<Link to="/portfolio">ポートフォリオ</Link>をご覧ください。</p>
            </div>
            <div className="maincontents-section">
              <h2>ここはどこですか</h2>
              <p>どこかのサーバーにある、どこかのウェブページです。<br />
                有益な情報はないかもしれませんが、自分が書いた記事は自分にとって有益なので、おいておきます。</p>
                <p>どうぞ、ごゆっくりしていってください。</p>
            </div>
            <div className="maincontents-section">
            <h2>連絡/依頼したい</h2>
              <p>TwitterのDMより連絡ください。<br />
                もしくは、mochikusa.yomogi「at」gmail.comまでお願い致します。</p>
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

export default Index
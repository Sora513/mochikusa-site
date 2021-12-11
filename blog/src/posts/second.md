---
title: "Gatsbyでつまずいたところ"
date: "2021-09-08"
topImage: "../images/tech.png"
tag: 技術
---

## Gatsbyに入門してつまづいたところ

別途で入門記事は書きますが、備忘録的なところで、つまづいた所を書いていきます。

## useStaticQueryがエラー

それ自体がページとならないコンポーネント(HeaderやFooterなど)において、GraphQLからデータをとってくるときに必要です。

ここで、useStaticQueryだけimportして、graphqlをimportしないと
```
Error: The result of this StaticQuery could not be fetched.
```
と怒られます。当たり前かもしれませんが、ひっかかりました。

## gatsby-config.jsが反映されない

gatsby developを使用している時は、一度停止して、もう一度実行するまでは反映されません。

ブラウザ側でAlartしてくれると思います。

## JSXでscriptを埋め込む

JSXでscriptを埋め込むには
```jsx
<script  dangerouslySetInnerHTML={{
    __html: `
    console.log(“Hello”)
    `
 }}/>
```
みたいにしなければならない。これはgatsbyと言うよりJSXのつまずき。

## gatsby-plugin-imageのサイズ調整

CSSでimgタグにwidthなどを指定すると、スタイルが崩れてしまうので、gatsby-plugin-image側はlayoutをFULL_WIDTHにしておいて、親要素のwidthで調整するのが良さそうです。

mdから埋め込んだ画像に対しては、現状jQueryで親要素を生成して、なんとか調整しています。もっといい方法はありそう。

## Prop aria-current did not match
```
Prop `aria-current` did not match. Server: "null" Client: "page"
```
のエラーは、config.jsに
```javascript
flags: { DEV_SSR: false }
```
を追記したら直りました。無視してもbuildした後は表示されないので、無視でもいいと思います。





---
title: "オブジェクト指向でプログラムを書く"
date: "2021-12-05"
topImage: "../images/tech.png"
tag: 技術
---

これは[NITMic Advent Calendar 2021 - Adventar](https://adventar.org/calendars/6930)の7日目の記事です。

## はじめに
みなさん、「オブジェクト指向」という言葉を聞いたことはありますか？

この「オブジェクト指向」とはどのようなものであるかを2回に分けて説明させていただきます。

私もまだオブジェクト指向に入門したばかりなので、ここは違うだろ！と感じた所があった場合、教えていただけると幸いです。

※この記事は、基本的に「Alan Kay氏が提唱したオブジェクト指向」ではなく、「Bjarne Stroustrup氏が発表したオブジェクト指向」について触れています。前者のオブジェクト指向に関しては、今学んでいるところです。

## オブジェクト指向とは何なのか
オブジェクト指向とは、特にソフトウェアを作る上で重要な考え方です。

しかし、オブジェクト指向という考え方が起こってから応用が進んでいき、設計からコーディングまでかなり広い範囲に適用されるようになりました。

それゆえに、全体像がつかみにくくなってしまっていると学習を進めるうちに感じました。

なので、今回はオブジェクト指向でプログラムを書くこと(OOP)に対象を絞ってまとめました。

## OOP誕生の経緯

### OOP誕生以前のプログラミング
オブジェクト指向誕生以前は、構造化プログラミング言語が最も画期的なものでした。

構造化プログラミングとは何なのかというと、基本3構造と呼ばれる「逐次実行/条件分岐/繰り返し」でプログラムを構築するという考え方です。

構造化プログラミングの誕生以前は、GOTO文を使ってプログラムを書くことが一般的でした。

しかし、分別なくGOTO文を用いてプログラムを作ると、プログラムの構造がわかりにくくなるという欠点がありました。

実際に私もArduinoを動かしていた入門時代は、GOTO分別なく使ってプログラムを書いていたため、デバッグするぐらいなら書き直したほうがマシだと考えていたことを思い出します。

(しかし、私は完全にGOTOが悪だとは思っていません。深いネストから抜けるなどの限定的な用途であれば、コードをわかりやすくすることができると考えます。)

そんなGOTOを原則なくして、上記の基本3構造を主軸とした、より分かり易いプログラムをかけるようにということで構造化プログラミングが誕生しました。

### 構造化プログラミングの課題
そんな構造化プログラミングにも、まだ課題が残されていました。

それは、保守性と再利用性の問題でした。

#### 保守性
特に保守性については、構造化プログラミングにおいても工夫がおこなわれていました。

例えば、グローバル変数の値が予期したものではないときコード全体からその原因を探らなければいけなくなり、保守性を損ねるものです。

そこで、極力グローバル変数を使わずローカル変数と関数間の値渡しを利用して、関数どうしの独立性を高めるといったことをしていました。

しかし、それには限界がありました。ローカル変数というのは、関数の実行が終了すると消えてしまいます。よって、関数の実行期間を超えて保存しておきたい情報は、グローバル変数にせざるを得ませんでした。

これは設計段階の問題ではなく、構造化プログラミング自体が抱える問題といえるでしょう。

#### 再利用性
構造化プログラミングでは、ライブラリや関数を作って再利用が可能でした。

しかし構造化プログラミングでは、もっと大規模な「機能」の再利用などは難しい状況でした。

なぜなら、どうしても「機能」単位の大きな再利用などをしたければグローバル変数を利用する場面が出てきて可読性が低いからです。

可読性の低いプログラムは、どうしても再利用しにくくなります。こちらも、グローバル変数によって起こる問題と言え、構造化プログラミング自体が抱える問題といえるでしょう。

(保守性や可読性というのは、バックグラウンドによって大きく認識が変わるので万人に適応できる話ではないと考えています。しかし、ある人が「こうしたほうが保守性・可読性がいい」と感じる書き方が実現できないというのは、全体として保守性・可読性を損なっているのだと思っています。よって、OOPよりも構造化プログラミングのほうが分かり易いといった場面や人もいると思いますが、全体としては保守性・可読性が向上したと言えるでしょう。)

#### これら課題を解決するOOP
これらの問題を解決するために、OOPが考えられ、使われているのです。

では、具体的にはどのようにして、保守性・再利用性の問題に対処していったのでしょうか。

## OOP三大要素

### カプセル化
これは、関数と関連した変数をまとめてカプセルにし、カプセルの外からは変数や関数にアクセスできないようにする(ことを可能にする)、というものです。

構造化プログラミング言語では、関数とグローバル変数をまとめる機能はありませんでした。(命名で関係性を明示するぐらいでしょうか。)

よって、「関数より大きな”部品”を作る」ことはできませんでした。これは、再利用性に関連する部分ですね。

また、「関数の実行期間を越えて保存したい変数はグローバル変数にしなければならず、どこからアクセスされたのかはコード全体を見なければわからないので、保守性が損なわれる。」といった問題に対しては、カプセルの外から変数や関数にアクセスできないようにする(ことを可能にする)ことで、「関数の実行期間を越えて保存できるローカル変数」を定義することを可能としました。

「関数と関連した変数をまとめてカプセルにし、カプセルの外からは変数や関数にアクセスできないようにする(ことを可能にする)」ことで、保守性と再利用性を高めるというのが、カプセル化です。

### 継承

カプセル化をする際に、共通の部分が出てきたとき、それをコピー＆ペーストして実装するのは、保守性の面でも再利用性の面でも問題がある用に思えます。

そこで、その共通の部分を別のカプセルにまとめて、そこから持ってきて(継承して)しまおう！というのが継承というものです。

### ポリモーフィズム

これは、関数を呼び出す側を共通化する、というものです。

例えば情報を取得したい場合、相手がローカルファイルなのか、Web上のリソースなのかを関数を呼び出す側で意識しなくていいということでしょうか。

そうしておくことで、仮にデータベースから情報を取得する処理を追加したい場合、ポリモーフィズムを利用すれば、関数を呼び出す側は一切変更しなくていいでしょう。

このようなものをポリモーフィズムと言います。

## OOPの抱える問題

私は、「Bjarne Stroustrup氏が発表したオブジェクト指向」はシンプルではないなと感じ、そこが問題ではないかと思います。

実際、C++やJavaといった「Bjarne Stroustrup氏が発表したオブジェクト指向」で作られている言語で作られたコードというものは、私にはかなり複雑なように思えます。

たしかに、カプセル化/継承/ポリモーフィズムという考え方の思想は素晴らしいもののように思えます。

しかしGOTOがそうであったように、いくら適切な使い方をすればコードが分かり易くなるからといって、いつでも適切に使えるとは思えません。

今では、GoFのデザインパターンなどである程度アンチパターンなどが見えてきています。

しかし、それを理解し、実際に活用している人ばかりではないでしょう。そして、「複雑にならないように注意する」より「そもそも複雑になりようがない」方がいいはずだ、と思っています。

(そうしたオブジェクト指向に対しての不信感があって、勉強を始めました。そして、関数型言語への興味もわいてきました。)

要するに、「複雑になりやすさ」というのは問題ではないかと感じています。

## あとがき
オブジェクト指向がいいものとして見られている風潮に対する不信感から、オブジェクト指向に関して勉強を始めました。

調べていくうちに、どうやらオブジェクト指向には「Alan Kay氏が提唱したオブジェクト指向」と「Bjarne Stroustrup氏が発表したオブジェクト指向」の2つがあるようでした。

まずは、情報が手に入りやすい「Bjarne Stroustrup氏が発表したオブジェクト指向」から学んでいますが、やはり、上記のOOPの抱える問題で書いたようなことを思います。

ただ、オブジェクト指向が悪かと感じるかというと、そうは思いません。単純に使い方の問題もあるでしょうし、使いこなすことができるならば悪いものではないと思います。

しかし、もしも「そもそも複雑になりようがない」言語があるとしたらどうなのか、そしてそのような言語が存在するのかについても不思議に思います。

今はまだ学びたてで、知識も多くないためあまりはっきりとしたことはわかりませんが、その辺の不思議を取り払うために学習を進めていこうと思っています。

いろいろな考えを知りたいので、もし何か指摘したい点や感じたことがあれば、是非連絡ください。

長々とお付き合いありがとうございました。

## 参考

### 書籍(Amazonにリンクします)

[オブジェクト指向でなぜつくるのか 第３版　知っておきたいOOP、設計、アジャイル開発の基礎知識](https://www.amazon.co.jp/dp/B092HDFJKK/ref=cm_sw_r_tw_dp_54NPHWFC95JD5Z3NJ8M2?_encoding=UTF8&psc=1)
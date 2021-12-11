---
title: "GitHubからのpullなどの自動化"
date: "2021-09-14"
topImage: "../images/tech.png"
tag: 技術
---
## 記事の投稿の自動化

記事を投稿するたびに、pushした後にわざわざサーバーに入ってpullしてgatsby buildして...というのが面倒だったので、pushしたら自動でgit pullとgatsby buildをしてくれるようにしました。

自分の環境では、GitHubのWebhook機能と、CentOS8、nginxによるリバースプロキシ、nodeJSによる処理で自動化を行いました。

備忘録なので、説明が雑です、申し訳ない...

そのうちnginxだったりhttpだったりに関しては、記事を書こうかなと思っております。

## GithubのWebhook

GitHubがWebhookを提供して下さっているので、そちらを利用することにしました。

レポジトリにpushされると、指定したURLにPOSTされます。(push以外のイベントも通知してくれる設定もありました。)

## nginxの設定

POSTを受けたいlocationに対して、
```
location /{受信するlocation} {
    if ($request_method !~ ^(POST)$ ) {
        return 405;
    }

    access_log /var/log/nginx/post_webhook.log;
    proxy_pass http://localhost:{受信するhttpサーバーを建てるポート};
}
```
を追加して、リバースプロキシを設定します。ついでに、POSTメソッド以外のリクエストに対しては、405を返すようにしておきます。

設定を変更した後は、
```
sudo systemctl restart nginx
```
をして、設定を反映させます。(reloadの方がいいかもしれない)

## nodeJSでWebhookを受け取る

後は、nodeJSでhttpサーバーを建てて、送られてきたJSONを読んで、レポジトリごとにchild_processを使ってgit pullなりgatsby buildなりすれば、自動化が完了します。

これを応用すれば、サイトの更新をtwitterにお知らせしたり、色々なことが自動化できそうですね！ありがとうWebhook！

## serviceに登録する

最後に、作成したプログラムを、CentOSのserviceに登録して完了！
詳しくは別記事で書こうと思いますが、WorkingDirectoryを忘れてハマりがちです。動かないなぁと思ったら実行権限がないか、cdで移動しようとしているかのどちらかなことが(私は)多いです。

今回もハマってしまったので、そろそろ記事を書いた方が良さそうなきがしています...

いずれ、自分がやってきたことは、ググらずともこのサイトを見返せばわかるようにしたいなと思っています。

ご覧いただきありがとうございました！


(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{173:function(t,e,n){var content=n(179);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("6759f5ab",content,!0,{sourceMap:!1})},174:function(t,e,n){"use strict";var r=n(5),l=n(175)(6),o="findIndex",c=!0;o in[]&&Array(1)[o]((function(){c=!1})),r(r.P+r.F*c,"Array",{findIndex:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}}),n(70)(o)},175:function(t,e,n){var r=n(26),l=n(69),o=n(27),c=n(19),v=n(176);t.exports=function(t,e){var n=1==t,_=2==t,h=3==t,m=4==t,d=6==t,f=5==t||d,w=e||v;return function(e,v,x){for(var C,k,y=o(e),R=l(y),S=r(v,x,3),N=c(R.length),$=0,I=n?w(e,N):_?w(e,0):void 0;N>$;$++)if((f||$ in R)&&(k=S(C=R[$],$,y),t))if(n)I[$]=k;else if(k)switch(t){case 3:return!0;case 5:return C;case 6:return $;case 2:I.push(C)}else if(m)return!1;return d?-1:h||m?m:I}}},176:function(t,e,n){var r=n(177);t.exports=function(t,e){return new(r(t))(e)}},177:function(t,e,n){var r=n(8),l=n(97),o=n(2)("species");t.exports=function(t){var e;return l(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!l(e.prototype)||(e=void 0),r(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},178:function(t,e,n){"use strict";var r=n(173);n.n(r).a},179:function(t,e,n){var r=n(11);(t.exports=r(!1)).push([t.i,"html{width:100%}body{width:320px;margin:0 auto}.container{max-width:320px}.title{font-size:1.5rem}.container{margin-bottom:10px}#area_result .message-body{background:#fff;border:1px solid #222;border-top:none}.loading{text-align:center;font-size:10rem}.slide-toggle-enter-active,.slide-toggle-leave-active{-webkit-transition:height .3s;transition:height .3s}.slide-toggle-enter-active{height:285px}.slide-toggle-enter,.slide-toggle-leave-active{height:0}.slide-toggle-leave{height:285px}",""])},180:function(t,e,n){"use strict";n.r(e);n(174),n(53),n(71),n(72),n(15),n(73);var r=[{value:0,percentage:100},{value:3.14,percentage:100},{value:6.28,percentage:98.7},{value:9.42,percentage:83},{value:12.56,percentage:54.4},{value:15.7,percentage:14.6},{value:18.84,percentage:.9},{value:1/0,percentage:0}],l={data:function(){return{debug:!1,loading:!1,showResult:!1,showHowto:!1,name:"",value:0,tweet_text:"",tweet_url:"",tweet_hashtag:""}},computed:{maxvalue:function(){return r[r.length-2].value},minvalue:function(){return r[1].value},rank:function(){if(!this.submitable)return 0;var t=1;return 0!==this.percentage&&(t=Math.ceil(5356e4*this.percentage/100)),this.debug_log("rank(u):".concat(5356e4)),this.debug_log("rank(p):".concat(this.percentage)),this.debug_log("rank:".concat(t)),t},rank_num:function(){if(!this.submitable)return"";var t=this.rank;return t=t.toLocaleString()},percentage:function(){if(!this.submitable)return 0;var t=this.user_classes,p=(t[0].value-this.value)*(t[1].percentage-t[0].percentage)/(t[0].value-t[1].value)+t[0].percentage;return this.debug_log("percentage:".concat(p)),0===t[1].percentage&&(p=0),p},percentage_num:function(){if(!this.submitable)return"";return this.percentage>1?this.percentage.toString().replace(/([^0]\.[^0])(.*)/,"$1"):this.percentage.toString().replace(/(0\.0*[^0])(.*)/,"$1")},msg_pattern:function(){return this.submitable?this.value>this.maxvalue?0:this.percentage<20?1:this.percentage<40?2:this.percentage<60?3:this.percentage<80?4:this.percentage<100?5:6:0},submitable:function(){return!!(this.name&&this.value>0)},user_classes:function(){if(this.submitable){var t=this.value,e=r.findIndex((function(element){return t<element.value})),n=[r[e],r[e-1]];return this.debug_log("user_classes:"),this.debug_log(n),n}}},methods:{onSubmit:function(){var t=this;this.loading=!0,setTimeout((function(){t.showResult=!0,t.loading=!1,t.updateTweet()}),1e3)},updateTweet:function(){this.tweet_text=encodeURI(this.$refs.area_result_text.textContent.replace(/ +/g,"")),this.tweet_hashtag=encodeURI("おちんちんランキング"),this.tweet_url="https://mogya.github.io/ochinRank/"+this.msg_pattern+".html",(this.msg_pattern<1||this.msg_pattern>5)&&(this.tweet_url="")},debug_log:function(t){this.debug&&console.log(t)}}},o=(n(178),n(23)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading modal",class:{"is-active":t.loading}},[n("div",{staticClass:"modal-background"}),t._v(" "),t._m(0)]),t._v(" "),t._m(1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.showResult,expression:"!showResult"}],staticClass:"container",attrs:{id:"area_input"}},[n("p",{staticClass:"subtitle"},[n("i",{staticClass:"fas fa-edit"}),t._v(" "),n("a",{on:{click:function(e){t.showHowto=!t.showHowto}}},[t._v("測定方法")]),t._v("を参考に、太さを入力してね！\n    ")]),t._v(" "),n("transition",{attrs:{name:"slide-toggle"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showHowto,expression:"showHowto"}],staticClass:"container",attrs:{id:"area_howto"}},[n("img",{attrs:{src:"img/howto1.jpg"}}),t._v(" "),n("p",[t._v("用意するもの：トイレットペーパー、定規、おちんちん")]),t._v(" "),n("img",{attrs:{src:"img/howto2.jpg"}}),t._v(" "),n("p",[t._v("全力で太くしてください(爆発しないように注意してね)")]),t._v(" "),n("img",{attrs:{src:"img/howto3.jpg"}}),t._v(" "),n("p",[t._v("トイレットペーパーを巻いて太さを測ります。カリのところじゃなくて、竿部分の太さを測ってね")]),t._v(" "),n("img",{attrs:{src:"img/howto4.jpg"}}),t._v(" "),n("p",[t._v("さっき巻いたトイレットペーパーを測りましょう")])])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label",attrs:{for:"input_name"}},[t._v("おなまえ")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{type:"text",id:"input_name",placefolder:"ななし"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label",attrs:{for:"input_value"}},[t._v("cm(小数一桁まで入力できます)")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"input",attrs:{type:"number",step:"0.1",id:"input_value",placefolder:"200"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"field is-grouped"},[n("div",{staticClass:"control"},[n("button",{staticClass:"button is-primary is-large",attrs:{disabled:!t.submitable},on:{click:t.onSubmit}},[t._v("判定")])])]),t._v(" "),t._m(2)],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.debug||t.showResult,expression:"debug || showResult"}],staticClass:"message is-primary",attrs:{id:"area_result"}},[n("div",{staticClass:"message-header"},[n("p",[t._v("判定")]),t._v(" "),n("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(e){t.showResult=!1}}})]),t._v(" "),n("div",{staticClass:"message-body"},[n("div",{ref:"area_result_text"},[0==t.msg_pattern?n("div",[n("img",{staticStyle:{width:"200px",height:"200px"},attrs:{src:"img/cannon.png"}}),t._v(" "),n("p",[t._v(t._s(t.name)+"さんのおちんちんの太さ\n            "+t._s(t.value)+"cmは、15歳以上の日本人男性およそ"),n("br"),t._v("53,560,000人のなかで一番です。\n          ")]),n("p",[t._v("🙅‍♀️たぶんそんなことはないから、測定方法をもう一回確認してね")])]):1==t.msg_pattern?n("div",[n("img",{staticStyle:{width:"200px",height:"200px"},attrs:{src:"img/cannon.png"}}),t._v(" "),n("p",[t._v(t._s(t.name)+"さんのおちんちんの太さ\n            "+t._s(t.value)+"cmは、15歳以上の日本人男性およそ"),n("br"),t._v("53,560,000人のうち、"),n("br"),t._v(t._s(t.rank_num)+"番目くらい"),n("br"),t._v("(上から"+t._s(t.percentage_num)+"%)に位置します。\n          ")]),t._v(" "),n("p",[t._v("めっちゃ巨根ですね👍")])]):2==t.msg_pattern?n("div",[n("img",{staticStyle:{width:"200px",height:"200px"},attrs:{src:"img/radish.png"}}),t._v(" "),n("p",[t._v(t._s(t.name)+"さんのおちんちんの太さ\n            "+t._s(t.value)+"cmは、15歳以上の日本人男性およそ"),n("br"),t._v("53,560,000人のうち、"),n("br"),t._v(t._s(t.rank_num)+"番目くらい"),n("br"),t._v("(上から"+t._s(t.percentage_num)+"%)に位置します。\n          ")]),n("p",[t._v("巨根と言えるでしょう🐴")])]):3==t.msg_pattern?n("div",[n("img",{staticStyle:{width:"200px",height:"200px"},attrs:{src:"img/coffee.png"}}),t._v(" "),n("p",[t._v(t._s(t.name)+"さんのおちんちんの太さ\n            "+t._s(t.value)+"cmは、15歳以上の日本人男性およそ"),n("br"),t._v("53,560,000人のうち、"),n("br"),t._v(t._s(t.rank_num)+"番目くらい"),n("br"),t._v("(上から"+t._s(t.percentage_num)+"%)に位置します。\n          ")]),t._v(" "),n("p",[t._v("平均的サイズと言えるでしょう🐼")])]):4==t.msg_pattern?n("div",[n("img",{staticStyle:{width:"200px",height:"200px"},attrs:{src:"img/battery.png"}}),t._v(" "),n("p",[t._v(t._s(t.name)+"さんのおちんちんの太さ\n            "+t._s(t.value)+"cmは、15歳以上の日本人男性およそ"),n("br"),t._v("53,560,000人のうち、"),n("br"),t._v(t._s(t.rank_num)+"番目くらい"),n("br"),t._v("(上から"+t._s(t.percentage_num)+"%)に位置します。\n          ")]),t._v(" "),n("p",[t._v("ちょっと細いほうかもしれません🦒")])]):5==t.msg_pattern?n("div",[n("img",{staticStyle:{width:"200px",height:"200px"},attrs:{src:"img/pencil.png"}}),t._v(" "),n("p",[t._v(t._s(t.name)+"さんのおちんちんの太さ\n            "+t._s(t.value)+"cmは、15歳以上の日本人男性およそ"),n("br"),t._v("53,560,000人のうち、"),n("br"),t._v(t._s(t.rank_num)+"番目くらい"),n("br"),t._v("(上から"+t._s(t.percentage_num)+"%)に位置します。\n          ")]),t._v(" "),n("p",[t._v("かなり細い方かも🦄")])]):n("div",[n("img",{staticStyle:{width:"200px",height:"200px"},attrs:{src:"img/pencil.png"}}),t._v(" "),n("p",[t._v(t._s(t.name)+"さんのおちんちんの太さ\n            "+t._s(t.value)+"cmは、15歳以上の日本人男性およそ"),n("br"),t._v("53,560,000人のうち、一番細いみたい？\n          ")]),n("p",[t._v("もしかして測り間違えの可能性もあると思うので、もう一度全力で測ってみてね")])])])]),t._v(" "),""!=t.tweet_url?n("div",{staticClass:"twitter"},[n("p",[n("a",{attrs:{href:"https://twitter.com/intent/tweet?text="+t.tweet_text+"&url="+t.tweet_url+"&hashtags="+t.tweet_hashtag,target:"_blank"}},[n("i",{staticClass:"fab fa-twitter-square"}),t._v("ツイート画面を開く\n        ")])])]):t._e(),t._v(" "),n("div",[n("p",[n("a",{on:{click:function(e){t.showResult=!1}}},[n("i",{staticClass:"fas fa-arrow-circle-left"}),t._v("もどる")])])])]),t._v(" "),t._m(3)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-content"},[e("i",{staticClass:"fas fa-spinner fa-spin"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[e("a",{attrs:{href:"./index.html"}},[this._v("\n      ギガント"),e("br"),this._v("\n      おちんちん"),e("br"),this._v("\n      ランキング🚀\n    ")])]),this._v(" "),e("p",{staticClass:"subtitle"},[this._v("あなたの太さはどれくらい？"),e("br"),this._v("日本で何番目なのか見てみよう！")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field"},[e("ul",[e("li",[e("i",{staticClass:"fas fa-lock"}),this._v("入力された情報はどこにも送信されません (アクセス解析もつけてません)")]),this._v(" "),e("li",[e("i",{staticClass:"fas fa-lock-open"}),this._v("Twitterで公開したら、もちろんみんなに大公開だ！フォロワーさんたちにきみの偉大さを知ってもらおう！")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"area_list"}},[n("ul",[n("li",[t._v("元になったデータ: "),n("a",{attrs:{href:"https://www.tenga.co.jp/special/fitting2012/",target:"_blank"}},[t._v("TENGA FITTING")])]),t._v(" "),n("li",[t._v("作者: "),n("a",{attrs:{href:"https://twitter.com/mogya",target:"_blank"}},[t._v("mogya")])]),t._v(" "),n("li",[t._v("ソースコード: "),n("a",{attrs:{href:"https://github.com/mogya/ochinRank/",target:"_blank"}},[t._v("mogya/ochinRank")])])])])}],!1,null,null,null);e.default=component.exports}}]);
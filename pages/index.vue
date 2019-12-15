<template>
  <div class="container">
    <div v-show="loading" class="loading modal" :class="{ 'is-active':loading }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <i class="fas fa-spinner fa-spin"></i>
      </div>
    </div>
    <div class="container">
      <h1 class="title"><a href='./index.html'>
        ギガント<br />
        おちんちん<br />
        ランキング🚀
      </a></h1>
      <p class="subtitle">あなたの太さはどれくらい？<br />日本で何番目なのか見てみよう！</p>
    </div>
    <div v-show="!showResult" id="area_input" class="container">
      <p class="subtitle">
        <i class="fas fa-edit"></i>
        <a @click="showHowto = !showHowto">測定方法</a>を参考に、太さを入力してね！
      </p>
      <transition name="slide-toggle">
        <div v-show="showHowto" id="area_howto" class="container">
          <img src="img/howto1.jpg">
          <p>用意するもの：トイレットペーパー、定規、おちんちん</p>
          <img src="img/howto2.jpg">
          <p>全力で太くしてください(爆発しないように注意してね)</p>
          <img src="img/howto3.jpg">
          <p>トイレットペーパーを巻いて太さを測ります。カリのところじゃなくて、竿部分の太さを測ってね</p>
          <img src="img/howto4.jpg">
          <p>さっき巻いたトイレットペーパーを測りましょう</p>
        </div>
      </transition>
      <div class="field">
        <label class="label" for="input_name">おなまえ</label>
        <div class="control">
          <input class="input" type="text" id="input_name" placefolder="ななし" v-model="name" >
        </div>
      </div>
      <div class="field">
        <label class="label" for="input_value">cm(小数一桁まで入力できます)</label>
        <div class="control">
          <input class="input" type="number" step="0.1" id="input_value" placefolder="200" v-model="value" >
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button :disabled="!submitable" @click="onSubmit" class="button is-primary is-large">判定</button>
        </div>
      </div>
      <div class="field">
        <ul>
          <li><i class="fas fa-lock"></i>入力された情報はどこにも送信されません (アクセス解析もつけてません)</li>
          <li><i class="fas fa-lock-open"></i>Twitterで公開したら、もちろんみんなに大公開だ！フォロワーさんたちにきみの偉大さを知ってもらおう！</li>
        </ul>
      </div>
    </div>
    <div v-show="debug || showResult" id="area_result" class="message is-primary">
      <div class="message-header">
        <p>判定</p>
        <button @click="showResult = false" class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
        <div ref="area_result_text">
          <div v-if="msg_pattern==0">
            <img src="img/cannon.png" style="width:200px;height:200px" />
            <p>{{name}}さんのおちんちんの太さ
              {{value}}cmは、15歳以上の日本人男性およそ<br />53,560,000人のなかで一番です。
            <p>🙅‍♀️たぶんそんなことはないから、測定方法をもう一回確認してね</p>
          </div>
          <div v-else-if="msg_pattern==1">
            <img src="img/cannon.png" style="width:200px;height:200px" />
            <p>{{name}}さんのおちんちんの太さ
              {{value}}cmは、15歳以上の日本人男性およそ<br />53,560,000人のうち、<br />{{rank_num}}番目くらい<br />(上から{{percentage_num}}%)に位置します。
            </p>
            <p>めっちゃ巨根ですね👍</p>
          </div>
          <div v-else-if="msg_pattern==2">
            <img src="img/radish.png" style="width:200px;height:200px" />
            <p>{{name}}さんのおちんちんの太さ
              {{value}}cmは、15歳以上の日本人男性およそ<br />53,560,000人のうち、<br />{{rank_num}}番目くらい<br />(上から{{percentage_num}}%)に位置します。
            <p>巨根と言えるでしょう🐴</p>
          </div>
          <div v-else-if="msg_pattern==3">
            <img src="img/coffee.png" style="width:200px;height:200px" />
            <p>{{name}}さんのおちんちんの太さ
              {{value}}cmは、15歳以上の日本人男性およそ<br />53,560,000人のうち、<br />{{rank_num}}番目くらい<br />(上から{{percentage_num}}%)に位置します。
            </p>
            <p>平均的サイズと言えるでしょう🐼</p>
          </div>
          <div v-else-if="msg_pattern==4">
            <img src="img/battery.png" style="width:200px;height:200px" />
            <p>{{name}}さんのおちんちんの太さ
              {{value}}cmは、15歳以上の日本人男性およそ<br />53,560,000人のうち、<br />{{rank_num}}番目くらい<br />(上から{{percentage_num}}%)に位置します。
            </p>
            <p>ちょっと細いほうかもしれません🦒</p>
          </div>
          <div v-else-if="msg_pattern==5">
            <img src="img/pencil.png" style="width:200px;height:200px" />
            <p>{{name}}さんのおちんちんの太さ
              {{value}}cmは、15歳以上の日本人男性およそ<br />53,560,000人のうち、<br />{{rank_num}}番目くらい<br />(上から{{percentage_num}}%)に位置します。
            </p>
            <p>かなり細い方かも🦄</p>
            </div>
          <div v-else>
            <img src="img/pencil.png" style="width:200px;height:200px" />
            <p>{{name}}さんのおちんちんの太さ
              {{value}}cmは、15歳以上の日本人男性およそ<br />53,560,000人のうち、一番細いみたい？
            <p>もしかして測り間違えの可能性もあると思うので、もう一度全力で測ってみてね</p>
            </div>
        </div>
      </div>
      <div class="twitter" v-if="tweet_url != ''">
        <p>
          <a :href="`https://twitter.com/intent/tweet?text=${tweet_text}&url=${tweet_url}&hashtags=${tweet_hashtag}`" target='_blank'>
            <i class="fab fa-twitter-square"></i>ツイート画面を開く
          </a>
        </p>
      </div>
      <div>
        <p>
          <a @click="showResult = false">
            <i class="fas fa-arrow-circle-left"></i>もどる</a>
        </p>
      </div>
    </div>
    <div id="area_list" class="container">
      <ul>
        <li>元になったデータ: <a href='https://www.tenga.co.jp/special/fitting2012/' target='_blank'>TENGA FITTING</a></li>
        <li>作者: <a href='https://twitter.com/mogya' target='_blank'>mogya</a></li>
        <li>ソースコード: <a href='https://github.com/mogya/ochinRank/' target='_blank'>mogya/ochinRank</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
const user_count = 53560000;
const point_classes = [
  // value:計測値 percentage:上位何%に入るか
  {value: 0, percentage: 100 },
  {value : 3.14, percentage : 100},
  {value : 6.28, percentage : 98.7},
  {value : 9.42, percentage : 83},
  {value : 12.56, percentage : 54.4},
  {value : 15.7, percentage : 14.6},
  {value : 18.84, percentage : 0.9},
  {value : Infinity, percentage : 0},
];

export default {
  data: ()=>{
    return {
      debug: false,
      loading: false,
      showResult: false,
      showHowto: false,
      name: "",
      value: 0,
      tweet_text: '',
      tweet_url: '',
      tweet_hashtag: ''
    }
  },
  computed: {
    maxvalue: function () {
      return point_classes[point_classes.length-2].value;
    },
    minvalue: function () {
      return point_classes[1].value;
    },
    rank: function () {
      if (!this.submitable) { return 0 }
      let r = 1;
      if (this.percentage !== 0){
        r = Math.ceil(user_count*this.percentage/100);
      }
      this.debug_log(`rank(u):${user_count}`);
      this.debug_log(`rank(p):${this.percentage}`);
      this.debug_log(`rank:${r}`);
      return r;
    },
    rank_num: function () {
      if (!this.submitable) { return '' }
      let ret = this.rank;
      ret = ret.toLocaleString()
      return ret
    },
    percentage: function () {
      if (!this.submitable) { return 0 }
      const c = this.user_classes;
      let p =
        (c[0].value-this.value) *
        (c[1].percentage-c[0].percentage) /
          (c[0].value-c[1].value) +
          c[0].percentage;
      this.debug_log(`percentage:${p}`);
      if (c[1].percentage === 0){ p = 0; }
      return p;
    },
    percentage_num: function(){
      if (!this.submitable) { return '' }
      let ret = '';
      if (this.percentage > 1){
        ret = this.percentage.toString().replace(/([^0]\.[^0])(.*)/,"$1");
      }else{
        ret = this.percentage.toString().replace(/(0\.0*[^0])(.*)/,"$1");
      }
      return ret;
    },
    msg_pattern: function() {
      if (!this.submitable) { return 0 }
      if (this.value > this.maxvalue) { 
        return 0
      } else if (this.percentage < 20) {
        return 1
      } else if (this.percentage < 40) {
        return 2
      } else if (this.percentage < 60) {
        return 3
      } else if (this.percentage < 80) {
        return 4
      } else if (this.percentage < 100) {
        return 5
      } else {
        return 6
      }
    },
    submitable: function() {
      return !!(this.name && this.value > 0 )
    },
    user_classes: function() {
      if (!this.submitable) { return }
      const value = this.value;
      const index = point_classes.findIndex(function(element){
        return (value < element.value);
      });
      const r = [point_classes[index], point_classes[index-1]];
      this.debug_log("user_classes:");
      this.debug_log(r);
      return r;
    }
  },
  methods: {
    onSubmit: function () {
      this.loading = true;
      setTimeout(()=>{
        this.showResult = true;
        this.loading = false;
        this.updateTweet();
      }, 1000)
    },
    updateTweet: function(){
      this.tweet_text = encodeURI(this.$refs.area_result_text.textContent.replace(/ +/g,''));
      this.tweet_hashtag = encodeURI("おちんちんランキング");
      this.tweet_url = "https://mogya.github.io/ochinRank/" + this.msg_pattern + ".html";
      if (this.msg_pattern < 1 || this.msg_pattern > 5) {
        this.tweet_url = "";
      }
    },
    debug_log: function(msg){
      if(this.debug) { console.log(msg) }
    }
  }
}
</script>

<style>
html{
  width:100%;
}
body{
  width: 320px;
  margin: 0 auto;
}
.container{
  max-width: 320px;
}
.title{
  font-size:1.5rem;
}
.title{
  font-size:1.5rem;
}
.container{
  margin-bottom: 10px;
}
#area_result .message-body {
  background: #fff;
  border: 1px solid #222;
  border-top: none;
}
.loading{
  text-align: center;
  font-size: 10rem;
}
.slide-toggle-enter-active,
.slide-toggle-leave-active {
     transition: height .3s;
}
.slide-toggle-enter-active {
     height: 285px;
}
.slide-toggle-enter,
.slide-toggle-leave-active {
    height: 0;
}
.slide-toggle-leave {
    height: 285px;
} 
</style>

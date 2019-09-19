<template>
  <div class="all">
    <van-nav-bar title="兴趣圈" left-text="返回" fixed="true" left-arrow>
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <div class="main">
      <Imgword>
        <img
          slot="img"
          src="http://b-ssl.duitang.com/uploads/item/201711/10/20171110225150_ym2jw.jpeg"
        />
        <h3 slot="title">我现在使用组件</h3>
        <p slot="word">这个slot其实是有点难以记住的，理解还是可以的</p>
      </Imgword>
      <Imgword>
        <img
          slot="img"
          src="http://b-ssl.duitang.com/uploads/item/201712/22/20171222223729_d8HCB.jpeg"
        />
        <h3 slot="title">还是的风景</h3>
        <p slot="word">还是股东卡开始进攻四大金刚绿卡就是个就立刻</p>
      </Imgword>
      <Imgword>
        <img
          slot="img"
          src="http://b-ssl.duitang.com/uploads/item/201603/26/20160326084943_CZjhV.thumb.700_0.jpeg"
        />
        <h3 slot="title">顺利过会记录卡</h3>
        <p slot="word">山东化工卡就开始打工看看风口浪尖司法独立可根据减肥的卢卡斯了</p>
      </Imgword>
      <Imgword>
        <h3 slot="title">宏观来看就</h3>
        <p slot="word">间客房国际上来看立刻就士大夫立刻就给上的人李开复经过了可是对方进攻的法律框架上来看</p>
      </Imgword>
      <Imgword>
        <h3 slot="title">阿斯顿和高科技</h3>
        <p slot="word">大家分厘卡结果离开家的法律框架各类考试接了三个等级即将离开教室独立开发机构发贺卡时间地点和卡卡九分蛇口决定恢复喀什的咖啡机哈师大话费卡还是短发</p>
      </Imgword>
    </div>
  </div>
</template>

<script>
import Tabbar from "@/components/tabbar/Tabbar.vue";
import Imgword from "@/components/imgword/Imgword.vue";
export default {
  components: {
    Tabbar,
    Imgword
  },
  data() {
    return {
      loading: true
    };
  }
};
</script>

<style lang='less' scoped>
.all {
  .main {
    margin-top: 48px;
  }
}
</style>
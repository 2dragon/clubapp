<template>
  <div class="all">
    <van-nav-bar title="社团基地" left-text="返回" fixed="true" left-arrow>
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <div class="main">
      <div class="searchComponent">
        <form>
          <van-search placeholder="请输入搜索关键词" show-action />
        </form>
      </div>
      <van-notice-bar text="通知内容:恢复和解放军解放发加分加分加分放假就放假电影大奖" left-icon="volume-o" />
      <div class="swiper">
        <van-swipe :autoplay="5000" :loop="false" indicator-color="#fff">
          <van-swipe-item v-for="(image, index) in SwiperImg" :key="index">
            <img :src="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="imgWord">
        <Activeshow></Activeshow>
        <Activeshow></Activeshow>
        <Activeshow></Activeshow>
        <Activeshow></Activeshow>
      </div>
    </div>
  </div>
</template>

<script>
import Activeshow from "@/components/activeshow/Activeshow.vue";
export default {
  components: {
    Activeshow
  },
  data() {
    return {
      SwiperImg: [
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34869/14/3703/113972/5cb953c1E4294d8ea/b73c538710f5c462.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34729/14/3948/120618/5cbeee07Efbe17ec5/d57ddd4fbbbc09e0.jpg!cr_1125x549_0_72!q70.jpg.dpg"
      ],
      loading: true
    };
  }
};
</script>


<style lang='less' scoped>
.all {
  .main {
    margin-top: 48px;

    .searchComponent {
      width: 100%;
      background-color: rgba(124, 108, 108, 0.562);
    }
    .swiper {
      width: 100%;
      overflow: hidden;
      van-swipe {
        width: 100%;
        height: 100%;
      }
      img {
        width: 100%;
        height: 100%;
        pointer-events: none;
      }
    }
    .imgWord {
      // margin-top: 25vh;
      overflow: hidden;
    }
  }
}
</style>
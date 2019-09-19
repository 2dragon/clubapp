<template>
  <div class="all">
    <van-nav-bar title="全部社团" left-text="返回" fixed="true" left-arrow>
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <div class="main">
      <van-search placeholder="请输入搜索关键词" v-model="value" background="#CCCCFF" />
      <div class="swiper">
        <van-swipe :autoplay="5000" :loop="false" indicator-color="#fff">
          <van-swipe-item v-for="(image, index) in SwiperImg" :key="index">
            <img :src="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <van-tree-select
        :items="items"
        :active-id.sync="activeId"
        :main-active-index.sync="mainActiveIndex"
        @click-nav="clickNav"
        @click-item="clickItem"
      />
    </div>
  </div>
</template>

<script>
let items = [
  {
    text: "所有社团",
    children: [
      {
        text: "中文社",
        id: 101
      },
      {
        text: "英语社",
        id: 102
      },
      {
        text: "日语社",
        id: 103
      },
      {
        text: "韩语社",
        id: 104
      },
      {
        text: "法语社",
        id: 105
      },
      {
        text: "泰语社",
        id: 106
      },
      {
        text: "朝鲜语社",
        id: 107
      },
      {
        text: "篮球社",
        id: 201
      },
      {
        text: "足球社",
        id: 202
      },
      {
        text: "乒乓球社",
        id: 203
      }
    ]
  },
  {
    text: "语言类",
    children: [
      {
        text: "中文社",
        id: 101
      },
      {
        text: "英语社",
        id: 102
      },
      {
        text: "日语社",
        id: 103
      },
      {
        text: "韩语社",
        id: 104
      },
      {
        text: "法语社",
        id: 105
      },
      {
        text: "泰语社",
        id: 106
      },
      {
        text: "朝鲜语社",
        id: 107
      }
    ]
  },
  {
    text: "球类",
    children: [
      {
        text: "篮球社",
        id: 201
      },
      {
        text: "足球社",
        id: 202
      },
      {
        text: "乒乓球社",
        id: 203
      }
    ]
  }
];
export default {
  data() {
    return {
      items,
      activeId: 1,
      mainActiveIndex: 0,
      value: "",
      SwiperImg: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568127260856&di=f80e0ce721a8c275a6b9fc5b70cc0fde&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fsheji%2F20160329%2Fxiaoyuanshetuanzhaoxinxuanchuanhaibao_6072734.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568127260855&di=d7dcd2e560566af613494dd8098ccd5f&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fbc73b5afc209b60ac0c207f93bbe2b38c5b53fcda4361-maOdQR_fw658",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568127260855&di=f759466ffb125900f72d060e968c16df&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F0c96594dda273e532e5c3a7d818f4c8b60a4663d305f7-8whg1t_fw658",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568127260852&di=6ae591ded78edb7e85b20fd3c6bf112e&imgtype=0&src=http%3A%2F%2Fpic157.nipic.com%2Ffile%2F20180313%2F26246157_031656563035_2.jpg"
      ],
      loading: true
    };
  },
  methods: {
    clickNav(i) {
      this.mainActiveIndex = i;
      console.log(i);
    },
    clickItem(d) {
      this.activeId = d.id;
      console.log(d.id);
    }
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
      background-color: rgba(214, 242, 255, 0.158);

      van-swipe {
        width: 100%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
      }
      img {
        width: 60%;
        margin-left: 70px;
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
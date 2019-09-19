<template>
  <div>
    <div class="navigate">
      <van-nav-bar title left-text="返回" left-arrow>
        <van-icon name="ellipsis" slot="right" @click="changeStatus" />
      </van-nav-bar>
      <van-sidebar class="rightNavigate" v-show="status">
        <van-sidebar-item title="创建社团" to='/createClub'/>
        <van-sidebar-item title="我的社团" />
        <van-sidebar-item title="管理社团" />
      </van-sidebar>
    </div>

    <div class="head">
      <div class="headRowOne">
        <van-image
          class="headImage"
          round
          width="5rem"
          height="5rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          fit="cover"
        />
        <h3 class="headName">{{name}}</h3>
      </div>
      <van-divider :style="{ color: '#000010', borderColor: '#198900', padding: 0, margin:0  }"></van-divider>
      <div class="headRowTwo"></div>
    </div>
    <div class="select">
      <van-cell title="我的动态" icon="smile-comment-o" />
      <van-cell title="我的消息" icon="chat-o" />
      <van-cell title="我的公告" icon="flag-o" />
      <van-cell title="我的下载" icon="idcard" />
    </div>
  </div>
</template>

<script>
import Tabbar from "@/components/tabbar/Tabbar.vue";
export default {
  data() {
    return {
      name: "铭记初心",
      status: false
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    changeStatus() {
      if (this.status == false) {
        this.status = true;
      } else {
        this.status = false;
      }
    }
  },
  components: {}
};
</script>

<style lang='less' scoped>
.navigate {
  // position: fixed;
  .rightNavigate {
    position: absolute;
    top: 5vh;
    right: 0vw;
    z-index: 2;
  }
}
.head {
  width: 90vw;
  height: 25vh;
  border-radius: 15px;
  background-color: rgba(18, 104, 79, 0.253);

  margin-top: 1vh;
  margin-left: auto;
  margin-right: auto;
  .headRowOne {
    height: 16vh;
    overflow: hidden;
    .headImage {
      padding: 0.4rem 0.5rem 0.5rem 0.5rem;
      float: left;
    }
    .headName {
      float: left;
      padding-left: 1vw;
      margin-top: 4vh;
    }
  }
  .headRowTwo {
    height: 16vh;
    overflow: hidden;
  }
}
.select{
  margin-top: 5vh;
}
</style>
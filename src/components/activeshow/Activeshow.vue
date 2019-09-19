<template>
  <div class="all">
    <div class="show">
      <div class="lineone">
        <slot>
          <img src="http://b-ssl.duitang.com/uploads/item/201707/19/20170719211350_4PnBt.jpeg" />
        </slot>
        <slot>
          <div class="clubname">我是社团名称</div>
        </slot>
      </div>
      <div class="linetwo">
        <slot>
          <img
            src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=568740478,85575297&fm=15&gp=0.jpg"
          />
        </slot>
      </div>
      <div class="linethree">
        <slot>
          <h3 class="title">合法iOS骄傲</h3>
        </slot>
        <slot>
          <p class="content">发哦时候发法基洛克几黑啊人会特意去黑雾饿啊日吃饭 恢复嘎哈成年后北京局开发部v你噶</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang='less' scoped>
.all {
  width: 100%;
  height: 40vh;
  padding-bottom: 7vh;
  .show {
    border-radius: 10px;
    background-color: rgba(227, 228, 225, 0.253);
    margin: 3px;
    padding-bottom: 2vh;
    .lineone {
      height: 7vh;
      display: block;
      img {
        margin-top: 3px;
        margin-left: 3px;
        float: left;
        width: 34px;
        height: 34px;
        display: flex;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      .clubname {
        padding-top: 8px;
        margin-left: 45px;
        font-size: 15px;
        line-height: 20px;
      }
    }
    .linetwo {
      img {
        width: 100%;
        height: 25vh;
      }
    }
    .linethree {
      margin: -2vh 3vw;
      // background-color: aqua;

      .title {
        font-size: 16px;
        line-height: 18px;
        // background-color: aqua;
      }
      .content {
        font-size: 14px;
        line-height: 16px;
        // background-color: aqua;
        margin-top: -1vh;
      }
    }
  }
}
</style>
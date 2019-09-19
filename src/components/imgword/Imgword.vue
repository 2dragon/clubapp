<template>
  <div class="all">
    <div class="section">
      <div class="img">
        <slot name="img">
          <img src="http://b-ssl.duitang.com/uploads/item/201707/19/20170719211350_4PnBt.jpeg" />
        </slot>
      </div>
      <div class="right">
        <div class="title">
          <slot name="title">
            <h3>我是标题</h3>
          </slot>
        </div>

        <div class="word">
          <slot name="word">
            <p>我是内容发生的会发生看的发挥空间盛大开放很快今安徽省空军的发挥空间安徽省克里夫</p>
          </slot>
        </div>
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
  background-color: #f2f3f56b;
  border-bottom: 1px solid #ccc;
  // background-color: rgb(244, 255, 240);
  padding: 3vh 0px;
  .section {
    display: block;
    height: auto;
    margin: 0px 20px;

    // background-color: rgba(240, 230, 140, 0.87);
    .img {
      float: left;
      margin-top: 2vh;
      img {
        width: 34px;
        height: 34px;
        display: flex;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
    }
    .right {
      overflow: hidden;
      margin-left: 15vw;
      // background-color: rgb(244, 255, 240);
      .title {
        // background-color: rgba(137, 43, 226, 0.459);/
        height: 5vh;
      }
      .word {
        // background-color: rgba(0, 255, 255, 0.521);
        h3 {
          font-size: 18px;
          line-height: 20px;
        }
        p {
          margin: 13px 0 0;
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
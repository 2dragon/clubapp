<template>
  <div class="all">
    <van-tabbar v-model="active">
      <van-tabbar-item name="club" icon="circle" replace to="/Club">社团基地</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o" replace to="/Friends">兴趣圈</van-tabbar-item>
      <van-tabbar-item name="all" icon="bullhorn-o" replace to="/All">全部社团</van-tabbar-item>
      <van-tabbar-item name="home" icon="user-circle-o" replace to="/Home">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<script>
export default {
  data() {
    return {
      active: "home"
    };
  }
};
</script>

<style lang='less' scoped>
.all{
  margin-top: 10vh;
}
</style>
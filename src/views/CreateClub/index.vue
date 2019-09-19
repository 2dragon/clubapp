<template>
  <div class>
    <van-cell-group>
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast('question')"
        />
        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
        
        <van-action-sheet
          v-model="show"
          :actions="actions"
          cancel-text="取消"
          @select="onSelect"
          @cancel="onCancel"
        />
      </van-cell-group>
    </van-cell-group>
  </div>
</template>


<script>
export default {
  data() {
    return {
      show: true,
      actions: [
        { name: "学习类" },
        { name: "球类" },
        { name: "其他类", subname: "我是描述信息........." }
      ]
    };
  },
  methods: {
    onSelect(item) {
      this.show = false;
      Toast(item.name);
    }
  }
};
</script>


<style lang='less' scoped>
</style>
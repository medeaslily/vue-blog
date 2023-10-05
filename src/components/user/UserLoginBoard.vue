<template>
  <!-- 登录，注册板 -->
  <div class="login-board">
    <span class="login-board_item"
          @click="refreshModal('login')">登录</span>
    <b>&Iota;</b>
    <span class="login-board_item"
          @click="refreshModal('register')">注册</span>
  </div>
</template>

<script>
import MINXIN from '@/core/minxin'
export default {
  name: 'UserLoginBoard',
  mixins: [MINXIN],
  data () {
    return {

    };
  },
  mounted () {

  },
  methods: {
  },
};
</script>

<style lang="stylus" scoped>
.login-board
  color #fff

  /* 登录，注册分隔符 */
  b
    padding-left 4px
    padding-right 4px
    font-weight 400

.login-board_item
  cursor pointer
</style>
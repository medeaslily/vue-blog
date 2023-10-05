<template>
  <header>
    <el-row type="flex"
            align="middle">
      <!--  网站logo  -->
      <!--  offset - 左填充  -->
      <el-col :span="2"
              :offset="1"
              :xs="24">
        <h1 class="logo">
          <a href="#">
            <img class="logo_pic" :src="require('@/assets/img/logo.jpg')" alt=“logo”>
          </a>
        </h1>
      </el-col>
      <!--  头部导航  -->
      <!--  工具类 hidden-xs-only 当视口在 xs 尺寸时隐藏  -->
      <el-col :span="10"
              :offset="2"
              class="hidden-xs-only">
        <el-menu class="nav"
                 mode="horizontal"
                 default-active="/index"
                 active-text-color="#fff"
                 text-color="#fff"
                 background-color="#2d2f33"
                 router>
          <el-menu-item index="/index">首页</el-menu-item>
          <el-menu-item index="/column">分类</el-menu-item>
          <el-menu-item index="/socket">聊天</el-menu-item>
          <el-menu-item index="/user">个人信息</el-menu-item>
        </el-menu>
      </el-col>
      <!--  搜索框  -->
      <el-col :span="4"
              class="hidden-xs-only">
        <el-input class="search"
                  v-model="searchData"
                  @keydown.enter.native="searchListener"
                  placeholder="搜索文章">
          <!--  通过slot在input组件首部和尾部增加显示图标  -->
          <!--  添加el-input__icon工具类使icon图标适配表单  -->
          <i slot="suffix"
             v-show="searchData"
             class="el-input__icon el-icon-search"
             @click="searchListener"></i>
        </el-input>
      </el-col>
      <!--  登录/注册块  -->
      <el-col :span="2"
              :offset="2"
              class="hidden-xs-only">
        <component :is="loginOrRegister"></component>
      </el-col>
    </el-row>
  </header>
</template>
<script>
import UserImgAvatar from '@/components/user/UserImgAvatar.vue'
import UserLoginHead from '@/components/user/UserLoginBoard.vue'

export default {
  name: 'BaseHeader',
  data() {
    return {
      searchData: ''
    }
  },
  computed: {
    loginOrRegister() {
      return this.$store.state.token ? 'UserImgAvatar' : 'UserLoginHead'
    }
  },
  methods: {
    searchListener() {

    }
  },
  components: {
    UserImgAvatar, UserLoginHead
  }
}
</script>
<style lang="stylus">
header
  padding-left: 20px
  padding-right: 20px
  height 60px
  background-color #2d2f33

  .logo_pic
    border-radius 50%
    width 40px
    height 40px
</style>
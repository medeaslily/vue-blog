<template>
  <div class="blog-page">
    <el-container class="blog-container">
      <el-header height="10vh"
                 class="blog-header">

        <el-row class="blog-header--wrap"
                type="flex"
                justify="center"
                align="center">
          <el-col :span="2"
                  :xs="{span:24}"
                  class="blog-logo--wrap">
            <div class="blog-logo">
              <el-image class="blog-logo--pic"
                        :src="require('../assets/img/logo.jpg')"
                        fit="cover"></el-image>
            </div>
          </el-col>
          <el-col class="hidden-xs-only"
                  :span="16"
                  :offset="2">
            <el-menu class="blog-menu"
                     mode="horizontal"
                     router>
              <el-menu-item index="/">首页</el-menu-item>
              <el-menu-item index="/column">分类</el-menu-item>
              <el-menu-item index="/article/list">文章</el-menu-item>

              <el-submenu index="/">
                <template #title>外链</template>
                <el-menu-item index="http://www.baidu.com/">百度</el-menu-item>
                <el-menu-item index="https://element.eleme.io/#/zh-CN/component/menu">ELEMENTUI</el-menu-item>
              </el-submenu>

            </el-menu>
          </el-col>
          <el-col :span="4"
                  class="hidden-xs-only">
<!--            <component :is="loginCompantent"></component>-->
          </el-col>
        </el-row>

      </el-header>
      <el-container class="blog-middle">
        <el-aside width="30%"
                  class="blog-aside">侧边栏</el-aside>
        <el-main class="blog-main">
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer height="10vh"
                 class="blog-footer">底部</el-footer>
    </el-container>
    <BaseModal></BaseModal>
    <Live2dView></Live2dView>
  </div>
</template>

<script>
// @ is an alias to /src

import BaseModal from "@/components/base/BaseModal.vue"
import Live2dView from "@/components/Live2d.vue";

export default {
  name: 'layout-page',
  components: {
    Live2dView,
    BaseModal
  },
  data () {
    return {
      dialogVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  computed: {
    loginCompantent() {
      return this.$store.state.token ? 'UserImgAvatar' : 'UserLoginHead'
    }
  },
  methods: {
    refreshModal (type) {
      this.$store.dispatch('modal/open', type)
    },
    register () {

    },
    handleClose () {
      this.dialogVisible = false
    }

  }
}
</script>
<style lang="stylus" >
.blog-container
  overflow hidden
  height 100%
.blog-header
  display flex
  align-items center
  background-color #ccc
.blog-header--wrap
  width 100%
.blog-logo
  width 60px
  height 60px
  margin 0 auto
  line-height 0
.blog-logo--pic
  width 60px
  height 60px
.blog-header .blog-menu
  height 60px
  background-color rgba(0, 0, 0, 0)
.blog-header--login
  height 60px
  display flex
  align-items center
  padding 0 40px
.blog-middle
  height 80vh
  background-color #f1f1f1
.blog-aside
  background-color #f05
.blog-footer
  margin-top auto
  height 10vh
  background-color #ccc
</style>

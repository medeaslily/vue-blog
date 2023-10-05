<template>
  <div class="blog-page">
    <BaseHeader></BaseHeader>
    <el-container class="blog-middle">
      <el-main class="blog-main">
        <router-view></router-view>
      </el-main>
    </el-container>
    <BaseModal></BaseModal>
    <Live2dView></Live2dView>
  </div>
</template>
<script>
// @ is an alias to /src

import BaseModal from "@/components/base/BaseModal.vue"
import Live2dView from "@/components/Live2d.vue"
import BaseHeader from "@/components/base/BaseHeader.vue"

export default {
  name: 'layout-page',
  components: {
    BaseHeader,
    Live2dView,
    BaseModal
  },
  data() {
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
    refreshModal(type) {
      this.$store.dispatch('modal/open', type)
    },
    register() {

    },
    handleClose() {
      this.dialogVisible = false
    }

  }
}
</script>
<style lang="stylus">
.blog-page
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
</style>

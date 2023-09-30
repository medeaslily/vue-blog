<template>
  <div class=" blog-header--login">
    <el-image class="blog-avatar-img"
              :src="src"
              fit="cover"></el-image>
  </div>
</template>

<script>
export default {
  name: 'UserImgAvatar',

  data () {
    return {

    };
  },
  mounted () {

  },

  computed: {
    src () {
      return this.$store.state.userInfo.avatar
    }
  },
  methods: {

  },
};
</script>

<style lang="stylus" >
.blog-avatar-img
  overflow hidden
  width 50px
  height 50px
  border-radius 50%
</style>
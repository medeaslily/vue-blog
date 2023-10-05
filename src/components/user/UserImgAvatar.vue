<template>
  <div class="avatar">
    <el-image class="avatar_pic"
              :src="src"
              fit="cover"></el-image>
    <svg t="1612528707419"
         class="avatar_outside"
         viewBox="0 0 1024 1024"
         version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         p-id="2489"
         @click="outside">
      <path d="M298.666667 256a42.666667 42.666667 0 0 0 0-85.333333H213.333333a42.666667 42.666667 0 0 0-42.666666 42.666666v597.333334a42.666667 42.666667 0 0 0 42.666666 42.666666h85.333334a42.666667 42.666667 0 0 0 0-85.333333H256V256zM888.32 487.253333l-120.32-170.666666a42.666667 42.666667 0 0 0-59.306667-10.24 42.666667 42.666667 0 0 0-10.24 59.733333L771.84 469.333333H426.666667a42.666667 42.666667 0 0 0 0 85.333334h341.333333l-76.8 102.4a42.666667 42.666667 0 0 0 8.533333 59.733333 42.666667 42.666667 0 0 0 25.6 8.533333 42.666667 42.666667 0 0 0 34.133334-17.066666l128-170.666667a42.666667 42.666667 0 0 0 0.853333-50.346667z"
            p-id="2490"
            fill="#ffffff"></path>
    </svg>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'UserImgAvatar',
  data () {
    return {

    };
  },
  mounted () {

  },

  computed: {
    ...mapGetters(['userInfo']),
    src () {
      return this.userInfo?.avatar
    }
  },
  methods: {
    ...mapActions(['outside'])
  },
};
</script>

<style lang="stylus" >
.avatar
  display flex
  align-items center

.avatar_pic
  overflow hidden
  width 40px
  height 40px
  border-radius 50%

.avatar_outside
  width 24px
  height 24px
  padding-left 20px
  cursor pointer
  transition 0.2s
  transform scale(1)
  &:hover
   transform scale(1.5)
</style>
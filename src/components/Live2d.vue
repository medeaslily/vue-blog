<template>
  <div class="live2d">
    <div class="menu">
      <span class="menu_item">
        <i class="el-icon-refresh"
           @click="changeModel"></i>
      </span>
      <span class="menu_item">
        <i class="el-icon-goods"
           @click="changeTextures"></i>
      </span>
    </div>
    <canvas id="draw" width="300" height="300"></canvas>
  </div>
</template>
<script>
import { getModelId, getTexturesId, loadModel, LIVE2D_MODEL_NAME } from '@/util/live2d'
import store from "store";

export default {
  name: 'Live2dView',
  data() {
    return {
      modelId: 1,
      texturesId: 0,
    }
  },
  created() {
    let { modelId = 4, texturesId = 0 } = store.get(LIVE2D_MODEL_NAME)
    this.modelId = modelId
    this.texturesId = texturesId
  },
  mounted() {
    loadModel(this.modelId, this.texturesId)
  },
  methods: {
    async changeModel () {
      try {
        this.modelId = await getModelId(this.modelId)
        loadModel(this.modelId, this.texturesId)
      } catch (err) {
        this.resetModel()
      }
    },
    async changeTextures () {
      try {
        this.texturesId = await getTexturesId(this.texturesId)
        loadModel(this.modelId, this.texturesId)
      } catch (err) {
        this.resetModel()
      }
    },
    resetModel () {
      this.modelId = 1
      this.texturesId = 0
      loadModel(this.modelId, this.texturesId)
    }
  },
}
</script>
<style lang="stylus">
.live2d
  position fixed
  left 0
  bottom 0

  &:hover .menu
    display initial

  .menu
    position absolute
    top 0
    left 0
    display none
    padding-left 10px

  .menu_item
    display block
    cursor pointer
</style>
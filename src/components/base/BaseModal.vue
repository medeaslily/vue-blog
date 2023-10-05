<template>
  <el-dialog :title="title"
             :visible.sync="isShow"
             :width="width"
             :before-close="close">
    <BaseForm ref="form"
              :type="type"></BaseForm>
    <div slot="footer"
         class="dialog-footer">
      <el-button v-for="btn in btns"
                 :key="btn.targetName"
                 @click="handlerBtn(btn.targetName, btn.isSubmit)">{{ btn.name }}
      </el-button>
    </div>
  </el-dialog>
</template>
<script>
import MODAL_DATA from '@/config/modal.config'
import {createNamespacedHelpers} from 'vuex'
import BaseForm from "@/components/base/BaseForm.vue";
const {mapState, mapActions} = createNamespacedHelpers('modal')

export default {
  name: 'BaseModal',
  components: {BaseForm},
  computed: {
    ...mapState(['isShow', 'type']),
    title() {
      return MODAL_DATA[this.type]?.title ?? '默认modalTitle'
    },
    width() {
      return MODAL_DATA[this.type]?.width ?? '60%'
    },
    /*
    * 表单按钮数据
    * targetName - 按钮触发事件名
    * name - 事件中文名
    * isSubmit - 是否为提交按钮
    */
    btns() {
      return MODAL_DATA[this.type]?.btns ?? [{
        targetName: 'close',
        name: '取消'
      },
        {
          targetName: 'confirm',
          name: '提交',
        }]
    },
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapActions(['open']),
    handlerBtn(handler, isSubmit) {
      // 如果是提交按钮，触发提交表单事件
      if (isSubmit) {
        this.submitForm()
      }
      this[handler] && this[handler]()
    },
    submitForm(){
      // 验证要提交的表单数据
      // baseForm 是BaseForm组件实例
      // elForm 是el-form组件实例
      const baseForm = this.$refs['form']
      const elForm = baseForm.$refs['elForm']
      elForm.validate(async (valid) => {
        if (valid) {
          try {
            await this.$api({ type: this.type, data: baseForm.form })
            elForm.resetFields()
            this.close()
          } catch (err) {
            elForm.resetFields()
          }
        } else {
          return false
        }
      })
    },
    close() {
      let elForm = this.$refs['form'].$refs['elForm']
      elForm.resetFields()
      this.$store.dispatch('modal/close')
    }
  }
}
</script>
<style>
</style>
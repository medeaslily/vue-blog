<template>
  <el-dialog :title="title"
             :visible.sync="isShow"
             :width="width"
             :before-close="close">
    <BaseForm ref="formWrapper" :form-data="formData"></BaseForm>
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
// import MODAL_RULES from '@/config/validate.config'
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
    // 表单控件数据集
    formData() {
      return MODAL_DATA[this.type]?.formData
    }
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapActions(['open']),
    handlerBtn(handler, isSubmit) {
      if (isSubmit) {
        this.submitForm()
      }
      this[handler] && this[handler]()
    },
    submitForm(){
      this.$refs.formWrapper.$refs.form.validate((valid) => {
        valid ? console.log('提交成功')   : console.log('提交失败')
      })
    },
    close() {
      this.$refs.formWrapper.$refs.form.resetFields()
      this.$store.dispatch('modal/close')
    }
  }
}
</script>
<style>
</style>
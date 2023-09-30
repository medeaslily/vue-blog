<template>
  <el-form class="form"
           :model="form"
           :rules="rules"
           :hide-required-asterisk="true"
           ref="elForm">
    <el-form-item v-for="item in formData"
                  :key="item.query"
                  :label="item.label"
                  :prop="item['query']">
      <el-input v-model="form[item['query']]"
                :type="item.type"
                :placeholder="item.placeholder"
                :name="item.query"
                autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
import MODAL_RULES from "@/config/validate.config";

export default {
  name: 'BaseForm',
  props: {
    formData: {type: Array}
  },
  computed: {
    rules() {
      // 得到当前type所有表单控件的标识queries
      // 求出queries与规则集MODAL_RULES的交集
      // 按照element表单验证格式要求把交集转为对象
      const queries = this.formData.map(item => item.query)
      return Object.fromEntries(Object.entries(MODAL_RULES).filter(([key]) => queries.includes(key)))
    }
  },
  data() {
    return {
      form: {
      }
    }
  },
  methods: {
    initForm() {
      this.form = this.formData.reduce((acc, cur) => {
        acc[cur.query] = ''
        return acc
      }, {})
    }
  },
  watch: {
    formData () {
      this.initForm()
    }
  },
}
</script>
<style>
</style>
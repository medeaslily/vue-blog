<template>
  <el-form class="form"
           :model="form"
           :hide-required-asterisk="true"
           ref="elForm">
    <el-form-item v-for="item in formData"
                  :key="item.query"
                  :rules="validates[item['query']]"
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
import MODAL_DATA from '@/config/modal.config'
import MODAL_RULES from "@/config/validate.config";

export default {
  name: 'BaseForm',
  props: {
    type: {type: String}
  },
  computed: {
    formData() {
      return MODAL_DATA[this.type]?.formData
    },
    validates () {
      return MODAL_RULES
    },
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
    type () {
      this.initForm()
    }
  },
}
</script>
<style>
</style>
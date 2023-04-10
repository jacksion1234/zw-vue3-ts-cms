<template>
  <div class="main-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form
      ref="baseFormRef"
      :label-position="labelPosition"
      :label-width="labelWidth"
      :model="formData"
      :rules="rules"
      status-icon
    >
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :style="itemLayout"
              v-if="!item.isHidden"
              :prop="item.field"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  v-model="formData[item.field]"
                  v-bind="item.otherOptions"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[item.field]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    :label="option.title"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  type="date"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[item.field]"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, PropType } from 'vue'
import { IFormItem } from '../types'
// import type { FormRules } from 'element-plus'
const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  rules: {
    type: Object
  },
  colLayout: {
    type: Object,
    default() {
      return {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 8,
        xl: 6
      }
    }
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemLayout: {
    type: Object,
    default() {
      return {
        padding: '10px 40px'
      }
    }
  }
})

console.log(props)
// 这一步相当于复制了一份传来的modelValue，以免接下来的操作会直接改变父页面传来的值
const formData = ref({ ...props.modelValue })
console.log('子页复制的formData', formData)
const labelPosition = ref('right') as any
const emit = defineEmits(['update:modelValue'])
watch(
  formData,
  (value) => {
    console.log('formData改变了')
    emit('update:modelValue', value)
  },
  {
    deep: true
  }
)
const baseFormRef = ref()
defineExpose({
  baseFormRef
})
</script>

<style scoped>
.main-form {
  background-color: #fff;
  padding: 0 20px;
}
</style>

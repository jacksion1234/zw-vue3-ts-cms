<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      title="新建"
      width="30%"
      center
      :destroy-on-close="true"
    >
      <zw-form
        ref="zwFormRef"
        v-model="formData"
        v-bind="modalConfig"
      ></zw-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确 定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import zwForm from '@/base-ui/form'
import { useStore } from 'vuex'
import { getFormModel } from '@/utils/global'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'

const props = defineProps({
  modalConfig: {
    type: Object
  },
  defaultInfo: {
    type: Object,
    default: () => {
      return {}
    }
  },
  pagename: {
    type: String,
    default: ''
  }
})
const dialogVisible = ref(false)
const formItems = props.modalConfig?.formItems ?? []
const formData = ref(getFormModel(formItems))
// 为了处理新增和编辑时不同的表达内容
watch(
  () => props.defaultInfo,
  (newVal: any) => {
    console.log('defaultInfo改变了')
    for (const item of props.modalConfig?.formItems) {
      formData.value[item.field] = newVal[item.field]
    }
    // console.log('formData：', formData)
  },
  {
    deep: true
  }
)
const store = useStore()
const zwFormRef = ref()
const handleConfirmClick = () => {
  const baseFormRef: FormInstance | undefined = zwFormRef.value.baseFormRef
  if (!baseFormRef) return
  baseFormRef.validate((valid) => {
    if (valid) {
      const pagename = props.pagename
      if (Object.keys(props.defaultInfo).length > 0) {
        // 编辑
        store
          .dispatch('system/editPageDataAction', {
            pagename,
            editData: formData.value,
            id: props.defaultInfo.id
          })
          .then(() => {
            dialogVisible.value = false
          })
      } else {
        // 新增
        store
          .dispatch('system/newAddPageDataAction', {
            pagename,
            newData: formData.value
          })
          .then(() => {
            dialogVisible.value = false
          })
      }
    } else {
      ElMessage.warning('请校验表单信息')
    }
  })
  // console.log(formData)
}
defineExpose({ dialogVisible })
</script>

<style scoped>
.dialog-footer {
  display: flex;
  justify-content: center;
}
</style>

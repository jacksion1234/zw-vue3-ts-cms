<template>
  <div class="user">
    <!-- <h2>user11</h2> -->
    <search-form
      :SearchConfigs="SearchConfigs"
      @handlerSearch="handlerSearch"
      @handlerReset="handlerReset"
    ></search-form>
    <page-content
      ref="pageContentRef"
      :tableContentConfig="tableContentConfig"
      pagename="users"
      @newAddBtnClick="handleNewAdd"
      @editBtnClick="handleEdit"
    >
      <!-- <template #handler>
        <el-button plain>编辑</el-button>
      </template> -->
    </page-content>
    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
      pagename="users"
    ></page-modal>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useSearchForm } from '@/hooks/use-search-form'
import { usePageModal } from '@/hooks/use-page-modal'

import newAddConfig from './config/modal.config'
import SearchConfigs from './config/searchConfig'
import SearchForm from '@/components/search-form/index'
import tableContentConfig from './config/tableContentConfig'
import PageModal from '@/components/page-modal/index'
import PageContent from '@/components/page-content/src/page-content.vue'

const store = useStore()
// const modalConfigRef = ref({ ...newAddConfig })
// 1.处理密码的逻辑
const newCallback = () => {
  const passwordItem = newAddConfig.formItems.find(
    (item) => item.field === 'password'
  )
  passwordItem!.isHidden = false
}
const editCallback = () => {
  const passwordItem = newAddConfig.formItems.find(
    (item) => item.field === 'password'
  )
  passwordItem!.isHidden = true
}
const modalConfigRef = computed(() => {
  const formItems = newAddConfig.formItems
  const departmentItem = formItems.find((item) => item.field === 'departmentId')
  const roles = formItems.find((item) => item.field === 'roleId')
  // console.log('roles', roles)
  if (departmentItem) {
    departmentItem.options = store.state.departments?.map((item: any) => {
      return { value: item.id, title: item.name }
    })
  }
  if (roles) {
    roles.options = store.state.roles.map((item: any) => {
      return { value: item.id, title: item.name }
    })
  }
  // console.log('newAddConfig的值：', newAddConfig)
  return newAddConfig
})

const [pageContentRef, handlerSearch, handlerReset] = useSearchForm()
const { pageModalRef, defaultInfo, handleNewAdd, handleEdit } = usePageModal(
  newCallback,
  editCallback
)
</script>

<style scoped></style>

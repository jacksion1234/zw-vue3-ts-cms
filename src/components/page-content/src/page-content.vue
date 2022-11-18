<template>
  <div class="page-content">
    <zw-table
      :tableData="tableData"
      :tableCount="tableCount"
      v-bind="tableContentConfig"
      v-model:page="pageInfo"
    >
      <template #header>
        <el-button type="primary" @click="createNewUser">新增用户</el-button>
      </template>
      <template #enable="{ row }">
        <el-button
          size="small"
          plain
          :type="row.enable === 1 ? 'success' : 'danger'"
        >
          {{ row.enable === 1 ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="{ row }">
        <span>{{ $filters.formatTime(row.createAt) }}</span>
      </template>
      <template #updateAt="{ row }">
        <span>{{ $filters.formatTime(row.updateAt) }}</span>
      </template>
      <!-- 嵌套slot，可实现更上一级的页面自定义插槽内容 -->
      <template
        v-for="slotItem in otherSlotNames"
        :key="slotItem.prop"
        #[slotItem.slotName]="{ row }"
      >
        <template v-if="slotItem.slotName">
          <slot :name="slotItem.slotName" :row="row">
            <template v-if="slotItem.slotName === 'handler'">
              <el-button link size="small" @click="editBtnClick(row)"
                >编辑</el-button
              >
              <el-button link size="small" type="danger">删除</el-button>
            </template>
          </slot>
        </template>
      </template>
    </zw-table>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import zwTable from '@/base-ui/table'
import { useStore } from 'vuex'
const props = defineProps({
  tableContentConfig: {
    type: Object,
    required: true
  },
  pagename: {
    type: String
  }
})
const emits = defineEmits(['newAddBtnClick', 'editBtnClick'])

const store = useStore()
const pageInfo = ref({ currentPage: 1, pageSize: 10 })
watch(pageInfo, () => getListData())
const getListData = (queryInfo = {}) => {
  store.dispatch('system/getPageListAction', {
    pagename: props.pagename,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  })
}
getListData()
const tableData = computed(() => {
  return store.getters['system/pageListData'](props.pagename)
})
const tableCount = computed(() => {
  return store.getters['system/pageListCount'](props.pagename)
})
const createNewUser = () => {
  emits('newAddBtnClick')
}
const otherSlotNames = props.tableContentConfig.tableColumn?.filter(
  (column: any) => {
    if (column.slotName === 'header') return false
    if (column.slotName === 'enable') return false
    if (column.slotName === 'createAt') return false
    if (column.slotName === 'updateAt') return false
    return true
  }
)
const editBtnClick = (row: any) => {
  emits('editBtnClick', row)
}
console.log('soltNames', otherSlotNames)
defineExpose({ getListData })
</script>

<style scoped>
.page-content {
  padding: 10px 40px;
  background: #fff;
}
</style>

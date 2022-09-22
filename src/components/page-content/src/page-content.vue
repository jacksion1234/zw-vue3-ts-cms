<template>
  <div class="page-content">
    <zw-table :tableData="tableData" v-bind="tableContentConfig">
      <template #header>
        <el-button type="primary">新增用户</el-button>
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
        #[slotItem.slotName]="{ row }"
        v-for="slotItem in otherSlotNames"
        :key="slotItem.prop"
      >
        <template v-if="slotItem.slotName">
          <slot :name="slotItem.slotName" :row="row">
            <template v-if="slotItem.slotName === 'handler'">
              <el-button link size="small">编辑</el-button>
              <el-button link size="small" type="danger">删除</el-button>
            </template>
          </slot>
        </template>
      </template>
    </zw-table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
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
const store = useStore()
const getListData = (queryInfo = {}) => {
  store.dispatch('system/getPageListAction', {
    pagename: props.pagename,
    queryInfo: {
      offset: 1,
      size: 10,
      ...queryInfo
    }
  })
}
getListData()
const tableData = computed(() => {
  return store.getters['system/pageListData'](props.pagename)
})
const otherSlotNames = props.tableContentConfig.tableColumn?.filter(
  (column: any) => {
    if (column.slotName === 'header') return false
    if (column.slotName === 'enable') return false
    if (column.slotName === 'createAt') return false
    if (column.slotName === 'updateAt') return false
    return true
  }
)
console.log('soltNames', otherSlotNames)
</script>

<style scoped>
.page-content {
  padding: 20px;
  background: #fff;
}
</style>

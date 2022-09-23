<template>
  <div class="zw-table">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-table
      :data="tableData"
      :border="showBorder"
      :header-row-style="{ background: 'black' }"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumn"
        header-align="center"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <template v-for="item in tableColumn" :key="item.prop">
        <el-table-column
          :width="item.width"
          :minWidth="item.minWidth"
          show-overflow-tooltip
          v-bind="item"
          align="center"
        >
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          :page-size="page.pageSize"
          :pager-sizes="[10, 20, 50, 100]"
          :current-page="page.currentPage"
          :total="tableCount"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentPageChange"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { ITableItem } from '../types'
const props = defineProps({
  tableData: {
    type: Array,
    required: true
  },
  tableColumn: {
    type: Array as PropType<ITableItem[]>
  },
  tableCount: {
    type: Number
  },
  page: {
    type: Object,
    default: () => {
      return { currentPage: 1, pageSize: 10 }
    }
  },
  childrenProps: {
    type: Object
  },
  // 是否显示多选框
  showSelectColumn: {
    type: Boolean,
    default: true
  },
  // 是否显示编号
  showIndexColumn: {
    type: Boolean,
    default: true
  },
  // 是否显示边框线
  showBorder: {
    type: Boolean,
    default: true
  }
})
const emits = defineEmits(['update:page'])
// 改变单页显示数目时
const handleSizeChange = (value: number) => {
  emits('update:page', { ...props.page, pageSize: value })
}
const handleCurrentPageChange = (value: number) => {
  console.log(value)
  emits('update:page', { ...props.page, currentPage: value })
}
</script>

<style scoped lang="scss">
.header {
  padding: 0px 0 10px;
  display: flex;
  height: 40px;
  align-items: center;
}
.footer {
  margin-top: 20px;
}
</style>

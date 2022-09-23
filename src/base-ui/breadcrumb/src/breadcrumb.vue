<template>
  <div class="bread-crumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs" :key="item.path">
        <el-breadcrumb-item :to="{ path: item.path }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IBreadcrumb } from '../types'
defineProps({
  breadcrumbs: {
    type: Array as PropType<IBreadcrumb[]>,
    default: () => []
  }
})
</script>

<style scoped>
.bread-crumb {
  margin-left: 20px;
}
</style>

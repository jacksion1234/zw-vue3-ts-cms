<template>
  <div class="user">
    <!-- <h2>user11</h2> -->
    <search-form
      :SearchConfigs="SearchConfigs"
      @handlerSearch="handlerSearch"
    ></search-form>
    <page-content :tableContentConfig="tableContentConfig" pagename="users">
      <template #handler>
        <el-button plain>操作</el-button>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts" setup>
// import { defineComponent } from 'vue'
import SearchConfigs from './config/searchConfig'
import tableContentConfig from './config/tableContentConfig'
import SearchForm from '@/components/search-form/index'
import PageContent from '@/components/page-content/src/page-content.vue'

// import { reactive } from 'vue'
// export default defineComponent({
//   name: 'user',
//   setup() {
//     return {
//       HZWForm
//     }
//   }
// })
</script>

<style scoped></style>

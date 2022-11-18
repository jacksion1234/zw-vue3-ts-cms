<template>
  <div class="role">
    <el-form :model="formData" :rules="rules" status-icon>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item label="真实姓名">
        <el-input v-model="formData.realname" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formData = reactive({
  name: '',
  realname: ''
})
const rules = reactive({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' }
  ],
  realname: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' }
  ]
})
</script>

<style scoped></style>

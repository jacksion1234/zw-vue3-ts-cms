import type { FormRules } from 'element-plus'
import { reactive } from 'vue'
const modalConfig = {
  labelWidth: '100px',
  itemLayout: {
    padding: '10px 20px'
  },
  colLayout: { span: 24 },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'password',
      type: 'password',
      label: '用户密码',
      placeholder: '请输入密码',
      isHidden: false
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      field: 'departmentId',
      type: 'select',
      label: '选择部门',
      placeholder: '请选择部门',
      options: []
    },
    {
      field: 'roleId',
      type: 'select',
      label: '选择角色',
      placeholder: '请选择角色',
      options: []
    }
  ],
  rules: reactive<FormRules>({
    name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
    realname: [
      { required: true, message: '真实姓名不能为空', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '用户密码不能为空', trigger: 'blur' }
    ],
    cellphone: [
      { required: true, message: '联系电话不能为空', trigger: 'blur' }
    ],
    departmentId: [
      { required: true, message: '所属部门不能为空', trigger: 'blur' }
    ],
    roleId: [{ required: true, message: '拥有角色不能为空', trigger: 'blur' }]
  })
}
export default modalConfig

const searchConfigs = {
  labelWidth: '100px',
  itemLayout: {
    padding: '10px 20px'
  },
  formItems: [
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      otherOptions: {
        placeholder: '请输入真实姓名'
      }
    },
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      otherOptions: {
        placeholder: '请输入用户名'
      }
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '联系电话',
      otherOptions: {
        placeholder: '请输入联系电话'
      }
    },
    {
      field: 'enable',
      type: 'select',
      label: '状态',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ],
      otherOptions: {
        placeholder: '请选择用户状态'
      }
    }
  ]
}
export default searchConfigs

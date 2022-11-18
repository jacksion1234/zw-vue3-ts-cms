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
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '请选择开始时间',
        endPlaceholder: '请选择结束时间',
        type: 'datetimerange',
        valueFormat: 'YYYY-MM-DD HH:mm:ss',
        defaultTime: [
          new Date(2000, 1, 1, 0, 0, 0),
          new Date(2000, 2, 1, 23, 59, 59)
        ]
      }
    }
  ]
}
export default searchConfigs

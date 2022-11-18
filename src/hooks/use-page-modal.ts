import { ref } from 'vue'
type CallbackFn = (item?: any) => void
export function usePageModal(
  newCallback?: CallbackFn,
  editCallback?: CallbackFn
) {
  const pageModalRef = ref()
  const defaultInfo = ref({})
  const handleNewAdd = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    // 新增后回调，可以在此对表单数据做一些处理
    newCallback && newCallback()
  }
  const handleEdit = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCallback && editCallback()
  }
  return { pageModalRef, defaultInfo, handleNewAdd, handleEdit }
}

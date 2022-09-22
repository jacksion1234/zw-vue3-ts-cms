import { ref } from 'vue'
import pageContent from '@/components/page-content'

export function useSearchForm() {
  const pageContentRef = ref<InstanceType<typeof pageContent>>()
  console.log('pageContentRef', pageContentRef)

  // 之所以不这样写是因为调用useSearchForm()方法时，pageContentRef中还拿不到组件实例，所以会报错，于是采用
  // 返回一个函数的方法，等要用的时候再调用该方法即可
  // const handlerSearch = pageContentRef.value.getListData
  const handlerSearch = (queryInfo: any) => {
    pageContentRef.value?.getListData(queryInfo)
  }
  const handlerReset = () => {
    pageContentRef.value?.getListData()
  }
  console.log('pageContentRef', pageContentRef)
  return [pageContentRef, handlerSearch, handlerReset]
}

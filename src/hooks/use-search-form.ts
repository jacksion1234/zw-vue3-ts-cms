import { ref } from 'vue'
// import PageContent from '@/components/page-content'

export function useSearchForm() {
  // const pageContentRef: any = ref<InstanceType<typeof PageContent>>()
  // 对于使用了setup语法糖的组件，只能用defineExpose()来对外抛出变量值
  const pageContentRef: any = ref()

  // 之所以不这样写是因为调用useSearchForm()方法时，pageContentRef中还拿不到组件实例，所以会报错，于是采用
  // 返回一个函数的方法，等要用的时候再调用该方法即可
  // const handlerReset = pageContentRef.value?.getListData

  const handlerSearch = (queryInfo: any) => {
    pageContentRef.value?.getListData(queryInfo)
  }
  const handlerReset = () => {
    pageContentRef.value?.getListData()
  }

  function fn(x: number, y: number): number
  function fn(x: string, y: string): string
  function fn(x: any, y: any): any {
    return x + y
  }
  console.log(fn(1, 2))
  // console.log('handlerReset', handlerReset)
  // console.log('pageContentRef', pageContentRef)
  return [pageContentRef, handlerSearch, handlerReset]
}

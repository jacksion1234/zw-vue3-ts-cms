import zwRequest from '../../index'
import { IDataType } from '../../types'

export function getPageListData(url: string, payload: any): Promise<IDataType> {
  return zwRequest.post<IDataType>({
    url,
    data: payload
  })
}
// 通用的新增操作
export function addPageData(url: string, payload: any): Promise<IDataType> {
  return zwRequest.post<IDataType>({
    url,
    data: payload
  })
}
export function editPageDta(url: string, payload: any): Promise<IDataType> {
  return zwRequest.patch<IDataType>({
    url,
    data: payload
  })
}
// 通用的删除操作
export function deletePageData(url: string): Promise<IDataType> {
  return zwRequest.delete<IDataType>({
    url
  })
}

import zwRequest from '../../index'
import { IDataType } from '../../types'

export function getPageListData(url: string, payload: any): Promise<IDataType> {
  return zwRequest.post<IDataType>({
    url,
    data: payload
  })
}
// 通用的新增操作
export function addNewUserData(url: string, payload: any): Promise<IDataType> {
  return zwRequest.post<IDataType>({
    url,
    data: payload
  })
}
export function editUserData(url: string, payload: any): Promise<IDataType> {
  return zwRequest.patch<IDataType>({
    url,
    data: payload
  })
}

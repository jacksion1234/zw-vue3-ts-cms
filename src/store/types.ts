import { LoginType } from './login/types'
export interface IRootState {
  name: string
  departments: any[]
  roles: any[]
  menus: any[]
}

export interface IModulesType {
  login: LoginType
}

export type IStoreType = IRootState & IModulesType

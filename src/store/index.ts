import { createStore, Store, useStore as useVuexStorage } from 'vuex'
import { IRootState, IStoreType } from './types'
import login from './login'
import system from './main/system'
import { getPageListData } from '@/service/main/system/index'

const store = createStore<IRootState>({
  state: {
    name: 'HZW',
    departments: [],
    roles: [],
    menus: []
  },
  mutations: {
    saveDepartmentInfo: (state, list) => {
      state.departments = list
    },
    saveRolesInfo: (state, list) => {
      state.roles = list
    },
    saveMenusInfo: (state, list) => {
      state.menus = list
    }
  },
  actions: {
    async getInitDataAction({ commit }) {
      const departmentRes = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentRes.data
      commit('saveDepartmentInfo', departmentList)

      const roleRes = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roelList } = roleRes.data
      commit('saveRolesInfo', roelList)

      const menuRes = await getPageListData('/menu/list', {})
      const { list: menuList } = menuRes.data
      commit('saveMenusInfo', menuList)
    }
  },
  // getters: {

  // },
  modules: {
    login,
    system
  }
})
export function recoverStore() {
  store.dispatch('login/loadLocalStorage')
}

export function useStore(): Store<IStoreType> {
  return useVuexStorage()
}
export default store

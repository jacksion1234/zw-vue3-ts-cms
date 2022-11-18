import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { recoverStore } from './store'
// import ZWRequest from './service'
// import 'normalize.css'
import '../src/assets/css/index.scss'
import Global from './global/index'

const app = createApp(App)
// 注册一些全局设置
app.use(Global)
app.use(store)
recoverStore()
app.use(router)

app.mount('#app')
// ZWRequest.request({
//   url: '/post',
//   method: 'POST',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的请求成功拦截')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独请求的响应成功拦截')
//       return res
//     }
//   }
// })
// interface dataType {
//   data: any
//   returnCode: string
//   success: boolean
// }
// ZWRequest.get<dataType>({
//   url: '/home/multidata'
//   // method: 'GET'
//   // showLoading: false
// }).then((res) => {
//   // console.log(res.data)
//   // console.log(res.returnCode)
//   // console.log(res.success)
// })

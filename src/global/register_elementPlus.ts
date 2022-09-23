import { App } from 'vue'
// 手动注册所有icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 此处需要手动的导入loading和message的样式,因为两者没有组件,无法根据组件的方式自动导入
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'

export default function (app: App): void {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  // 汉化
  app.use(ElementPlus, {
    locale: zhCn
  })
}

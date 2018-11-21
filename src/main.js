import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import iView from  'iview'
import installPlugin from '@/plugin'
import importDirective from '@/directive'
//import importComponent from '@/components'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import config from '@/config'
import 'iview/dist/styles/iview.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import '@/icons' // icon
import '@/permission' // permission control
import 'iview/dist/styles/iview.css'
import '@/assets/icons/iconfont.less'
import '@/styles/color.less'
Vue.use(ElementUI, { locale })
Vue.use(iView);
installPlugin(Vue)
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * 注册指令
 */
importDirective(Vue)
/* 注册全局组件 */
//importComponent(Vue)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

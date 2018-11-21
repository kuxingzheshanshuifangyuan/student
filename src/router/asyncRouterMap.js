// @author zhanglei
// 通道管理路由
import enrollmentRouterMap from './enrollmentRouterMap'

let asyncRouterMap = []
const redirect = [
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]
// 合并路由
asyncRouterMap = Array.prototype.concat.call(
  asyncRouterMap,
  enrollmentRouterMap,
  redirect
)
export { asyncRouterMap }

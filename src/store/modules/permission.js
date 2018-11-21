/* eslint-disable */
import { asyncRouterMap } from '@/router/asyncRouterMap'
import { constantRouterMap } from '@/router'
// import { getRouterMenu } from '@/api/getRouterMenu'

// @params { Array } routes 服务器返回的路由的列表
// @params { Object } obj empty object
// @return { Object } key => regulation  value => router item
function dealRoutes(routes, obj) {
  if (!obj) {
    var obj = {}
  }
  for (var i = 0; i < routes.length; i++) {
    var item = routes[i]
    item.regulation ? obj[item.regulation] = item : false
    item.children ? dealRoutes(item.children, obj) : false
  }
  return obj
}

function dealRules (rules) {
  var obj = {}
  for (var i = 0; i < rules.length; i++) {
    var item = rules[i]
    obj[item.operation] = item
    
  }
  return obj
}

// @params { Objcet } routerObj 处理服务器数组后生成的对象
// @params { Array } asyncRouterMap 未处理的路由列表
// @return { Array } filterRouter 处理后的路由列表 
function filterAsyncRouterMap(routerObj, asyncRouterMap) {
  let filterRouter = []
  asyncRouterMap.forEach(item => {
    if (item.regulation && item.regulation in routerObj && routerObj[item.regulation].isPermission === 1) {
      if (item.children) {
        var filterChildRouter = []
        item.children.forEach(childItem => {
          if (childItem.regulation && childItem.regulation in routerObj && routerObj[childItem.regulation].isPermission === 1) {
            childItem.meta.rules = dealRules(routerObj[childItem.regulation].rules)
            filterChildRouter.push(childItem)
          }
        })
        item.children = filterChildRouter
      }
      filterRouter.push(item)
    }
  });
  const redirect =  [
    {
      path: '*',
      redirect: '/404',
      hidden: true
    }
  ]
  filterRouter = filterRouter.concat(redirect) // 处理404页面
  return filterRouter
}

// @params asyncRouterMap 异步路由表
 function createAsyncRouterMap (asyncRouterMap) {
  // 登陆后获取权限路由列表

  return Promise.resolve(asyncRouterMap)

  /* return getRouterMenu().then((res) => {
    var routerObj = dealRoutes(res)
    var filterAsyncRouter = filterAsyncRouterMap(routerObj, asyncRouterMap)
    return Promise.resolve(filterAsyncRouter)
  }).catch((err) => {
    return Promise.resolve([])
  }) */
 }

const asyncRouter = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = state.routers.concat(routers)
    }
  },
  actions: {
    createRoutes ({commit}) {
      return createAsyncRouterMap(asyncRouterMap).then((res) => {
        commit('SET_ROUTERS', res)
        return Promise.resolve()
      })
    }
  }
}

export default asyncRouter

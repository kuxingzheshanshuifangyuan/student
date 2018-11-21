import System from '@/router/System'
// import Staff from '@/router/Staff'
// import Finance from '@/router/Finance'
// import Enlist from '@/router/Enlist'
// import Educational from '@/router/Educational'
// import Datareport from '@/router/Datareport'
// import Admissions from '@/router/Admissions'
// import Stock from '@/router/Stock'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数,
 * isRightTab 是否为右侧tab路由,值为父路由name,hideInMenu需为true
 * }
 */

let baseRouter = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login登录',
      hideInMenu: true
    },
    component: () => import('@/views/Login/login')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/Home',
    component: () => import('@/components/main'),
    meta: {
      hideInMenu: false,
      title: '工作台',
      notCache: true,
      icon: '_gongzuotai1'
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: false,
          title: '工作台',
          notCache: true,
          icon: '_gongzuotai1'
        },
        component: () => import('@/views/Home/home')
      }
    ]
  }
]

let routerError = [
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/views/404.vue')
  }
]

export default [
  // ...baseRouter, 
  // ...Admissions, 
  // ...Enlist, 
  // ...Educational, 
  // ...Finance, 
  // ...Staff,
  //  ...Stock, 
  //  ...Datareport,
    ...System, 
    //...routerError
  ]

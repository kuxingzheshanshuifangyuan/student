let routes = [
  {
    path: '/System',
    name: 'System',
    component: () => import('@/components/main'),
    meta: {
      hideInMenu: false,
      title: '系统设置',
      notCache: true,
      icon: '_shezhi'
    },
    children: [
      {
        path: 'SystemParameter',
        name: 'SystemParameter',
        component: () => import('@/views/System/SystemParameter'),
        meta: {
          hideInMenu: false,
          title: '系统参数设置',
          notCache: true
        }
      }, {
        path: 'SystemPay',
        name: 'SystemPay',
        component: () => import('@/views/System/SystemPay'),
        meta: {
          hideInMenu: false,
          title: '支付参数设置',
          notCache: true
        }
      }, {
        path: 'SystemSubject',
        name: 'SystemSubject',
        component: () => import('@/views/System/SystemSubject'),
        meta: {
          hideInMenu: false,
          title: '科目设置',
          notCache: true
        }
      }, {
        path: 'SystemTuition',
        name: 'SystemTuition',
        component: () => import('@/views/System/SystemTuition'),
        meta: {
          hideInMenu: false,
          title: '杂费管理设置',
          notCache: true
        }
      }, {
        path: 'SystemTheme',
        name: 'SystemTheme',
        component: () => import('@/views/System/SystemTheme'),
        meta: {
          hideInMenu: false,
          title: '自定义设置',
          notCache: true
        }
      }
    ]
  }
]

export default routes

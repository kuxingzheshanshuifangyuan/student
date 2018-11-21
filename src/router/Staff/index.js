let routes = [
  {
    path: '/Staff',
    name: 'Staff',
    component: () => import('@/components/main'),
    meta: {
      hideInMenu: false,
      title: '员工管理',
      notCache: true,
      icon: '_yuangongguanli'
    },
    children: [
      {
        path: 'StaffEmployee',
        name: 'StaffEmployee',
        component: () => import('@/views/Staff/StaffEmployee'),
        meta: {
          hideInMenu: false,
          title: '角色权限',
          notCache: true
        }
      }, {
        path: 'StaffAdmin',
        name: 'StaffAdmin',
        component: () => import('@/views/Staff/StaffAdmin'),
        meta: {
          hideInMenu: false,
          title: '员工管理',
          notCache: true
        }
      }
    ]
  }
]

export default routes

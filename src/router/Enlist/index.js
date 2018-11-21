let routes = [
  {
    path: '/Enlist',
    name: '_Enlist',
    component: () => import('@/components/main'),
    meta: {
      hideInMenu: false,
      title: '报名收费',
      notCache: true,
      icon: '_baoming'
    },
    children: [
      {
        path: '/Enlist',
        name: 'Enlist',
        component: () => import('@/views/Enlist/Enlist'),
        meta: {
          hideInMenu: false,
          title: '报名收费',
          notCache: true,
          icon: '_baoming'
        }
      }
    ]
  }
]

export default routes

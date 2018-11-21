let routes = [
  {
    path: '/Finance',
    name: 'Finance',
    component: () => import('@/components/main'),
    meta: {
      hideInMenu: false,
      title: '财务管理',
      notCache: true,
      icon: '_caiwu'
    },
    children: [
      {
        path: 'FinanceTrade',
        name: 'FinanceTrade',
        component: () => import('@/views/Finance/FinanceTrade'),
        meta: {
          hideInMenu: false,
          title: '交易管理',
          notCache: true
        }
      }, {
        path: 'FinanceWages',
        name: 'FinanceWages',
        component: () => import('@/views/Finance/FinanceWages'),
        meta: {
          hideInMenu: false,
          title: '工资管理',
          notCache: true
        }
      }
    ]
  }
]

export default routes

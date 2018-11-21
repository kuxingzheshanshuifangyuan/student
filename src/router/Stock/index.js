let routes = [
  {
    path: '/Stock',
    name: 'Stock',
    component: () => import('@/components/main'),
    meta: {
      hideInMenu: false,
      title: '库存管理',
      notCache: true,
      icon: '_kucunguanli'
    },
    children: [
      {
        path: 'StockGoods',
        name: 'StockGoods',
        component: () => import('@/views/Stock/StockGoods'),
        meta: {
          hideInMenu: false,
          title: '物品管理',
          notCache: true
        }
      }, {
        path: 'StockInventory',
        name: 'StockInventory',
        component: () => import('@/views/Stock/StockInventory'),
        meta: {
          hideInMenu: false,
          title: '物品库存',
          notCache: true
        }
      }, {
        path: 'StockItemset',
        name: 'StockItemset',
        component: () => import('@/views/Stock/StockItemset'),
        meta: {
          hideInMenu: false,
          title: '物品设置',
          notCache: true
        }
      }
    ]
  }
]

export default routes

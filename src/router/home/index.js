import Layout from '@/views/layout/Layout'
const systemManageRouter = [
  {
    // 系统管理
    path: '/systemManage',
    component: Layout,
    redirect: '/systemManage/systemConfig',
    name: 'systemManage',
    meta: { title: '系统管理', icon: 'xtgl' },
    regulation: 'statisticalReport',
    children: [
      {
        path: 'systemConfig',
        component: () => import('@/views/systemManage/systemConfig'),
        meta: { title: '系统设置', icon: 'kxy' },
        regulation: 'comprehensive',
        name: 'systemConfig'
      }
    ]
  }
]

export default systemManageRouter
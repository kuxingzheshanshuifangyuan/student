import Layout from '@/views/layout/Layout'

const enrollmentRouterMap = [
  {
    name: 'enrollment',
    path: '/enrollment',
    redirect: '/enrollment/studentManagement',
    component: Layout,
    meta: {
      title: '招生中心',
      icon: 'xtgl'
    },
    regulation: '',
    children: [
      {
        name: 'studentManagement',
        path: 'studentManagement',
        component: () => import('@/views/enrollment/studentManagement'),
        meta: { title: '意向学员管理', icon: 'kxy' },
        regulation: ''
      },
      {
        name: 'saleManagement',
        path: 'saleManagement',
        component: () => import('@/views/enrollment/saleManagement'),
        meta: { title: '营销管理', icon: 'kxy' },
        regulation: ''
      }
    ]
  }
]
export default enrollmentRouterMap

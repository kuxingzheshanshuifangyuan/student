let routes = [
  {
    path: '/Admissions',
    name: 'Admissions',
    component: () => import('@/components/main'),
    meta: {
      hideInMenu: false,
      title: '招生管理',
      notCache: true,
      icon: 'md-person-add'
    },
    children: [
      {
        path: 'AdmissionsIntent',
        name: 'AdmissionsIntent',
        component: () => import('@/views/Admissions/AdmissionsIntent'),
        redirect: '/Admissions/AdmissionsIntent/AdmissionIntention',
        meta: {
          hideInMenu: false,
          title: '意向学员管理',
          notCache: true
        },
        children: [
          {
            path: 'AdmissionIntention',
            name: 'AdmissionIntention',
            component: () => import('@/views/Admissions/AdmissionIntention'),
            meta: {
              hideInMenu: true,
              title: '意向学员',
              notCache: true,
              isRightTab: 'AdmissionsIntent'
            }
          },
          {
            path: 'AdmissionTryListen',
            name: 'AdmissionTryListen',
            component: () => import('@/views/Admissions/AdmissionTryListen'),
            meta: {
              hideInMenu: true,
              title: '试听学员',
              notCache: true,
              isRightTab: 'AdmissionsIntent'
            }
          },
          {
            path: 'AdmissionSccuess',
            name: 'AdmissionSccuess',
            component: () => import('@/views/Admissions/AdmissionSccuess'),
            meta: {
              hideInMenu: true,
              title: '成交学员',
              notCache: true,
              isRightTab: 'AdmissionsIntent'
            }
          }
        ]
      }, {
        path: 'AdmissionsCustomer',
        name: 'AdmissionsCustomer',
        component: () => import('@/views/Admissions/AdmissionsCustomer'),
        redirect: '/Admissions/AdmissionsCustomer/AdmissionsResource',
        meta: {
          hideInMenu: false,
          title: '资源池',
          notCache: true
        },
        children: [
          {
            path: 'AdmissionsResource',
            name: 'AdmissionsResource',
            component: () => import('@/views/Admissions/AdmissionsResource'),
            meta: {
              hideInMenu: true,
              title: '资源池',
              notCache: true,
              isRightTab: 'AdmissionsCustomer'
            }
          },
          {
            path: 'AdmissionsChange',
            name: 'AdmissionsChange',
            component: () => import('@/views/Admissions/AdmissionsChange'),
            meta: {
              hideInMenu: true,
              title: '资源变动记录',
              notCache: true,
              isRightTab: 'AdmissionsCustomer'
            }
          }
        ]
      }, {
        path: 'AdmissionsDiscount',
        name: 'AdmissionsDiscount',
        component: () => import('@/views/Admissions/AdmissionsDiscount'),
        redirect: '/Admissions/AdmissionsDiscount/AdmissionsOffer',
        meta: {
          hideInMenu: false,
          title: '优惠活动',
          notCache: true
        },
        children: [
          {
            path: 'AdmissionsOffer',
            name: 'AdmissionsOffer',
            component: () => import('@/views/Admissions/AdmissionsOffer'),
            meta: {
              hideInMenu: true,
              title: '优惠活动',
              notCache: true,
              isRightTab: 'AdmissionsDiscount'
            }
          }
        ]
      }
    ]
  }
]

export default routes

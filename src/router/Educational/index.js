let routes = [
  {
    path: '/Educational',
    name: 'Educational',
    component: () => import('@/components/main'),
    meta: {
      hideInMenu: false,
      title: '教务管理',
      notCache: true,
      icon: '_jiaowuguanli'
    },
    children: [
      {
        path: 'EducationalCourse',
        name: 'EducationalCourse',
        component: () => import('@/views/Educational/EducationalCourse'),
        meta: {
          hideInMenu: false,
          title: '课程管理',
          notCache: true
        }
      }, {
        path: 'EducationalClass',
        name: 'EducationalClass',
        component: () => import('@/views/Educational/EducationalClass'),
        meta: {
          hideInMenu: false,
          title: '班级管理',
          notCache: true
        }
      }, {
        path: 'EducationalSchedule',
        name: 'EducationalSchedule',
        component: () => import('@/views/Educational/EducationalSchedule'),
        meta: {
          hideInMenu: false,
          title: '排课管理',
          notCache: true
        }
      }, {
        path: 'EducationalClassroom',
        name: 'EducationalClassroom',
        component: () => import('@/views/Educational/EducationalClassroom'),
        meta: {
          hideInMenu: false,
          title: '教室管理',
          notCache: true
        }
      }
    ]
  }
]

export default routes

let routes = [{
  path: '/Datareport',
  name: 'Datareport',
  component: () => import('@/components/main'),
  meta: {
    hideInMenu: false,
    title: '数据报表',
    notCache: true,
    icon: '_shujubaobiao'
  },
  children: [
    {
      path: 'DatareportRecruit',
      name: 'DatareportRecruit',
      component: () => import('@/views/Datareport/DatareportRecruit'),
      meta: {
        hideInMenu: false,
        title: '招生统计',
        notCache: true
      },
      redirect: '/Datareport/DatareportRecruit/DatareportDatareportRecruitS',
      children: [
        {
          path: 'DatareportDatareportRecruitS',
          name: 'DatareportDatareportRecruitS',
          component: () => import('@/views/Datareport/DatareportChannel'),
          meta: {
            hideInMenu: true,
            title: '来源渠道统计',
            notCache: true,
            isRightTab: 'DatareportRecruit'
          }
        },
        {
          path: 'DatareportFollowState',
          name: 'DatareportFollowState',
          component: () => import('@/views/Datareport/DatareportFollowState'),
          meta: {
            hideInMenu: true,
            title: '跟进状态统计',
            notCache: true,
            isRightTab: 'DatareportRecruit'
          }
        },
        {
          path: 'RecruitCustomer',
          name: 'RecruitCustomer',
          component: () => import('@/views/Datareport/RecruitCustomer'),
          meta: {
            hideInMenu: true,
            title: '转化率分析',
            notCache: true,
            isRightTab: 'DatareportRecruit'
          }
        },
        {
          path: 'DatareportDatareportDeal',
          name: 'DatareportDatareportDeal',
          component: () => import('@/views/Datareport/DatareportDeal'),
          meta: {
            hideInMenu: true,
            title: '成交统计',
            notCache: true,
            isRightTab: 'DatareportRecruit'
          }
        },
        {
          path: 'DatareportDatareportRecruitRange',
          name: 'DatareportDatareportRecruitRange',
          component: () => import('@/views/Datareport/DatareportRange'),
          meta: {
            hideInMenu: true,
            title: '销售业绩榜',
            notCache: true,
            isRightTab: 'DatareportRecruit'
          }
        }
      ]
    },
    {
      path: 'DatareportDean',
      name: 'DatareportDean',
      component: () => import('@/views/Datareport/DatareportDean'),
      redirect: '/Datareport/DatareportDean/DatareportDeenFullClass',
      meta: {
        hideInMenu: false,
        title: '教务统计',
        notCache: true
      },
      children: [
        {
          path: 'DatareportDeenFullClass',
          name: 'DatareportDeenFullClass',
          component: () => import('@/views/Datareport/DatareportDeenFullClass'),
          meta: {
            hideInMenu: true,
            title: '班级满班率统计',
            notCache: true,
            isRightTab: 'DatareportDean'
          }
        },
        {
          path: 'DatareportDeenAttendance',
          name: 'DatareportDeenAttendance',
          component: () => import('@/views/Datareport/DatareportDeenAttendance'),
          meta: {
            hideInMenu: true,
            title: '学员出勤率统计',
            notCache: true,
            isRightTab: 'DatareportDean'
          }
        },
        {
          path: 'DatareportStudent',
          name: 'DatareportStudent',
          component: () => import('@/views/Datareport/DatareportStudent'),
          meta: {
            hideInMenu: true,
            title: '学员分析',
            notCache: true,
            isRightTab: 'DatareportDean'
          }
        },
        {
          path: 'DatareportClassTime',
          name: 'DatareportClassTime',
          component: () => import('@/views/Datareport/DatareportClassTime'),
          meta: {
            hideInMenu: true,
            title: '授课课时排行',
            notCache: true,
            isRightTab: 'DatareportDean'
          }
        },
        {
          path: 'DatareportClassMoney',
          name: 'DatareportClassMoney',
          component: () => import('@/views/Datareport/DatareportClassMoney'),
          meta: {
            hideInMenu: true,
            title: '课消金额排行',
            notCache: true,
            isRightTab: 'DatareportDean'
          }
        },
        {
          path: 'DatareportDeenEvaluation',
          name: 'DatareportDeenEvaluation',
          component: () => import('@/views/Datareport/DatareportDeenEvaluation'),
          meta: {
            hideInMenu: true,
            title: '热度统计',
            notCache: true,
            isRightTab: 'DatareportDean'
          }
        }
      ]
    },
    {
      path: 'DatareportFinance',
      name: 'DatareportFinance',
      component: () => import('@/views/Datareport/DatareportFinance'),
      redirect: '/Datareport/DatareportFinance/DatareportFinanceIncome',
      meta: {
        hideInMenu: false,
        title: '财务统计',
        notCache: true
      },
      children: [{
          path: 'DatareportFinanceIncome',
          name: 'DatareportFinanceIncome',
          component: () => import('@/views/Datareport/DatareportIncome'),
          meta: {
            hideInMenu: true,
            title: '收入统计',
            notCache: true,
            isRightTab: 'DatareportFinance'
          }
        },
        {
          path: 'DatareportFinanceExpend',
          name: 'DatareportFinanceExpend',
          component: () => import('@/views/Datareport/ExpendChannel'),
          meta: {
            hideInMenu: true,
            title: '支出统计',
            notCache: true,
            icon: 'md-home',
            isRightTab: 'DatareportFinance'
          }
        },
        {
          path: 'DatareportFinanceNetProfit',
          name: 'DatareportFinanceNetProfit',
          component: () => import('@/views/Datareport/NetProfitChannel'),
          meta: {
            hideInMenu: true,
            title: '净利统计',
            notCache: true,
            icon: 'md-home',
            isRightTab: 'DatareportFinance'
          }
        },
        {
          path: 'DatareportPerformance',
          name: 'DatareportPerformance',
          component: () => import('@/views/Datareport/DatareportPerformance'),
          meta: {
            hideInMenu: true,
            title: '业绩统计',
            notCache: true,
            icon: 'md-home',
            isRightTab: 'DatareportFinance'
          }
        }
      ]
    }
  ]
}]

export default routes

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: () => import('../pages/HomePage.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../pages/IndexPage.vue'),
      children: [
        {
          path: 'trademap',
          name: 'trademap',
          component: () => import('../jumppage/TrandeMap.vue')
        },
        {
          path: 'customercase',
          name: 'customercase',
          component: () => import('../jumppage/CustomerCase.vue')
        },
        {
          path: 'customsdata',
          name: 'customsdata',
          component: () => import('../jumppage/CustomsData.vue'),
          children: [
            {
              path: 'jin',
              name: 'jin',
              component: () => import('../jumppage/HsContent/JinContent.vue')
            },
            {
              path: 'chu',
              name: 'chu',
              component: () => import('../jumppage/HsContent/ChuContent.vue')
            },
            {
              path: 'all',
              name: 'all',
              component: () => import('../jumppage/HsContent/AllContent.vue')
            }
          ]
        },
        {
          path: 'hscode',
          name: 'hscode',
          component: () => import('../jumppage/HsCode.vue')
        },
        {
          path: 'hstool',
          name: 'hstool',
          component: () => import('../jumppage/HsTool.vue')
        },
        {
          path: 'pricingplan',
          name: 'pricingplan',
          component: () => import('../jumppage/PricingPlan.vue')
        },
        {
          path: 'searchemail',
          name: 'searchemail',
          component: () => import('../jumppage/SearchEmail.vue'),
          children: [
            {
              path: 'all',
              name: 'all',
              component: () => import('../jumppage/Searchmail/AllPage.vue')
            },
            {
              path: 'commnoly',
              name: 'commonly',
              component: () => import('../jumppage/Searchmail/CommonlyPage.vue')
            },
            {
              path: 'test',
              name: 'test',
              component: () => import('../jumppage/Searchmail/EmailTest.vue')
            }
          ]
        },
        {
          path: 'tradeskills',
          name: 'tradeskills',
          component: () => import('../jumppage/TradeSkills.vue')
        },
        {
          path: 'datadesc:id',
          name: 'datadesc',
          component: () => import('../jumppage/HsContent/DataDesc.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/LoginPage.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../pages/RegisterPage.vue')
    }
  ]
})

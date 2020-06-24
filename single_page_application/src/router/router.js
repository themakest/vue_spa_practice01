import index from '@/components/index'
import page1 from '@/components/page1'
import page2 from '@/components/page2'

export default [
  {
    path: '/',
    meta: { bodyClass: 'index' },
    component: index
  },
  {
    path: '/page1',
    meta: { bodyClass: 'pages' },
    component: page1
  },
  {
    path: '/page2',
    meta: { bodyClass: 'pages' },
    component: page2
  }
]
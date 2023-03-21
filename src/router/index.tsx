import Page5 from '@/views/pages/page5'
import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'

// 封装路由懒加载
const Login = lazy(() => import('@/views/Login'))
const About = lazy(() => import('@/views/About'))
const Home = lazy(() => import('@/views/Home'))
const Page1 = lazy(() => import('@/views/pages/page1'))
const Page2 = lazy(() => import('@/views/pages/page2'))
const Page3 = lazy(() => import('@/views/pages/page3'))
const Page301 = lazy(() => import('@/views/pages/page3/page301'))
const Page302 = lazy(() => import('@/views/pages/page3/page302'))
const Page303 = lazy(() => import('@/views/pages/page3/page303'))
const Page4 = lazy(() => import('@/views/pages/page4'))
const Page401 = lazy(() => import('@/views/pages/page4/page401'))
const Page402 = lazy(() => import('@/views/pages/page4/page402'))
const page5 = lazy(() => import('@/views/pages/page5'))

// Navigate重定向组件
const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>loading...</div>}>{comp}</React.Suspense>
)

const routes = [
  // 嵌套路由，开始-----
  {
    path: '/',
    element: <Navigate to="/page1" />,
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/page1',
        element: withLoadingComponent(<Page1 />),
      },
      {
        path: '/page2',
        element: withLoadingComponent(<Page2 />),
      },
      {
        path: '/page3',
        element: withLoadingComponent(<Page3 />),
      },
      {
        path: '/page3/page301',
        element: withLoadingComponent(<Page301 />),
      },
      {
        path: '/page3/page302',
        element: withLoadingComponent(<Page302 />),
      },
      {
        path: '/page3/page303',
        element: withLoadingComponent(<Page303 />),
      },
      {
        path: '/Page4',
        element: withLoadingComponent(<Page4 />),
      },
      {
        path: '/page4/page401',
        element: withLoadingComponent(<Page401 />),
      },
      {
        path: '/page4/page402',
        element: withLoadingComponent(<Page402 />),
      },
      {
        path: '/page5',
        element: withLoadingComponent(<Page5 />),
      },
      {
        path: '/login',
        element: withLoadingComponent(<Login />),
      },
      {
        path: '/about',
        element: withLoadingComponent(<About />),
      },
    ],
  },
  // 嵌套路由，结束-----
  // 路由重定向
  {
    path: '*',
    element: <Navigate to="/page1" />,
  },
]
export default routes

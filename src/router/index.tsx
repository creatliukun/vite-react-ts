import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'

// 封装路由懒加载
const Login = lazy(() => import('@/views/Login'))
const About = lazy(() => import('@/views/About'))
const Home = lazy(() => import('@/views/Home'))
const Page1 = lazy(() => import('@/views/pages/page1'))
const Page2 = lazy(() => import('@/views/pages/page2'))

// Navigate重定向组件
const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>loading...</div>}>{comp}</React.Suspense>
)

const routes = [
  // 嵌套路由，开始-----
  {
    path: '/',
    element: <Navigate to="home" />,
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
        path: '/Page2',
        element: withLoadingComponent(<Page2 />),
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
]
export default routes

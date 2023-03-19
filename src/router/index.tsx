import Home from '@/views/Home'
import About from '@/views/About'
import Login from '@/views/Login'

// Navigate重定向组件
import { Navigate } from 'react-router-dom'
// 路由表写法

const routes = [
  {
    path: '/',
    element: <Navigate to="about" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/home',
    element: <Home num={undefined} setNum={undefined} />,
  },
]
export default routes

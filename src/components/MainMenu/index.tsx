import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  {
    label: '栏目一',
    key: '/page1',
    icon: <PieChartOutlined />,
  },
  {
    label: '栏目二',
    key: '/page2',
    icon: <DesktopOutlined />,
  },
  {
    label: '栏目三',
    key: '/page3',
    icon: <UserOutlined />,
    children: [
      {
        label: '栏目301',
        key: '/page3/page301',
      },
      {
        label: '栏目302',
        key: '/page3/page302',
      },
      {
        label: '栏目303',
        key: '/page3/page303',
      },
    ],
  },
  {
    label: '栏目四',
    key: '/page4',
    icon: <TeamOutlined />,
    children: [
      {
        label: '栏目401',
        key: '/page4/page401',
      },
      {
        label: '栏目402',
        key: '/page4/page402',
      },
    ],
  },
  {
    label: '栏目五',
    key: '/page5',
    icon: <FileOutlined />,
  },
]

function MainMenu() {
  const currentRoute = useLocation()
  const NavigateTo = useNavigate()
  // 编程式路由导航
  const menuClick = (e: { key: string }) => {
    NavigateTo(e.key)
  }

  let firstOpenKey: string = ''
  function findOpenKey(obj: { key: string }) {
    console.log(obj, '...')
    return obj.key === currentRoute.pathname
  }
  // ! 肯定的断言 ; as 断言
  for (let i = 0; i < items.length; i++) {
    console.log(items, 'items')
    if (
      items[i]!['children'] &&
      items[i]!['children'].length > 0 &&
      items[i]!['children'].find(findOpenKey)
    ) {
      console.log(1111)
      firstOpenKey = items[i]!.key as string
    }
  }
  console.log(firstOpenKey, 'firstKey')
  const [openKeys, setOpenKeys] = useState([firstOpenKey])

  // 菜单展开回收只设置一个展开项
  const menuOpenChange = (keys: string[]) => {
    // 取最后一项进行展示
    setOpenKeys([keys[keys.length - 1]])
  }
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentRoute.pathname]}
      mode="inline"
      items={items}
      onClick={menuClick}
      onOpenChange={menuOpenChange}
      openKeys={openKeys}
    />
  )
}

export default MainMenu

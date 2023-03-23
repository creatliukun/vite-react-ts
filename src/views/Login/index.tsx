import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Input, Space, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import initLoginBg from './init.ts'
import { CaptchaAPI, LoginAPI } from '@/request/api'
import './login.less'

function Login() {
  let navigateTo = useNavigate()
  // 加载完这个组件之后，加载背景
  useEffect(() => {
    initLoginBg()
    // 窗口缩放时重新触发
    window.onresize = () => {
      initLoginBg()
    }
    // 获取验证码
    getCaptchaImg()
  }, [])
  const [usernameVal, setUsernameVal] = useState('') // 定义用户输入用户名这个变量
  const [passwordVal, setPasswordVal] = useState('') // 定义用户输入密码这个变量
  const [captchaVal, setCaptchaVal] = useState('') // 定义用户输入验证码这个变量
  // 定义一个变量保存验证码图片信息
  const [captchaImg, setCaptchaImg] = useState('')
  // 用户名保存
  const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsernameVal(e.target.value)
  }
  // 密码保存
  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordVal(e.target.value)
  }
  // 验证码保存
  const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCaptchaVal(e.target.value)
  }
  // 点击登录按钮的事件函数
  const gotoLogin = async () => {
    console.log(
      '用户输入的用户名，密码，验证码分别是：',
      usernameVal,
      passwordVal,
      captchaVal
    )
    // 验证是否有空值,.trim()方法，去除字符串的首尾空格
    if (!usernameVal.trim() || !passwordVal.trim() || !captchaVal.trim()) {
      message.warning('请完整输入信息！')
      return
    }
    // 发起登录请求
    let loginAPIRes = await LoginAPI({
      username: usernameVal,
      password: passwordVal,
      code: captchaVal,
      uuid: localStorage.getItem('uuid') as string,
    })

    const { code, msg } = loginAPIRes
    console.log(loginAPIRes)
    if (code === 200) {
      // 1、提示登录成功
      message.success(msg || '登录成功！')
      // 2、保存token
      localStorage.setItem('lk-react-management-token', loginAPIRes.token)
      // 3、跳转到/page1
      navigateTo('/page1')
      // 4、删除本地保存中的uuid
      localStorage.removeItem('uuid')
    } else {
      message.error(msg || '登录失败，请检查后登陆！')
    }
  }
  // 点击验证码图片盒子的事件函数
  const getCaptchaImg = async () => {
    // 做验证码的请求
    // CaptchaAPI().then((res)=>{
    //   console.log(res);
    // })
    let captchaAPIRes = await CaptchaAPI()
    console.log(captchaAPIRes)
    if (captchaAPIRes.code === 200) {
      // 1、把图片数据显示在img上面
      setCaptchaImg('data:image/gif;base64,' + captchaAPIRes.img)
      // 2、本地保存uuid，给登录的时候用
      localStorage.setItem('uuid', captchaAPIRes.uuid)
    }
  }

  return (
    <div className={styles.loginPage}>
      {/* 存放背景 */}
      <canvas id="canvas" style={{ display: 'block' }}></canvas>
      {/* ' loginbox' 必须加个空格，相当于css样式拼接 */}
      <div className={styles.loginBox + ' loginbox'}>
        {/* 标题 */}
        <div className={styles.title}>
          <h1>前端demo&nbsp;·&nbsp;通用后台系统</h1>
          <p>Strive Everyday</p>
        </div>
        {/* 表单 */}
        <div className="form">
          <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            <Input placeholder="用户名" onChange={usernameChange} />
            <Input.Password placeholder="密码" onChange={passwordChange} />
            {/* 验证码盒子 */}
            <div className="captchaBox">
              <Input placeholder="验证码" onChange={captchaChange} />
              <div className="captchaImg">
                <img height="38" src={captchaImg} alt="" />
              </div>
            </div>
            <Button
              type="primary"
              className="loginBtn"
              onClick={gotoLogin}
              block
            >
              登录
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default Login

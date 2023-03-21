import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Input, Space, message } from 'antd'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import initLoginBg from './init.ts'
import './login.less'

function Login() {
  useEffect(() => {
    initLoginBg()
    // 窗口缩放时重新触发
    window.onresize = () => {
      initLoginBg()
    }
  }, [])
  const [usernameVal, setUsernameVal] = useState('') // 定义用户输入用户名这个变量
  const [passwordVal, setPasswordVal] = useState('') // 定义用户输入密码这个变量
  const [captchaVal, setCaptchaVal] = useState('') // 定义用户输入验证码这个变量
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
  const gotoLogin = async () => {
    console.log(
      '用户输入的用户名，密码，验证码分别是：',
      usernameVal,
      passwordVal,
      captchaVal
    )
    // 验证是否有空值
    // if (!usernameVal.trim() || !passwordVal.trim() || !captchaVal.trim()) {
    //   message.warning('请完整输入信息！')
    //   return
    // }
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
                <img
                  height="38"
                  src="https://cdn.staticaly.com/gh/creatliukun/picx@master/WXminProgram/image.4d4krbzyr8o0.webp"
                  alt=""
                />
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

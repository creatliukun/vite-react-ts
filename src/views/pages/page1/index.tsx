import React from 'react'
import { useSelector } from 'react-redux'

function Page1() {
  const { num } = useSelector((state) => {
    return { num: state.num }
  })
  return <div>Page1{num}</div>
}

export default Page1

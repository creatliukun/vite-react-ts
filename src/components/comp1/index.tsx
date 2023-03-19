import React from 'react';
// import './index.scss'; // 这样引用有问题，会变成全局的样式
import styles from './index.module.scss'; //模块化引入

function Comp1() {
  return (
    // <div className='comp-color'>
    //   Comp1
    // </div>
    <div className={styles['comp-color']}>
      <p>COmp1</p>
    </div>
  );
}

export default Comp1;

import React from 'react';
import styles from './index.module.scss';

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>免费抽奖工具</div>
        <div className={styles.desc}>公平公正 & 本地配置 & 开箱即用</div>
        <a className={styles.link} href={"https://94275.cn/lottery/"}>开始使用</a>
      </div>
    </div>
  );
}

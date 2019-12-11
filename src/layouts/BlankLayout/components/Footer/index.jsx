import React from 'react';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Row>
          <Col l="8">
            <h3 className={styles.title}>关于我们</h3>
            <div className={styles.nav}>
              <a className={styles.link}>私权政策</a>
              <a className={styles.link}>加入我们</a>
            </div>
          </Col>
          <Col l="8">
            <h3 className={styles.title}>使用帮助</h3>
            <div className={styles.nav}>
              <a className={styles.link}>联系我们</a>
              <a className={styles.link}>使用文档</a>
            </div>
          </Col>
          <Col l="8">
            <h3 className={styles.title}>手机访问抽奖工具</h3>
            <img

              src="./lottery_qr.png"
              alt="qr-code"
              className={styles.qrcode}
            />
          </Col>
        </Row>
        <p className={styles.copyRight}>94275.cn © 2019 版权所有</p>
      </div>
    </div>
  );
}

import React from 'react';
import {Grid} from '@alifd/next';
import styles from './index.module.scss';

const {Row, Col} = Grid;

const dataSource = [
  {
    title: '公平',
    pic: require('./images/img1.png'),
    desc: '对所有人绝对的公平',
  },
  {
    title: '公正',
    pic: require('./images/img3.png'),
    desc: '抽奖算法完全随机',
  },
  {
    title: '公开',
    pic: require('./images/img4.png'),
    desc: '在线设置和抽奖可对所有人开放',
  },
  {
    title: '开源',
    pic: require('./images/img2.png'),
    desc: '支持现场 review 代码',
  },
];

export default function Feature() {
  return (
    <div className={styles.container}>
      <Row wrap className={styles.content}>
        {dataSource.map((item, index) => {
          return (
            <Col xxs="12" s="6" l="6" key={index} className={styles.item}>
              <img src={item.pic} className={styles.pic} alt=""/>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

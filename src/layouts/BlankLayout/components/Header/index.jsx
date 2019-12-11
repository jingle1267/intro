import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>
          抽奖工具
        </Link>
      </div>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.activeNavItemLink}>
            首页
          </Link>
          <a href="https://94275.cn/" className={styles.navItemLink}>
            更多
          </a>
        </li>
      </ul>
    </div>
  );
}

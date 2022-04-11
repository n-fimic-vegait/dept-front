/* eslint-disable @next/next/no-img-element */
import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.header}>
      <img
        className={styles.header__deptLogo}
        src={'./dept_icons/icon-dept.svg'}
        alt='dept logo'
      />
      <div>
        <span className={styles.header__menuText}> MENU </span>
        <img
          className={styles.header__menuIcon}
          src={'./dept_icons/icon-menu.svg'}
          alt='menu icon'
        />
      </div>
    </div>
  )
}

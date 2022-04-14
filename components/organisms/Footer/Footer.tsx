/* eslint-disable @next/next/no-img-element */
import styles from './Footer.module.css'
import Icon_Dept from './../../../public/dept_icons/icon-dept.svg'
import Icon_Facebook from './../../../public/dept_icons/icon-fb.svg'
import Icon_Instagram from './../../../public/dept_icons/icon-instagram.svg'
import Icon_Twitter from './../../../public/dept_icons/icon-twitter.svg'
import Icon_Scroll_To_Top from './../../../public/dept_icons/icon-scroll-to-top.svg'
import Link from 'next/link'

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <div className={styles.footer__firstRow}>
          <Icon_Dept
            className={styles.footer__firstRow__deptLogo}
            fill='white'
          />
          <ul className={styles.footer__firstRow__menu}>
            <li>
              <Link href='#'> WORK </Link>
            </li>
            <li>
              <Link href='#'> SERVICE </Link>
            </li>
            <li>
              <Link href='#'> STORIES </Link>
            </li>
            <li>
              <Link href='#'> ABOUT </Link>
            </li>
            <li>
              <Link href='#'> CAREERS </Link>
            </li>
            <li>
              <Link href='#'> CONTACT </Link>
            </li>
          </ul>
          <ul className={styles.footer__firstRow__socialIcons}>
            <li>
              <a href='#'>
                <Icon_Facebook fill='white' />
              </a>
            </li>
            <li>
              <a href='#'>
                <Icon_Instagram fill='white' />
              </a>
            </li>
            <li>
              <a href='#'>
                <Icon_Twitter fill='white' />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footer__secondRow}>
          <span>Chamber of Commerce: 63464101</span>
          <span>VAT: NL 8552.47.502.B01</span>
          <span>Terms and conditions</span>
          <span>© 2018 Dept Agency</span>
        </div>
      </div>
      <div className={styles.scrollToTop} onClick={scrollToTop}>
        <Icon_Scroll_To_Top fill='#1a18f7' />
        <p> TOP </p>
      </div>
    </div>
  )
}

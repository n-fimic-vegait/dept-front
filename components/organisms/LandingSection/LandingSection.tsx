import { Header } from '../../molecules/Header/Header'
import styles from './LandingSection.module.css'

export const LandingSection = () => {
  return (
    <div className={styles.landingSection}>
      <Header />
      <h1 className={styles.landingSection__title}>WORK</h1>
      <button className={styles.landingSection__viewCaseButton}>
        VIEW CASE
      </button>
    </div>
  )
}

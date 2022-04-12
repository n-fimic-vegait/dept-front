/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react'
import { DeptImage } from '../../../model/DeptImage'
import styles from './ClientLogos.module.css'

interface ClientLogosProps {
  logos: DeptImage[]
}

export const ClientLogos: FunctionComponent<ClientLogosProps> = ({ logos }) => {
  return (
    <div className={styles.clientLogos}>
      <h1 className={styles.clientLogos__title}> CLIENTS </h1>
      <p className={styles.clientLogos__subtitle}>
        {`We value a great working relationship with our clients above all else.
        It’s why they often come to our parties. It’s also why we’re able to
        challenge and inspire them to reach for the stars.`}
      </p>
      <div className={styles.clientLogos__wrapper}>
        {logos.map((logo) => (
          <img
            className={styles.clientLogos__wrapper__logo}
            key={logo.url}
            src={logo.url}
            alt={'company logo'}
          />
        ))}
      </div>
    </div>
  )
}

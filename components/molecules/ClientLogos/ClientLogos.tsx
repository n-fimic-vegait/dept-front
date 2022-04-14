/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react'
import { DeptImageModel } from '../../../model/DeptImageModel'
import styles from './ClientLogos.module.css'

interface ClientLogosProps {
  logos: DeptImageModel[]
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
            width={'100%'}
            key={logo.url}
            className={styles.clientLogos__wrapper__logo}
            src={logo.url}
            alt={'company logo'}
          />
        ))}
      </div>
    </div>
  )
}

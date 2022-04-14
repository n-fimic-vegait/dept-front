/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react'
import { DeptImageModel } from '../../../model/DeptImageModel'
import styles from './ClientLogos.module.css'

interface ClientLogosProps {
  logos: DeptImageModel[]
  clients_description: string
}

export const ClientLogos: FunctionComponent<ClientLogosProps> = ({
  logos,
  clients_description,
}) => {
  return (
    <div className={styles.clientLogos}>
      <h1 className={styles.clientLogos__title}> CLIENTS </h1>
      <p className={styles.clientLogos__subtitle}>{clients_description}</p>
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

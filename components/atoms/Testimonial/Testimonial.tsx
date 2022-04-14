import { FunctionComponent } from 'react'
import styles from './Testimonial.module.css'

interface TestimonialProps {
  text: string
}

export const Testimonial: FunctionComponent<TestimonialProps> = ({ text }) => {
  return (
    <div className={styles.testimonial}>
      <h1> {`"${text}"`} </h1>
    </div>
  )
}

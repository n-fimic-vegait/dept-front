import styles from './Filter.module.css'

export const Filter = () => {
  return (
    <div className={styles.filter}>
      <form className={styles.filter__form}>
        <span> Show me </span>
        <select>
          <option> all work </option>
          <option> 2 </option>
          <option> 3 </option>
        </select>
        <span> in </span>
        <select>
          <option> all industries </option>
          <option> 2 </option>
          <option> 3 </option>
        </select>
      </form>
    </div>
  )
}

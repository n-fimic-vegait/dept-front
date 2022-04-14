import { FunctionComponent } from 'react'
import styles from './Filter.module.css'

interface FilterProps {
  handleOnCategoryChange: (category: string) => void
  handleOnIndustryChange: (industry: string) => void
}

export const Filter: FunctionComponent<FilterProps> = ({
  handleOnCategoryChange,
  handleOnIndustryChange,
}) => {
  return (
    <div className={styles.filter}>
      <form className={styles.filter__form}>
        <span> Show me </span>
        <select
          name='categories'
          onChange={(e) => handleOnCategoryChange(e.target.value)}
        >
          <option value='all_work'> all work </option>
          <option value='category1'> category1 </option>
          <option value='category2'> category2 </option>
        </select>
        <span> in </span>
        <select
          name='industries'
          onChange={(e) => handleOnIndustryChange(e.target.value)}
        >
          <option value='all_industries'> all industries </option>
          <option value='industry1'> industry1 </option>
          <option value='industry2'> industry2 </option>
        </select>
      </form>
    </div>
  )
}

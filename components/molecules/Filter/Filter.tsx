import { FunctionComponent } from 'react'
import { DeptCategoryModel } from '../../../model/DeptCategoryModel'
import { DeptIndustryModel } from '../../../model/DeptIndustryModel'
import styles from './Filter.module.css'

interface FilterProps {
  handleOnCategoryChange: (category: string) => void
  handleOnIndustryChange: (industry: string) => void
  categories: DeptCategoryModel[]
  industries: DeptIndustryModel[]
}

export const Filter: FunctionComponent<FilterProps> = ({
  handleOnCategoryChange,
  handleOnIndustryChange,
  categories,
  industries,
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
          {categories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <span> in </span>
        <select
          name='industries'
          onChange={(e) => handleOnIndustryChange(e.target.value)}
        >
          <option value='all_industries'> all industries </option>
          {industries.map((industry) => (
            <option key={industry.name} value={industry.name}>
              {industry.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  )
}

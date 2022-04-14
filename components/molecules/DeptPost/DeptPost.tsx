/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react'
import { DeptPostModel } from '../../../model/DeptPostModel'
import styles from './DeptPost.module.css'
import Icon_Dropdown from './../../../public/dept_icons/icon-dropdown.svg'

interface DeptPostProps {
  post: DeptPostModel
}

export const DeptPost: FunctionComponent<DeptPostProps> = ({ post }) => {
  return (
    <div className={styles.deptPost}>
      {post.cover_image && (
        <img width={'100%'} src={post.cover_image[0]?.url} alt={post.title} />
      )}
      <p className={styles.deptPost__source}> {post.source.toUpperCase()} </p>
      <p className={styles.deptPost__title}> {post.title} </p>
      <a href='#' className={styles.deptPost__viewCase}>
        <Icon_Dropdown fill='#1A18F7' />
        <span> VIEW CASE </span>
      </a>
    </div>
  )
}

import { FunctionComponent } from 'react'
import { DeptPostModel } from '../../../model/DeptPostModel'
import { Testimonial } from '../../atoms/Testimonial/Testimonial'
import { DeptPost } from '../../molecules/DeptPost/DeptPost'
import styles from './ContentSection.module.css'

interface ContentSectionProps {
  type: string
  posts?: DeptPostModel[]
  textData?: string
}

export const ContentSection: FunctionComponent<ContentSectionProps> = ({
  type,
  posts,
  textData,
}) => {
  return (
    <>
      {type === 'double_post' && (
        <div className={styles.contentSectionDouble}>
          {posts?.map((post) => (
            <DeptPost post={post} key={post._id} />
          ))}
        </div>
      )}
      {type === 'triple_post' && (
        <div className={styles.contentSectionTriple}>
          <div className={styles.contentSectionTriple__twoPosts}>
            {posts?.map((post) => (
              <>
                {post.cover_image === null && (
                  <DeptPost post={post} key={post._id} />
                )}
              </>
            ))}
          </div>
          <div>
            {posts?.map((post) => (
              <>
                {post.cover_image !== null && (
                  <DeptPost post={post} key={post._id} />
                )}
              </>
            ))}
          </div>
        </div>
      )}
      {type === 'testimonial' && <Testimonial text={textData!} />}
    </>
  )
}

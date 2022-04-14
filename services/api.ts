import { prepr } from '../lib/prepr'

export const getPageData = () => {
  return prepr
    .graphqlQuery(
      `{
        sections : ContentSections {
          items {
            _id
            type
            text_data
            dept_posts {
              _id
              title
              source
              cover_image {
                url
              }
            }
          }
        },
        logos : CompanyLogos {
          items {
            images {
              url(format: "webp")
            }
          }
        }
    }`
    )
    .fetch()
}

export const getFilteredPosts = (category: string, industry: string) => {
  if (category === 'all_work') {
    category = ''
  }
  if (industry === 'all_industries') {
    industry = ''
  }
  return prepr
    .graphqlQuery(
      `{
        posts : DeptPosts( where : { category : "${category}", industry: "${industry}" } ) {
          items {
            _id
            title
            source
            cover_image {
              url
            }
          }
        }
    }`
    )
    .fetch()
}

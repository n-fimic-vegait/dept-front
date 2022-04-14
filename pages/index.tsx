/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { ClientLogos } from '../components/molecules/ClientLogos/ClientLogos'
import { DeptPost } from '../components/molecules/DeptPost/DeptPost'
import { Filter } from '../components/molecules/Filter/Filter'
import { ContentSection } from '../components/organisms/ContentSection/ContentSection'
import { Footer } from '../components/organisms/Footer/Footer'
import { LandingSection } from '../components/organisms/LandingSection/LandingSection'
import { QuestionFormSection } from '../components/organisms/QuestionForm/QuestionFormSection'
import { DeptCategoryModel } from '../model/DeptCategoryModel'
import { DeptContentSectionModel } from '../model/DeptContentSectionModel'
import { DeptImageModel } from '../model/DeptImageModel'
import { DeptIndustryModel } from '../model/DeptIndustryModel'
import { DeptPostModel } from '../model/DeptPostModel'
import { getFilteredPosts, getPageData } from '../services/api'
import styles from './../styles/Home.module.css'

interface HomeProps {
  sections: DeptContentSectionModel[]
  logos: DeptImageModel[]
  clients_description: string
  categories: DeptCategoryModel[]
  industries: DeptIndustryModel[]
}

const Home: NextPage<HomeProps> = ({
  sections,
  logos,
  clients_description,
  categories,
  industries,
}) => {
  const [category, setCategory] = useState('all_work')
  const [industry, setIndustry] = useState('all_industries')
  const [filteredPosts, setFilteredPosts] = useState([] as DeptPostModel[])
  const [postsAreFiltered, setPostsAreFiltered] = useState(false)

  useEffect(() => {
    const filterPosts = async () => {
      let filteredPostsLocal = await getFilteredPosts(category, industry)
      if (filteredPostsLocal.data.posts !== null) {
        setFilteredPosts(filteredPostsLocal.data.posts.items)
      } else {
        setFilteredPosts([])
      }
    }

    if (category === 'all_work' && industry === 'all_industries') {
      setPostsAreFiltered(false)
    } else {
      setPostsAreFiltered(true)
      filterPosts()
    }
  }, [category, industry])

  const handleOnCategoryChange = (category: string) => {
    setCategory(category)
  }

  const handleOnIndustryChange = (industry: string) => {
    setIndustry(industry)
  }

  return (
    <>
      <LandingSection />
      <Filter
        categories={categories}
        industries={industries}
        handleOnCategoryChange={handleOnCategoryChange}
        handleOnIndustryChange={handleOnIndustryChange}
      />
      {!postsAreFiltered && (
        <div className={styles.contentWrapper}>
          {sections.map((section) => (
            <ContentSection
              key={section._id}
              type={section.type}
              posts={section.dept_posts}
              textData={section.text_data}
            />
          ))}
        </div>
      )}
      {postsAreFiltered && (
        <div className={styles.filteredResults}>
          {filteredPosts.map((post) => (
            <DeptPost post={post} key={post._id} />
          ))}
        </div>
      )}
      {postsAreFiltered && filteredPosts.length === 0 && (
        <p className={styles.noPostsMessage}>
          There are no posts for given filters
        </p>
      )}
      <ClientLogos logos={logos} clients_description={clients_description} />
      <QuestionFormSection />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const pageData = await getPageData()

  return {
    props: {
      sections: pageData.data.sections.items as DeptContentSectionModel[],
      logos: pageData.data.logos.items[0].images as DeptImageModel[],
      clients_description: pageData.data.logos.items[0]
        .clients_description as string,
      categories: pageData.data.categories.items as DeptCategoryModel[],
      industries: pageData.data.industries.items as DeptIndustryModel[],
    },
  }
}

export default Home

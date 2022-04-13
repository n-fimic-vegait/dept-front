/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import { ClientLogos } from '../components/molecules/ClientLogos/ClientLogos'
import { Filter } from '../components/molecules/Filter/Filter'
import { Footer } from '../components/organisms/Footer/Footer'
import { LandingSection } from '../components/organisms/LandingSection/LandingSection'
import { QuestionFormSection } from '../components/organisms/QuestionForm/QuestionFormSection'
import { prepr } from '../lib/prepr'
import { DeptImage } from '../model/DeptImage'
import { DeptPost } from '../model/DeptPost'

interface HomeProps {
  posts: DeptPost[]
  logos: DeptImage[]
}

const Home: NextPage<HomeProps> = ({ posts, logos }) => {
  return (
    <>
      <LandingSection />
      <Filter />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '0 60px',
        }}
      >
        {posts.map((post) => (
          <div key={post._id} style={{ width: '50%', padding: '0 10px' }}>
            {post.cover_image && (
              <img
                width={'100%'}
                src={post.cover_image[0]?.url}
                alt={post.title}
              />
            )}
            <p> {post.source} </p>
            <p> {post.title} </p>
          </div>
        ))}
      </div>
      <ClientLogos logos={logos} />
      <QuestionFormSection />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const pageData = await prepr
    .graphqlQuery(
      `{
        posts : DeptPosts(limit: 20) {
            items {
              _id
              title
              source,
              cover_image {
                url(format: "webp")
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

  return {
    props: {
      posts: pageData.data.posts.items as DeptPost[],
      logos: pageData.data.logos.items[0].images as DeptImage[],
    },
  }
}

export default Home

import type { NextPage } from 'next'
import { Filter } from '../components/molecules/Filter/Filter'
import { LandingSection } from '../components/organisms/LandingSection/LandingSection'

const Home: NextPage = () => {
  return (
    <>
      <LandingSection />
      <Filter />
    </>
  )
}

export default Home

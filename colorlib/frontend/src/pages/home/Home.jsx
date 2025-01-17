import React from 'react'
import Hero from '../../components/hero/Hero'
import ShopCategorey from '../../components/shopCategories/ShopCategorey'
import LatestProducts from '../../components/LatestProducts/LatestProducts'
import News from '../../components/news/News'

const Home = () => {
  return (
    <div>
        <Hero/>
        <ShopCategorey/>
        <LatestProducts/>
        <News/>
    </div>
  )
}

export default Home
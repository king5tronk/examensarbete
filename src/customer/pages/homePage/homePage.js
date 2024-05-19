import React from 'react'
import MainCarousel from '../../components/homeCarousel/mainCarousel'
import HomeSectionCarousel from '../../components/homeSectionCarousel/homeSectionCarousel'


const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center'>
            <HomeSectionCarousel/>
        </div>
    </div>
  )
}

export default HomePage
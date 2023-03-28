import React from 'react'
import AboutCard from '../../components/Elements/about/AboutCard'
import HAbout from '../../components/Elements/about/HAbout'
import Hero from '../../components/Elements/Hero/HeroSection'
import Team from '../../components/Elements/team/Team'
function Home() {
  return (
    <div className="homepage">
<Hero/>
<AboutCard></AboutCard>
<HAbout></HAbout>
<Team></Team>
</div>  )
}

export default Home
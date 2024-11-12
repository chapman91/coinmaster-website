import {  HomePage } from './(route)/routeBarrel';
import { About, Carousel, Invitation, Roadmap, TokenomicsSection } from "../app/(route)/routeBarrel"



// This is where the specific content on the homepage should be

const HeroPage = () => {
  return (
  <section>
    <HomePage/>
    <TokenomicsSection/>  
    <About/>
    <Carousel/>
    <Invitation/>
    <Roadmap/>

  </section>
  )
}

export default HeroPage
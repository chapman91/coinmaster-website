import {  HomePage } from './(route)/routeBarrel';
import { About, CarouselSection, Roadmap, TokenomicsSection, InvitationSection } from "../app/(route)/routeBarrel"



// This is where the specific content on the homepage should be

const HeroPage = () => {
  return (
  <section>
    <HomePage/>
    <TokenomicsSection/>  
    <About/>
    <CarouselSection/>
    <Roadmap/>
    <InvitationSection/>
   

  </section>
  )
}

export default HeroPage
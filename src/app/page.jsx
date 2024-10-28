import { Carousel, Tokenomics, Roadmap, Invitation, About } from './(route)/routeBarrel'
// This is where the specific content on the homepage should be

const HomePage = () => {
  return (
  <section>
    <Carousel/>
    <Tokenomics/>
    <Roadmap/>
    <Invitation/>
    <About/>
  </section>
  )
}

export default HomePage
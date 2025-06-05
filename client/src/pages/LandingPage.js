import React from 'react'
import { CTA } from '../components/CTA'
import { Hero } from '../components/Hero'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { Features } from '../components/Features'
export const LandingPage = () => {
  return (
    <div>
        <NavBar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}
export default LandingPage;
import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Clients from '../components/Clients'
import Manage from '../components/Manage'
import Unseen from '../components/Unseen'
import Helping from '../components/Helping'
import How from '../components/How'
import Meet from '../components/Meet'
import Caring from '../components/Caring'
import PreFooter from '../components/PreFooter'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
        <Header />
        <Hero />
        <Clients />
        <Manage />
        <Unseen />
        <Helping />
        <How />
        <Meet />
        <Caring />
        <PreFooter />
        <Footer />
    </div>
  )
}

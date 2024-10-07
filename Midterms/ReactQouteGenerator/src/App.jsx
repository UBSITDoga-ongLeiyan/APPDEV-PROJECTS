import { useState } from 'react'
import Header from './header'
import Footer from './footer'
import QouteGenerator from './QouteGenerator'

function App() {
  return (
    <>
      <Header/>
      <QouteGenerator></QouteGenerator>
      <Footer/>
    </>
  )
}

export default App

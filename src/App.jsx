import React from 'react'
import Home from './components/Home'
import Cards from './components/Cards'
import TopRatedWorker from './components/TopRatedWorker'
import Success from './components/Success'
import Blog from './components/Blog'
import Footer from './components/footer'


const App = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden overflow-y-auto'>
      <Home/>
      <Cards/>
      <TopRatedWorker/>
      <Success/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
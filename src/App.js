import React, { useContext, useEffect } from 'react'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pageination from './components/Pageination'
import { AppContext } from './context/AppContext'

const App = () => {

  const {fetchBlogPost} = useContext(AppContext)

  useEffect(() => {
    fetchBlogPost()
  }, [])
  


  return (
    <div>
      <Header />
      <Blogs />
      <Pageination />
    </div>
  )
}

export default App
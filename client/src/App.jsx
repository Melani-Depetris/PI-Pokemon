import { useState } from 'react'
import styles from './App.css'
import {Routes, Route, useLocation} from 'react-router-dom'

import { Landing, Home, Detail, Form, About } from './views'
import NavBar from './components/NavBar/NavBar'

const App = () => {
  const {pathname} =useLocation()
  return (
    <div className={styles.appContainer}>
      {pathname!== '/' && <NavBar/>}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App;

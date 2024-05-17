import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import ReadBook from './pages/ReadBook'
import UpdateBook from './pages/UpdateBook'
import DeleteBook from './pages/DeleteBook'
import Dashboard from './pages/Dashboard'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/details/:id' element={<ReadBook/>}/>
      <Route path='/books/edit/:id' element={<UpdateBook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
    </Routes>
  )
}

export default App
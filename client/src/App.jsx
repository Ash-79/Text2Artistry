import React from 'react'
import {logo, logo2} from './assets'
import {Home, CreatePost} from './pages'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
          <Link to={'/'}>
            <img src={logo} alt='logo' className='w-28 left-30 object-contain'/>
          </Link>
          <Link to={'/create-post'}>
            <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full'>Create</button>
          </Link>
        </header>
        <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create-post' element={<CreatePost/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

import './App.css'
import { Route, RouterProvider, BrowserRouter, createRoutesFromElements, Routes } from 'react-router'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path = "" element = {<Home/>} />
        <Route path='about' element = {<About/>}/>
        <Route path='contact' element = {<Contact/>}/>
        <Route path='user/:userid' element = {<User/>}/>
        <Route path='github'
        // loader = {()=> {githubInfoLoader}} 
        element = {<Github/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App



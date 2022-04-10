import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Series from './pages/Series'
import Header from './assets/Header'
import Footer from './assets/Footer'


let MainRoute = () => {
    return (
        <div>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/movie" element={<Movie/>}/>
            <Route path="/series" element={<Series/>}/>
        </Routes>
        <Footer/>
        </div>
    )
}
export default MainRoute
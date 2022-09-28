import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Filmes from '../pages/Filmes';
import TopFilmes from '../pages/TopFilmes';
import Series from '../pages/Series';
import TopSeries from '../pages/TopSeries';
import FilmesDetails from '../pages/FilmesDetails';
import SeriesDetails from '../pages/SeriesDetails';
import TopFilmesDetails from '../pages/TopFilmesDetails';
import TopSeriesDetails from '../pages/TopSeriesDetails';
const RoutesHeader = () => {
  return (
    <BrowserRouter>
                <Header />
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/filmes' element={<Filmes/>}/>
                  <Route path='/topfilmes' element={<TopFilmes/>}/>
                  <Route path='/series' element={<Series/>}/>
                  <Route path='/topseries' element={<TopSeries/>}/>
                  <Route exact path="/filmes/:id" element={<FilmesDetails />} />
                  <Route exact path="/series/:id" element={<SeriesDetails />} />
                  <Route exact path="/topfilmes/:id" element={<TopFilmesDetails />} />
                  <Route exact path="/topseries/:id" element={<TopSeriesDetails/>}/>
                </Routes>
            </BrowserRouter>
  )
}

export default RoutesHeader
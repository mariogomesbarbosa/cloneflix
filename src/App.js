import React, { useEffect, useState } from 'react'
import tmdb from "./tmdb"
import './App.css'
import MovieRow from './components/MovieRow'
import FeatureMovie from './components/FeatureMovie'
import Header from './components/Header'

export default () => {

  const [movieList, setMovieList] = useState([])
  const [featureData, setFeatureData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      // Getting all lists
      let list = await tmdb.getHomeList()
      setMovieList(list)

      // Getting featured movies
      let originals = list.filter(i=>i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv')
      setFeatureData(chosenInfo)
    }
    
    loadAll()
  }, [])

  return (
    <div className="page">

      <Header />

      {featureData &&
        <FeatureMovie item={featureData} />
      }

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}
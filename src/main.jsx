import React from 'react'
import ReactDOM from 'react-dom/client'
import { Pelicula } from "./pelicula"
import './index.css'
import peliculas from './peliculas.json'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pelicula
      enlaceImdb={peliculas[0].enlaceImdb}
      afiche={peliculas[0].afiche}
      titulo={peliculas[0].titulo}
      sinopsis={peliculas[0].sinopsis}
      calificacion={peliculas[0].calificacion}
      votos={peliculas[0].votos}
    ></Pelicula>
    
  </React.StrictMode>,
)

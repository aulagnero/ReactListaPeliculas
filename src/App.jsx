import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(titulo) {


  return (
    <>
      
      <div>
        <a href="https://www.imdb.com/title/tt9362722" target="_blank">
          <img src="./afiches/spiderverse.jpg" className="logo" alt="Spider-Man a Través del Spider-Verso" />
        </a>
      </div>
      <div>
        <a href="https://www.imdb.com/title/tt9362722" target="_blank">
          <h2 className="logo">SPIDER-MAN: A TRAVÉS DEL SPIDER-VERSO</h2>
        </a>
      </div>

      <div className="card">
        <p>
          Miles Morales emprende una aventura a través
          del multiverso con Gwen Stacy y un nuevo equipo de la Spider People
          que deben enfrentar a un poderoso villano.
        </p>
      </div>
      <p className="read-the-docs">
        <b>Calificación: 8.9 </b> (Votos: 191.550)
      </p>
    </>
  )
}

export default App

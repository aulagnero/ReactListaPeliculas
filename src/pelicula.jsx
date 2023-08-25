import './index.css'

export function Pelicula({ enlaceImdb, afiche, titulo, sinopsis, calificacion, votos }){
    return(
        <section className="componente-pelicula">
            <aside>
                
                <a href={enlaceImdb} target="_blank">
                    <img src={afiche}/>
                </a>

            </aside>
            <section>
                <div>
                    <a href={enlaceImdb} target="_blank">
                    <h1>{titulo}</h1>
                    </a>
                </div>

                <div>
                    <h2>Sinopsis</h2>
                    <p>{sinopsis}</p>
                </div>
                <div>
                    <h3>Calificación: </h3>
                    <p><b>{calificacion}</b> (Votos: {votos})</p>
                    </div>
            </section>
        </section>

)
}
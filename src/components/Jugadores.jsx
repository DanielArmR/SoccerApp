import React from 'react'
import { connect } from 'react-redux'

const Jugadores = ({jugadores}) => (
    <section>
        <h1>Jugadores</h1>
        <div className="contenedor-jugadores">
            {
                jugadores.map(j => (
                    <article className="jugador">
                        <img src={j.foto} alt={j.nombre}/>
                        <h3>{j.nombre}</h3>
                        <div>
                            <button>Titular</button>
                            <button>Suplente</button>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    jugadores: state.jugadores
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores)
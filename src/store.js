import { createStore } from "redux"

const initialState ={
    jugadores: [{
        id: 1,
        nombre: "Isaac García",
        foto: "https://image.flaticon.com/icons/svg/2471/2471853.svg"
    },
    {
        id: 2,
        nombre: "Gabo Serrano",
        foto: "https://image.flaticon.com/icons/svg/2471/2471853.svg"
    },
    {
        id: 3,
        nombre: "Gordis Ángeles",
        foto: "https://image.flaticon.com/icons/svg/2471/2471853.svg"
    }],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action)  => {
    return state
}

export default createStore(reducerEntrenador)
/* eslint-disable react/prop-types */
import "./main.css"

export function Aside({ data }) {
    return (
        <main>
              <h1>Your car</h1>
              <p>Alimentación: {data.alimentación.name}</p>
              <p>Alimentación: {data.alimentación.precio}</p>
              <p>Hotel: {data.hotel.name}</p>
              <p>Hotel: {data.hotel.precio}</p>
              <p>Destino: {data.destino.name}</p>
              <p>Destino: {data.destino.precio}</p>

              </main>
    )
}
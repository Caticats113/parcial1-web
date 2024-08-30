/* eslint-disable react/prop-types */
import "./card.css"

export function Card({ category }) {
    return (
        <div>
            <img src={ category.imagen }/>
            <h3> { category.titulo || category.nombre }</h3>
            <p>Precio: ${ category.precio || category.costo }</p>
            { category.estrellas && <p>Estrellas: {category.estrellas}</p> }
            { category.ubicacion && <p>Ubicacion: {category.ubicacion}</p> }
            { category.servicios && <p>Servicios: {category.servicios.join(", ")}</p> }
        </div>
    )
}
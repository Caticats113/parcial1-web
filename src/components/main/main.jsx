/* eslint-disable react/prop-types */
import "./main.css"
import { Categories12 } from "../export"

export function Main({ data }) {
    return (
        <main>
              <h1>Título</h1>
            <Categories12 category={data.alimentacion} name={Object.keys(data)[0]} />
            <Categories12 category={data.hoteles} name={Object.keys(data)[1]} />
            <Categories12 category={Object.values(data.destinosdla)} name={Object.keys(data)[2]} />
        </main>
    )
}
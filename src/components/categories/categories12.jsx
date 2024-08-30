/* eslint-disable react/prop-types */
import "./categories12.css"
import { Card } from "../Card/card"

export function Categories12({ category, name }) {
    console.log(category)
    return (
        <div className="category">
            <h2>{name}</h2>
            <section className="cards">
                {category.map((ca) => {
                    // eslint-disable-next-line react/jsx-key
                    return <Card category={ca}/>
                })}
            </section>
        </div>
    )
}
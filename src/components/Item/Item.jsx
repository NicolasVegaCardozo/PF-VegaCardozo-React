import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, nombre, precio, img, stock}) => {
    return (
        <div className="cardProducto">
            <img className="imgProducto" src={img} alt={nombre}/>
            <p className="nombre">{nombre}</p>
            <p> Precio: ${precio} </p>
            <p> ID: {id} </p>
            <p> Stock: {stock} </p>
            <Link to={`/item/${id}`}>  <button className="btnProducto"> Ver Producto </button></Link>
        </div>
    )
}

export default Item
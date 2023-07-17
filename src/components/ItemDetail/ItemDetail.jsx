import './ItemDetail.css'
import { useState } from 'react';
import { Link } from "react-router-dom"
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { agregarProducto } = useContext(CartContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        console.log("Productos agregados: " + cantidad);

        const item = { id, nombre, precio };
        agregarProducto(item, cantidad);
    }

    return (
        <div className='contenedorItem'>
            <h2> {nombre}</h2>
            <h3>Precio: $ {precio}</h3>
            <h3>ID: {id}</h3>
            <p> {descripcion} </p>
            <img src={img} alt={nombre} />
            {
                agregarCantidad > 0 ? (
                    <>
                        <Link to="/cart" className='btnProducto'> Terminar Compra </Link>
                        <Link to="/" className='btnProducto'> Seguir comprando </Link>
                    </>
                ) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }


        </div>
    );
};

export default ItemDetail;

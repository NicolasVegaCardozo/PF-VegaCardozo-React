import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css"

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CartContext);
    
    if(cantidadTotal === 0){
        return(
            <>
            <div className="contenedorItem">
            <h2>No hay productos en el carrito</h2>
            <Link to="/" className="btnProducto"> Ver Productos </Link>
            </div>
            </>    
        )        
    }


    return (
        <div className="contenedorItem">
            {carrito.map(producto => <CartItem key={producto.id} {...producto}/>)}
            <h3> Total: $ {total} </h3>
            <h3> Cantidad total: {cantidadTotal} </h3>
            <button onClick={() => vaciarCarrito()} className="btnProducto"> Vaciar Carrito </button>
            <Link to="/checkout" className="btnProducto"> Finalizar compra </Link>
        </div>
    )
}

export default Cart
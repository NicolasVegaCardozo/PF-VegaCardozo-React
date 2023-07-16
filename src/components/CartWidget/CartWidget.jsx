import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
    const { cantidadTotal } = useContext(CartContext)
    const imgCarrito = "https://thumbs.dreamstime.com/b/icono-de-las-compras-del-carro-la-compra-en-fondo-oscuro-116659167.jpg";
    
    return (
        <div>
            <Link to="/cart" className='contador'>
                <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
                {
                    cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
                }
            </Link>
        </div>
    )
}

export default CartWidget
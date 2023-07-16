import React from 'react'
import { useState } from 'react'

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);


    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div>
                <button onClick={decrementar} className='btnProducto'> - </button>
                <h2> {contador} </h2>
                <button onClick={incrementar} className='btnProducto'> + </button>
            </div>
            <button onClick={() => funcionAgregar(contador)} className='btnProducto'> Agregar al Carrito </button>
        </>
    )
}



export default ItemCount
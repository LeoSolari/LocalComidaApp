import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import useKiosco from '../hooks/useKiosco'
import { formatearDinero } from '../helpers'

const MoldalProducto = () => {

    const {producto, handleChangeModal, handleAgregarPedido, pedido} = useKiosco()
    const [cantidad, setCantidad] = useState(1)
    const [edicion, setEdicion] = useState(false)

    useEffect(() => {
        if(pedido.some((pedidoState) => pedidoState.id === producto.id)){
            
            const productoEdicion = pedido.find((pedidoState) => pedidoState.id === producto.id)

            setEdicion(true)
            setCantidad(productoEdicion.cantidad)
        }
    }, [producto, pedido])

  return (
    <div className='md:flex gap-10'>
        <div className='md:w-1/3'>
            <Image 
                width={300}
                height={400}
                alt={`Imagen producto ${producto.imagen}`}
                src={`/assets/img/${producto.imagen}.jpg`}
            />
        </div>
        <div className='md:w-2/3'>
            <div className='flex justify-end'>
                <button 
                    onClick={handleChangeModal}
                >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </button>
            </div>
            <h1 className='text-3xl font-bold mt-5'>
                {producto.nombre}
            </h1>
            <p className='font-black mt-5 text-5xl text-amber-500'>
                {formatearDinero(producto.precio)}
            </p>
            <div className='flex gap-4 mt-5'>
                <button
                    type='button'
                    onClick={() => {
                        if(cantidad <= 1) return
                        setCantidad(cantidad - 1)
                    }}
                >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </button>
                <p className='text-3xl'>{cantidad}</p>
                <button
                    type='button'
                    onClick={() => {
                        if(cantidad >= 5) return
                        setCantidad(cantidad + 1)
                    }}
                >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </button>
            </div>
            <button
                type='button'
                className='bg-blue-700 hover:bg-blue-900 text-white rounded mt-5 p-3 uppercase font-bold'
                onClick={() => handleAgregarPedido({...producto, cantidad})}
            >
                {edicion ? 'Guardar Cambios' : 'Añadir al pedido'}
            </button>
        </div>
    </div>
  )
}

export default MoldalProducto
import React from 'react'
import Image from 'next/image'
import { formatearDinero } from '../helpers'
import useKiosco from '../hooks/useKiosco'

const ResumenProducto = ({producto}) => {

    const {handleEditarCantidad,handleEliminarProducto} = useKiosco()

  return (
    <div className='shadow p-5 mb-3 flex gap-10 items-center'>
        <div className='md:w-1/6'>
            <Image 
                width={300}
                height={400}
                alt={`Imagen ${producto.nombre}`}
                src={`/assets/img/${producto.imagen}.jpg`}
            />
        </div>
        <div className='md:w-4/6'>
            <p className='text-3xl font-bold'>{producto.nombre}</p>
            <p className='text-xl font-bold mt-2'>Cantidad : {producto.cantidad}</p>
            <p className='text-xl font-bold text-amber-600 mt-2'>Precio : ${producto.precio}</p>
            <p className='text-sm font-bold mt-2'>SubTotal : {formatearDinero(producto.precio * producto.cantidad)}</p>
        </div>
        <div className=''>
            <button 
                onClick={() => handleEditarCantidad(producto.id)}
                type='button'
                className='bg-sky-700 flex px-5 py-2 gap-2
                 text-white rounded-md font-bold uppercase shadow-md 
                 w-full lg:w-auto text-center hover:bg-sky-900'
            >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                Editar
            </button>
            <button 
                onClick={() => handleEliminarProducto(producto.id)}
                type='button'
                className='bg-red-700 flex px-5 py-2 gap-2
                text-white rounded-md font-bold uppercase 
                shadow-md w-full text-center mt-3 hover:bg-red-900'
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default ResumenProducto
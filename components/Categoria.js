import React from 'react'
import Image from 'next/image'
import useKiosco from '../hooks/useKiosco'

const Categoria = ({categoria}) => {

    const {categoriaActual, handleClickCategoria} = useKiosco()

    const {nombre, icono, id} = categoria
    
  return (
    <div className={`${categoriaActual?.id === id ? 'bg-amber-400' : ''}
     items-center gap-4 w-full border p-5 hover:bg-amber-400`}> 
        <Image 
        alt='Imagen Icono'
        width={70}
        height={70}
        src={`/assets/img/icono_${icono}.svg`}
        />
        <button
            type='button'
            className='text-2xl font-bold hover:cursor-pointer'
            onClick={() => handleClickCategoria(id)}
        >
            {nombre}
        </button>
    </div>
  )
}

export default Categoria
export const formatearDinero = cantidad => {
    return cantidad.toLocaleString('es-AR', {
        style: 'currency',
        currency:'ARS'
    })
}

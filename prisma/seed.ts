import {categorias} from './data/categorias'
import {productos} from './data/productos'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const main = async () : Promise<void> => {
    try {
        await prisma.categoria.deleteMany({
        
        })
        await prisma.producto.deleteMany()
    } catch (error) {
        console.log(error)
    }
}
main()
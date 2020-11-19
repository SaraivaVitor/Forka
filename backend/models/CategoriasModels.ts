import db from '../DataBase/connection'

interface Categorias{
    categoria: string
}

export class CategoriasModels {
   
    async BuscarCategorias(){
        return await db.select('*').from<Categorias>('CATEGORIAS')
    }

}
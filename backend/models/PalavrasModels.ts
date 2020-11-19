import db from '../DataBase/connection';
interface Dados{
    categoria: string
    palavras: string[]
}

export class PalavrasModels{



    public async CadastrarPalavras(palavras:Array<String>, categoria:String){

        const id = await db.table('CATEGORIAS').insert({categoria: categoria})
        
        palavras.forEach(async palavra => {
            
            await db.table('PALAVRAS_CATEGORIAS').insert({id_categoria: id, palavras:palavra})

        });
        
    } 
    public async GerarLista(){

        const id = await db.table('CATEGORIAS').select('ID')
        const random = Math.floor(Math.random() * id.length)
        
        const ListaCategoria = await db.table('CATEGORIAS').select('categoria as categoria').where({ID:id[random].ID})
        const ListaPalavras = await db.table('CATEGORIAS').select('PALAVRAS_CATEGORIAS.PALAVRAS').leftJoin('PALAVRAS_CATEGORIAS','ID','ID_CATEGORIA').where({ID:id[random].ID})
        
        const palavras = ListaPalavras.map(palavras =>{return (palavras.PALAVRAS)});
        const categoria = ListaCategoria.map(categoria =>{return (categoria.categoria)});

        return  {palavras,categoria}
        
        
    }
}
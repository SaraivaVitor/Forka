import db from '../DataBase/connection';

export class JogadorController{

   private nome: string;
   private pontuacao: number 

    constructor(props: JogadorController) {
        this.nome = props.nome;
        this.pontuacao = props.pontuacao
    }
 
    async Salvar(props: JogadorController){
       await db.table('JOGADORES').insert(props)    
    }
    
}

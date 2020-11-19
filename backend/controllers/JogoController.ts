import { count } from 'console';
import db from '../DataBase/connection'
import {CategoriasModels} from '../models/CategoriasModels'

interface Palavras  {
    palavras: string[]
    categoria: string
}

export class JogoController{
        
    public palavras: string[]
    public categoria: string;
    public caracteres: Array<String[]>
    public campos: Array<String[]>
    public camposAntigos: String
    public errors: number
    public acertos: number
    public totalPalavras: number

    constructor(palavra: Palavras){

       this.caracteres = palavra.palavras.map(palavra=>{return(palavra.split(''))})

       this.campos = this.caracteres.map((caracteres,index)=>{     
        return caracteres.map(campos=>{return '_'})            
       })   
      
      this.camposAntigos =  JSON.stringify(this.campos)
      this.palavras = palavra.palavras
      this.categoria = palavra.categoria
      this.errors = 0
      this.acertos = 0 
      this.totalPalavras = 0
      
    }
    /**
     * Chutar
     */
    public Chutar(Letra: string) {
        
        this.camposAntigos = JSON.stringify(this.campos)
       
        this.caracteres.forEach((caracteres,indexInicial)=>{   
                    
            this.caracteres[indexInicial].forEach((caracteres,index) =>{
                
                if (caracteres === Letra) {
                    this.campos[indexInicial].splice(index,1,Letra)
                } 

                this.totalPalavras = this.totalPalavras + 1
            })
                       
        }) 

        if (JSON.stringify(this.campos) == this.camposAntigos) {
           
            this.camposAntigos = JSON.stringify(this.campos) 
                                    
            this.errors = this.errors + 1

        } else {
            this.acertos = this.acertos + 1
        }
        
        if (JSON.stringify(this.caracteres) == JSON.stringify(this.campos)){
           return this.Win()
           
        } else if(this.errors > 5){

           return this.GameOver()
        
        }else{

            return {
                campos: this.campos,
                pontuacao:{
                    acertos: this.acertos,
                    erros: this.errors
                }
            }

        }
    }
    private GameOver(){
        return {
            campos: this.campos,
            pontuacao:{
                mensagem: "GameOver",
                acertos: this.acertos,
                erros: this.errors
            }
        }
    }
    private Win(){
        return {
            campos: this.campos,
            pontuacao:{
                mensagem: "Win",
                acertos: this.acertos,
                erros: this.errors
            }
        }
    }

}


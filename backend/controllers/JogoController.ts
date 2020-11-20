import { count } from 'console';
import db from '../DataBase/connection'
import {CategoriasModels} from '../models/CategoriasModels'

interface Palavras  {
    palavras: string[];
    categoria: string
}

export class JogoController{
        
    public palavras: string[]
    public categoria: string;
    public caracteres: String[]
    public campos: String[]
    public camposAntigos: String
    public errors: number
    public acertos: number
    public totalPalavras: number

    constructor(palavra: Palavras){

        const random = Math.floor(Math.random() * palavra.palavras.length)

        this.caracteres = palavra.palavras[random].split('')
 
        this.campos = this.caracteres.map((caracteres)=>{     
         return '_'})            
        
      
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
                    
                
            if (caracteres === Letra) {
                this.campos.splice(indexInicial,1,Letra)
            } 
                this.totalPalavras = this.totalPalavras + 1
            })
                       
        if (JSON.stringify(this.campos) == this.camposAntigos) {
           
            this.camposAntigos = JSON.stringify(this.campos) 
                                    
            this.errors = this.errors + 1

        } else {
            this.acertos = this.acertos + 1
        }
        
        if (this.errors > 5) {
           return this.GameOver()
        } else if(JSON.stringify(this.caracteres) == JSON.stringify(this.campos)){
           return this.Win()
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
    public GameOver(){
        return {
            campos: this.campos,
            pontuacao:{
                mensagem: "GameOver",
                acertos: this.acertos,
                erros: this.errors
            }
        }
    }
    public Win(){
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

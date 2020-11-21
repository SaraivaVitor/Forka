export class JogoController{
    public caracteres: String[]
    public campos: String[]
    public camposAntigos: String
    public errors: number
    public acertos: number
    public totalPalavras: number

    //Constructor do jogo 
    constructor(palavras: String){

        //Instaciando os objetos
        this.caracteres = palavras.split('')
        this.campos = this.caracteres.map((caracteres)=>{              return '_'})            
        this.camposAntigos =  JSON.stringify(this.campos)
        this.errors = 0
        this.acertos = 0 
        this.totalPalavras = 0
        
    }
    /**
     * Chutar
     */
    //Metodo responsavel por realizar as tentaticas do usuário("os chutes")
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
                                    
            this.errors = this.errors + 1 //incrementando os erros

        } else {
            this.acertos = this.acertos + 1 //Incrementando os acertos
        }
        
        if (this.errors > 5) { //Se o usuario errar + que 5 vezes, ele perde
           return this.GameOver()
        } else if(JSON.stringify(this.caracteres) == JSON.stringify(this.campos)){
           return this.Win() //Se ele ganhar, instanciamos o objeto WIN
        }else{



        return { //Retorno do objeto contendo a pontuação, e os campos para renderizar na tela
            campos: this.campos,
            pontuacao:{
                acertos: this.acertos,
                erros: this.errors
            }
        }
    }

        
    }

    //Métodos responsáveis por criar a vitória ou a derrota do usuário
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

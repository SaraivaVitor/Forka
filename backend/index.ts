const data = {
  palavras: ["alemanha","brasil","uruguai","colombia"],
  categoria: "paises"
}

const random = Math.floor(Math.random() * data.palavras.length)

const palavra = data.palavras[random]

export default palavra

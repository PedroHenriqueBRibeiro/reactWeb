console.log("Hello world")

//Tipos de variáveis
let nome = "João" //string
let idade = 32 //number
let dev = true //boolean
let ehRico = null;
let naoDefinido; //undefined

//Tipo por referência
const hobbies = ['Esporte', 'Trilha']
const hobbies2 = hobbies.map((item)=>{
  return {"hobb": item}
})
console.log(hobbies2)
// for (hobbi of hobbies){
//   console.log(hobbi)
// }



//Tipos de funções

function minhaFunc(){}

const myFunc = function(){
  console.log("Função anônima")
}

const myFunc2 = ()=>{
  console.log("Função anônima")
}

const myFunc3 = ()=> {console.log("Função anônima")}

//Spread e Rest Operator

const hobbiesCopia = hobbies.slice()
const hobbiesCopia2 = [...hobbies]

function toArray(arg1, arg2, arg3){
  return[arg1, arg2, arg3]
}

function toArray2(...args){
  return args
}

console.log(toArray2(1, 2, 3, 4, 5))
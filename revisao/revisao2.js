// const fetchData = () => {
//   const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=> {
//       console.log("Dentro do setTimeout")
//     }, 1000) 
    
//   })
// }
// fetchData();
// console.log("Olá")
// console.log("Hello")



fetch("https://api.thecatapi.com/v1/images/search")
.then (response => response.json())
.then (data => console.log(data))

console.log("Depois do .then:")

//async await
const requestAsync = async () => {
  try{
    const response = await fetch("https://api.thecatapi.com/v1/images/search")
    const dados = await response.json()
    console.log(dados)
} catch(err){
  console.log("Erro na requisição. ", err)
}
}
requestAsync()
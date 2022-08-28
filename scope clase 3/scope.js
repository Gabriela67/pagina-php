let a = 80 
const mostrar = x =>{

   
    return function(){
        return function(){
            console.log(a)
    }
}
}
mostrar()();// estructura iife para encapsular codigo



///////crar un scope de 3 niveles 

/*
let b = 50

 const mostrar2 = x =>{
     let b = 55
    
     const mostrar3 =x =>{
        let b = 22
     }
     mostrar3(b)
     console.log(b)

 }
 mostrar2(b)

  console.log(b)
*/
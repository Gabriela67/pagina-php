const calculadora = (() => {
    const add = (a,b) => a + b ;
    const sub = (a,b) => a - b ;
    const mul = (a,b) =>a * b ;
    const div = (a,b) => a / b ;

    // las funciones  de arriba estan en modo privado
    // las funciones que tienen un return quiere decir que estan en modo publico 
    // ejemplo 

/*
const comprarBoleto = (funtion(){

    //privado 

    let evento = "conferencia"

    //publico 

    return{

    mostrarBoleto: function(){
        console.log(evento)
    }

        }




})(); tipo de funcion ife que se llama asi sola


comprarBoletp.mostrarBoleto();






*/
    return{
        add,
        sub,
        mul,
        div,
    };

})();


console.log(calculadora.add(3,5));
console.log(calculadora.sub(6,2));
console.log(calculadora.add(3,2));
console.log(calculadora.div(6,2));
console.log(calculadora.mul(7,7));



////ESTRUCTURA DEL MODULO PATROM  CON IIFEE




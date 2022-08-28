const FactoryFunction = (String) => {
  const capitalizeString = () => String.toUpperCase(); //El toUpperCase() método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
  const printString = () => console.log(`--${capitalizeString()}---`);
  return { printString };
  
 
};



const MostrarSaludo = (String) => {

    const hola = () => String.toUpperCase(); //El toUpperCase() método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
    const mostrar= () => console.log(`--${hola()}---`);
    return { mostrar };
    

};



//printString();
//capitalizeString();
//carrera.capitalizeString();
const carrera = FactoryFunction("sistemas informaticos");
const gaby = MostrarSaludo("gaby hermosa");

carrera.printString();
gaby.mostrar();



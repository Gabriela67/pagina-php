///factorypattern 
0

const personFactory = (nombre,edad) => {

    const saludar  = () => console.log("hola?");
    return{nombre,edad,saludar};
};

const gabriela = personFactory ('Gabriela',27);

console.log(personFactory());
gabriela.saludar();



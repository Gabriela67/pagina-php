const person = (name) => {
    const shomName = () => console.log(`my name es ${name}`)
     return{shomName}
}


const Student = (name , carrera)  => {
    const prototype = person (name);
    const doSomething = () => console.log(`Studem this ${carrera} `)
    return Object.assign({}, prototype , {doSomething  })

}
const student = Student('julio',"sistemas imformaticos");
student.shomName();
student.doSomething();

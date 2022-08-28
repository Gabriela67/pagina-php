const player = (name ,level) =>{
    let health = level * 2;
    const getLevel = () => level ;
    const getName = () => name ;
    const die = () => {

        //mostrar algo
    }


const damage = x => {
    health -= x ;
    if (health <= 0) {
        die();
        
    }
}
const attack = enemy => {
    if (level < enemy.getLevel()) {
        damage(1);
        console.log(`${enemy.getName()} has demaged ${name}`)        
    }
    if(level >= enemy.getLevel()){
        enemy.damage(1);
        console.log(`${name} has demaged ${enemy.getName}`)
    }
};

return {attack, damage , getLevel , getName}
};

const diego = player('Diego', 3);
const enemigo = player ('gaby',5);
diego.attack(enemigo);
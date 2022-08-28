const counterCreator = () => {

    let count = 0 ;
    return () => {
        console.log(count);
        count++;
    };
};

const counter = counterCreator();

counter();
counter();



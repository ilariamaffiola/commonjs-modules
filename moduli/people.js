const fullName = require('./names');
const hobbies = require('./hobbies');
function people (){
    let objPeople = {
        nome: fullName('ilaria', 'maffiola'),
        hobbies: hobbies('gaming', 'podcast', 'reading'),
    };
    return objPeople;
}
console.log(people());
function person(firstName, lastName, gender) {
    if (gender === 'male') {
        console.log('Mr. ' + firstName + ' ' + lastName);
    }
    else if (gender === 'female') {
        console.log('Ms. ' + firstName + ' ' + lastName);
    }
}
person('Najmus', 'Sakib', 'male');

// ==========================================

function personInfo() {

    return {
        name: 'Sakib',
        skill: ['C', 'Java', 'Javascript', 'Php', 'Python'],
        print: function () {
            console.log(this.name, this.skill);
        }
    }

}
const personBio = personInfo();
console.log(personBio);
personBio.print();



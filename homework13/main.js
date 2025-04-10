const self = {
    name: 'Egor',
    age: '19',
    isStudent: true,
    city: 'Saint-Petersburg',
    country: 'Russia',
    sayHello(name) {
        return `Hello ${name}`;
    }
}

const users = [
    {
        name: 'alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'john',
        age: 25,
        isAdmin: true
    },
    {
        name: 'ivan',
        age: 39,
        isAdmin: false
    },
    {
        name: 'vova',
        age: 99,
        isAdmin: false
    }
]

let simpleUser = 0;

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin == false) {
        simpleUser++;
    }
}

console.log(simpleUser);
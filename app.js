const data = require('./data');

'use strict'
// pour enlever le chemin du Node + chemin de app.js 
const args = process.argv.slice(2);

function isEmpty(arr) {
    return (Array.isArray(arr) && arr.length)
}

// This function filters out every animal that does not match the string pattern
const removeNonMatching = (searchedStr, person) => {
    return person.animals.map((animal) => {
        if (animal.name.includes(searchedStr)) {
            return animal;
        }
    }).filter(e => e)
}

const filter = (searchedStr) => {
    const newList = data.filter(q => {
        let newCountry = q
        newCountry.people = q.people.filter(p => {
            let newPerson = p
            newPerson.animals = removeNonMatching(searchedStr, p)

            // The 'animals' entry will be removed if there is nothing left inside
            return isEmpty(newPerson.animals)
        })

        // The 'people' entry will be removed if there is nothing left inside
        return (isEmpty(newCountry.people))
    });

    // prints out the filtered list if there is any match
    // enlever le null + le 3 sinon ça fait échoué les test
    console.log((!isEmpty(newList)) ? 'Nothing found' : JSON.stringify(newList, null, 3))
    return (!isEmpty(newList)) ? 'Nothing found' : JSON.stringify(newList, null, 3)
}

const count = () => {
    const newList = data.map((country) => {
        country.people.map((person) => {
            person.name = `${person.name} [${person.animals.length}]`
            return person
        })
        country.name = `${country.name} [${country.people.length}]`
        return country
    })
    // enlever le null + le 3 sinon ça fait échoué les test
    console.log(JSON.stringify(newList, null, 3))
    return JSON.stringify(newList, null, 3)
}

// USAGE: node app.js --filter=[PATTERN] OR node app.js filter=[PATTERN]
// USAGE: node app.js --count OR node app.js count

try {
    const cmd = args[0].split("=");
    console.log(cmd);
    console.log(args);
    if (cmd[0] === '--filter' || cmd[0] === 'filter') {
        if (args.includes('--count') || args.includes('count')) {
            count(filter(cmd[1]));
            console.log(args);
        } else {
            filter(cmd[1]);
            console.log(args)
        }
    } else if (cmd[0] === '--count' || cmd[0] === 'count') {
        // if (args.includes('--filter') || args.includes('filter')) {
        //     const cmd = args[2].split("=")
        //     count(filter(cmd[3]));
        //     console.log(cmd);

        // } else {
        count();
        // console.log(cmd)
        // console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////")
        // console.log(cmd[1]);
        // console.log(args);
        // }
    } else {
        console.log('Wrong arguments');
    }
} catch (err) {
    throw err;
}



module.exports = {
    count,
    filter
}
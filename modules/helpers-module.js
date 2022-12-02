const process = require('process');

function isEmpty(arr) {
    return !!(Array.isArray(arr) && arr.length);
}

// This function filters out every animal that does not match the string pattern
function removeNonMatching(searchedStr, person) {
    return person.animals.map((animal) => {
        if (animal.name.includes(searchedStr)) {
            return animal;
        }
    }).filter(e => e)
}

// Display formatted json object
function displayConsole(data, space = 2) {
    console.log(JSON.stringify(data, null, space))
}


function getArgsValue() {
    const args = process.argv;

    if (args.length < 3 || args.length > 4) {
        throw new Error('Wrong arguments number');
    }

    return args.slice(2);
}

module.exports = {
    isEmpty,
    removeNonMatching,
    displayConsole,
    getArgsValue
}

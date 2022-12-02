const {filterData} = require("./src/filter-data");
const data = JSON.parse(JSON.stringify(require('./data')));

'use strict'

const args = process.argv

const count = () => {
    const newList = data.map((country) => {
        country.people.map((person) => {
            person.name = `${person.name} [${person.animals.length}]`
            return person
        })
        country.name = `${country.name} [${country.people.length}]`
        return country
    })
    console.log(JSON.stringify(newList))
    return JSON.stringify(newList)
}

// USAGE: node app.js --filter=[PATTERN] OR node app.js filter=[PATTERN]
// USAGE: node app.js --count OR node app.js count

try {
    const cmd = args[2].split("=");
    if (cmd[0] === '--filter' || cmd[0] === 'filter') {
        const dataFiltred = filterData(cmd[1], data);
        console.dir(!dataFiltred.length ? 'Nothing found' : dataFiltred, {
            depth: null
        })
    } else if (cmd[0] === '--count' || cmd[0] === 'count') {
        count()
    } else {
        console.log('Wrong arguments')
    }
} catch (err) {
    throw err
}


module.exports = {
    count
}

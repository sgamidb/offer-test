const {filterData} = require("./src/filter-data");
const {addNumberOfSubCategoriesToParentName} = require("./src/add-count-sub-categories-to-parent");
const data = JSON.parse(JSON.stringify(require('./data/data')));

'use strict'

const args = process.argv

try {
    const cmd = args[2].split("=");
    const cmd2 = args[3].split("=");
    let dataFiltred;
    if (cmd[0] === '--filter' || cmd[0] === 'filter') {
        dataFiltred = filterData(cmd[1], data);
        console.dir(!dataFiltred.length ? 'Nothing found' : dataFiltred, {
            depth: null
        })
    }
    if (cmd2[0] === '--count' || cmd2[0] === 'count') {
        const dataWithcount = addNumberOfSubCategoriesToParentName(dataFiltred);
        console.dir(!dataWithcount.length ? 'Nothing found' : dataWithcount, {
            depth: null
        })
    } else {
        console.log('Wrong arguments')
    }
} catch (err) {
    throw err
}

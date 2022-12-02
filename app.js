'use strict'
let output = JSON.parse(JSON.stringify(require('./data/data')));
const {filterData} = require("./src/filter-data");
const {addNumberOfSubCategoriesToParentName} = require("./src/add-count-sub-categories-to-parent");
const {getInputArguments} = require("./src/input-arguments");

const userArguments = process.argv.splice(2);

const {filter, count} = getInputArguments(userArguments);

if (filter) {
    output = filterData(filter, output)
}

if (count) {
    output = addNumberOfSubCategoriesToParentName(output);
}

console.dir(output, {
    depth: null
})

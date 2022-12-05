const inMemoryData = require('./../databases/in-memory-data')

function AnimalsAdapter() {
    function getAllAnimalsInMemory() {
        return JSON.parse(JSON.stringify(inMemoryData));
    }

    return {
        getAllAnimalsInMemory
    };
}

module.exports = AnimalsAdapter

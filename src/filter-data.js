const EMPTY_ARRAY = [];

function filterData(filter, data = [],) {
    return reduceCountries(data, filter)
}

function reduceCountries(data, filter) {
    return data.reduce((accumulator, currentValue) => {
        const reducedPeople = reducePeople(currentValue, filter);

        return reducedPeople.length ? accumulator.concat({
            name: currentValue.name,
            people: reducedPeople
        }) : accumulator;

    }, EMPTY_ARRAY);
}

function reducePeople(currentValue, filter) {
    return currentValue.people.reduce((accumulator, currentValue) => {
        const filteredAnimals = currentValue.animals.filter(animal => animal.name.includes(filter));
        if (filteredAnimals.length) {
            return accumulator.concat({
                name: currentValue.name,
                animals: filteredAnimals
            });
        }
        return accumulator
    }, EMPTY_ARRAY);
}

exports.filterData = filterData
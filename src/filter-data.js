const EMPTY_ARRAY = [];

function filterData(filter, data = [],) {
    return data.reduce((accumulator, currentValue) => {
        const reducedPeople = currentValue.people.reduce((accumulator, currentValue) => {
            const filteredAnimals = currentValue.animals.filter(animal => animal.name.includes(filter));
            if (filteredAnimals.length) {
                return accumulator.concat({
                    name: currentValue.name,
                    animals: filteredAnimals
                });
            }
            return accumulator
        }, EMPTY_ARRAY);

        return reducedPeople.length ? accumulator.concat({
            name: currentValue.name,
            people: reducedPeople
        }) : accumulator;

    }, EMPTY_ARRAY)
}

exports.filterData = filterData
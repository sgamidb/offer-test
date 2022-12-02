function addNumberOfSubCategoriesToParentName(data) {
    return addNumberOfPeopleToCountryName(data)
}

function addNumberOfPeopleToCountryName(data) {
    return data.map(country => {
        addNumebrOfAnimalsToPeopleName(country);
        country.name = `${country.name} [${country.people.length}]`
        return {...country}
    });
}

function addNumebrOfAnimalsToPeopleName(country) {
    country.people.map(person => {
        person.name = `${person.name} [${person.animals.length}]`
        return {...person}
    })
}

exports.addNumberOfSubCategoriesToParentName = addNumberOfSubCategoriesToParentName;
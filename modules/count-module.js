function count(countries) {
    const newList = countries.map((country) => {
        country.people.map((person) => {
            person.name = `${person.name} [${person.animals.length}]`;
            return person;
        })

        country.name = `${country.name} [${country.people.length}]`;
        return country;
    })

    return newList;
}

module.exports = {
    count
}

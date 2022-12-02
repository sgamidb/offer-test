const helpers = require('./helpers-module');

function filter(data, searchedStr) {
    if (!data || !Array.isArray(data)) {
        return 'Wrong argument';
    }

    const newList = data.filter(country => {
        let newCountry = country;

        newCountry.people = country.people.filter(person => {
            let newPerson = person;

            newPerson.animals = helpers.removeNonMatching(searchedStr, person);

            // The 'animals' entry will be removed if there is nothing left inside
            return helpers.isEmpty(newPerson.animals);
        })

        // The 'people' entry will be removed if there is nothing left inside
        return (helpers.isEmpty(newCountry.people));
    });

    // return the filtered list if there is any match
    return (!helpers.isEmpty(newList)) ? 'Nothing found' : newList;
}

module.exports = {
    filter
}

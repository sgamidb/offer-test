
const { isEmpty, removeNonMatching } = require('../../../common/utilities')


const filterAndCountAnimalsByNameUseCase = (searchedStr, animalsGateWay) => {
    const allAnimals = animalsGateWay.getAllAnimalsInMemory();

    const newList = allAnimals.filter(country => {
        let newCountry = country
        newCountry.people = country.people.filter(person => {
            let newPerson = person
            newPerson.animals = removeNonMatching(searchedStr, person.animals)
            newPerson.name = `${person.name} [${person.animals.length}]`

            // The 'animals' entry will be removed if there is nothing left inside
            return isEmpty(newPerson.animals)
        })
        newCountry.name = `${country.name} [${country.people.length}]`

        // The 'people' entry will be removed if there is nothing left inside
        return (isEmpty(newCountry.people))
    });

    const isNewListEmpty = isEmpty(newList);
    const newListAsJSON = JSON.stringify(newList);
    // prints out the filtered list if there is any match
    console.log((!isNewListEmpty) ? 'Nothing found' : newListAsJSON)
    return (!isNewListEmpty) ? 'Nothing found' : newListAsJSON
}


module.exports = {
    filterAndCountAnimalsByNameUseCase
}

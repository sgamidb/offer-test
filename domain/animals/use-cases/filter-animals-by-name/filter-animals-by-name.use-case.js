
const { isEmpty, removeNonMatching } = require('../../../common/utilities')



const filterAnimalsByNameUseCase = (searchedStr, animalsGateWay) => {
    const allAnimals = Array.from(animalsGateWay.getAllAnimalsInMemory());
        const newList = allAnimals.filter(country => {
            let newCountry = country
            newCountry.people = country.people.filter(person => {
                let newPerson = person
                newPerson.animals = removeNonMatching(searchedStr, person.animals)

                // The 'animals' entry will be removed if there is nothing left inside
                return isEmpty(newPerson.animals)
            })

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
    filterAnimalsByNameUseCase
}

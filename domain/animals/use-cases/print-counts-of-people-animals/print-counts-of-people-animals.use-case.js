
const printCountsOfPeopleAndAnimalsUseCase = (animalsGateWay) => {
    const newList = animalsGateWay.getAllAnimalsInMemory().map((country) => {
        country.people.map((person) => {
            person.name = `${person.name} [${person.animals.length}]`
            return person
        })
        country.name = `${country.name} [${country.people.length}]`
        return country
    })
    console.log(JSON.stringify(newList))
    return JSON.stringify(newList)
}

module.exports = {
    printCountsOfPeopleAndAnimalsUseCase: printCountsOfPeopleAndAnimalsUseCase
}

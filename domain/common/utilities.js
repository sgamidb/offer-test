const isEmpty = (arr) => {
    return (Array.isArray(arr) && arr.length)
}

const removeNonMatching = (searchedStr, animals) => {
    return animals.filter((animal) => animal.name.includes(searchedStr))
}

module.exports = {
    isEmpty,
    removeNonMatching
}

const { filterAndCountAnimalsByNameUseCase } = require('./filter-and-count-animals-by-name.use-case');
const AnimalsAdapter  = require("../../../../infrastructure/animals/adapters/animals.adapter");

describe('filter animals by name use case', () => {
    const animalsGateWay = new AnimalsAdapter();

    it ('should be defined', () => {
        expect(filterAndCountAnimalsByNameUseCase).toBeDefined()
    })

    it('should show the animals matching with the ry string pattern', () => {
        const result = filterAndCountAnimalsByNameUseCase('ry', animalsGateWay);
        expect(result).toStrictEqual('[{"name":"Uzuzozne [1]","people":[{"name":"Lillie Abbott [1]","animals":[{"name":"John Dory"}]}]},{"name":"Satanwi [1]","people":[{"name":"Anthony Bruno [1]","animals":[{"name":"Oryx"}]}]}]');
    });

    it('should return Nothing found if the animals not matching with the notMatch string pattern', () => {
        const result = filterAndCountAnimalsByNameUseCase('notMatch', animalsGateWay);
        expect(result).toEqual('Nothing found');
    });


});

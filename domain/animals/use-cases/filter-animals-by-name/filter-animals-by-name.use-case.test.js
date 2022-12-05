const { filterAnimalsByNameUseCase } = require('./filter-animals-by-name.use-case');
const AnimalsAdapter  = require("../../../../infrastructure/animals/adapters/animals.adapter");

describe('filter animals by name use case', () => {
    const animalsGateWay = new AnimalsAdapter();

    it('should show the animals matching with the ry string pattern', () => {
        const result = filterAnimalsByNameUseCase('ry', animalsGateWay);
        expect(result).toStrictEqual('[{"name":"Uzuzozne","people":[{"name":"Lillie Abbott","animals":[{"name":"John Dory"}]}]},{"name":"Satanwi","people":[{"name":"Anthony Bruno","animals":[{"name":"Oryx"}]}]}]');
    });

    it('should return Nothing found if the animals not matching with the notMatch string pattern', () => {
        const result = filterAnimalsByNameUseCase('notMatch', animalsGateWay);
        expect(result).toEqual('Nothing found');
    });


});

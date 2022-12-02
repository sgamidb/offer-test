const {dataCounted, dataForTest} = require("./data-for-test");
const {addNumberOfSubCategoriesToParentName} = require("../src/add-count-sub-categories-to-parent");

describe('count test', () => {

    it('the name of the first country should be: Uzuzozne [1] ', () => {
        const data = [
            {
                "name": "Uzuzozne",
                "people": [
                    {
                        "name": "Lillie Abbott",
                        "animals": [
                            {
                                "name": "John Dory"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Satanwi",
                "people": [
                    {
                        "name": "Anthony Bruno",
                        "animals": [
                            {
                                "name": "Oryx"
                            }
                        ]
                    }
                ]
            }
        ];
        const result = addNumberOfSubCategoriesToParentName(data);
        expect(result[0].name).toEqual('Uzuzozne [1]');
    });

    it('the name of the first people of first country should be: Lillie Abbott [1] ', () => {
        const data = [
            {
                "name": "Uzuzozne",
                "people": [
                    {
                        "name": "Lillie Abbott",
                        "animals": [
                            {
                                "name": "John Dory"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Satanwi",
                "people": [
                    {
                        "name": "Anthony Bruno",
                        "animals": [
                            {
                                "name": "Oryx"
                            }
                        ]
                    }
                ]
            }
        ];
        const result = addNumberOfSubCategoriesToParentName(data);
        expect(result[0].people[0].name).toEqual('Lillie Abbott [1]');
    });

    it('should add number of peoples in name of country and number of animals in name of people ', () => {
        const result = addNumberOfSubCategoriesToParentName(dataForTest);
        expect(result).toEqual(dataCounted);
    })
});

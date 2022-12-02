const {dataForTest} = require('./data-for-test');
const {filterData} = require("../src/filter-data");

describe('filter test', () => {
    let dataTest;

    beforeEach(() => {
        dataTest =  JSON.parse(JSON.stringify(dataForTest));
    })

    it('should show the animals matching with the ry string pattern', () => {
        const actualResult = filterData('ry', dataTest);
        const expectedResult = [
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
        expect(actualResult).toEqual(expectedResult);
    });

    it('should show all items when filter is empty', () => {
        const actualResult = filterData('', dataTest);
        const expectedResult = dataTest;
        expect(actualResult).toEqual(expectedResult);
    });

    it('should show nothing', () => {
        const result = filterData('nooothing', dataTest);
        expect(result).toEqual([]);
    });
});

const { filter } = require('../modules/filter-module');
const mockedData = require('./mock-data/filter-mocked-data');

describe('filter-module', () => {
    describe('filter fn', () => {

        it('should be defined', () => {
            expect(filter).toBeDefined();
        })

        it('should return filtred data  ', () => {
            let expected = [...mockedData.filterMockedData][0];
            const data = filter(mockedData.filterMockedData, 'Anoa');
            expect(data).toEqual([expected]);
        })

        it('should return Nothing found if no match', () => {
            let expected = 'Nothing found';

            const data = filter(mockedData.filterMockedData, 'toto');
            expect(data).toEqual(expected);
        })

        it('should return Nothing found if array is empty', () => {
            let expected = 'Nothing found';

            const data = filter([], 'Anoa');
            expect(data).toEqual(expected);
        })

        it('should return Wrong argument if first arg is null', () => {
            let expected = 'Wrong argument';

            const data = filter(null, 'Anoa');
            expect(data).toEqual(expected);
        })

        it('should return Wrong argument if first arg is undefined', () => {
            let expected = 'Wrong argument';

            const data = filter(undefined, 'Anoa');
            expect(data).toEqual(expected);
        })

        it('should return Wrong argument if first arg is not an array', () => {
            let expected = 'Wrong argument';

            const data = filter('toto', 'Anoa');
            expect(data).toEqual(expected);
        })
    })
})

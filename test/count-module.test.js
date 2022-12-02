const { count } = require('../modules/count-module');
const mock = require('./mock-data/count-mocked-data');

describe('count-module', () => {
    describe('count fn', () => {

        it('should be defined', () => {
            expect(count).toBeDefined();
        })

        it('should count people for each country and animals for each people', () => {
            expect(count(mock.filtredInputData)).toEqual(mock.filtredOutputData);
        })

    })
})

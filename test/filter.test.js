process.argv = ['', '', 'nothing']
const {filter} = require('../app');
const data = require('../data');

describe('filter test', () => {
    let dataForTest;

    beforeEach(() => {
        dataForTest =  JSON.parse(JSON.stringify(data));
    })
    it('should show the animals matching with the ry string pattern', () => {
        const result = filter('ry', dataForTest);
        expect(result).toEqual('[{"name":"Uzuzozne","people":[{"name":"Lillie Abbott","animals":[{"name":"John Dory"}]}]},{"name":"Satanwi","people":[{"name":"Anthony Bruno","animals":[{"name":"Oryx"}]}]}]');
    });

    it('should show all items when filter is empty', () => {
        const result = filter('', dataForTest);
        expect(result).toEqual(JSON.stringify(dataForTest));
    });

    it('should show nothing', () => {
        const result = filter('nooothing', dataForTest);
        expect(result).toEqual('Nothing found');
    });
});

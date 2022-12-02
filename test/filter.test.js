process.argv = ['', '', 'filter=ry']
const {filter} = require('../app');

describe('filter test', () => {
    it('should show the animals matching with the ry string pattern', () => {
        const result = filter('ry');

        expect(result).toEqual('[{"name":"Uzuzozne","people":[{"name":"Lillie Abbott","animals":[{"name":"John Dory"}]}]},{"name":"Satanwi","people":[{"name":"Anthony Bruno","animals":[{"name":"Oryx"}]}]}]');
    });
});

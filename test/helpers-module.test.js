const helpers = require('../modules/helpers-module');

describe('helpers-module', () => {
    describe('isEmpty fn', () => {
        it('should be defined', () => {
            expect(helpers.isEmpty).toBeDefined();
        })

        it('should return false if arg is not an Array', () => {
            expect(helpers.isEmpty('str')).toEqual(false);
        })

        it('should return false if arg is an empty Array', () => {
            expect(helpers.isEmpty([])).toEqual(false);
        })

        it('should return true if arg is non empty Array', () => {
            expect(helpers.isEmpty(['a'])).toEqual(true);
        })
    })

    describe('removeNonMatching fn', () => {
        const input = {
            name: 'toto',
            animals: [
                { name: 'chat' },
                { name: 'oiseau' }
            ]
        };

        it('should be defined', () => {
            expect(helpers.removeNonMatching).toBeDefined();
        })

        it('should return animals array that matchs input pattern (partial)', () => {
            const expectedResult = [{ name: 'chat' }];

            expect(helpers.removeNonMatching('ha', input)).toEqual(expectedResult);
        })

        it('should return EMPTY animals array if pattern does not match', () => {
            const expectedResult = [];

            expect(helpers.removeNonMatching('zz', input)).toEqual(expectedResult);
        })

        it('should return animals array that matchs input pattern (complete name)', () => {
            const expectedResult = [{ name: 'oiseau' }];

            expect(helpers.removeNonMatching('oiseau', input)).toEqual(expectedResult);
        })
    })

    describe('displayConsole fn', () => {
        let spy;

        beforeEach(() => {
            jest.spyOn(console, 'log').mockReturnValue(null);
            spy = jest.spyOn(JSON, 'stringify');
        })

        it('should call stringify with right args', () => {
            const input = { 'toto': 'tata' };

            helpers.displayConsole(input)

            expect(spy).toHaveBeenCalledWith(input, null, 2)
        })

        it('should call stringify with right custom space arg', () => {
            const input = { 'toto': 'tata' };

            helpers.displayConsole(input, 4)

            expect(spy).toHaveBeenCalledWith(input, null, 4)
        })
    })

    describe('getArgsValue fn', () => {
        it('should be defined', () => {
            expect(helpers.getArgsValue).toBeDefined();
        })

        it('should return args array when process.argv size between 2 and 4 items', () => {
            process.argv = ['node', 'script', 'filter=toto', 'count'];

            const res = helpers.getArgsValue();

            expect(res).toEqual(['filter=toto', 'count']);
        })

        it('should throw error when argv is out of bound', () => {
            process.argv = ['node', 'script'];

            try {
                helpers.getArgsValue();
            } catch (error) {
                expect(error.message).toEqual('Wrong arguments number');
            }
        })
    })
})

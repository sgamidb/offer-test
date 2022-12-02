jest.mock('../modules/filter-module', () => ({
    filter: jest.fn().mockImplementation(() => { }),
}));
jest.mock('../modules/count-module', () => ({
    count: jest.fn().mockImplementation(() => { }),
}));
const { launch } = require('../modules/main-module');
const countModule = require('../modules/count-module');
const filterModule = require('../modules/filter-module');
const helpers = require('../modules/helpers-module');


describe('main-module', () => {
    describe('launch fn', () => {
        beforeEach(() => {
            jest.mock('../modules/filter-module', () => ({
                filter: jest.fn().mockImplementation(() => { }),
            }));
        })
        it('should be defined', () => {
            expect(launch).toBeDefined();
        })

        it('should call filter fn if first arg size is one and includes "filter" string', () => {
            const cmd = ['filter=toto'];
            const data = [{}];
            jest.spyOn(helpers, 'displayConsole').mockReturnValue(null);
            const spy = jest.spyOn(filterModule, 'filter').mockImplementation(() => { });

            launch(cmd, data);
            expect(spy).toHaveBeenCalledTimes(1);
        })

        it('should call filter with right arg fn if first arg size is one and includes "filter" string', () => {
            const cmd = ['filter=toto'];
            const data = [{}];
            jest.spyOn(helpers, 'displayConsole').mockReturnValue(null);
            const spy = jest.spyOn(filterModule, 'filter').mockImplementation(() => { });

            launch(cmd, data);
            expect(spy).toHaveBeenCalledWith(data, 'toto');
        })

        it('should call count fn if first arg size is one and includes "count" string', () => {
            const cmd = ['count'];
            const data = [{}];
            jest.spyOn(helpers, 'displayConsole').mockReturnValue(null);
            const spy = jest.spyOn(countModule, 'count').mockImplementation(() => { });

            launch(cmd, data);
            expect(spy).toHaveBeenCalledTimes(1);
        })

        it('should call count fn with right args if first arg size is one and includes "count" string', () => {
            const cmd = ['count'];
            const data = [{}];
            jest.spyOn(helpers, 'displayConsole').mockReturnValue(null);
            const spy = jest.spyOn(countModule, 'count').mockImplementation(() => { });

            launch(cmd, data);
            expect(spy).toHaveBeenCalledWith(data);
        })

        it('should throw error', () => {
            const cmd = ['fake-arg'];
            const data = [{}];
            //const spy = jest.spyOn(countModule, 'count').mockImplementation(() => { });
            try {
                launch(cmd, data);
            } catch (error) {
                expect(error.message).toBe('Wrong arguments');

            }
        })

        it('should set filterRequest to right value', () => {
            const cmd = ['filter=titi', 'count'];
            const data = [{}];
            jest.spyOn(helpers, 'displayConsole').mockReturnValue(null);
            const spy = jest.spyOn(filterModule, 'filter').mockImplementation(() => { });

            launch(cmd, data);
            expect(spy).toHaveBeenCalledWith(data, 'titi');
        })

        it('should throw error when args is invalid', () => {
            const cmd = ['filter=titi', 'fake-arg'];
            const data = [{}];
            try {
                launch(cmd, data);
            } catch (error) {
                expect(error.message).toBe('Wrong arguments');
            }
        })

    })
})

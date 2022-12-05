'use strict';

const CommandLineProcess = require('./command-line-process')

describe('command line process IT', () => {

    beforeEach(() => {
        jest.clearAllMocks();
        jest.resetAllMocks();
        jest.spyOn(console, 'log').mockImplementation(() => () => console.log());

    });

    it ('should be defined', () => {
        expect(CommandLineProcess).toBeDefined()
    })


    it('should have results when have filter & count args', () => {
        const args = ['node', 'node.js', '--count', '--filter=John Dory'];
        CommandLineProcess().execute(args);
        expect(console.log).toHaveBeenNthCalledWith(1,'[{"name":"Uzuzozne [1]","people":[{"name":"Lillie Abbott [1]","animals":[{"name":"John Dory"}]}]}]');
    })

    it('should have results when have filter args', () => {
        const args = ['node', 'node.js', '--filter=John'];
        CommandLineProcess().execute(args);
        expect(console.log).toHaveBeenNthCalledWith(1,'[{"name":"Uzuzozne","people":[{"name":"Lillie Abbott","animals":[{"name":"John Dory"}]}]}]');
    })


})

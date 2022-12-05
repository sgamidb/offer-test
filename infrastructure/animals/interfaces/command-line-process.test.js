'use strict';

const CommandLineProcess = require('./command-line-process')
const { filterAnimalsByNameUseCase } = require("../../../domain/animals/use-cases/filter-animals-by-name/filter-animals-by-name.use-case");
const { printCountsOfPeopleAndAnimalsUseCase } = require("../../../domain/animals/use-cases/print-counts-of-people-animals/print-counts-of-people-animals.use-case");
const {filterAndCountAnimalsByNameUseCase} = require("../../../domain/animals/use-cases/filter-and-count-animals-by-name/filter-and-count-animals-by-name.use-case");

jest.mock("../../../domain/animals/use-cases/filter-animals-by-name/filter-animals-by-name.use-case", () => {
    return {
        filterAnimalsByNameUseCase: jest.fn().mockImplementation(() => ''),
    };
});

jest.mock("../../../domain/animals/use-cases/print-counts-of-people-animals/print-counts-of-people-animals.use-case", () => {
    return {
        printCountsOfPeopleAndAnimalsUseCase: jest.fn().mockImplementation(() => ''),
    };
});

jest.mock("../../../domain/animals/use-cases/filter-and-count-animals-by-name/filter-and-count-animals-by-name.use-case", () => {
    return {
        filterAndCountAnimalsByNameUseCase: jest.fn().mockImplementation(() => ''),
    };
});


describe('command line process', () => {
    

    it ('should be defined', () => {
        expect(CommandLineProcess).toBeDefined()
    })

    it('should throw error if we have less than 3 agrs', () => {
        const args = ['fakeArg'];
        expect(() => CommandLineProcess().execute(args)).toThrowError('Missing arguments filter/--filter or count/--count')
    })

    it('should throw error if we have have more than 4 agrs', () => {
        const args = ['fakeArg', 'fakeArgs2', 'fakeArgs3', 'fakeArgs4', 'fakeArgs5'];
        expect(() => CommandLineProcess().execute(args)).toThrowError('Number of arguments more that 4 found')
    })

    it('should have error if we have wrong arguments', () => {
        const args = ['fakeArg', 'fakeArg1', 'fakeArg2'];
        expect(() => CommandLineProcess().execute(args)).toThrowError('Wrong arguments')
    })

    it('should have results when have filter args', () => {
        const args = ['node', 'node.js', '--filter=fake'];
        console.log = jest.fn();
        filterAnimalsByNameUseCase.mockImplementation(() => console.log('Nothing'))
        CommandLineProcess().execute(args)
        expect(console.log.mock.calls[0][0]).toBe('Nothing')
    })

    it('should have results when have count args', () => {
        const args = ['node', 'node.js', '--count'];
        console.log = jest.fn();
        printCountsOfPeopleAndAnimalsUseCase.mockImplementation(() => console.log('fake count'))
        CommandLineProcess().execute(args)
        expect(console.log.mock.calls[0][0]).toBe('fake count')
    })

    it('should have results when have filter & count args', () => {
        const args = ['node', 'node.js', '--count', '--filter=fake'];
        console.log = jest.fn();
        filterAndCountAnimalsByNameUseCase.mockImplementation(() => console.log('fake filter count'))
        CommandLineProcess().execute(args)
        expect(console.log.mock.calls[0][0]).toBe('fake filter count')
    })

    it('should have results when have count & filter args', () => {
        const args = ['node', 'node.js','--filter=fake', '--count'];
        console.log = jest.fn();
        filterAndCountAnimalsByNameUseCase.mockImplementation(() => console.log('fake filter count'))
        CommandLineProcess().execute(args)
        expect(console.log.mock.calls[0][0]).toBe('fake filter count')
    })

})

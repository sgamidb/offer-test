const {getInputArguments} = require("../src/input-arguments");

describe('test get user input arguments', () => {

    it('should return filter and count', () => {
        expect(getInputArguments(["--filter=ry", "--count"])).toEqual({count: true, filter: 'ry'});
        expect(getInputArguments(["filter=ry", "--count"])).toEqual({count: true, filter: 'ry'});
    });

    it('should return only filter', () => {
        expect(getInputArguments(["--filter=ry"])).toEqual({filter: 'ry'});
        expect(getInputArguments(["filter=ry"])).toEqual({filter: 'ry'});

    });

    it('should return only count', () => {
        expect(getInputArguments(["--count"])).toEqual({count: true});
        expect(getInputArguments(["count"])).toEqual({count: true});
    });
});

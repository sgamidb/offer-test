const AnimalsAdapter = require("../adapters/animals.adapter");
const {filterAnimalsByNameUseCase} = require("../../../domain/animals/use-cases/filter-animals-by-name/filter-animals-by-name.use-case");
const {printCountsOfPeopleAndAnimalsUseCase} = require("../../../domain/animals/use-cases/print-counts-of-people-animals/print-counts-of-people-animals.use-case");
const {filterAndCountAnimalsByNameUseCase} = require("../../../domain/animals/use-cases/filter-and-count-animals-by-name/filter-and-count-animals-by-name.use-case");

function CommandLineProcess() {

    function isFilterCommand(cmd) {
        const isValidFn = cmd[0] === '--filter' || cmd[0] === 'filter'
        return isValidFn ? cmd[1] : false;
    }

    function isCountCommand(cmd) {
        return cmd[0] === '--count' || cmd[0] === 'count';
    }

    function execute(args) {
        const numberArgs = args.length;
        const animalsGateWay = new AnimalsAdapter();

        if (numberArgs < 3) {
            throw Error('Missing arguments filter/--filter or count/--count')
        }

        if (numberArgs > 4) {
            throw Error('Number of arguments more that 4 found')
        }

        const secondArg = args[2].split("=");

        if (numberArgs === 3) {

            if (isFilterCommand(secondArg)) {
                filterAnimalsByNameUseCase(secondArg[1], animalsGateWay)
            } else if (isCountCommand(secondArg)) {
                printCountsOfPeopleAndAnimalsUseCase(animalsGateWay)
            } else {
                throw Error('Wrong arguments')
            }

        } else {

            const thirdArg = args[3]?.split("=");
            const isSecondArgValid = isFilterCommand(thirdArg) || isCountCommand(thirdArg);
            const isThirdArgValid = isFilterCommand(secondArg) || isCountCommand(secondArg);
            const searchedStr = typeof isSecondArgValid === "boolean" ? isThirdArgValid : isSecondArgValid;

            if (isSecondArgValid && isThirdArgValid) {
                filterAndCountAnimalsByNameUseCase(searchedStr, animalsGateWay)
            } else {
                throw Error('Wrong arguments')
            }
        }
    }

    return {
        execute
    };

}

module.exports = CommandLineProcess


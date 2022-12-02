const { count } = require('./count-module');
const { filter } = require('./filter-module');
const helpers = require('./helpers-module');

// USAGE: node app.js --filter=[PATTERN] OR node app.js filter=[PATTERN]
// USAGE: node app.js --count OR node app.js count
function launch(cmd, data) {
    if (cmd.length === 1) {
        const commandItem = cmd[0].split('=');

        if (commandItem[0].includes('filter')) {
            helpers.displayConsole(filter(data, commandItem[1].trim()));
        } else if (commandItem[0].includes('count')) {
            helpers.displayConsole(count(data));
        } else {
            throw new Error('Wrong arguments');
        }
    } else {
        let filterRequest;

        cmd.forEach((elm) => {
            const commanItem = elm.split('=');

            if (commanItem[0].includes('filter')) {
                const filterArgs = elm.split('=')
                filterRequest = filterArgs[1].trim();
            } else if (!commanItem[0].includes('count')) {
                throw Error('Wrong arguments');
            }
        })

        const filtredData = filter(data, filterRequest);

        helpers.displayConsole(count(filtredData));
    }
}

module.exports = {
    launch
}

const data = require('./data');
const { launch } = require('./modules/main-module');
const helpers = require('./modules/helpers-module');

try {
    const cmd = helpers.getArgsValue();
    launch(cmd, data);
} catch (err) {
    console.log(err.message);
}

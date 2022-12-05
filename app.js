const CommandLineProcess = require('./infrastructure/animals/interfaces/command-line-process')
'use strict'

const args = process.argv

// USAGE: node app.js --filter=[PATTERN] OR node app.js filter=[PATTERN]
// USAGE: node app.js --count OR node app.js count

try {
    const commandLineProcess = new CommandLineProcess();
    commandLineProcess.execute(args)
} catch(err) {
    throw err
}


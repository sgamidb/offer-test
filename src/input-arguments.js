const filterPattern = /(?:(--|)filter|-f)=(.+)/;
const countPattern = /(?:(--|)count|-c)/;

function getInputArguments(userArguments){
    return userArguments.reduce((acc, curr) => {
        if (curr.match(filterPattern)) {
            acc = {...acc, filter: curr.match(filterPattern)[2]}
        }
        if (curr.match(countPattern)) {
            acc = {...acc, count: true}
        }
        return acc
    }, {});
}

exports.getInputArguments = getInputArguments;
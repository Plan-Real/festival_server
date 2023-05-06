const {exec} = require('child_process')
function print() {
    exec('python3' + __dirname + '/print.py')
}

exports.exec = () => (
    print()
);
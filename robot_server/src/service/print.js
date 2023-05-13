const {exec} = require('child_process')
function print() {
    exec('python3 src/service/cups/fourcut.py')
}

exports.exec = () => (
    print()
);
const {exec} = require('child_process')

function rotate() {
    exec('python3 view/assets/photo/rotate.py')
}

exports.rotate = () => {
    rotate()
}
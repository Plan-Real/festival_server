const {exec} = require('child_process')

function rotate(req, res) {
    exec('python3 view/assets/photo/rotate.py', (err, stdout, stdin) => {
        res.status(200).json("complete");
    })
}

exports.rotate = (req, res) => {
    // rotate(req, res)
    res.status(200).json("complete");
}
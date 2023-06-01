const {exec} = require('child_process')
function print(req, res, cmd) {
    exec('python3 src/service/cups/printer.py -d '+cmd ,(err, stdin, stdout) => {
        console.log(err)
        console.log('aa')
        res.status(200).json("hi")
    })
}

exports.exec = (req, res, cmd) => (
    print(req, res, cmd)
);
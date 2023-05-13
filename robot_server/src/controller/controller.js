const Print = require('../service/print.js')
const path = require('path')
// const Camera_ = require('../service/camera')

exports.Page = (req, res) => {
    const link ='view/'+ req.params['0']
    console.log(link)
    // console.log(__dirname.toString())
    res.sendFile(path.join(__dirname + '../../../' +link))
}

// exports.Camera = (req, res) => {
//     const cmd = req.params['0']
//     if (cmd == 'init') {
//         Camera_.start()
//     }
//     else if (cmd == 'take_photo') {
//         Camera_.take()
//     }
// }

exports.Print = (req, res) => {
    Print.exec();
}
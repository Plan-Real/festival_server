const Print = require('../service/print.js')

exports.Page = (req, res) => {
    const link = req.params['0'] + '.html'
    // console.log(__dirname.toString())
    res.send(link.toString())
}

exports.Print = (req, res) => {
    Print.exec();
}
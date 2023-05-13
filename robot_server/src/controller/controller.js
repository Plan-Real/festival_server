const Print = require('../service/print.js')
const path = require('path')
const Photo = require('../service/take_photo.js')
const Photo_rotate = require('../service/rotate.js')
// const Camera_ = require('../service/camera')

exports.Page = (req, res) => {
    const link ='view/'+ req.params['0']
    console.log(link)
    // console.log(__dirname.toString())
    res.sendFile(path.join(__dirname + '../../../' +link))
}

exports.Photo = (req, res) => {
    const i = req.params['0']
    var k = Photo.take_photo(req, res, i)
}

var selected = 0

const request = require('request')
const fs = require('fs')

exports.Convert = (req, res) => {
    var cmd = req.params['0']
    if (cmd == 'convert') {
        fs.readFile("view/assets/photo/"+selected+".jpg", {encoding:'base64'}, (err, data) => {
            request.post(
                {
                    url: "http://127.0.0.1:8000/convert",
                    body: data,
                    headers: {
                        'Content-Type' : 'image/png'
                    }
                }, (err, response, body) => {
                    const imgBuffer = Buffer.from(body, 'base64')
                    
                    fs.writeFileSync("view/assets/photo/convert.jpg", imgBuffer);

                    res.status(200).json("hi")
                }
            )
        })
        console.log(selected)
    }
    else {
        selected = cmd
        console.log(selected)
    }
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
    res.status(200).json("print_start")
}
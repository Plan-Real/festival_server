const cameralib = require('camera-usb')
const fs = require('fs')
const {exec} = require('child_process')

function take_photo(req, res, i) {
    const writeStream = fs.createWriteStream('view/assets/photo/' + i + '.jpg');
    const capture = cameralib.capture();
    capture.pipe(writeStream);

    writeStream.on('finish', () => {
       if (i == 4) {
        exec('python3 view/assets/photo/rotate.py', (err, stdout, stdin) => {
            res.status(200).json("complete");
        })
       } else {
        res.status(200).json("ok")
       }
    })
    // var j = cameralib.capture().pipe(fs.createWriteStream('view/assets/photo/'+ i +'.jpg'))
    // console.log(j['path'])
    // return j
}


exports.take_photo = (req, res, i) => {
    take_photo(req, res, i)
}

const cameralib = require('camera-usb')
const fs = require('fs')


function take_photo(i) {
    cameralib.capture().pipe(fs.createWriteStream('view/assets/photo/'+ i.toString() +'.jpg'))
}


exports.take_photo = (i) => {
    take_photo(i)
}

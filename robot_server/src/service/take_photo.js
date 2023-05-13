const cameralib = require('camera-usb')
const fs = require('fs')

cameralib.capture().pipe(fs.createWriteStream('out.jpg'))
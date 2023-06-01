const {exec} = require('child_process')
const request = require('request')
function print(req, res, cmd) {
    request.get(
                {
                    url: "http://192.168.0.11:8000/print",
                    headers: {
                        'Content-Type' : 'image/png'
                    }
                }, (err, response, body) => {
                    res.status(200).json("hi")
                })
}

exports.exec = (req, res, cmd) => (
    print(req, res, cmd)
);

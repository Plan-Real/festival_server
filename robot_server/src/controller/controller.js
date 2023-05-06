

exports.Page = (req, res) => {
    const link = req.params['0'] + '.html'
    console.log(link.toString())
    res.send(link.toString())
}
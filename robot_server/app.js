#!/usr/bin/env node

'use strict';
/**no
 * This example demonstrates simple sending of messages over the ROS system.
 */

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Route = require('./src/routes/route.js');
const app = express();

app.use(bodyParser.json())
app.use(cors());
app.use(Route);

app.set('port', 3000)

app.get('/hi', (req, res) => {
    setTimeout(function() {
        res.send("hi")
    }, 3000)
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), ': waiting ....');
})

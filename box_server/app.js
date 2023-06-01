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
// const realsense = require('node-librealsense')

app.use(express.json({limit: '100mb'}))
app.use(express.urlencoded({limit : '100mb', extended: false}))
app.use(bodyParser.json())
app.use(cors());
app.use(Route);

app.set('port', 3000)

app.get('/hi', (req, res) => { 

})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), ': waiting ....');
})

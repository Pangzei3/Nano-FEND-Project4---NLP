var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()
const dotenv = require('dotenv')
dotenv.config();
var application_key = process.env.API_KEY;

const cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const fetch = require('node-fetch')


app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/userText', async(req, res) => {
    // console.log('req.body ===+>', req.body)
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${application_key}&url=${req.body.formText}&lang=en`);
    try {
        const data = await response.json();
        // console.log(data);
        res.send(data);
      }catch (error) {
      console.log("error", error);
      }
});
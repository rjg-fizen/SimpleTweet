let express = require('express');
let bodyParser = require('body-parser');

let app = express();
let tweets = [
    {
        name: 'ryan test',
        description: 'this is a serious test'
    },
    {
        name: 'my second test yo',
        description: 'this is pretty cool'
    }
];

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/tweets', (req, res) => { 
    res.status(200).json(tweets);
})
app.post('/tweet', (req, response) => { 
    tweets.push({name: req.body.name, description: req.body.description});
    response.end("Added");
})

app.listen(8080);
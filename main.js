const express = require('express');
const {readFile, writeFile, existsSync} = require ('fs');
const path = require('path');
const exphbs = require('express-handlebars');

const CHANNEL_DIR = path.join(__dirname, 'channels');
const FILE_OPTIONS = {encoding: 'utf-8'};

const app = express();
const port = 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/static', express.static('./public'));
app.use(express.urlencoded());

let standardChannelName = 'World_Domination'
let channelFileName = path.join(CHANNEL_DIR, `World_Domination.json`);
let cchannellist = 0;

app.get('/', (request, response) => {
    response.redirect('/channels/World_Domination');
})


app.get('/channels/:channelName/', (request, response) => {

    let channellist = path.join(CHANNEL_DIR, `Channel_List.json`)

    readFile(channellist, FILE_OPTIONS, (error, text) => {
        if (error) {
            response.status(500).end();
        }

        cchannellist = JSON.parse(text);
        console.log(cchannellist);
    })

    const {channelName} = request.params;
    standardChannelName = channelName;

    channelFileName = path.join(CHANNEL_DIR, `${channelName}.json`);

    if (!existsSync(channelFileName)) {
        response.status(404).end();
        return
    }

    readFile(channelFileName, FILE_OPTIONS, (error, text) => {

        if (error) {
            response.status(500).end();
        }

        const channel = JSON.parse(text);

        response.render('home', {channel, cchannellist} );
    })
})

app.post('/channels/:channelName/', (request, response) => {

    const {channelName} = request.params;
    standardChannelName = channelName;
    channelFileName = path.join(CHANNEL_DIR, `${channelName}.json`);

    const {autor, text} = request.body;
    const timestamp = time();

    const message = {
        autor,
        text,
        timestamp
    }

    const nickn = {
        autor
    }

    readFile(channelFileName, FILE_OPTIONS, (error, text) => {

        if (error) {
            response.status(500).end();
            return
        }

        const messages = JSON.parse(text);

        messages.messages.unshift(message);

        let treffer = false;

        while (treffer === false) {
            messages.users.forEach(element => {
                if (element.autor === nickn.autor) {
                    treffer = true;
                }
            })

            if (treffer === false) {
                messages.users.push(nickn);
                treffer = true;
            }
        }

        writeFile(channelFileName, JSON.stringify(messages, null, 2), FILE_OPTIONS, (error) => {
            if (error) {
                response.status(500).end();
            } else {
                //response.redirect(`/channels/${channelFileName}`);
                response.redirect(`/channels/${standardChannelName}`);
            }
        })
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

function time () {
    var completedate = new Date();
    completedate = completedate.toLocaleString('de-DE');
    return completedate;
}

//let channelName = "Test" + ".json"
//let filepath = path.join(CHANNEL_DIR, channelName)
//console.log(filepath);
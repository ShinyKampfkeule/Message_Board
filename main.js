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

let standardChannelName = 'World_Domination';
let channelFileName = path.join(CHANNEL_DIR, `World_Domination.json`);
let cchannellist = 0;
let templatefilepath = path.join(CHANNEL_DIR, `channel_template.json`);
let channellistpath = path.join(CHANNEL_DIR, `Channel_List.json`);

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

    if (request.body.text === "") {
        response.redirect(`/channels/${standardChannelName}`);
        return
    };

    if (request.body.autor === "") {
        request.body.autor = "Anonymus";
    }

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
                response.redirect(`/channels/${standardChannelName}`);
            }
        })
    })
})

app.post('/newFile/', (request, response) => {

    if (request.body.newname === "") {
        response.redirect(`/channels/${standardChannelName}`);
        return
    }

    let channelname = request.body.newname;

    let filepath = path.join(CHANNEL_DIR, `${channelname}.json`);
    const url = `/channels/${channelname}`;

    const channeli = {
        channelname,
        url
    }

    readFile(channellistpath, FILE_OPTIONS,  (error, datas) => {

        if (error) {
            response.redirect(`/channels/${channelname}`);
            return
        }

        const content = JSON.parse(datas);

        content.channels.push(channeli);

        writeFile(channellistpath, JSON.stringify(content, null, 2) , FILE_OPTIONS, (error) => {
            if (error) {
                response.status(500).end();
            }
        })

        readFile(templatefilepath, FILE_OPTIONS, (error, data) => {

            if (error) {
                response.status(500).end();
                return
            }

            let filecontent = JSON.parse(data);
            filecontent.name = channelname;
            filecontent.fname = channelname;

            writeFile(filepath, JSON.stringify(filecontent, null, 2) , FILE_OPTIONS, (error) => {
                if (error) {
                    response.status(500).end();
                } else {
                    response.redirect(`/channels/${channelname}`);
                }
            })
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
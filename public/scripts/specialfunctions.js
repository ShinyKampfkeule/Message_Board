function openNavLeft() {
    document.getElementById("leftsidebar").style.width = "10%";
    document.getElementById("leftsidebar").style.height = "82%";
    document.getElementById("openL").style.opacity = "0%";
    document.getElementById("content").style.width = "76%";
    document.getElementById("content").style.marginLeft = "11.8%";
}

function closeNavLeft() {
    document.getElementById("leftsidebar").style.width = "1%";
    document.getElementById("leftsidebar").style.height = "1%";
    document.getElementById("content").style.width = "86.5%";
    document.getElementById("content").style.marginLeft = "2%";
    document.getElementById("openL").style.opacity = "100%";
}

function openNavRight() {
    document.getElementById("rightsidebar").style.width = "10%";
    document.getElementById("rightsidebar").style.height = "82%";
    document.getElementById("openR").style.opacity = "0%";
    document.getElementById("openR").style.display = "none";
    document.getElementById("content").style.width = "76%";
    document.getElementById("content").style.marginLeft = "11.8%";
}

function closeNavRight() {
    document.getElementById("rightsidebar").style.width = "1%";
    document.getElementById("rightsidebar").style.height = "1%";
    document.getElementById("openR").style.opacity = "100%";
    document.getElementById("content").style.width = "85%";
    document.getElementById("content").style.marginRight = "0%";
    document.getElementById("openR").style.display = "inline";
}

function openMessage() {
    document.getElementById("Message").style.height = "25%";
    document.getElementById("content").style.height = "62%";
    document.getElementById("Message").style.opacity = "100%";
    document.getElementById("news").style.opacity = "0%";
}

function closeMessage() {
    document.getElementById("Message").style.height = "0%";
    document.getElementById("content").style.height = "82.5%";
    document.getElementById("Message").style.opacity = "0%";
    document.getElementById("news").style.opacity = "100%";
}

/*function createChannel() {
    fs.writeFile
    console.log("test");
}
    /*let input = document.getElementById("newname")
    let channelName = input.value;
    console.log(channelName);
    /*let filepath = path.join(CHANNEL_DIR, channelName, '.json');

    readFile(templatefilepath, FILE_OPTIONS, (error, text) => {

        if (error) {
            response.status(500).end();
            return
        }

        const filecontent = JSON.parse(text);

        console.log(filecontent);

    })

    fs.writeFile(filepath, filecontent, (error) => {
        if (error) throw error;
    })*/

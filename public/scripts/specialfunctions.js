function openNavLeft() {
    document.getElementById("content").style.width = "76%";
    document.getElementById("content").style.marginLeft = "11.8%";
    document.getElementById("leftsidebar").style.display = "initial";
    document.getElementById("openls").style.display = "none";
}

function closeNavLeft() {
    document.getElementById("content").style.width = "86.5%";
    document.getElementById("content").style.marginLeft = "2%";
    document.getElementById("leftsidebar").style.display = "none";
    document.getElementById("openls").style.display = "initial";
}

function openNavRight() {
    document.getElementById("content").style.width = "76%";
    document.getElementById("content").style.marginLeft = "11.8%";
    document.getElementById("rightsidebar").style.display = "initial";
    document.getElementById("openrs").style.display = "none";
}

function closeNavRight() {
    document.getElementById("content").style.width = "85%";
    document.getElementById("content").style.marginRight = "0%";
    document.getElementById("rightsidebar").style.display = "none";
    document.getElementById("openrs").style.display = "initial";
}

function openMessage() {
    document.getElementById("MessageAll").style.display = "initial";
    document.getElementById("content").style.height = "61%";
    document.getElementById("news").style.display = "none";
}

function closeMessage() {
    document.getElementById("MessageAll").style.display = "none";
    document.getElementById("content").style.height = "82.5%";
    document.getElementById("news").style.display = "initial";
}


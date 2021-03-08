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
    document.getElementById("content").style.height = "62%";
    document.getElementById("news").style.display = "none";
}

function closeMessage() {
    document.getElementById("MessageAll").style.display = "none";
    document.getElementById("content").style.height = "82.5%";
    document.getElementById("news").style.display = "initial";
}


function accordion() {
    let accordions = document.getElementsByClassName("accordion");
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].onclick = function() {
            this.classList.toggle('is-open');

            let content = this.nextElementSibling;
            if (content.style.maxHeight) {
                // accordion is currently open, so close it
                content.style.maxHeight = null;
            } else {
                // accordion is currently closed, so open it
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }
    }
}


window.onload = function freeze(){
    this.setTimeout(unfreeze, 1100);
};

function unfreeze(){
    var element = document.getElementById("button1");
    console.log('test');
    element.classList.remove("freeze");
}

function toggle(){
    window.location.href = 'info.html'
}


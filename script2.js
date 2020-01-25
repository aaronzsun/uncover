window.onload = function freeze(){
    this.setTimeout(unfreeze, 1100);
};

function unfreeze(){
    var element = document.getElementById("container2");
    console.log('test');
    element.classList.remove("freeze");
}

function toggle(){
    window.location.href = 'index.html'
}


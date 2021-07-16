let id;
let second = 0;


function printmessage(){
    document.getElementById('message').innerHTML = second+'Sec'
    second++;
}


function start(){
   id = window.setInterval(printmessage,1)
}

function stop(){
    window.clearInterval(id)
}
function reset(){
    window.clearInterval(id)
    second = 0;
    document.getElementById('message').innerHTML = second + 'Sec'
    
}


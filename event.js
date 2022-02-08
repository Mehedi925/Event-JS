function yellow(){
    document.body.style.backgroundColor = `yellow`;
}
function green(){
    document.body.style.backgroundColor = `green`;
}
const makeRed = document.getElementById(`make-red`);
makeRed.onclick = red;

function red(){
    document.body.style.backgroundColor = `red`;

}
//Anonymus function
document.getElementById(`make-Chartreuse`).onclick = function () {
     document.body.style.backgroundColor = `Chartreuse`;
}


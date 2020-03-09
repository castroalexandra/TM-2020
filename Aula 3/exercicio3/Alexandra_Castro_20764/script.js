function getinfo(){
    var linkVar = document.getElementById( "link");
    var lista = document.getElementById("info");

    lista.innerHTML =
        "ID:" + linkVar.id + "<br>" +
        "Target:" + linkVar.target + "<br>" +
        "Type:" + linkVar.type +"<br>" +
        "HREF:" + linkVar.href + "<br>";

    
    
}


function changecolortored() {
    var titulos = document.getElementsByClassName("titulo");
    for (let elem of titulos){
        elem.style.color = "red";
    }

    function clickonCell(cell) {
        cell.innerText = prompt("Novo valor?");
        cell.style.backgroundColor = "green";
    }
function  setClickonEachTD() {
        var cells = document.getElementsByTagName("td");
        for (let cell of cells){
            cell.onclick = function () {
                 clickonCell(cell);
            }
        }

}
    setClickonEachTD();
}



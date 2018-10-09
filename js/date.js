
var days = new Array ("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");
var month = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
function fecha(){
    var fecha = new Date();
    // document.write(days[fecha.getDay()]+" "+(fecha.getDate())+" de "+(month[fecha.getMonth()])+" del "+(fecha.getFullYear()));
    fechac =days[fecha.getDay()]+" "+(fecha.getDate())+" de "+(month[fecha.getMonth()])+" del "+(fecha.getFullYear());
    fechac = fecha.getDate();
    document.getElementById('fecha').innerHTML=Date;
}

document.getElementById("to-do").addEventListener('submit',addTask);

function addTask(){
    // visible();
    // alert('chequeo');
    var tarea = document.createElement("tarea");
    var inputValue = document.getElementById("task").value;
    var text = document.createTextNode(inputValue);
    tarea.appendChild(text);
    document.getElementById("ulist").appendChild(tarea);
}
function visible(){

    document.getElementById("freeday").style.visibility = "hidden";

}
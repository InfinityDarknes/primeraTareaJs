                                                            //TAREA DE BRAYAN MIZRAIM HERRASTI DIAZ
// Declara 5 variables usando let , asignandoles los distintos tipos de datos que recuerdes
let variableString = 'Soy una variable de tipo string';
let variableNumero = 5;
let variableBooleano = true;
let variableNull = null;



// Menciona para que sirve una constante
// SON VARIABLES QUE NO CAMBIAN POR EJEMPLO const pi = 3.1416 pi es una propiedad matematica constante y que nunca cambiara por ser una formula matematica.

// Identifica el error  y corrijelo. 

 var numero = 23;
 let edad = 45;
 let fechaNacimiento = 45;
 let dolorDeCuerpo = false;
 const constante_pi = 3.1416;
 const iva = "16%";


// Pon el resultado de las siguientes comparaciones 

let a = 5 
let b = 40
let c = 4
//Ejemplo :
// a <= b = true;

// a==b = false;
// b != b false
// b > c  true
// a != b && c != a true
// b >= b || b != c true

// ahora tomando en cuenta lo siguiente 

a = b 
a++;
b = c * 2; 
a += b; 
c = a + (b + c);

// cuanto vale a ? 41
// cuanto vale b ? 49
// cuanto vale c? 61


// Imagina que tenemos un perrito. 
// este perrito debemo alimentarlo 
// debemos darle croquetas en el desayuno 
// debemos dale pollo en la comida 
// y en la cena un poco de leche. 
// realiza un programa utilizando las condicionales para saber que alimento le toca
//  nuestro perrito 
// acorde a la hora 9 desayuno 3 comida 8 cena 
// usaremos el horario 24 h para no hacer mas condiciones de am o pm
let hora = 14
function comidaPerro(){
    if (hora <= 9) {
        document.write('HORA DEL DESAYUNO COMERA CROQUETAS');
    } else if(hora > 9 && hora <=14 ){
        document.write('HORA DEL ALMUERZO COMERA POLLO');
    } else if (hora > 15){
        document.write('HORA DE LA CENA UN POCO DE LECHE');
    }
}
//comidaPerro();
/*------------------------------------------------------------------
 //corrige el error Debe ser correcta la contraseña 
var password = 123

if (password == 123 ) {
    console.log("Correcto")
} else {
     console. log ("Fallaste")
}-------------------------------------------------------------------*/

// con tus palabras explica linea por linea lo que hace el programa 
/*
 let i = 0
 let multi = 5
    for (let i = 1; i <= 10; i++) {
     document.write(multi , "X", i = multi * 1 );
 }*/
/*===================================================================================================================
    se declara una variable local i con valor 0, otra variable multi con valor 5, se hace un ciclo for donde se imprime el valor
    pero no entiendo por que se hace un ciclo infinito.
=====================================================================================================================*/

// crea un programa que imprima 5 veces tu nombre 
// usando el ciclo for  ( no olvides tu indice de incremento)
function imprimirNombre (){
    let i =0;
    let nombre = 'Brayan Mizraim Herrasti Diaz';
    for (let i =1; i<=5; i++){
        document.write( i+' -' + nombre + '<br>') ;
    }
}
//imprimirNombre();


// crea un programa que indique si tienes covid o no. 
// en un archivo html crea un tipo formulario, usando la etiqueta radiobutton ( investigar). 
// las opciones del radiobutton obtener si es seleccionado o no. 
/* las opciones deben ser  - temperatura mayor a 38 Grados si-  no - 
Padeses de Tos ?  si - no , dolor de cabeza ? si no --

si las 3 opciones son si, mostrar un mensaje en HTML en una etiqueta h3 el resultado. de POSITIVO 
en caso contrario mostrar mensaje en una etiqueta h4 el resultado: NEGATIVO :D */

/*===================================================================================================== */


function pruebaCovid(){
    let temperatura = document.querySelector('input[name="temperatura"]:checked').value;
    let tos = document.querySelector('input[name="tos"]:checked').value;
    let dolor_cabeza = document.querySelector('input[name="dolor_cabeza"]:checked').value;
    
    if (temperatura == 'si' && tos =='si' && dolor_cabeza == 'si'){
        window.alert('Ya te cargo el payaso traes covid')
    }
    else{
        window.alert('Tas salvado mijo')
    }
}
/*====================================================================================================== */
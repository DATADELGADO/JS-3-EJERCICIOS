
// ### Ejercicios: Nivel 1
const now = new Date();
const anio= now.getFullYear(); 
let mes = now.getMonth() + 1; 
const dia = now.getDate(); 
const hora = now.getHours(); 
const minutos = now.getMinutes(); 
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(`${dia}/${meses[now.getMonth()]}/${anio}  ${hora} : ${minutos}`);

// 1. Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos.

let firstName = "STEVEN";
let lastName = "Delgado";
let country = "spain";
let city = "madrid";
let age = 25;
let isMarried = true;
let year = new Date().getFullYear();
console.log(`${typeof firstName} ${typeof lastName} ${typeof country} ${typeof city} ${typeof age} ${typeof isMarried} ${typeof year}`);





// 2. Verifique si typeof '10' es igual a 10
console.log("");
console.log(typeof "10" === typeof 10);

// 3. Verifique si parseInt('9.8') es igual a 10
console.log("");
console.log(parseInt(9.8) == 10);

// 4. Verifique cualquier valor booleano true o false.
//    1. Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
console.log("");
let a = true;
let b = 4<5;
let c = 5==5;
console.log(a, b, c);

//    2. Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
console.log("");
let d = false;
let e = 4>5;
let f = 5!=5;
console.log(d, e, f);

// 5. Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()

//    1. 4 > 3  true
//    2. 4 >= 3 true
//    3. 4 < 3 false
//    4. 4 <= 3 false 
//    5. 4 == 4 true
//    6. 4 === 4 true
//    7. 4 != 4 false
//    8. 4 !== 4 false
//    9. 4 != '4' false
//    10. 4 == '4'  true
//    11. 4 === '4' false
//    12. Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.
console.log("");
console.log(`${4>3} ${4>=3} ${4<3} ${4<=3} ${4==4} ${4===4} ${4!=4} ${4!==4} ${4!="4"} ${4=="4"} ${4==="4"} ${"python".length != "jargon".length}`);

// 6. Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()

//    1. 4 > 3 && 10 < 12 true
//    2. 4 > 3 && 10 > 12 false
//    3. 4 > 3 || 10 < 12 true
//    4. 4 > 3 || 10 > 12 true
//    5. !(4 > 3) false
//    6. !(4 < 3) true
//    7. !(false) true
//    8. !(4 > 3 && 10 < 12) false
//    9. !(4 > 3 && 10 > 12) true
//    10. !(4 === '4')  true
//    11. No hay 'on' tanto en dragon como en python         false

console.log("");
console.log(`${4>3 && 10<12} ${4>3 && 10>12} ${4>3 || 10<12} ${4>3 || 10>12} ${!(4>3)} ${!(4<3)} ${!(false)} ${!(4>3 && 10<12)} ${!(4>3 && 10>12)} ${!(4==="4")} ${!("dragon".includes("on") && "python".includes("on"))}`);

// 7. Utilice el objeto Date para realizar las siguientes actividades
    let datico = new Date();
//    1. ¿Qué año es hoy?
console.log(datico.getFullYear());
//    2. ¿Qué mes es hoy con un número?
console.log(datico.getMonth()+1);

//    3. ¿Qué fecha es hoy?
console.log(datico);

//    4. ¿Qué día es hoy con un número?
console.log(datico.getDate());

//    5. ¿Cuál es la hora actual?
console.log(`${datico.getHours()}:${datico.getMinutes()}`);

//    6. ¿Cuántos minutos hay actualmente?
console.log(datico.getMinutes());

//    7. Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
console.log(datico.getTime());

// ### Ejercicios: Nivel 2

// 1. Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).
    let base = prompt("ingrese base: ");
    let altura = prompt("ingrese altura: ");
    alert(`area:  ${0.5 * parseInt(base) * parseInt(altura)}`);

    
//    ```sh
//    Ingrese base: 20
//    Ingrese altura: 10
//    El área del triángulo es: 100
//    ```

// 2. Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)
  let ladoA = prompt("ingrese lado A");
  let ladoB = prompt("ingrese lado B ");
  let ladoC = prompt("ingrese lado C ");
  alert(`perimetro: ${parseInt(a) + parseInt(b) + parseInt(c)}`)
  


//    ```sh
//    Ingrese lado a: 5
//    Ingrese lado b: 4
//    Ingrese lado c: 3
//    El perimetro del triangulo es: 12
//    ```

// 3. Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))

    let largo = prompt("ingrese largo: ");
    let ancho = prompt("ingrese ancho: ");
    alert(`area: ${largo * ancho}  perimetro: ${2*largo*ancho}`);


// 4. Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.

let radio = prompt("ingrese el radio");
alert(`area del circulo: ${Math.PI * radio * radio}      circunferencia del circulo: ${2*Math.PI*radio}`);

// 5. Calcule la pendiente, la intersección X y la intersección Y de y = 2x -2
let ecua = "y = 2x -2";
let interX = [2/2,0];
let interY = [0,-2];
let m1 = 2;


// let arrayEcua = ecua.split(" ");
// let generalX;
// let generalY;
// let generalN;
// for(let i = 0; i<arrayEcua.length;i++){
//     if(arrayEcua[i].includes("x")){
//         generalX = arrayEcua[i];
//     }else if(arrayEcua[i].includes("y")){
//         generalY = arrayEcua[i];
//     }else if(arrayEcua[i].includes("=")){
//     }else{
//         generalN = arrayEcua[i];
//     }
// }


// 6. La pendiente es m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). Encuentra la pendiente entre el punto (2, 2) y el punto (6,10)
let m2 = (10-2) / (6 - 2);
// 7. Compare la pendiente de las dos preguntas anteriores.
console.log(m1 == m2 );
// 8. Calcula el valor de y (y = x<sup>2</sup> + 6x + 9). Trate de usar diferentes valores de x y averigüe en qué valor de x y es 0.
let x = -3;
let y = x**2 + 6*x + 9;
console.log(y);


// 9. Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?

let horas = prompt("ingrese las horas:");
let tarifaxhoras = prompt("ingrese tarifa x horas:")
alert(`el salario de la persona es: ${horas * tarifaxhoras} euros`)



//    ```sh
//    Ingrese horas: 40
//    Introduce la tarifa por hora: 28
//    Su ganancia semanal es 1120
//    ```

// 10. Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.

let nombresito = "steven";
nombresito.length >7 ?console.log("su nombre es largo"):console.log("su nombre es corto");

// 11. Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.

let nombresitos = "steven";
let apelliditos = "delgado";
if(nombresitos.length > apelliditos.length){
    console.log(`Tu primer nombre, ${nombresitos}, es más largo que tu apellido, ${apelliditos}.`);
}else{
    console.log(`Tu primer nombre, ${nombresitos}, no es más largo que tu apellido, ${apelliditos}.`);
}

//    ```js
//    let firstName = "Asabeneh";
//    let lastName = "Yetayeh";
//    ```

//    ```sh
//    Tu primer nombre, Asabeneh, es más largo que tu apellido, Yetayeh.
//    ```

// 12. Declare dos variables _myAge_ y _yourAge_ y asignarles los valores iniciales y myAge y yourAge.

let _myAge_ = 250;
let _yourAge_ = 25;
console.log(`soy ${_myAge_ - _yourAge_} mayor que tú.`);

//    ```js
//    let myAge = 250;
//    let yourAge = 25;
//    ```

//    ```sh
//    Soy 225 años mayor que tú.
//    ```

// 13. Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.


let anioNaci = prompt("indique año de nacimiento?");
let anioActual = new Date();
if( (anioActual.getFullYear() - parseInt(anioNaci)) >= 18){
console.log(`tienes ${(anioActual.getFullYear() - parseInt(anioNaci))} años. Podrás conducir`);
}else{
    console.log(`tienes ${(anioActual.getFullYear() - parseInt(anioNaci))} podras conducir despues de ${18 - (anioActual.getFullYear() - parseInt(anioNaci))} años.`);
}

//    ```sh

//    Introduzca el año de nacimiento: 1995
//    Tienes 25 años. Tienes la edad suficiente para conducir.

//    Introduzca el año de nacimiento: 2005
//    Tienes 15 años. Podrás conducir después de 3 años.
//    ```

// 14. Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años

//    ```sh
//    Ingrese el número de años de vida: 100
//     Viviste 3153600000 segundos.
//    ```

let numAnios = prompt("ingrese el numero de años de vida:");
alert(`Viviste ${31536000 *numAnios}`)



// 15. Cree un formato de hora legible por humanos usando el objeto Date.
let date1 = new Date();

//    1. YYYY-MM-DD HH:mm
let mes1 = date1.getMonth();
let day1 = date1.getDay();
mes1<10 ? mes1 = "0" + mes1 : mes1 = mes1;
day1<10 ? day1 = "0" + day1 : day1 = day1;
console.log(`${date1.getFullYear()}-${mes1}-${day1} ${date1.getHours()}:${date1.getMinutes()}`);

//    2. DD-MM-YYYY HH:mm
console.log(`${date1.getFullYear()}-${mes1}-${day1} ${date1.getHours()}:${date1.getMinutes()}`);

//    3. DD/MM/YYYY HH:mm
console.log(`${date1.getFullYear()}/${mes1}/${day1} ${date1.getHours()}:${date1.getMinutes()}`);




// ### Ejercicios: Nivel 3

// 1. Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05)
//    1. YYYY-MM-DD HH:mm eg. 20120-01-02 07:05
let date2 = new Date();
let mes2 = date2.getMonth();
let day2 = date2.getDay();
let horas2 = date2.getHours();
let minutos2 = date2.getMinutes();
mes2<10 ? mes2 = "0" + mes2 : mes2 = mes2;
day2<10 ? day2 = "0" + day2 : day2 = day2;
horas2<10 ? horas2 = "0" + horas2 : horas2 = horas2;
minutos2<10 ? minutos2 = "0" + minutos2 : minutos2 = minutos2;

console.log(`${date2.getFullYear()}-${mes2}-${day2} ${horas2}:${minutos2}`);



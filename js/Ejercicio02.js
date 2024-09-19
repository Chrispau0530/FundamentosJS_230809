//Tipos de datos en JS

//1.Underfined
let cliente;

console.warn("---Tipo de Dato UNDEFIED ---")

console.log(`El cliente : ${cliente}`)
console.log(`El tipo de dato de la variable cliente es  ${typeof(cliente)}`);
cliente ="Juan Romero"
console.log(`El cliente : ${cliente}`)
console.log(`El tipo de dato de la variable cliente es  ${typeof(cliente)}`);
cliente=209901
console.log(`El cliente : ${cliente}`)

console.log(`El tipo de dato de la variable cliente es  ${typeof(cliente)}`);

//Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas

console.warn("----Tipo de dato BOOLEAN (BOLEANO -TRUE-FALSE")
//2.BOOLEAN 
let esPremium = "No lo se";

console.log(`Es un cliente premium ${esPremium}`);

console.log(`El tipo de dato de la variable es Premium es  ${typeof(esPremium)}`);

esPremium=false;
console.log(`Es un cliente premium ${esPremium}`);
console.log(`El tipo de dato de la variable es Premium es  ${typeof(esPremium)}`);
console.log(`Es un cliente premium ${esPremium}`);
if(esPremium)
    console.log("Es un cliente pago por usar el servicio");
else
console.log("Es un usuario que recibe los servicios gratuitos ");


// 3. NUMBER

var cantidad;
const costo_producto = 10.50
let saldo_cuenta = -2500.40
let monto_transaccion ;

console.warn ("---- Tipo de Dato -NUMBER (Numeros,positivos,decimales,flotantes)")
console.log(`Tu saldo al dia de hoy es de : ${saldo_cuenta} ,(Tipo de dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta : ${costo_producto} (T)`)
cantidad =8;
console.log(`Has elegido comprar : ${cantidad} de productos .`)
console.log(`El importe total de la compra es : ${cantidad*costo_producto}`)


saldo_cuenta= saldo_cuenta -(cantidad*costo_producto);
console.log(`Tu saldo nuevo es de : ${saldo_cuenta}`);

//El cliente realiza un abono de 1500 

monto_transaccion=1500;
console.log (`Tu abono de : ${monto_transaccion} ha sido recibido , tu nuevo saldo es de : ${saldo_cuenta+monto_transaccion}`)

//4. String (Cadena de Caracteres)
const alumno = "Christian Paul Rodriguez Perez"
let producto;

console.warn("----Tipo de Dato -String (Cadena de Caracteres ");
console.log(`El nombre del alumno es : ${alumno}, que es de tipo de dato ${typeof(alumno)}`);

//Inicializamos el valor de la variale producto

producto="MONITOR 20\"FULL HD"
console.log(`El nombre del PRODUCTO  es : ${producto}, que es de tipo de dato ${typeof(producto)}`);

//Manipulando los STRINGS
console.log(`Mas adelante podremos transformar el contenido de los STRING usando los metodos y funciones especificas,como convertir su valor a mayusculas: ${alumno}=>${alumno.toLowerCase()}`)
console.log(`O en su defecto a minusculas : ${producto} => ${producto.toLowerCase}`)

//5.BIGINT (Numero de mayor Amplitud)

console.warn("---tipo de Dato -BIGINT (Numero Ammplio)");
const NumeroGrande= 1234567890
const NumeroGrande2= 1234556789076542
let NumeroGrande3= 13223445456556563434545454578787878787878
let NumeroGrande4=1232343453432212324546334454545454656562323545656676878789787878
console.log(`El primero experimento de un numero grande es : ${NumeroGrande}, que es soportado por NUMBER, y su tipo de dato es: ${typeof(NumeroGrande)}`);
console.log(`El segundoo experimento de un numero grande es : ${NumeroGrande2}, que es soportado por NUMBER, y su tipo de dato es: ${typeof(NumeroGrande2)}`);
console.log(`El tercer experimento de un numero grande es : ${NumeroGrande3}, que NO es soportado por NUMBER, y su tipo de dato es: ${typeof(NumeroGrande3)}`);
console.log(`El cuarto experimento de un numero grande es : ${NumeroGrande4}, que NO es soportado por NUMBER, y su tipo de dato es: ${typeof(NumeroGrande4)}`);


 NumeroGrande3=BigInt(13223445456556563434545454578787878787878);
console.log(`El quinto experimento de un numero grande es : ${NumeroGrande3}, que ya fue convertido en BIGINT , y su tipo de dato es ${typeof(NumeroGrande3)}`);

NumeroGrande4=BigInt(1232343453432212324546334454545454656562323545656676878789787878);
console.log(`El sexto experimento de un numero grande es : ${NumeroGrande4}, que ya fue convertido en BIGINT , y su tipo de dato es ${typeof(NumeroGrande4)}`);


//¿Se puede realizar operaciones matematicas entre un NUMBER Y un BIGINT?

const numero= 129;

console.log(`Intentando realizar la suma de : numero+numeroGrande3 el resultado es: ${BigInt(numero ) + NumeroGrande3}`)

 console.warn("---Tipo de dato SYMBOL(Simbolo o Unico)---")
//6.SYMBOL (simbolo)

const numero1=5;
const numero2= 5.0;
const numero3= "5";
const numero4= "5.0";
const numero5=Symbol(5)
const numero6=Symbol(5)
const numero7= Symbol(5,0)
const numero8=Symbol("5")
const numero9= Symbol("5,0")

//Pruebas comparativas
console.log("¿ES 5 =5.0?")

if(numero1===numero2){
    console.log("Se compara numero1 con numero2, determinando que tienen el mismo valor ")
}else{
    console.log("Se comparo numero1 con numero2, determinando que NO tienen el mismo valor")
}

console.log("¿ES 5 = \"5\"?")
if(numero1==numero3){ //Estrictamente igual (Equidad) => Mismo valor , mismo tipo de dato
    console.log("Se compara numero1 con numero3, determinando que tienen el mismo valor ")
}else{
    console.log("Se comparo numero1 con numerO3 , determinando que NO tienen el mismo valor")
}
console.log("¿ES 5 === \"5\"?")
if(numero1===numero3){ //Estrictamente igual (Equidad) => Mismo valor , mismo tipo de dato
    console.log("Se compara numero1 con numero3, determinando que tienen el mismo valor ")
}else{
    console.log("Se comparo numero1 con numerO3 , determinando que NO tienen el mismo valor")
}



console.log("¿ES 5 === \"5.0\"?")
if(numero1===numero3){ //Estrictamente igual (Equidad) => Mismo valor , mismo tipo de dato
    console.log("Se compara numero1 con numero3, determinando que tienen el mismo valor ")
}else{
    console.log("Se comparo numero1 con numerO3 , determinando que NO tienen el mismo valor")
}



console.log("¿ES 5 = \"5.0\"?")
if(numero1==numero4){ //Estrictamente igual (Equidad) => Mismo valor , mismo tipo de dato
    console.log("Se compara numero1 con numero4, determinando que tienen el mismo valor ")
}else{
    console.log("Se comparo numero1 con numerO4 , determinando que NO tienen el mismo valor")
}

console.log("¿ES 5 === \"5.0\"?")
if(numero1==numero5){ //Estrictamente igual (Equidad) => Mismo valor , mismo tipo de dato
    console.log("Se compara numero1 con numero5, determinando que tienen el mismo valor ")
}else{
    console.log("Se comparo numero1 con numero5 , determinando que NO tienen el mismo valor")
}



console.log(`¿ES 5 === Symbol(5) antes de compararlo analizamos que tipo de dato son : siendo numero 1 tipo de dato ${typeof(numero)} y numero 5 ${typeof(numero5)}`)
if(numero1===numero5){ //Estrictamente igual (Equidad) => Mismo valor , mismo tipo de dato
    console.log("Se compara numero1 con numero5, determinando que tienen el mismo valor ")
}else{
    console.log("Se comparo numero1 con numero5 , determinando que NO tienen el mismo valor")
}
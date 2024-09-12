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
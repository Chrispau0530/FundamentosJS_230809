const bg=`linear-gradient(11deg, rgba(2,0,36,1) 0%,rgba(9,9,121,1) 33%,rgba(0,212,255,1) 86%)`;
const style_console = `backround ${bg}: color : white; border-radius: 6px; padding: 4px font-size: 1.0rem; front-weight:bold`;
 
// personalizacion de las salidas a cosnola 
console.warn("--practica 05: repaso de objetos en java Script--");

//variables independientes
console.log("%c1.- variables independientes", style_console);

// declaramos valores independientes relacionadas a un producto

let producto_nombre="computadora gamer laptop 17\"";
let producto_marca="asus";
let producto_modelo="tuf 17"
let producto_precio=15749.50;
let producto_disponibilidad=true;
let producto_sku=Symbol("TUF707VV-HX221W")
let producto_stock=15
let producto_imagen=null
let producto_barcode;
let producto_categorias=["electronicos", "computacion","gaming","promocion buen fin","mejor valorados"];

// accedemos a los valores de las caracteristicas del producto de manera independiente

console.log(`los datos del producto son: \n
    nombre: ${producto_nombre},
    marca: ${producto_marca},
    modelo: ${producto_modelo},
    precio: ${producto_precio},
    disponibilidad: ${producto_disponibilidad},
    stock: ${producto_stock},
    sku: ${producto_sku},
    barcode: ${producto_barcode},
    imagen: ${producto_imagen},
    categorias:${producto_categorias}`);

// ahora lo delcaramos como un objeto 
let producto={
    nombre : "tenis deportivos",
    marca : "nike",
    modelo : "jordan '24",
    precio : "3360",
    disponibilidad : false,
    stock : 0,
    sku : "DZ5485-512",
    imagen : "../deportivo.snakrs./jordan.png",
    barcode :null,
    categorias:["deportivas","juvenil"]
}
// ahora leemos el objeto completo

console.table(producto)

//Para acceder a las propiedades del objeto utilizamos un "."  espacio y el nombre de la propiedad a leer 
console.log("Accediendo a propiedades especificas del producto ");
console.log(`Nombre completo del Producto :  ${producto.nombre}, ${producto.marca} , ${producto.modelo},`);
console.log(`Precio : ${precio}`);

if(producto.disponibilidad==0){
console.log("Estatus agotado");
}else{
console.log(`Estatus : ${producto_stock} Unidades disponibles `);

}

console.log("%c3. Destructuración de objetos",style_console);

let producto2={
    clave:3216,
    nombre : "Lentes para sol",
    marca : "Oaklet",
    modelo : "Qntm kato",
    precio : "6829.0",
    disponibilidad : true,
    stock : 5,
    sku : "OO9481D_0356",
    imagen : "../deportivo.snakrs./Qtned.png",
    barcode :888392491626,
    categorias:["deportivas","Lentes","Hombre","Accesorios"]
}
    

let Comprador ={
    clave: 3216,
    nombre : "Christian",
     apellido:"Rodriguez",
     tipo: "frecuente",
     correo: "Rodriguez@gmail.com",
     paisorigen:"Mexico"
}

let pedido={
  producto_clave:3216,
  Comprador_clave:3216,
  cantidad: 2,
  status:"Carrito de comptra"
}

//En base a los tres objetos necesitamos calcular el costo de la compra y si le alcanza su saldo
    let[producto_precio: precio] = producto2;
    let[producto_cantidad: cantidad ] =pedido;
    let[cliente_saldoactual: saldoactual]= Comprador;

    console.log(`El cliente a agregado su carrito ${pedido_cantidad} unidades, con un costo total de : ${(pedido_cantidad*producto_precio)}`)
    
  if(costo_compra>actual)

    
    
    
    
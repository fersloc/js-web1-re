
let cupones =['s','r','m','d',];
 function descuento(operacion) {

     switch (operacion) {
         case 's':
             return 0.9;
             break;
         case 'r':
             return 0.8;
             break;
         case 'm':
             return 0.7;
             break;
         case 'd':
             return 0.6;
             break;
         default:
             
             return false
             break;
     }
 }
 

let operacion;
 
operacion=prompt('Anota tu cupon de descuento para aplicarlo (estos son los cupones, escribe alguno  s || r || m || d )');

let descuentoOperativo = descuento(operacion); 
//   corresponde a 0.9 o 0.8 o 0.7 o 0.6 para luego ser multiplicado
  



let productoPrecio=[1, 2 , 3 , 4];
// luego se multipplicara x 1000

function calculaPrecio(precio) {
  
    for (let i = 0; i < productoPrecio.length; i++) {
               
    
        if ( precio==productoPrecio[i] ) {
                      
        
            console.log(productoPrecio.length + ' productos con precios iniciales:');
            console.log((productoPrecio[0]*1000) + ' pesos el Vainilla');
            console.log((productoPrecio[1]*1000) + ' pesos el Chocolate');
            console.log((productoPrecio[2]*1000) + ' pesos la Cacao');
            console.log((productoPrecio[3]*1000) + ' pesos las Trufas');

            console.log('El precio inicial del producto que se eligió era de ' + precio*1000 + ' pesos');

            
            precioFinal = precio * descuentoOperativo;



            alert('El precio se rebajó un ' + Math.round((1-descuentoOperativo)*100) + '% quedando en ' + Math.round(precioFinal*1000) + ' pesos por 100 grs')
            
            return console.log('El precio se rebajó un ' + Math.round((1-descuentoOperativo)*100) + '% quedando en ' + Math.round(precioFinal*1000) + ' pesos por 100 grs');
            
        }

    }     
}


if (descuentoOperativo!==false) {
    
    console.log('funciono el cupon');
    
    alert('El cupon que escribiste fue correcto, y conseguiste un ' + Math.round((1-descuentoOperativo)*100) + '% de descuento'); 

    calculaPrecio(prompt('Ahora elige el producto al cual quieres aplicar el descuento. Escribe un numero por el producto que desees: 1 por Vainilla | 2 por Chocolate | 3 por Cacao | 4 por Trufas'));

}else{
    console.log('no fuinciono el cupon');
    alert('No se escribió bien el cupón. Intenta actualizar la pagina');
}

  







document.getElementById("precios").innerHTML = (productoPrecio.length + ' productos con precios:');
document.getElementById("vainilla").innerHTML = ((productoPrecio[0]*1000) + ' pesos los 100grs de Vainilla');
document.getElementById("chocolate").innerHTML = ((productoPrecio[1]*1000) + ' pesos los 100grs de Chocolate');
document.getElementById("cacao").innerHTML = ((productoPrecio[2]*1000) + ' pesos los 100grs de Cacao');
document.getElementById("trufas").innerHTML = ((productoPrecio[3]*1000) + ' pesos los 100grs de Trufas');


document.getElementById("descuento").innerHTML = ('Elegiste un producto con precio de '+ Math.round((precioFinal*1000*100)/(descuentoOperativo*100)) + ' pesos.' +' El precio se rebajó un ' + Math.round((1-descuentoOperativo)*100) + '% quedando en ' + Math.round(precioFinal*1000) + ' pesos');


document.getElementById("boton").addEventListener("click", function() {
    alert("joajajoja era broma!");
  });
class Mate {
            constructor(id,modelo,precio,marca,color){
                this.id = id
                this.modelo = modelo
                this.precio = precio
                this.marca = marca
                this.color = color
                }
        
        mostrar_catalogo_mates(){

            return "#" + this.id + "$" + this.precio + "-" + this.marca + this.color
        }

        getPrecio(){
            return this.precio
        }
}
class Vaso {
    constructor(id,modelo,precio,marca,color){
                this.id = id
                this.modelo = modelo
                this.precio = precio
                this.marca = marca
                this.color = color
                }
        
        mostrar_catalogo_vasos(){

            return "#" + this.id + "$" + this.precio + "-" + this.marca + this.color
        }

        getPrecio(){
            return this.precio
        }
}
class Termo{
    constructor(id,modelo,precio,marca,color){
                this.id = id
                this.modelo = modelo
                this.precio = precio
                this.marca = marca
                this.color = color
                }
        
        mostrar_catalogo_termos(){

            return "#" + this.id + "-" + this.modelo + "-" + this.marca + "-" + this.color + "$" + this.precio
        }

        getPrecio(){
            return this.precio
        }
}

let arreglo_mates = []
    arreglo_mates.push(new Mate(1, "Mate acero inox.", 10000, "Stanley", "Rojo"))
    arreglo_mates.push(new Mate(2, "Mate acero inox.", 10000, "Stanley", "Verde"))
    arreglo_mates.push(new Mate(3, "Mate acero inox.", 10000, "Stanley", "Blanco"))
    arreglo_mates.push(new Mate(4, "Mate acero inox.", 10000, "Stanley", "Negro"))
    arreglo_mates.push(new Mate(5, "Mate acero inox.", 10000, "Stanley", "Gris"))
    arreglo_mates.push(new Mate(6, "Mate acero inox.", 10000, "Stanley", "Marrón"))
    arreglo_mates.push(new Mate(7, "Mate calabaza", 8000, "Particular", "Madera"))
    arreglo_mates.push(new Mate(8, "Mate calabaza", 8000, "Particular", "Madera clara"))
    arreglo_mates.push(new Mate(9, "Mate calabaza", 8000, "Particular", "Negro"))
    arreglo_mates.push(new Mate(10, "Mate calabaza", 8000, "Particular", "Rojizo"))

let arreglo_vasos = []
    arreglo_vasos.push(new Vaso(1, "Vaso térmico", 20000, "Stanley", "Naranja"))
    arreglo_vasos.push(new Vaso(2, "Vaso térmico", 20000, "Stanley", "Rojo"))
    arreglo_vasos.push(new Vaso(3, "Vaso térmico", 20000, "Stanley", "Blanco"))
    arreglo_vasos.push(new Vaso(4, "Vaso térmico", 20000, "Stanley", "Negro"))
    arreglo_vasos.push(new Vaso(5, "Vaso acero inox.", 15000, "Otro", "Metal"))
    arreglo_vasos.push(new Vaso(6, "Vaso acero inox.", 15000, "Otro", "Rojo"))

let arreglo_termos = []
    arreglo_termos.push(new Termo(1, "Termo con manija", 25000, "Stanley", "Negro"))
    arreglo_termos.push(new Termo(2, "Termo con manija", 25000, "Stanley", "Blanco"))
    arreglo_termos.push(new Termo(3, "Termo con manija", 25000, "Stanley", "Rosa"))
    arreglo_termos.push(new Termo(4, "Termo con manija", 25000, "Stanley", "Verde"))
    arreglo_termos.push(new Termo(5, "Termo sin manija", 23000, "Stanley", "Negro"))
    arreglo_termos.push(new Termo(6, "Termo sin manija", 23000, "Stanley", "Gris"))
    arreglo_termos.push(new Termo(7, "Termo sin manija", 23000, "Stanley", "Azul"))

let respuesta = true

while (respuesta === true){
    respuesta = mostrar_menu()
}
suma = 0
let productos = ""
function mostrar_menu(){
let opcion = prompt("Que accion desea realizar ? \n 1) Ver catalogo MATES \n 2) Ver catalogo VASOS \n 3) Ver catalogo TERMOS \n 4) Salir");


    
        if (opcion == "1")
            {
                
            alert("Los mates son:\n" + mostrar_catalogo_mates());
            confirm ("\n Desea sumar algun producto al carrito?")
            
            while(confirm("Desea sumar algun producto al carrito?")){
                let model = parseInt(prompt("Indique numero de modelo")) -1
                if(model >= 0 && model < arreglo_mates.length){
                            suma += arreglo_mates[model].getPrecio();
                            productos += "\n" + arreglo_mates[model].mostrar_catalogo_mates();
                            } else {
                            alert("Número de modelo inválido.");
                        }

            }
            }


            if (opcion == "2")
            {

            alert("Los vasos son:\n" + mostrar_catalogo_vasos());
            confirm ("\n Desea sumar algun producto al carrito?")
            
            while(confirm("Desea sumar algun producto al carrito?")){
                let model = parseInt(prompt("Indique numero de modelo")) -1
                if(model >= 0 && model < arreglo_mates.length){
                            suma += arreglo_mates[model].getPrecio();
                            productos += "\n" + arreglo_mates[model].mostrar_catalogo_mates();
                            } else {
                            alert("Número de modelo inválido.");
                        }


            }
            }


            if (opcion == "3")
            {
            alert("Los termos son:\n" + mostrar_catalogo_termos());
            confirm ("\n Desea sumar algun producto al carrito?")
            
            while(confirm("Desea sumar algun producto al carrito?")){
                let model = parseInt(prompt("Indique numero de modelo")) -1
                if(model >= 0 && model < arreglo_mates.length){
                            suma += arreglo_mates[model].getPrecio();
                            productos += "\n" + arreglo_mates[model].mostrar_catalogo_mates();
                            } else {
                            alert("Número de modelo inválido.");
                        }


            }
            }

            else if(opcion === "4") {
            alert("Gracias por visitarnos, el total de su compra es: $" + suma + "\n Y los productos son: " + productos)
            return false; // corta el while principal

             }

             return true // vuelve a mostrar el menú

            }
            
            

        
            




function mostrar_catalogo_mates(){
    let stock_m = ""
    for (let i = 0; i < arreglo_mates.length; i ++){
        stock_m += "\n" + arreglo_mates[i].mostrar_catalogo_mates()
         
    }
    return stock_m
}
function mostrar_catalogo_vasos(){
    let stock_v = ""
    for (let i = 0; i < arreglo_vasos.length; i ++){
        stock_v += "\n" + arreglo_vasos[i].mostrar_catalogo_vasos()
         
    }
    return stock_v
}
function mostrar_catalogo_termos(){
    let stock_t = ""
    for (let i = 0; i < arreglo_termos.length; i ++){
        stock_t += "\n" + arreglo_termos[i].mostrar_catalogo_termos()
         
    }
    return stock_t
}
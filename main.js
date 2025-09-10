class Mate {
            constructor(id,modelo,precio,marca,color){
                this.id = id
                this.modelo = modelo
                this.precio = precio
                this.marca = marca
                this.color = color
                }
        
        mostrar_catalogo_mates(){ //funcion que me devuelve el catalogo de mates en forma de lista

            return "#" + this.id + "-" + this.modelo + "-" + this.marca + "-" + this.color + "$" + this.precio
        }

        getPrecio(){ //funcion que me devuelve el valor precui
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
        
        mostrar_catalogo_vasos(){ //funcion que me devuelve el catalogo de vasos en forma de lista

            return "#" + this.id + "-" + this.modelo + "-" + this.marca + "-" + this.color + "$" + this.precio
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
        
        mostrar_catalogo_termos(){ //funcion que me devuelve el catalogo de termos en forma de lista

            return "#" + this.id + "-" + this.modelo + "-" + this.marca + "-" + this.color + "$" + this.precio
        }

        getPrecio(){
            return this.precio
        }
}

let arreglo_mates = [] //arreglo de mates
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

let arreglo_vasos = [] //arreglo de vasos
    arreglo_vasos.push(new Vaso(1, "Vaso térmico", 20000, "Stanley", "Naranja"))
    arreglo_vasos.push(new Vaso(2, "Vaso térmico", 20000, "Stanley", "Rojo"))
    arreglo_vasos.push(new Vaso(3, "Vaso térmico", 20000, "Stanley", "Blanco"))
    arreglo_vasos.push(new Vaso(4, "Vaso térmico", 20000, "Stanley", "Negro"))
    arreglo_vasos.push(new Vaso(5, "Vaso acero inox.", 15000, "Otro", "Metal"))
    arreglo_vasos.push(new Vaso(6, "Vaso acero inox.", 15000, "Otro", "Rojo"))

let arreglo_termos = [] //arreglo de termos
    arreglo_termos.push(new Termo(1, "Termo con manija", 25000, "Stanley", "Negro"))
    arreglo_termos.push(new Termo(2, "Termo con manija", 25000, "Stanley", "Blanco"))
    arreglo_termos.push(new Termo(3, "Termo con manija", 25000, "Stanley", "Rosa"))
    arreglo_termos.push(new Termo(4, "Termo con manija", 25000, "Stanley", "Verde"))
    arreglo_termos.push(new Termo(5, "Termo sin manija", 23000, "Stanley", "Negro"))
    arreglo_termos.push(new Termo(6, "Termo sin manija", 23000, "Stanley", "Gris"))
    arreglo_termos.push(new Termo(7, "Termo sin manija", 23000, "Stanley", "Azul"))

let respuesta = true
let suma = 0
let productos = ""

while (respuesta !== false){
    respuesta = mostrar_menu()
}

function mostrar_menu(){

    let opcion = prompt("Que accion desea realizar ? \n 1) Ver catalogo MATES \n 2) Ver catalogo VASOS \n 3) Ver catalogo TERMOS \n 4) Salir");


    
        if (opcion == "1")
        {
                
            alert("Los mates son:\n" + mostrar_catalogo_mates());
            while(confirm("¿Desea sumar algún producto al carrito?")) {

                let model = parseInt(prompt("Indique número de modelo :\n" + mostrar_catalogo_mates())) - 1; // -1 porque los arrays empiezan en 0
                if(model >= 0 && model < arreglo_mates.length) {

                    suma += arreglo_mates[model].getPrecio();
                    productos += "\n" + arreglo_mates[model].mostrar_catalogo_mates();

                 }

                else {

                    alert("Número de modelo inválido.");

                    }
}

            }

            if (opcion == "2")
            {   

            alert("Los vasos son:\n" + mostrar_catalogo_vasos());

            
            while(confirm("Desea sumar algun producto al carrito?")){
                let model = parseInt(prompt("Indique numero de modelo"+ mostrar_catalogo_vasos())) -1
                if(model >= 0 && model < arreglo_vasos.length){

                        suma += arreglo_vasos[model].getPrecio();
                        productos += "\n" + arreglo_vasos[model].mostrar_catalogo_vasos();
                        } else {

                            alert("Número de modelo inválido.");

                        }



            }
            }


            if (opcion == "3")
            {

                alert("Los termos son:\n" + mostrar_catalogo_termos());
 
            
                while(confirm("Desea sumar algun producto al carrito?")){

                    let model = parseInt(prompt("Indique numero de modelo"+ mostrar_catalogo_termos())) -1
                    if(model >= 0 && model < arreglo_termos.length){

                        suma += arreglo_termos[model].getPrecio();
                        productos += "\n" + arreglo_termos[model].mostrar_catalogo_termos();

                    } else {

                        alert("Número de modelo inválido.");

                        }


            }
            }

            else if(opcion == "4") 
            {

                alert("Gracias por visitarnos, el total de su compra es: $" + suma + "\n Y los productos son: " + productos)
                return false; // corta el while principal

            }

            return true

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
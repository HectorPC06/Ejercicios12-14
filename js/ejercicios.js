/* 
EJERCICIO 12 Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
*/
export const EjercicioCuatroA = (numero=undefined) =>{
        if(numero=== undefined) return console.warn("No ingresaste ningun número");
        if(numero  <0) return console.warn("El número no puede ser negativo");

        let primo=true;
        for(let i=2; i<numero; i++){
            if(numero%i==0){
                primo=false;
            }
        }
        (primo===true)?
        console.info(`El numero ${numero} es primo`)
        :console.info(`El numero ${numero} no es primo`);
}

/*
EJERCICIO 13 Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
*/
export const EjercicioCuatroB = (numero=undefined) =>{
        if(numero=== undefined) return console.warn("No ingresaste ningun número");
        if(numero  <0) return console.warn("El número no puede ser negativo");
        (numero%2==0)?
            console.info(`El numero ${numero} es par`)
            :console.info(`El numero ${numero} no es par`);
}

/*
EJERICICIO 14 Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/
export const EjercicioCuatroC = (grados=undefined,opcion) =>{
    if(grados===undefined) return console.warn("No ingresaste ninguna temperatura");
    
    switch(opcion){
        case 'C':
            let gradosF = ((9*grados)/5)+32;
            console.info(`La temperatura ${grados} °C es igual a ${gradosF} °F`);
        break;

        case 'F':
            let gradosC = (5*(grados-32))/9;
            console.info(`La temperatura ${grados} °F es igual a ${gradosC} °C`);
    }
}
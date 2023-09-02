//Va a trabajar con la data que le pasan al ejecutarla

export default (data) => {

    // Creo una constante para ir guardando los errores

    const errors = {};

    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(data.name)) {
        errors.e1 = 'Ingrese un nombre valido'
    }

    const regexImagen = /\.(jpg|jpeg|png|gif|webp|bmp|svg|tiff)$/i;
    if(!regexImagen.test(data.image)){
        errors.e2 = 'Ingrese una imagen valida'
    }

    const regexNum = /^(?:[1-9]\d?|100)$/
    if(!regexNum.test(data.life)){
        errors.e3 = 'Su vida puede ser del 1 al 100'
    }
   
    if(!regexNum.test(data.attack)){
        errors.e4 = 'Su ataque puede ser del 1 al 100'
    }

    if(!regexNum.test(data.defense)){
        errors.e5 = 'Su defensa puede ser del 1 al 100'
    }

    if(!regexNum.test(data.speed)){
        errors.e6 = 'Su velocidad puede ser del 1 al 100'
    }

    if(!regexNum.test(data.height)){
        errors.e7 = 'Su altura puede ser del 1 al 100'
    }

    if(!regexNum.test(data.weight)){
        errors.e8 = 'Su peso puede ser del 1 al 100'
    }

    // if (!data.name.length || !data.image.length || !data.life.length || !data.attack.length || !data.defense.length || !data.speed.length || !data.height.length || !data.weight.length) {
    //     errors.e10 = 'Ningun campo puede estar vacio'
    // }

    //retorno ese objeto de errores
    return errors
}
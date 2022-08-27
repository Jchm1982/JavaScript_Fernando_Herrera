const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la Negación: ');
console.log(true); //true
console.log(!true); //false
console.log(!false); //true

console.warn('And');//true si todos los valores son verdaderos
console.log(true && true);//Salida es true
console.log(true && false);//Salida es false
console.log(true && !false);//Salida es true

console.log("####################");
console.log(regresaFalse() && regresaTrue());//false
console.log(regresaTrue() && regresaFalse());//false

console.log("##########  &&  ##########");
regresaFalse() && regresaTrue();
console.log('4 condiciones con and',true && true && true && false);


console.log("##########  OR  ##########");
console.warn('OR');//true si algun valor es verdadero
console.log(true || false);
console.log(false || false);
console.log(regresaTrue() || regresaFalse());
console.log('4 condiciones con or',true || true || true || false);

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;
//const a1 = true && 'Hola Mundo' && 150;
const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3 = soyFalso  || 'Ya nos soy falso';
const a4 = soyFalso || soyNull || soyUndefined || 'Ya nos soy falso de nuevo';
const a5 = soyFalso || soyNull || regresaTrue() || 'Ya nos soy falso de nuevo2';
console.log({ a1,a2,a3,a4,a5 });


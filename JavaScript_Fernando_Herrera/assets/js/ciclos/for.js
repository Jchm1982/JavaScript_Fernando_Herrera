const heroes = ['batman','superman','flash','aquaman'];

//Aqui mostrara al final un undefined
/*
console.warn('For Tradicional');
 for(let i = 0; i < 5 ; i++){
    console.log(heroes[i]);
 }
 */

 //Para arreglar el undefinedse coloca la longitu de mi arreglo
 console.warn('For Tradicional');
 for(let i = 0; i < heroes.length ; i++){
    console.log(heroes[i]);
 }

//Ejecuta lo mismo que en el codigo anterior, solo que es mas limpio
 console.warn('For In');
 for(let i in heroes){
    console.log(heroes[i]);
 }

 
 console.warn('For Of');
 
 /*
 for(let i of heroes){
    console.log(i);
 }
*/
//Forma correcta de utilizar el For Of, no se utiliza i
 for(let heroe of heroes){
    console.log( heroe );
 }
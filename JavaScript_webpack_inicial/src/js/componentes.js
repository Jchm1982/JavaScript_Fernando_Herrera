export const saludar = (nombre) => {
    console.log('Creando Etiqueta 1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre } !!! nIn`;

    document.body.append(h1);
}
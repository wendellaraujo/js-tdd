function sum(a, b) {
    return a + b;
}

// named export
// ter vários exports dentro de um 
// msm arquivo
// só pode chamar com o msm nome
// import precisa das chaves { sub }
export function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

export { mult as multiplicacao, div };

// método principal
// só pode ter um defaut por arquivo
// importar com qq nome
// não precisa utilizar as chaves
export default sum;
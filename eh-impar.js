const ehParFunction = require("./eh-par");

function EhImpar(valor) {
  console.log('Resultado é par: ', ehParFunction.EhPar(valor))
  console.log('Negando EhPar', !ehParFunction.EhPar(valor))
  return !ehParFunction.EhPar(valor)
}

module.exports = EhImpar;
const EhImpar = require("./eh-impar");
const EhPar = require('./eh-par');


describe('EhImpar', () => {
  it('Mockando EhPar true', () => {
    EhPar.EhPar = jest.fn(() => true)
    // 3 é um numero ímpar, mas como mockamos o retorno da function ehPar, ele respeitou isso.
    expect(EhImpar(3)).toBe(false);
  });
  it('Sem mock do EhPar false', () => {    
    EhPar.EhPar = jest.fn(() => false)
    // 3 é um numero ímpar, mas como mockamos o retorno da function ehPar, ele respeitou isso.
    expect(EhImpar(3)).toBe(true);
  });

});

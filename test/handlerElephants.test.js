const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('ao receber o argumento count, retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('ao receber o argumento names, retorna um array com a relação dos nomes de todos os elefantes', () => {
    const elephants = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(handlerElephants('names')).toEqual(elephants);
  });
  it('ao receber o argumento averageAge, retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('ao receber o argumento location, retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('ao receber o argumento popularity, retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('ao receber o argumento availability, retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('retorna undefined se não receber argumentos', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('ao receber um objeto vazio como argumentodeve retornar a string: Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('passada uma string que não contempla uma funcionalidade deve retornar null', () => {
    expect(handlerElephants('other')).toBe(null);
  });
});

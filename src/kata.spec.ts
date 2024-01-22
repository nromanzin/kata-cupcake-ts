import { Cookie, Cupcake } from './kata';

describe('Kata', () => {
  test('The name function should return “🧁”', () => {
    const cupcake = new Cupcake();
    expect(cupcake.name()).toBe('🧁');
  });
  test('The name function should return “🍪”', () => {
    const cookie = new Cookie();
    expect(cookie.name()).toBe('🍪');
  });
  test('The name function should return “🧁 with 🍫”', () => {
    const cupcakeWithChoco = new ChocolateTopping(new Cupcake());
    expect(cupcakeWithChoco.name()).toBe('🧁 with 🍫');
  });
});

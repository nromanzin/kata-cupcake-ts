import { ChocolateTopping, Cookie, Cupcake, PeanutTopping } from './kata';

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
  test('The name function should return “🍪 with 🍫”', () => {
    const cookieWithChoco = new ChocolateTopping(new Cookie());
    expect(cookieWithChoco.name()).toBe('🍪 with 🍫');
  });
  test('The name function should return “🍪 with 🍫 and 🥜”', () => {
    const cookieWithChocolateAndPeanut = new PeanutTopping(
      new ChocolateTopping(new Cookie())
    );
    expect(cookieWithChocolateAndPeanut.name()).toBe('🍪 with 🍫 and 🥜');
  });
  test('The name function should return “🍪 with 🥜 and 🍫”', () => {
    const cookieWithChocolateAndPeanut = new ChocolateTopping(
      new PeanutTopping(new Cookie())
    );
    expect(cookieWithChocolateAndPeanut.name()).toBe('🍪 with 🥜 and 🍫');
  });
});

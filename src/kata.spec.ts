import { ChocolateTopping, Cookie, Cupcake, PeanutTopping } from './kata';

describe('Kata', () => {
  test('The name function should return “🧁”', () => {
    const cupcake = new Cupcake();
    expect(cupcake.name()).toBe('🧁');
    expect(cupcake.price()).toBe(1);
  });
  test('The name function should return “🍪”', () => {
    const cookie = new Cookie();
    expect(cookie.name()).toBe('🍪');
    expect(cookie.price()).toBe(2);
  });
  test('The name function should return “🧁 with 🍫”', () => {
    const cupcakeWithChoco = new ChocolateTopping(new Cupcake());
    expect(cupcakeWithChoco.name()).toBe('🧁 with 🍫');
    expect(cupcakeWithChoco.price()).toBeCloseTo(1.1);
  });
  test('The name function should return “🍪 with 🍫”', () => {
    const cookieWithChoco = new ChocolateTopping(new Cookie());
    expect(cookieWithChoco.name()).toBe('🍪 with 🍫');
    expect(cookieWithChoco.price()).toBeCloseTo(2.1);
  });
  test('The name function should return “🍪 with 🍫 and 🥜”', () => {
    const cookieWithChocolateAndPeanut = new PeanutTopping(
      new ChocolateTopping(new Cookie())
    );
    expect(cookieWithChocolateAndPeanut.name()).toBe('🍪 with 🍫 and 🥜');
    expect(cookieWithChocolateAndPeanut.price()).toBeCloseTo(2.3);
  });
  test('The name function should return “🍪 with 🥜 and 🍫”', () => {
    const cookieWithPeanutAndChocolate = new ChocolateTopping(
      new PeanutTopping(new Cookie())
    );
    expect(cookieWithPeanutAndChocolate.name()).toBe('🍪 with 🥜 and 🍫');
    expect(cookieWithPeanutAndChocolate.price()).toBeCloseTo(2.3);
  });
});

import { Cupcake } from './kata';

describe('Kata', () => {
  test('The name function should return “🧁”', () => {
    const cupcake = new Cupcake();
    expect(cupcake.name()).toBe('🧁');
  });
});

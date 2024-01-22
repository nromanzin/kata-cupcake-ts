import {
  Bundle,
  ChocolateTopping,
  Cookie,
  Cupcake,
  PeanutTopping,
} from './kata';

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
  test('We can build a Bundle with 1 Cupcake and check price or description', () => {
    const bundle = new Bundle([new Cupcake()]);
    expect(bundle.name()).toBe('🧁');
    expect(bundle.price()).toBeCloseTo(0.9);
  });
  test('We can build a Bundle with 1 Cupcake and 1 Cookie and check price or description', () => {
    const bundle = new Bundle([new Cupcake(), new Cookie()]);
    expect(bundle.name()).toBe('🧁, 🍪');
    expect(bundle.price()).toBeCloseTo(2.7);
  });
  test('We can build a Bundle with 2 Cupcake and 1 Cookie and check price or description', () => {
    const bundle = new Bundle([new Cupcake(), new Cupcake(), new Cookie()]);
    expect(bundle.name()).toBe('🧁, 🧁, 🍪');
    expect(bundle.price()).toBeCloseTo(3.6);
  });
  test('We can build a bundle with 1 bundle of 2 cakes and 1 Cupcake and check price or description', () => {
    const bundle = new Bundle([
      new Bundle([new Cookie(), new Cookie()]),
      new Cupcake(),
    ]);
    expect(bundle.name()).toBe('🍪, 🍪, 🧁');
    expect(bundle.price()).toBeCloseTo(4.5);
  });
  test('We can build a bundle with many bundle of bundle and many cakes and check price or description', () => {
    const bundle = new Bundle([
      new Bundle([new Cupcake(), new Cupcake()]),
      new Bundle([new Cookie(), new Cookie(), new Cupcake()]),
      new Bundle([
        new Bundle([new Cookie(), new Cupcake()]),
        new Bundle([new Cupcake(), new Cookie()]),
      ]),
      new Cookie(),
      new Cookie(),
      new Cupcake(),
    ]);
    expect(bundle.price()).toBeCloseTo(16.2);
  });
});

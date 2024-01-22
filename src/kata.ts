export interface Cake {
  name(): string;
  price(): number;
}

export class Cupcake implements Cake {
  name(): string {
    return '🧁';
  }
  price(): number {
    return 1;
  }
}

export class Cookie {
  name(): string {
    return '🍪';
  }
  price(): number {
    return 2;
  }
}

export abstract class Topping implements Cake {
  constructor(private wrappee: Cake) {}
  name(): string {
    return (
      this.wrappee.name() + ' ' + this.separator() + ' ' + this.toppingName()
    );
  }
  price(): number {
    return this.wrappee.price() + this.toppingPrice();
  }
  private separator(): string {
    return this.wrappee.name().includes('with') ? 'and' : 'with';
  }
  abstract toppingName(): string;
  abstract toppingPrice(): number;
}

export class ChocolateTopping extends Topping {
  toppingName(): string {
    return '🍫';
  }
  toppingPrice(): number {
    return 0.1;
  }
}

export class PeanutTopping extends Topping {
  toppingName(): string {
    return '🥜';
  }
  toppingPrice(): number {
    return 0.2;
  }
}

export class Bundle implements Cake {
  constructor(private cakes: (Cake | Bundle)[]) {}
  name(): string {
    return this.cakes.flatMap((cake: Cake) => cake.name()).join(', ');
  }
  price(): number {
    return (
      0.9 *
      this.cakes.flatMap((cake: Cake) => cake.price()).reduce((a, b) => a + b)
    );
  }
}

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
    return this.wrappee.name() + ' with ' + this.toppingName();
  }
  price(): number {
    return this.wrappee.price() + this.toppingPrice();
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

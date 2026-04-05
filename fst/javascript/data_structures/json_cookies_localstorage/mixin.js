const canFly = {
  fly() {
    console.log(this.name + " is flying");
  }
};

class Bird {
  constructor(name) {
    this.name = name;
  }
}

class Airplane {
  constructor(name) {
    this.name = name;
  }
}

// Add same behavior to both
Object.assign(Bird.prototype, canFly);
Object.assign(Airplane.prototype, canFly);

new Bird("Eagle").fly();
new Airplane("Boeing").fly();
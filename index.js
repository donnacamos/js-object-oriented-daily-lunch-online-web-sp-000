// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let Countable = (superclass) => class extends superclass{
  static get counter(){
    superclass._counter = (superclass._counter || 0) + 1;
    return superclass._counter;
  }

  constructor(...args){
    super(...args);
    this._id = this.constructor.counter;
  }

  get id(){
    return this._id;
  }
}

class Neighborhood{
  static get counter(){
    Neighborhood._counter = (Neighborhood._counter || 0) + 1;
    return Neighborhood._counter;
  }

  constructor(name){
    this.name = name;

  }
}

import { PokesController } from "./Controllers/PokesController.js";
// import { ValuesController } from "./Controllers/ValuesController.js";

class App {


  pokesController = new PokesController();
  // valuesController = new ValuesController();
}

window["app"] = new App();

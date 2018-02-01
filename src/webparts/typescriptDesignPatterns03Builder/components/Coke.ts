import ColdDrink from "./ColdDrink";

class Coke extends ColdDrink {
    price(): number {
       return 2.5;
    }

    name(): string {
        return "Coca Cola";
    }
}

export default Coke;

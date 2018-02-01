import ColdDrink from "./ColdDrink";

class Pepsi extends ColdDrink {
    price(): number {
       return 1.5;
    }

    name(): string {
        return "Pepsi Cola";
    }
}

export default Pepsi;

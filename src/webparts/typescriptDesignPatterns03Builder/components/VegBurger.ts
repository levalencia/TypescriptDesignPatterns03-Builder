import Burger from "./Burger";

class VegBurger extends Burger {
    price(): number {
        return 11;
    }

    name(): string {
        return "Veg Burger";
    }
}

export default VegBurger;

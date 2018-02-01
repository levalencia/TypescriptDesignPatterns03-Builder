import Burger from "./Burger";

class ChickenBurger extends Burger {
    price(): number {
        return 15;
    }

    name(): string {
        return "Chicken Burger";
    }
}

export default ChickenBurger;

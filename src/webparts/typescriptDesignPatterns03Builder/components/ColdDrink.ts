import IItem from "./IItem";
import IPacking from "./IPacking";
import Bottle from "./Bottle";

abstract class ColdDrink implements IItem {
    name(): string {
        throw new Error("Method not implemented.");
    }
    packing(): IPacking {
        return new Bottle();
    }

    abstract price(): number ;

}

export default ColdDrink;
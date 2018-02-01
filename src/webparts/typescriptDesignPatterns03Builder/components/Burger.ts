import IItem from "./IItem";
import Wrapper from "./Wrapper";
import IPacking from "./IPacking";

abstract class Burger implements IItem {
    name(): string {
        throw new Error("Method not implemented.");
    }

    packing(): IPacking {
        return new Wrapper();
    }

    abstract price(): number ;

}

export default Burger;
import IItem from "./IItem";
import IPacking from "./IPacking";
declare abstract class ColdDrink implements IItem {
    name(): string;
    packing(): IPacking;
    abstract price(): number;
}
export default ColdDrink;

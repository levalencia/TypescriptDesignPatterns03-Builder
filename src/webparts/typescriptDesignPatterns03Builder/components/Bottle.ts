import IPacking from "./IPacking";

class Bottle implements IPacking {
    pack(): string {
       return "Bottle";
    }
}

export default Bottle;

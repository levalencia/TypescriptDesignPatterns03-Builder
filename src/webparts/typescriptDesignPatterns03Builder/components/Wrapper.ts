import IPacking from "./IPacking";

class Wrapper implements IPacking {
    pack(): string {
       return "Wrapper";
    }
}

export default Wrapper;
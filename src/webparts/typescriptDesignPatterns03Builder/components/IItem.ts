interface IItem {
    name(): string;
    packing(): Packing;
    price(): number;
}

export default IItem;
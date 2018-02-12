import IItem from "./IItem";
declare class Meal {
    private items;
    addItem(item: IItem): void;
    getCost(): number;
    showItems(): string;
}
export default Meal;

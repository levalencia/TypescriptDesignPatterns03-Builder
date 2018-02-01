import IItem from "./IItem";

class Meal {
    items: IItem[];

    addItem(item: IItem): void {
        this.items.push(item);
    }

    getCost(): number {
        let cost: number  = 0;
        for(let item of this.items) {
            cost+= item.price();
        }

        return cost;
    }

    showItems(): string {
        let returnStr: string;
        for(let item of this.items) {
            returnStr +="Item:" + item.name;
            returnStr +=", Packing:" + item.packing().pack();
            returnStr +=", Price: " + item.price();
        }
        return returnStr;
    }
}

export default Meal;
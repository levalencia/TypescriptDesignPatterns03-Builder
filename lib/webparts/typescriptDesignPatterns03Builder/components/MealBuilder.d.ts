import Meal from "./Meal";
declare class MealBuilder {
    prepareVegMeal(): Meal;
    prepareNonVegMeal(): Meal;
}
export default MealBuilder;

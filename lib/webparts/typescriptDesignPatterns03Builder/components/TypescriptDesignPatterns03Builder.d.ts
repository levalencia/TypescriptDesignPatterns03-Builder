/// <reference types="react" />
import * as React from "react";
import { ITypescriptDesignPatterns03BuilderProps } from "./ITypescriptDesignPatterns03BuilderProps";
import Version from "@microsoft/sp-core-library/lib/Version";
export default class TypescriptDesignPatterns03Builder extends React.Component<ITypescriptDesignPatterns03BuilderProps, {}> {
    private mealBuilder;
    private items;
    private meal;
    constructor(props: ITypescriptDesignPatterns03BuilderProps, state: any);
    render(): React.ReactElement<ITypescriptDesignPatterns03BuilderProps>;
    protected readonly dataVersion: Version;
    private setMeal(selectedMeal);
}

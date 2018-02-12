import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from "@microsoft/sp-webpart-base";
import { ITypescriptDesignPatterns03BuilderWebPartProps } from "./ITypescriptDesignPatterns03BuilderWebPartProps";
export default class TypescriptDesignPatterns03BuilderWebPart extends BaseClientSideWebPart<ITypescriptDesignPatterns03BuilderWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}

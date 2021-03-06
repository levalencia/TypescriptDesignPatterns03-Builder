import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown
} from "@microsoft/sp-webpart-base";

import * as strings from "TypescriptDesignPatterns03BuilderWebPartStrings";
import TypescriptDesignPatterns03Builder from "./components/TypescriptDesignPatterns03Builder";
import { ITypescriptDesignPatterns03BuilderProps } from "./components/ITypescriptDesignPatterns03BuilderProps";
import { ITypescriptDesignPatterns03BuilderWebPartProps } from "./ITypescriptDesignPatterns03BuilderWebPartProps";

export default class TypescriptDesignPatterns03BuilderWebPart extends
  BaseClientSideWebPart<ITypescriptDesignPatterns03BuilderWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ITypescriptDesignPatterns03BuilderProps > = React.createElement(
      TypescriptDesignPatterns03Builder,
      {
        description: this.properties.description,
        selectedMeal: this.properties.selectedMeal
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration  {
    return {
      pages: [
        {
          header: {
            description: "Header"
          },
          groups: [
            {
              groupName: "Group",
              groupFields: [
                PropertyPaneDropdown("meal", {
                  label: "Select meal",
                  options: [
                    { key: "Veg", text: "Veg" },
                    { key: "Nonveg", text: "Nonveg" }
                  ],
                  selectedKey: "Nonveg"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

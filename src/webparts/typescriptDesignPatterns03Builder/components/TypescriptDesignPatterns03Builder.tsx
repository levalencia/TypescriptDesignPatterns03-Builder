import * as React from 'react';
import styles from './TypescriptDesignPatterns03Builder.module.scss';
import { ITypescriptDesignPatterns03BuilderProps } from './ITypescriptDesignPatterns03BuilderProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class TypescriptDesignPatterns03Builder extends React.Component<ITypescriptDesignPatterns03BuilderProps, {}> {
  public render(): React.ReactElement<ITypescriptDesignPatterns03BuilderProps> {
    return (
      <div className={styles.typescriptDesignPatterns03Builder}>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
            <div className="ms-Grid-col ms-lg10 ms-xl8 ms-xlPush2 ms-lgPush1">
              <span className="ms-font-xl ms-fontColor-white">Welcome to SharePoint!</span>
              <p className="ms-font-l ms-fontColor-white">Customize SharePoint experiences using Web Parts.</p>
              <p className="ms-font-l ms-fontColor-white">{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

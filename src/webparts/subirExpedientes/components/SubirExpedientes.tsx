import * as React from 'react';
import styles from './SubirExpedientes.module.scss';
import { ISubirExpedientesProps } from './ISubirExpedientesProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SubirExpedientes extends React.Component<ISubirExpedientesProps, {}> {
  public render(): React.ReactElement<ISubirExpedientesProps> {
    return (
      <div className={ styles.subirExpedientes }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

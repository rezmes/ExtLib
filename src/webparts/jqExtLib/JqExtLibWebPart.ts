import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './JqExtLibWebPart.module.scss';
import * as strings from 'JqExtLibWebPartStrings';

import { SPComponentLoader} from '@microsoft/sp-loader';
import * as $ from 'jquery';
import "jqueryui"





export interface IJqExtLibWebPartProps {
  description: string;
}

export default class JqExtLibWebPart extends BaseClientSideWebPart<IJqExtLibWebPartProps> {

constructor() {
  super();
  SPComponentLoader.loadCss('https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css');

  // SPComponentLoader.loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js', { globalExportsName: 'jQuery' });
  // SPComponentLoader.loadScript('https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js', { globalExportsName: 'jQuery' });
  // SPComponentLoader.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js', { globalExportsName: 'jQuery' });
}




  public render(): void {
    this.domElement.innerHTML = `
<div class = {${styles.jqExtLib}}>

<div  class = "accordion">

    <h3>JQExtLib 1</h3>


 <div>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
 </div>

    <h3>JQExtLib 2</h3>


 <div>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
 </div>

    <h3>JQExtLib 3</h3>


 <div>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
 </div>








 </div>



</div>`;



      const accordionOptions = {
animate: true,
collapsible: true,
icons: {
  header: "ui-icon-triangle-1-s",
  activeHeader: "ui-icon-triangle-1-s"
}
      };

      ($('.accordion', this.domElement) as any).accordion(accordionOptions);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

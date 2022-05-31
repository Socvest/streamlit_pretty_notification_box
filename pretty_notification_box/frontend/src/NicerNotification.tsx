import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import "./icon.css"
import "./style.css"
import { style } from 'glamor';



class NicerNotification extends StreamlitComponentBase {
  
  public render = (): ReactNode => {
    
    
    const icon:string = this.props.args['icon']
    const title:string = this.props.args['title']
    const textDisplay:any = this.props.args['textDisplay']
    const externalLink:string = this.props.args['externalLink']
    const url:any = this.props.args['url']
    const styles: any = this.props.args['styles'] || {}
    
    function removeNotification() { 
      const el = document.querySelector('.notification-container') as HTMLElement
      el.style.display='none'; 
      
    }


  
    return (
       <div className="notification-container" {...style(styles['notification-container'])}>
        <div className="notification-content-container" {...style(styles['notification-content-container'])}>
          <i className="material-icons" {...style(styles['material-icons'])}>{icon}</i>
          <span className="title-text-url-container" {...style(styles['title-text-url-container'])}>
          <div className="title" {...style(styles['title'])}>{title}</div>
          <div className="notification-text-link-close-container" {...style(styles['notification-text-link-close-container'])}>
          <div className="notification-text" {...style(styles['notification-text'])}>{textDisplay}</div>
          <a className="external-link" {...style(styles['external-link'])} href={url} target="_blank">{externalLink}</a>
          <div className="close-button" {...style(styles['close-button'])} onClick={() => {removeNotification(); this.onClicked();}}>&times;</div></div></span>
        </div>
      </div>
      
      
    )
  };

  private onClicked = (): void => {
    Streamlit.setComponentValue("")
  };
};
 
export default withStreamlitConnection(NicerNotification)




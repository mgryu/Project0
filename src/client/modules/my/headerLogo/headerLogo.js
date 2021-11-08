import { LightningElement, api } from 'lwc';
export default class HeaderLogo extends LightningElement {
    handleButtonClick(event){
        let customEvent = new CustomEvent("buttonclick", {detail: event.target.innerHTML});
        this.dispatchEvent(customEvent)
        }
}

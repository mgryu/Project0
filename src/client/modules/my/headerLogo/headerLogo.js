import { LightningElement, api } from 'lwc';
export default class HeaderLogo extends LightningElement {
    handleButtonClick(){
        let event = new CustomEvent("buttonClick");
        this.dispatchEvent(event)
        }
}

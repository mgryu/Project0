import { LightningElement } from 'lwc';
export default class App extends LightningElement {
    title = "Welcome";
    homeTabSelected= false;

    handleButtonClick(event) {
        switch(event.detail) {
            case 'Sales':
                this.salesTabSelected = true;
                if (this.salesTabSelected = true){
                    this.salesTabSelected = false; 
                }else{this.salesTabSelected = true;}  
            case 'Home':
                if (this.homeTabSelected==true){
                    this.homeTabSelected = false; 
                }else{this.homeTabSelected = true;}
                
            case 'Contact':
                this.contactTabSelected = false;
        }
    }
}

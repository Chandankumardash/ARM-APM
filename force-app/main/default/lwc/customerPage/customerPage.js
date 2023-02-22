import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class CustomerPage extends NavigationMixin(LightningElement) {

    handelback(){
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Home'
            }
        }, true);
    }
}
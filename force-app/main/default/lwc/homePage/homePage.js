import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class HomePage extends NavigationMixin(LightningElement) {

    handelClick(){
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'customer_page__c'
            }
        }, true);
    }
}
import { LightningElement } from 'lwc';

export default class Training extends LightningElement {

    trainings = [
        {
            "Id": "1231",   
            "name": "Training and Workflows Development",
            "Active": true,
            "Training": "Business Training",
            "Completed":"40% Completed",
            "Organisation": "OSHA",
        },
        {
            "Id": "1232",   
            "name": "Electrical Control and Protection Systems",
            "Active": true,
            "Training": "Supplier Training",
            "Completed":"60% Completed",
            "Organisation": "OSHA",
        },
        {
            "Id": "1233",   
            "name": "Core Tools Training", 
            "Active": true,
            "Training": "Supplier Training",
            "Completed":"90% Completed",
            "Organisation": "OSHA",
        },
        {
            "Id": "1234",
            "name": "Functional Safety Training",
            "Active": true,
            "Training": "Supplier Training",
            "Completed":"90% Completed",
            "Organisation": "Redvector (OSHA-Authorized)",
        },
        {
            "Id": "1235",
            "name": "Risk Management",
            "Active": true,
            "Training": "Supplier Training",
            "Completed":"85% Completed",
            "Organisation": "OSHA",
        },
    ]

    handelTrainingBack(){
        this.dispatchEvent(new CustomEvent('click', {detail: "back"}));
    }
}
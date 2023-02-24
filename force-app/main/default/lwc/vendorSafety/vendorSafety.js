import { LightningElement } from 'lwc';

export default class VendorSafety extends LightningElement {
    paperIcon = paper_icon;
    contracts = [
        {
            "Id": "1231",   
            "name": "Indemnification Agreement", 
            "lastUpload": "06/22/2022",
            "nextUpload": "12/22/2022",
            "overdue": true,
            "past": true
        },
        {
            "Id": "1232",   
            "name": "Waste Disposal Agreement", 
            "lastUpload": "10/13/2022",
            "nextUpload": "10/04/2022",
            "overdue": false,
            "past": false
        },
        {
            "Id": "1233",   
            "name": "Service Contract", 
            "lastUpload": "08/02/2022",
            "nextUpload": "08/02/2022",
            "overdue": true,
            "past": false
        },
    ]

    handelContractsBack(){
        this.dispatchEvent(new CustomEvent('click', {detail: "back"}));
    }
}
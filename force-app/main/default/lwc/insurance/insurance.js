import { LightningElement } from "lwc";
import paper_icon from "@salesforce/resourceUrl/paperIcon"

export default class Insurance extends LightningElement{
    paperIcon = paper_icon;

    contracts = [
        {
            "Id": "1231",   
            "name": "Current Certification of liability", 
            "lastUpload": "06/22/2022",
            "nextUpload": "12/22/2022",
            "overdue": false,
        },
        {
            "Id": "1232",   
            "name": "Current Workers Compensation Insurance", 
            "lastUpload": "10/13/2022",
            "nextUpload": "10/04/2022",
            "overdue": false,
        },
        {
            "Id": "1233",   
            "name": "Proof of Insurance Documentation", 
            "lastUpload": "08/02/2022",
            "nextUpload": "08/02/2022",
            "overdue": true,
        }
    ]
    handelInsuranceBack(){
        this.dispatchEvent(new CustomEvent('click', {detail: "back"}));
    }
}
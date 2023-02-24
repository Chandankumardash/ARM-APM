import { LightningElement } from 'lwc';
// import paper_icon from "@salesforce/resourceUrl/paperIcon"

export default class PolicyAndProcedure extends LightningElement {
    paperIcon = "";
    policies = [
        {
            "Id": "1231", 
            "name": "memorandum of Understanding and Policy Compliances",
            "lastUpload": "10/13/2022",
            "nextUpload": "10/04/2023",
            "overdue": false,
            "past": false
        },
        {
            "Id": "1232", 
            "name": "Individual employee Test",
            "lastUpload": "08/9/2022",
            "nextUpload": "08/9/2022",
            "overdue": false,
            "past": false
        },
        {
            "Id": "1233", 
            "name": "Lien Water Document",
            "lastUpload": "10/13/2022",
            "nextUpload": "10/04/2023",
            "overdue": false,
            "past": false
        },
        {
            "Id": "1232", 
            "name": "Supplier and Vendor Safety Standard",
            "lastUpload": "10/13/2022",
            "nextUpload": "10/04/2023",
            "overdue": false,
            "past": false
        }
    ]
    handelPolicyBack(){
        this.dispatchEvent(new CustomEvent('click', {detail: "back"}));
    }
}
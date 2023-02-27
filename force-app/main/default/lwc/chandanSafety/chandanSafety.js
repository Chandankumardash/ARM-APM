import { LightningElement } from 'lwc';
import paper_icon from "@salesforce/resourceUrl/paperIcon"

export default class ChandanSafety extends LightningElement {

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

    safetyRecords = [  {    
        "name": "Chemical Spill",    
        "id": "#IID002",    
        "date": "12/022023",    
        "instrumentType": "Cleanup",    
        "person": "Emily K Chan",    
        "type": "Contractor",    
        "status": "Remediation in Progress"  
    },  {    "name": "Fall from Ladder",    "id": "#IID003",    "date": "02/032023",    "instrumentType": "Fall Protection",    "person": "Robert G Davis",    "type": "Employee",    "status": "Injury Report Filed"  },  {    "name": "Electrical Shock",    "id": "#IID004",    "date": "15/042023",    "instrumentType": "Electrical Safety",    "person": "Mia P Patel",    "type": "Contractor",    "status": "Investigation Ongoing"  },  {    "name": "Slip and Fall",    "id": "#IID005",    "date": "07/052023",    "instrumentType": "Floor Safety",    "person": "Connor M Smith",    "type": "Employee",    "status": "Safety Improvements Implemented"  }]


    handelContractsBack(){
        this.dispatchEvent(new CustomEvent('click', {detail: "back"}));
    }
}
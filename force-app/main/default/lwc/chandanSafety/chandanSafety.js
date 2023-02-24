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

    safetyRecords = [  {    "name": "Chemical Spill",    "id": "#IID002",    "date": "Feb 12 2023",    "instrumentType": "Cleanup",    "person": "Emily K Chan",    "type": "Contractor",    "status": "Remediation in Progress"  },  {    "name": "Fall from Ladder",    "id": "#IID003",    "date": "Mar 2 2023",    "instrumentType": "Fall Protection",    "person": "Robert G Davis",    "type": "Employee",    "status": "Injury Report Filed"  },  {    "name": "Electrical Shock",    "id": "#IID004",    "date": "Apr 15 2023",    "instrumentType": "Electrical Safety",    "person": "Mia P Patel",    "type": "Contractor",    "status": "Investigation Ongoing"  },  {    "name": "Slip and Fall",    "id": "#IID005",    "date": "May 7 2023",    "instrumentType": "Floor Safety",    "person": "Connor M Smith",    "type": "Employee",    "status": "Safety Improvements Implemented"  },  {    "name": "Heat Exhaustion",    "id": "#IID006",    "date": "Jun 20 2023",    "instrumentType": "Heat Stress Prevention",    "person": "Avery C Lee",    "type": "Contractor",    "status": "Training Scheduled"  },  {    "name": "Eye Injury",    "id": "#IID007",    "date": "Jul 3 2023",    "instrumentType": "Eye Protection",    "person": "Ethan J Garcia",    "type": "Employee",    "status": "Medical Treatment Required"  },  {    "name": "Machine Malfunction",    "id": "#IID008",    "date": "Aug 12 2023",    "instrumentType": "Equipment Maintenance",    "person": "Olivia W Martinez",    "type": "Contractor",    "status": "Repair in Progress"  },  {    "name": "Carbon Monoxide Poisoning",    "id": "#IID009",    "date": "Sep 8 2023",    "instrumentType": "Air Quality Testing",    "person": "Aiden L Johnson",    "type": "Employee",    "status": "Preventative Measures Implemented"  },  {    "name": "Back Injury",    "id": "#IID010",    "date": "Oct 16 2023",    "instrumentType": "Ergonomics",    "person": "Sophia M Wilson",    "type": "Contractor",    "status": "Worker's Compensation Claim Filed"  },  {    "name": "Fire Hazard",    "id": "#IID011",    "date": "Nov 24 2023",    "instrumentType": "Fire Safety",    "person": "Lucas K Brown",    "type": "Employee",    "status": "Evacuation Plan Updated"  }]


    handelContractsBack(){
        this.dispatchEvent(new CustomEvent('click', {detail: "back"}));
    }
}
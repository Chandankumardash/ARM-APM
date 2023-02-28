import { LightningElement } from 'lwc';

export default class WorkDetails extends LightningElement {

    employees = [
        {
            "Id": "1234",   
            "workOrder": "WO033", 
            "assignedBy": "Jane Doe(Manger)",
            "dueDateandTime": "1/18/2023 04:00 PM,",
            "completedDateandTime": "-",
            "type": "Emergency WO",
            "location": "US-Colorado-Denver-Plant-Area2-Floor1-East",   
            "asset": "Distribution Transferr",
            "parentAsset":"Transfer",
            "parts":"-",
            "status": "Open",
            "priority": "Medium",
            "risk":"Low"
    
        }
      ]
}
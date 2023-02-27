import { LightningElement } from 'lwc';

export default class WorkOrder extends LightningElement {
    workOrders = [
        {
            "id":"#WO003",
            "name":"Coil Replacement of Transformer",
            "item":"Transformer",
            "location":"US-colorado-Denver-Plant-Area",
            "type":"Emergency WO",
            "status":"Open",
            "priority":"Medium",
            "risk":"Low",
            "preJobChecklist":"Incomplete",
            "contractorChecklist":"Incomplete",
            "date":"Dec 28 2022",
            "owner":"james William"
        },    
        {
            "id": "#WO003",
            "name": "Overwhelming of electrical control panel",
            "item": "Transformer",
            "location": "US-colorado-Denver-Plant-Area",
            "type": "Emergency WO",
            "status": "Open",
            "priority": "Medium",
            "risk": "Low",
            "preJobChecklist":"Complete",
            "contractorChecklist":"Complete",
            "date":"Dec 22 2022",
            "owner":"jacob Bos"
        },
        {
            "id": "#WO003",
            "name": "Replacement bus panel of garage door",
            "item": "Transformer",
            "location": "US-colorado-Denver-Plant-Area",
            "type": "Emergency WO",
            "status": "Open",
            "priority": "Medium",
            "risk": "Low",
            "preJobChecklist":"Incomplete",
            "contractorChecklist":"Incomplete",
            "date":"Dec 18 2022",
            "owner":"jacob Bos"
        }    
    ]

    handelWorkOrderBack(){
        this.dispatchEvent(new CustomEvent('click', {detail: "back"}));
    }
}
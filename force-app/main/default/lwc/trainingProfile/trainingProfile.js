import { LightningElement } from "lwc";

export default class Insurance extends LightningElement{


    trainings = [
        {
            "Id": "1231",   
            "name": "Electrical-OSHA 10-Hours General Training for Workers", 
            "train":"OSHA Training",
            "org":"OSHA",
            "active":"Active",
            "date": "04/15/2022",
            "valid": "04/15/2023"
        },
        {
            "Id": "1232",   
            "name": "Heat Pump Dryer Repair Certification", 
            "training":"OSHA Training",
            "org":"CPD Standards Office",
            "active":"Active",
            "date": "June 10 2021",
            "valid": "04/15/2023"
        }
    ]
}
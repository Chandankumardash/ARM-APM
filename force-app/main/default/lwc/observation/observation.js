import { LightningElement } from "lwc";

export default class Insurance extends LightningElement{


    employees = [
        {
            "Id": "1231",   
            "name": "Installing and reparing transformers", 
            "date":"Jan 13 2023",
            "workStatus":"Working",
            "reporting": "Reporting to:James Caviness",
            "endDate": "Jan 23 2023",
            
            
        },
        {
            "Id": "1232",  
            "date":"Dec 10 2022", 
            "workStatus":"Completed",
            "name": "Testing electrical systems to identify problems with wiring and circuitry", 
            "reporting": "Reporting to:Lewis Cruz",
            "endDate": "Dec 11 2022",
        },
        
    ];
   get observed() {
    return [
                {
                    value:"oberved-1",
                    label:"observed-1"
                },
                {
                    value:"oberved-2",
                    label:"observed-2"
                },
                {
                    value:"oberved-3",
                    label:"observed-3"
                }
            ]
   }

    handleChange(event) {
        console.log(event);
    }
}
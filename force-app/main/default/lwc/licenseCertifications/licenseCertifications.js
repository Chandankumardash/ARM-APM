import { LightningElement } from "lwc";

export default class Insurance extends LightningElement{


    licenses = [
        {
            "Id": "1231",   
            "name": "Workers Compensation Certificate", 
            "lastUpload": "10/13/2022",
            "nextUpload": "10/04/2023"
        },
        {
            "Id": "1232",   
            "name": "Certificate of Liability Insurance", 
            "lastUpload": "08/09/2022",
            "nextUpload": "10/04/2023"
        },
        {
            "Id": "1233",   
            "name": "Workers Compensation Certificate", 
            "lastUpload": "10/13/2023",
            "nextUpload": "10/04/2023"
        }
    ]
}
import { LightningElement } from 'lwc';

export default class LicenseAndCertification extends LightningElement {

    contracts = [
        {
            "Id": "1231",   
            "name": "Indemnification Agreement", 
            "effectiveDate":"10/13/2022",
            "expirationDate":"10/15/2023",
            "lastUpload": "06/22/2022",
            "nextUpload": "12/22/2022",
            "limits":"$2000,000",
            "overdue": true,
        },
        {
            "Id": "1232",   
            "effectiveDate":"10/13/2022",
            "expirationDate":"10/15/2023",
            "name": "Waste Disposal Agreement", 
            "lastUpload": "10/13/2022",
            "nextUpload": "10/04/2022",
            "limits":"$2000,000",
            "overdue": false,
        },
        {
            "Id": "1233",   
            "effectiveDate":"10/13/2022",
            "expirationDate":"10/15/2023",
            "name": "Service Contract", 
            "lastUpload": "08/02/2022",
            "nextUpload": "08/02/2022",
            "limits":"$2000,000",
            "overdue": true,
        },
    ]

    handelContractsBack(){
        this.dispatchEvent(new CustomEvent('click', {detail: "back"}));
    }
}

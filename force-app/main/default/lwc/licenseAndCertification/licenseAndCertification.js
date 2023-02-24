import { LightningElement } from 'lwc';
import paper_icon from "@salesforce/resourceUrl/paperIcon"

export default class LicenseAndCertification extends LightningElement {
    paperIcon = paper_icon;
    licenses= true;
    certificate = false;
    contracts = [
        {
            "Id": "1231",   
            "name": "Indemnification Agreement", 
            "effectiveDate":"10/13/2022",
            "expirationDate":"10/15/2023",
            "lastUpload": "06/22/2022",
            "nextUpload": "12/22/2022",
            "limits":"$2000,000",
            "overdue": false,
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
    handleLicensesClick(){
        this.licenses = true;
        this.certificate  = false;
    }
    handleCertificateClick(){
        this.licenses = false;
        this.certificate  = true;
    }

    handelContractsBack(){
        this.dispatchEvent(new CustomEvent('click', {detail: "back"}));
    }
}

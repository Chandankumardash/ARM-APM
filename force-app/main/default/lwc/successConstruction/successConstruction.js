import { LightningElement } from 'lwc';

export default class SuccessConstruction extends LightningElement {
    profiles = [
        {
            "Id" :"1311",
            "heading": "Success Construction",
            "empId":"877645",
            "name":"Mark Otto",
            "occupation": "Electrician",
            "badge":"30",
            "validity":"1/18/2023 2:00 PM to 1/18/2023 4:00 PM",
            "entry_gate":"Gate 1, Gate 3"
        }
    ]
    myScannerOptions = {
        barcodeTypes: ["CODE_128", "QR", "EAN_13"],
        scannerSize: "LARGE",
      };
      
}
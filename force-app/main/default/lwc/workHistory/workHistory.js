import { LightningElement } from 'lwc';

export default class WorkHistory extends LightningElement {

    workHistories=[
        {
            "Id": "1231",
            "name": "Installation and commissioning of old crusher machine",
            "date": "Jan 11 2022",
            "companyName": "Success Construction",
            "plant": "Plant1-Building 2",
            "onBoardDate": "01/11/2022",
            "endDate": "10/04/2023",
            "completedBy": "James Caviness",
            "approvedBy": "Stan Miller",
            "code": "#WO007",
            "assesmentScore": "6/10"
        },
        {
          "Id": "1231",
            "name": "Capital Overwhelming of furnishing of Crusher machine",
            "date": "Dec 25 2021",
            "companyName": "Success Construction",
            "plant": "Plant1-Building 2",
            "onBoardDate": "11/28/2021",
            "endDate": "12/10/2021",
            "completedBy": "Jim Jones",
            "approvedBy": "Stan Miller",
            "code": "#WO008",
            "assesmentScore": "4/10"
        },
        {
            "Id": "1231",
            "name": "Centrifugal Valve Repair",
            "date": "Dec 11 2022",
            "companyName": "Success Construction",
            "plant": "Building 2-Floor 2",
            "onBoardDate": "12/13/2021",
            "endDate": "12/25/2021",
            "completedBy": "Stan Miller",
            "approvedBy": "Teresa Lunsford",
            "code": "#WO009",
            "assesmentScore": "4/10"
        }
      ]
      handelWorkhistoryBack() {
        this.dispatchEvent(new CustomEvent('click', {detail: "back"}));
      }
}
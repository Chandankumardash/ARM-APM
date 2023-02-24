import { LightningElement } from 'lwc';

export default class Employee extends LightningElement {
    employees = [
        {
            "Id": "EMP004",
            "name": "Mark Otto",
            "occupation": "Electrical",
            "workStatus": "Onsite",
            "rating": 5,
            "preference": "Top",
            "Date": "Jun 28 2020"
        },
        {
            "Id": "EMP004",
            "name": "Mark Otto",
            "occupation": "Electrical",
            "workStatus": "Onsite",
            "rating": 5,
            "preference": "Top",
            "Date": "Jun 28 2020"
        },
        {
            "Id": "EMP004",
            "name": "Mark Otto",
            "occupation": "Electrical",
            "workStatus": "Onsite",
            "rating": 5,
            "preference": "Top",
            "Date": "Jun 28 2020"
        },
        {
            "Id": "EMP004",
            "name": "Mark Otto",
            "occupation": "Electrical",
            "workStatus": "Onsite",
            "rating": 5,
            "preference": "Top",
            "Date": "Jun 28 2020"
        },
        {
            "Id": "EMP004",
            "name": "Mark Otto",
            "occupation": "Electrical",
            "workStatus": "Onsite",
            "rating": 5,
            "preference": "Top",
            "Date": "Jun 28 2020"
        }
    ];

    handelEmployeeBack(){
        this.dispatchEvent(new CustomEvent('click', {detail: "back"}));
    }
}

import { LightningElement } from 'lwc';

export default class Alerts extends LightningElement {
    alerts = [
        {
            "name": "Fall Protection Requirement Failure OSHA",
            "date": "Jun 25 2022",
            "summery": " Fall protection requirement is unfulfilled while roof replacement was done. The construction workers had not taken proper measures for working at heights of 6 feet or greater."
        },
        {
            "name": "Respiratory Protection Standard Failure OSHA",
            "date": "sep 11 2021",
            "summery": " Roof replacement project was done with workers not wearing respirators to protect themselves."
        }
    ]
    handelAlertsBack() {
        this.dispatchEvent(new CustomEvent('click', {detail: "back"}));
      }
}
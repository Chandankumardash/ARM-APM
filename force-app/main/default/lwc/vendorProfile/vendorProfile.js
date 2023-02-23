import { LightningElement } from 'lwc';
// import blue_star from "@salesforce/resourceUrl/blueStar"
import building_icon from "@salesforce/resourceUrl/buildingIcon"


export default class VendorProfile extends LightningElement {
    // blueStar = blue_star;
    buildingIcon = building_icon;
    profilePage= true;
    contantInfoPage = false;
    productServicesPage = false;
    scorePage = false;
    incidentPage = false;

    company = 
        {
            "Id": "1234",   
            "name": "Success Construction", 
            "primeryMember": "Larry Bartlett",
            "shortName__c": "SC",
            "type": "General Construction",
            "supplier": "2813",
            "score": "76",   
            "mobile": "888-555-1212", 
            "qualifiedDate": "1547250828000",
            "status": true,

        };
    incidents = [
        {
            "name": "Laceration to Right Hand",
            "date" : "1547250828000",
            "responsiblePerson": "Sue Barrows"
        },
        {
            "name": "Pallet stored in walkway",
            "date" : "1547450828000",
            "responsiblePerson": "Williams Julia"
        },
    ];
    products = [
        {
            "name": "Electrical",
            "requestedUser": "Jim Roberts",
            "date": " on June 22, 2020",
            "status": "Approved"
        },
        {
            "name": "Scaffolding",
            "requestedUser": "Jim Roberts",
            "date": " on June 22, 2020",
            "status": "Approved"
        },
        {
            "name": "Equipment Rental",
            "requestedUser": "Randy Miller",
            "date": "on Oct 1, 2021",
            "status": "Not Approved"
        },
        {
            "name": "Transportation",
            "requestedUser": "",
            "date": "",
            "status": "To be Reviewed"
        },
        {
            "name": "Roof Construction",
            "requestedUser": "Jim Roberts",
            "date": "on June 22, 2020",
            "status": "Approved"
        },
        {
            "name": "Sprinkler Repair",
            "requestedUser": "",
            "date": "",
            "status": "To be Reviewed"
        },
    ];
    handleProfileClick() {
        this.profilePage= true;
        this.contantInfoPage = false;
        this.productServicesPage = false;
        this.scorePage = false;
        this.incidentPage = false;
    }
    handleContantInfoClick() {
        this.profilePage= false;
        this.contantInfoPage = true;
        this.productServicesPage = false;
        this.scorePage = false;
        this.incidentPage = false;
    }
    handleProductServiceClick() {
        this.profilePage= false;
        this.contantInfoPage = false;
        this.productServicesPage = true;
        this.scorePage = false;
        this.incidentPage = false;
    }
    handleScoreClick() {
        this.profilePage= false;
        this.contantInfoPage = false;
        this.productServicesPage = false;
        this.scorePage = true;
        this.incidentPage = false;
    }
    handleIncidentClick() {
        this.profilePage= false;
        this.contantInfoPage = false;
        this.productServicesPage = false;
        this.scorePage = false;
        this.incidentPage = true;
    }
    handelback(){
        this.dispatchEvent(new CustomEvent('click', {detail: "back"}));
    }
}
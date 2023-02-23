import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class VendorCard extends NavigationMixin(LightningElement) {
    limit = 6;
    vendorCardPage = true;
    vendorDetailsPage = false;
    companies = [];
    temp = [];
    companyList = [
        {
            "Id": "1234",   
            "shortName": "SC",
            "name": "Success Construction", 
            "score": "98",
            "onsite": "3",
            "approvedByUser": "Stan Miller",
            "approvedByType": "Corporate",
            "safety": "7",   
            "quality": "9", 
            "budget": "5",
            "capability": "9",
            "date": "28/06/2022",
            "status": true,

        },
        {
            "Id": "1235",   
            "shortName": "LS",
            "name": "Lemke & Sons", 
            "score": "97",
            "onsite": "5",
            "approvedByUser": "Jim Jones",
            "approvedByType": "Plant",
            "safety": "8",   
            "quality": "9", 
            "budget": "6",
            "capability": "8",
            "date": "18/05/2022",
            "status": true,
        },
        {
            "Id": "1236",   
            "shortName": "S",
            "name": "Stanton LLC", 
            "score": "98",
            "onsite": "2",
            "approvedByUser": "Stan Miller",
            "approvedByType": "Corporate",
            "safety": "9",   
            "quality": "5", 
            "budget": "6",
            "capability": "7",
            "date": "10/05/2022",
            "status": true,
        }, 
        {
            "Id": "1237",   
            "shortName": "CM",
            "name": "Cellus Manufacturing Co", 
            "score": "87",
            "onsite": "3",
            "approvedByUser": "Teresa Lunsford",
            "approvedByType": "Corporate",
            "safety": "8",   
            "quality": "7", 
            "budget": "8",
            "capability": "5",
            "date": "08/04/2022",
            "status": true,
        },
        {
            "Id": "1238",   
            "shortName": "BM",
            "name": "Barnus Materials", 
            "score": "91",
            "onsite": "4",
            "approvedByUser": "Jim Jones",
            "approvedByType": "Plant",
            "safety": "8",   
            "quality": "7", 
            "budget": "8",
            "capability": "5",
            "date": "05/04/2022",
            "status": false,
        }
    ];
    constructor() {
        super();
        this.companyList.forEach(company => {
            company.safety > this.limit ? company.isSafety = "badge-semi-green" : company.isSafety = "badge-semi-orrange";
            company.quality > this.limit ? company.isQuality = "badge-semi-green" : company.isQuality = "badge-semi-orrange";
            company.budget > this.limit ? company.isBudget = "badge-semi-green" : company.isBudget = "badge-semi-orrange";
            company.capability > this.limit ? company.isCapability = "badge-semi-green" : company.isCapability = "badge-semi-orrange";
        });
    }

    // @wire(getCompanies)
    // getCompanies({data, error}) {
    //     if(data){
    //         this.companies = JSON.parse(JSON.stringify(data));
    //         this.companies.forEach((company) => {
    //             company.Safety__c > this.limit ? company.isSafety = "badge-semi-green" : company.isSafety = "badge-semi-orrange";
    //             company.Quality__c > this.limit ? company.isQuality = "badge-semi-green" : company.isQuality = "badge-semi-orrange";
    //             company.Budget__c > this.limit ? company.isBudget = "badge-semi-green" : company.isBudget = "badge-semi-orrange";
    //             company.Capability__c > this.limit ? company.isCapability = "badge-semi-green" : company.isCapability = "badge-semi-orrange";
    //         });
    //         // this.companies.forEach(company => {
    //         //     company.Safety__c > this.limit ? company.isSafety = "badge-semi-green" : company.isSafety = "badge-semi-orrange";
    //         //     company.Quality__c > this.limit ? company.isQuality = "badge-semi-green" : company.isQuality = "badge-semi-orrange";
    //         //     company.Budget__c > this.limit ? company.isBudget = "badge-semi-green" : company.isBudget = "badge-semi-orrange";
    //         //     company.Capability__c > this.limit ? company.isCapability = "badge-semi-green" : company.isCapability = "badge-semi-orrange";
    //         // });
    //         console.log(this.companies)
    //     }
    //     if(error) {
    //         console.log('error: ', error);
    //     }
    // }
    nextPage() {
        // this[NavigationMixin.Navigate]({
        //     type: 'comm__namedPage',
        //     attributes: {
        //         name: 'vendorDetails__c'
        //     }
        // }, true);
        this.vendorCardPage = false;
        this.vendorDetailsPage = true;
    }
    get isSafety(){
        return this.value === 'String';
    }

    handleVendorDetailsBack(event){
        if (event.detail === 'back') {
            this.vendorCardPage = true;
            this.vendorDetailsPage = false;
        }
    }
    handelback(){
        this.dispatchEvent(new CustomEvent('click', {detail: "back"}));
    }
}
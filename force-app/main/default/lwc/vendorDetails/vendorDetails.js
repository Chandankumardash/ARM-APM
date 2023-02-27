import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import bell_icon from "@salesforce/resourceUrl/bellicon"
import user_icon from "@salesforce/resourceUrl/userIcon"
import paper_icon from "@salesforce/resourceUrl/paperIcon"
import star_icon from "@salesforce/resourceUrl/starIcon"
import clock_icon from "@salesforce/resourceUrl/clockIcon"
import employee_icon from "@salesforce/resourceUrl/employeeIcon"
import profile_icon from "@salesforce/resourceUrl/profileIcon"
import insuranse_icon from "@salesforce/resourceUrl/insuranceIcon"
import license_icon from "@salesforce/resourceUrl/licenseIocn"
import contracts_icon from "@salesforce/resourceUrl/contractsIcon"
import policy_icon from "@salesforce/resourceUrl/policyIcon"
import training_icon from "@salesforce/resourceUrl/trainingIcon"
import safety_icon from "@salesforce/resourceUrl/safetyIcon"
import alerts_icon from "@salesforce/resourceUrl/alertsIcon"
import audit_icon from "@salesforce/resourceUrl/auditIcon"
import building_icon from "@salesforce/resourceUrl/buildingIcon"

export default class VendorDetails extends NavigationMixin(LightningElement) {
    vendorDetailsPage = true;
    vendorProfilePage = false;
    vendorContractPage = false;
    vendorPolicyPage = false;
    vendorTrainingPage = false;
    vendorWorkhistoryPage = false;
    licenseAndCertification = false;
    safetyPage = false;
    insurancePage = false;
    alertPage = false;
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
        alerts = [{
            "message":"Certificate of Insurance Due in 10 days",
            "number": ""
        },
        {
            "message":"Employee Approval Missing/incomplete Information",
            "number": "2"
        },
        {
            "message":"Supplier Audit Action Items Overdue",
            "number": "4"
        },
        {
            "message":"Sefety Training Incomplete",
            "number": "2"
        }
    ];
    bellIcon = bell_icon;
    userIcon = user_icon;
    paperIcon = paper_icon;
    starIcon = star_icon;
    profileIcon = profile_icon;
    employeeIcon = employee_icon;
    clockIcon = clock_icon;
    insuranceIcon = insuranse_icon;
    licenseIocn = license_icon;
    contractsIcon = contracts_icon;
    policyIcon = policy_icon;
    trainingIcon = training_icon;
    safetyIcon = safety_icon;
    alertsIcon =alerts_icon;
    auditIcon = audit_icon;
    buildingIcon = building_icon;

    alertSection = false;
    workOrderSection = false;
    alertClass = "card-details-middle";
    workOrderClass = "card-details-middle";
    handelAlertClick(){
        if(this.alertSection === false) {
            this.alertSection = true;
            this.alertClass= "card-details-active";
        } else if(this.alertSection === true) {
            this.alertSection = false;
            this.alertClass= "card-details-middle";
        }
    }
    handelWorkOrderClick(){
        this.vendorDetailsPage = false;
        this.alertSection = false;
        this.workOrderSection = true;
    }

    handelWorkOrderBack(){
        this.workOrderSection = false;
        this.vendorDetailsPage = true;
    }

    handelVendorProfilePage() {
        this.vendorDetailsPage = false;
        this.vendorProfilePage = true
    }
    handelVendorProfileBack(event){
        if (event.detail === 'back') {
            this.vendorDetailsPage = true;
            this.vendorProfilePage = false;
        }
    }
    handelVendorEmployeePage() {
        this.vendorDetailsPage = false;
        this.vendorEmployeePage = true
    }
    handelVendorEmployeeBack(event){
        if (event.detail === 'back') {
            this.vendorDetailsPage = true;
            this.vendorEmployeePage = false;
        }
    }
    handelVendorContractPage() {
        this.vendorDetailsPage = false;
        this.vendorContractPage = true;
    }
    handelVendorContractBack(event) {
        if (event.detail === 'back') {
            this.vendorDetailsPage = true;
            this.vendorContractPage = false;
        }
    }
    
    handelVendorTrainingPage() {
        this.vendorDetailsPage = false;
        this.vendorTrainingPage = true;
    }
    handelVendorTrainingBack(event) {
        if (event.detail === 'back') {
            this.vendorDetailsPage = true;
            this.vendorTrainingPage = false;
        }
    }

    handelVendorPolicyPage() {
        this.vendorDetailsPage = false;
        this.vendorPolicyPage = true;
    }
    handelVendorPolicyBack(event) {
        if (event.detail === 'back') {
            this.vendorDetailsPage = true;
            this.vendorPolicyPage = false;
        }
    }
    handelVendorWorkhistoryPage() {
        this.vendorDetailsPage = false;
        this.vendorWorkhistoryPage = true;
    }
    handelVendorWorkHistoryBack(event) {
        if (event.detail === 'back') {
            this.vendorDetailsPage = true;
            this.vendorWorkhistoryPage = false;
        }
    }

    handelLicenseAndCertificationPage() {
        this.vendorDetailsPage = false;
        this.licenseAndCertification = true;
    }
    handelLicenseAndCertificationBack(event) {
        if (event.detail === 'back') {
            this.vendorDetailsPage = true;
            this.licenseAndCertification = false;
        }
    }
    handelSafetyPage(){
        this.safetyPage = true;
        this.vendorDetailsPage = false;
    }
    handelSafetyBack(event) {
        if (event.detail === 'back') {
            this.vendorDetailsPage = true;
            this.safetyPage = false;
        }
    }

    handelInsurancePage(){
        this.insurancePage = true;
        this.vendorDetailsPage = false;
    }
    handelInsuranceBack(event) {
        if (event.detail === 'back') {
            this.vendorDetailsPage = true;
            this.insurancePage = false;
        }
    }
    
    handelAlertsPage(){
        // this.alertPage = true;
        // this.vendorDetailsPage = false;
    }
    handelAlertBack(event) {
        if (event.detail === 'back') {
            this.vendorDetailsPage = true;
            this.alertPage = false;
        }
    }

    handelback(){
        this.dispatchEvent(new CustomEvent('click', {detail: "back"}));
    }
}
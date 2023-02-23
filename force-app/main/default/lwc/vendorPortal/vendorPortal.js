import { LightningElement } from 'lwc';
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

export default class VendorPortal extends LightningElement {
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
    
    name = "Troope Auto Manufacturing"
    type = "Automobile Manufacturing"
}
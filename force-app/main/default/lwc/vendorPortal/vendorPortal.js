import { LightningElement } from 'lwc';
import bell_icon from "@salesforce/resourceUrl/bellicon"
import circularUser from "@salesforce/resourceUrl/circularUser"
import workOrders from "@salesforce/resourceUrl/workOrders"
import approvedUser from "@salesforce/resourceUrl/approvedUser"
import approval from "@salesforce/resourceUrl/approval"
import location from "@salesforce/resourceUrl/location"
import calculator from "@salesforce/resourceUrl/calculator"
import scoreCard from "@salesforce/resourceUrl/scoreCard"
import searchVendor from "@salesforce/resourceUrl/searchUser"
import incident from "@salesforce/resourceUrl/incident"

export default class VendorPortal extends LightningElement {
    circularUser = circularUser;
    workOrders = workOrders;
    bellIcon = bell_icon;
    approvedUser=approvedUser;
    approval = approval;
    location = location
    calculator = calculator;
    scoreCard =scoreCard;
    searchVendor =searchVendor;
    incident = incident;
    vendorportalPage = true;
    approvedVendorPage = false;

    name = "Troope Auto Manufacturing"
    type = "Automobile Manufacturing"

    handelApprovedVendor() {
        this.approvedVendorPage = true;
        this.vendorportalPage = false;
    }
    handleVendorCardBack(event){
        if (event.detail === 'back') {
            this.approvedVendorPage = false;
            this.vendorportalPage = true;
        }
    }
}
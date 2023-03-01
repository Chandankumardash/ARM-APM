import { LightningElement } from 'lwc';

export default class ApprovalRequest extends LightningElement {

    isRequestNewVendor = true;
    isApproveRequest = false;
    isVendorRegistation = false;
    isComleteDel = false;
    isApproveVendor = false;

    menus = [];
    employees = [
        {
            "Id": "1234",   
            "requestedBy": "Jane Doe(Manager)", 
            "requestedDate": "10/15/2022",
            "vendorName": "Success Construction",
            "purpose": "Coil Replacement of Transformer",
            "approvedByType": "Corporate",
            "needByDate": "10/18/2022",   
            "requisitionForm": "icon", 
            "status": "Submitted",
            "submissionDate": "10/18/2022",
    
        }
      ]
      
      connectedCallback() {
        this.getMenus();
      }

      handleActive( event){
        const tab = event.target;
      }

      requestNewVendorClick() {
        this.isRequestNewVendor = true;
      }
      approveVendor() {
        this.isApproveRequest = true;
      }

      approveRequestClick() {
        this.isApproveRequest = true;
      }

      vendorregistationClick() {
        this.isVendorRegistation = true;
      }

      completeDeligenceClick() {
        this.isComleteDel = true;
      }

      approveVendor() {
        this.isApproveVendor = true;
      }

      applyeMenu(event) {
        this.setDefault();
        event();
        this.getMenus();
      }

      setDefault() {
        this.isRequestNewVendor = false;
        this.isApproveRequest = false;
        this.isVendorRegistation = false;
        this.isComleteDel = false;
        this.isApproveVendor = false;
      }

      getMenus() {
        this.menus = [
          {
            active: this.isRequestNewVendor,
            label:'REQUEST NEW VENDOR',
            command:() => {
              this.applyeMenu(this.requestNewVendorClick.bind(this));
            }
          },{
            active: this.isApproveRequest,
            label:'APPROVE REQUEST',
            command:() => {
              this.applyeMenu(this.approveRequestClick.bind(this));
            }
          },{
            active: this.isVendorRegistation,
            label:'VENDOR REGISTRATION',
            command:() => {
              this.applyeMenu(this.vendorregistationClick.bind(this));
            }
          },
          {
            active: this.isComleteDel,
            label:'COMPLETE DILIGENCE',
            command:() => {
              this.applyeMenu(this.completeDeligenceClick.bind(this));
            }
          },{
            active: this.isApproveVendor,
            label:'APPROVE VENDOR',
            command:() => {
              this.applyeMenu(this.approveVendor.bind(this));
            }
          }
        ];
      }
}
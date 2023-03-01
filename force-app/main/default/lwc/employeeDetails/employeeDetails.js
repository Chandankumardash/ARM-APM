import { LightningElement } from 'lwc';

export default class EmployeeDetails extends LightningElement {

    profilePage = true;
    biodataPage = false;
    trainingPage = false;
    workOrderPage = false;
    observationPage = false;

    menus = [];

    connectedCallback() {
        this.getMenus();
    }

    handleProfileClick() {
        this.profilePage = true;
    }
    handleBiodataClick() {

        this.biodataPage = true;
    }
    handleTrainingClick() {
        this.trainingPage = true;
    }

    handelWorkOrderPage() {
        this.workOrderPage = true;
    }

    hanelObservationPage() {
        this.observationPage = true;
    }

    setDefault() {
        this.profilePage = false;
        this.biodataPage = false;
        this.trainingPage = false;
        this.workOrderPage = false;
        this.observationPage = false;
    }

    getMenus() {
        this.menus = [{
            label: 'PROFILE',
            condition: this.profilePage,
            command: () => { this.applyeCommand(this.handleProfileClick.bind(this)); }
        }, {
            label: 'BIODATA',
            condition: this.biodataPage,
            command: () => { this.applyeCommand(this.handleBiodataClick.bind(this)); }
        },
        {
            label: 'TRAINING',
            condition: this.trainingPage,
            command: () => { this.applyeCommand(this.handleTrainingClick.bind(this)); }
        }, {
            label: 'WORK ORDERS',
            condition: this.workOrderPage,
            command: () => { this.applyeCommand(this.handelWorkOrderPage.bind(this)); }
        }, {
            label: 'OBSERVATIONS',
            condition: this.observationPage,
            command: () => { this.applyeCommand(this.hanelObservationPage.bind(this)); }
        }];
    }

    applyeCommand(handel) {
        this.setDefault();
        handel();
        this.getMenus();
    }

    profileData = [
        {
            label: 'Employee ID',
            value: 'EMP001'
        },
        {
            label: 'Badge #',
            value: '30'
        },
        {
            label: 'Job Function',
            value: 'Electrician'
        },
        {
            label: 'Risk Group',
            value: 'Moderate Risk'
        },
        {
            label: 'Safety Profile Score',
            value: '7/10'
        },
        {
            label: 'Performance Ratings',
            value: '3'
        },
        {
            label: 'Qualification',
            value: 'Licensed Electrica'
        },
        {
            label: 'Experience',
            value: '7.3 Years'
        }
    ]

    biodata = [
        {
            label: 'Date of Birth',
            value: '16/08/1990'
        },
        {
            label: 'Age',
            value: '32'
        }, {
            label: 'Weight',
            value: '64 kg'
        }, {
            label: 'Height',
            value: '5.9"'
        }, {
            label: 'Blood Group',
            value: 'O +ve'
        }, {
            label: 'Language',
            value: 'English'
        }, {
            label: 'Mobile',
            value: '888-555-1212'
        }, {
            label: 'Email ID',
            value: 'mark.otto@gmail.com'
        }, {
            label: 'Street',
            value: '3980 Broadway St'
        }, {
            label: 'City/Town',
            value: 'Boulder'
        }, {
            label: 'State/Province/Region',
            value: 'Colorado'
        }, {
            label: 'Country',
            value: 'United States'
        }, {
            label: 'Nationality',
            value: 'American'
        }, {
            label: 'Passport Type',
            value: 'Regular'
        }
    ]
}
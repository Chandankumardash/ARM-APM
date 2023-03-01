import { LightningElement } from 'lwc';

export default class EmployeeDetailsAccordianView extends LightningElement {

    activeSectionMessage = '';
    activeSections = [];
    handleToggleSection(event) {
        this.activeSectionMessage =
            'Open section name:  ' + event.detail.openSections;
    }
    menus = [
        {
            value:"PROFILE",
            name:"PROFILE",
            data:[
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
        },
        {
            value: "BIODATA",
            name: "BIODATA",
            data: [
                {
                    label: 'Date of Birth',
                    value: '16/08/1990'
                },
                {
                    label: 'Age',
                    value: '32'
                },
                {
                    label: 'Weight',
                    value: '64 kg'
                },
                {
                    label: 'Height',
                    value: '5.9"'
                },
                {
                    label: 'Blood Group',
                    value: 'O +ve'
                },
                {
                    label: 'Language',
                    value: 'English'
                },
                {
                    label: 'Mobile',
                    value: '888-555-1212'
                },
                {
                    label: 'Email ID',
                    value: 'mark.otto@gmail.com'
                },
                {
                    label: 'Street',
                    value: '3980 Broadway St'
                },
                {
                    label: 'City/Town',
                    value: 'Boulder'
                },
                {
                    label: 'State/Province/Region',
                    value: 'Colorado'
                },
                {
                    label: 'Country',
                    value: 'United States'
                },
                {
                    label: 'Nationality',
                    value: 'American'
                },
                {
                    label: 'Passport Type',
                    value: 'Regular'
                }
            ]
        },
        {
            value: "TRAINING",
            name: "TRAINING"
        },
        {
            value: "WORK ORDERS",
            name: "WORK ORDERS"
        },
        {
            value: "OBSERVATIONS",
            name: "OBSERVATIONS"
        }
    ]
}
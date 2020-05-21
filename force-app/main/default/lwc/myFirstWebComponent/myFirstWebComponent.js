import { LightningElement, track } from 'lwc';
export default class HelloIteration extends LightningElement {
    @track
    contacts = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO',
        },
        {
            Id: 4,
            Name: 'Thanh Vu',
            Title: 'CEO',
        },
        {
            Id: 5,
            Name: 'Aaron Vu',
            Title: 'CEO Child',
        },
    ];
}
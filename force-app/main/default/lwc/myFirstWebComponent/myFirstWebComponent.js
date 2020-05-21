import { LightningElement, track } from 'lwc';
export default class HelloIteration extends LightningElement {
    @track
    contacts = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
            Age: 45,
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
            Age: 50,
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO',
            Age: 40,
        },
        {
            Id: 4,
            Name: 'Thanh Vu',
            Title: 'CEO',
            Age: 33,
        },
        {
            Id: 5,
            Name: 'Aaron Vu',
            Title: 'CEO Child',
            Age: 0,
        },
    ];
}
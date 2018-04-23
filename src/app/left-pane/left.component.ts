// // Copyright (C) 2016 Sergey Akopkokhyants // This project is licensed under
// the terms of the MIT license. // https://github.com/akserg

import {Component} from '@angular/core';

@Component({selector: 'drag-drop-listAllComponent',
styleUrls: ['./left.component.css'],
templateUrl: './left.component.html'})
export class ListAllComponent {
    transferData : Array < Object > = [
        {
            id: 1,
            component: 'HelloComponent'
        }, {
            id: 2,
            component: 'HelloComponent1'
        }, {
            id: 3,
            component: 'HelloComponent2'
        }, {
            id: 4,
            component: 'HelloComponent3'
        },
        {
            id: 5,
            component: 'HelloComponent3'
        },
        {
            id: 6,
            component: 'HelloComponent3'
        },
        {
            id: 7,
            component: 'HelloComponent3'
        },
        {
            id: 8,
            component: 'HelloComponent3'
        },
        {
            id: 9,
            component: 'HelloComponent3'
        },
        {
            id: 10,
            component: 'HelloComponent3'
        }
    ];

    onDrag($event: any) {
        console.log($event)
    }
}

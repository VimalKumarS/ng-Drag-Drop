// // Copyright (C) 2016 Sergey Akopkokhyants
// // This project is licensed under the terms of the MIT license.
// // https://github.com/akserg

import { Component } from '@angular/core';

@Component({
    selector: 'drag-drop-container',
    styleUrls: ['./right.component.css'],
    templateUrl: './right.component.html'
})
export class DraggableContianer { 
    transferData : Array < Object > = []
    onDrop($event: any) {
        let dragdata: Object = $event.dragData;
        console.log(dragdata);
       (this.transferData.push(Object.assign({},dragdata)));
     
    }
}
